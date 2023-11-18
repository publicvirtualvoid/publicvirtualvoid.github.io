---
title: "Generating Type Declarations"
---

I recently dabbled with some customisation of the ChatGPT browser UI. The most popular package to help in doing this by far is [chatgpt.js](https://chatgpt.js.org/). It's written in pure JS, which means that the API documentation is all manual and a gigantic [wall of text](https://github.com/kudoai/chatgpt.js/blob/main/docs/USERGUIDE.md).

I set out to generate types for this code, because (1) I don't have the attention span to read and (2) I like to just hit `ctrl+space` in my IDE when I get stuck.

First, I tried to throw ChatGPT at this but it refused to comply (as it gets more intelligent, it seems to get better at avoiding work. We should have seen this coming.)

I then came across [dts-gen](https://github.com/microsoft/dts-gen) which looked promising, but since the lib uses browser APIs directly, it can't be run easily. The evaluation needs to take place within the browser context, which is described as an experimental feature at the bottom of the docs.

> To generate a definition file for a browser-only module, we'll use the in-browser popup window. This works by injecting the dts-gen script into the current page by adding it as a script tag. Run this in your browser's developer console:

```js
var s = document.createElement("script");
s.src = "https://unpkg.com/dts-gen/bin/browser-bundle.js";
document.body.appendChild(s);
```

Regretfully, that URL doesn't work: the `browser-bundle.js` file doesn't seem to exist. With a considerable number of open issues on the tracker, it doesn't seem like this is something that would get addressed.

I tried bundling this myself but after setting the repository up locally the TS configuration seems particularly broken.

```bash
node_modules/@types/yargs/index.d.ts:898:80 - error TS1005: ';' expected.
898     /** Convert literal string types like 'foo-bar' to 'fooBar', allowing all `PropertyKey` types */
node_modules/@types/yargs/index.d.ts:930:33 - error TS1005: ';' expected.
930             // Use the type of `default` as the last resort
node_modules/@types/yargs/index.d.ts:988:76 - error TS1005: ';' expected.
988         /** array of strings (or a single string) representing aliases of `exports.command`, positional args defined in an alias are ignored */
node_modules/@types/yargs/index.d.ts:996:79 - error TS1005: ';' expected.
996         /** string used as the description for the command in help text, use `false` for a hidden command */
node_modules/@types/yargs/index.d.ts:1032:1 - error TS1160: Unterminated template literal.
1032

Found 857 errors.
```

I spent some time changing the various TS configs but got bored/traumatic flashbacks fairly quickly, so I decided to see if I could find anything in an older bundle of `dts-gen`. Manually going back through the versions, it seems that 0.5.7 is the last version that was able to build `browser-bundle.js` ([link](https://unpkg.com/dts-gen@0.5.7/bin/browser-bundle.js)).

Instead of messing with CORS I downloaded this and served it up locally. The script requires `eval` so this should be enabled by adding `<meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-eval';" />` into the page HTML. Since I had a React project open already, I changed the `main.tsx` of the project to simply read:

```js
import "./chatgpt.js"; // downloaded source of chatgpt.js
import "./infer-types.js"; // browser-bundle.js
```

Running the dev server then presented the following interface:
![Inferring Types](/assets/images/infer-types.png)

Since the `chatgpt.js` script adds itself as a global this can just be typed into the box at the top. It can then generate the inferred `d.ts` file. The generated definitions unfortunately don't have argument typing, but given that it generated about 450 lines of declarations, I didn't think this was a waste of time.

Looking more closely at what was produced, I noticed a lot of seemingly duplicate methods and unusual casing:

```ts
function aSkAndGetResponse(query: any): any;
function aSkChat(msg: any, method: any, args: any[]): any;
function aSkConversation(msg: any, method: any, args: any[]): any;
function aSkConvo(msg: any, method: any, args: any[]): any;
function aSkInNewChat(msg: any): any;
function aSkInNewConversation(msg: any): any;
function aSkInNewConvo(msg: any): any;
function aSkNewChat(msg: any): any;
function aSkNewConversation(msg: any): any;
function aSkNewConvo(msg: any): any;
function act(persona: any): any;
function actAs(persona: any): any;
function actas(persona: any): any;
function activateDarkMode(): void;
function activateLightMode(): void;
function alert(title: any, msg: any, btns: any, checkbox: any, width: any): any;
function analyzeAttitude(text: any, entity: any, args: any[]): any;
function analyzeCode(): void;
function analyzeEmotion(text: any, entity: any, args: any[]): any;
function analyzeFeeling(text: any, entity: any, args: any[]): any;
function analyzeOpinion(text: any, entity: any, args: any[]): any;
function analyzePerception(text: any, entity: any, args: any[]): any;
function analyzeSentiment(text: any, entity: any, args: any[]): any;
```

Strangely enough, these functions don't all appear in the code. Reading through the source, I discovered that **the library seems to try to create every possible synonym and casing combination of each method**. Presumably to make up for the lack of typing. This is so bizarre. The more I look at this the more I think this project is just JS ragebait. [Have a look if you want to be triggered](https://github.com/KudoAI/chatgpt.js/blob/61f5539d4aedfea28d96bea428f66a7b20b37fc9/chatgpt.js#L1962).

In light of this discovery, I decided against using this library as part of my development.
Should anyone be interested in the generated declarations, you can find them [here](./assets/chatgpt.js.d.ts).
