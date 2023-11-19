/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
declare module chatgpt {
  const openAIaccessToken: {};
  const settings: {
    scheme: {
      isDark: any;
      isLight: any;
      set: any;
      toggle: any;
    };
  };
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
  function ask(msg: any, method: any, args: any[]): any;
  function askAndGetReply(query: any): any;
  function askChat(msg: any, method: any, args: any[]): any;
  function askConverSation(msg: any, method: any, args: any[]): any;
  function askConvo(msg: any, method: any, args: any[]): any;
  function askInNewChat(msg: any): any;
  function askInNewConverSation(msg: any): any;
  function askInNewConvo(msg: any): any;
  function askMSg(msg: any, method: any, args: any[]): any;
  function askNewChat(msg: any): any;
  function askNewConverSation(msg: any): any;
  function askNewConvo(msg: any): any;
  function attitude(text: any, entity: any, args: any[]): any;
  function attitudeAnalySis(text: any, entity: any, args: any[]): any;
  function beautify(): void;
  function beautifyCode(): void;
  function become(persona: any): any;
  function chatExport(chatToGet: any, format: any): any;
  function checkAttitude(text: any, entity: any, args: any[]): any;
  function checkCode(): void;
  function checkEmotion(text: any, entity: any, args: any[]): any;
  function checkFeeling(text: any, entity: any, args: any[]): any;
  function checkOpinion(text: any, entity: any, args: any[]): any;
  function checkPerception(text: any, entity: any, args: any[]): any;
  function checkSentiment(text: any, entity: any, args: any[]): any;
  function clearChats(method: any): any;
  function clearConversations(method: any): any;
  function clearConvos(method: any): any;
  function clickButton(buttonIdentifier: any): any;
  function codeAnalyze(): void;
  function codeBeautify(): void;
  function codeCheck(): void;
  function codeEvaluate(): void;
  function codeExecute(): void;
  function codeInterpret(): void;
  function codeInterpreter(): void;
  function codeMinify(): void;
  function codeObfuscate(): void;
  function codePrettify(): void;
  function codePrettyPrint(): void;
  function codeRefactor(): void;
  function codeReview(): void;
  function codeRewrite(): void;
  function codeRun(): void;
  function codeUglify(): void;
  function codeUnminify(): void;
  function codeWrite(): void;
  function conversationExport(chatToGet: any, format: any): any;
  function convoExport(chatToGet: any, format: any): any;
  function detectLanguage(text: any): any;
  function emotion(text: any, entity: any, args: any[]): any;
  function emotionAnalySis(text: any, entity: any, args: any[]): any;
  function evaluateAttitude(text: any, entity: any, args: any[]): any;
  function evaluateCode(): void;
  function evaluateEmotion(text: any, entity: any, args: any[]): any;
  function evaluateFeeling(text: any, entity: any, args: any[]): any;
  function evaluateOpinion(text: any, entity: any, args: any[]): any;
  function evaluatePerception(text: any, entity: any, args: any[]): any;
  function evaluateSentiment(text: any, entity: any, args: any[]): any;
  function executeCode(): void;
  function exportChat(chatToGet: any, format: any): any;
  function exportConversation(chatToGet: any, format: any): any;
  function exportConvo(chatToGet: any, format: any): any;
  function extractCode(): void;
  function feeling(text: any, entity: any, args: any[]): any;
  function feelingAnalySis(text: any, entity: any, args: any[]): any;
  function generateRandomIP(): any;
  function get(targetType: any, targetName: any): any;
  function getAccessToken(): any;
  function getAccountDetails(details: any, args: any[]): any;
  function getAcctDetails(details: any, args: any[]): any;
  function getAskButton(): any;
  function getButton(buttonIdentifier: any): any;
  function getChatBox(): any;
  function getChatData(chatToGet: any, detailsToGet: any, sender: any, msgToGet: any): any;
  function getChatDetails(chatToGet: any, detailsToGet: any, sender: any, msgToGet: any): any;
  function getChatInput(): any;
  function getChatbox(): any;
  function getContinueGeneratingButton(): any;
  function getContinueGenerationButton(): any;
  function getConverSationDetails(
    chatToGet: any,
    detailsToGet: any,
    sender: any,
    msgToGet: any
  ): any;
  function getConversationBox(): any;
  function getConversationData(chatToGet: any, detailsToGet: any, sender: any, msgToGet: any): any;
  function getConversationDetails(
    chatToGet: any,
    detailsToGet: any,
    sender: any,
    msgToGet: any
  ): any;
  function getConversationInput(): any;
  function getConvoBox(): any;
  function getConvoData(chatToGet: any, detailsToGet: any, sender: any, msgToGet: any): any;
  function getConvoDetails(chatToGet: any, detailsToGet: any, sender: any, msgToGet: any): any;
  function getConvoInput(): any;
  function getLanguage(text: any): any;
  function getLastPrompt(): any;
  function getLastQuery(): any;
  function getLastResponse(): any;
  function getMyLastMsg(): any;
  function getMyLastQuery(): any;
  function getNewChatLink(): any;
  function getNewConversationLink(): any;
  function getNewConvoLink(): any;
  function getRegenButton(): any;
  function getRegenerateButton(): any;
  function getResponse(args: any[]): any;
  function getResponseFromAPI(chatToGet: any, responseToGet: any): any;
  function getResponseFromDOM(pos: any): any;
  function getSendButton(): any;
  function getStopGeneratingButton(): any;
  function getStopGenerationButton(): any;
  function getSubmitButton(): any;
  function getTextArea(): any;
  function getTextarea(): any;
  function getUserLanguage(): any;
  function interpretCode(): void;
  function interpreterCode(): void;
  function isChromium(): any;
  function isDarkMode(): any;
  function isFirefox(): any;
  function isFullScreen(): any;
  function isFullscreen(): any;
  function isGizmoUI(): any;
  function isIdle(): any;
  function isLightMode(): any;
  function isLoaded(): any;
  function isMobileDevice(): any;
  function logOff(): void;
  function logOut(): void;
  function logoff(): void;
  function logout(): void;
  function minify(): void;
  function minifyCode(): void;
  /* Unspeakable name 'new'
  function new(): void;
  */
  function newChat(): void;
  function newConversation(): void;
  function newConvo(): void;
  function notify(msg: any, position: any, notifDuration: any, shadow: any): void;
  function obfuscate(): void;
  function obfuscateCode(): void;
  function opinion(text: any, entity: any, args: any[]): any;
  function opinionAnalySis(text: any, entity: any, args: any[]): any;
  function parseHTML(node: any): any;
  function parseHtml(node: any): any;
  function parseLinks(node: any): any;
  function parseTags(node: any): any;
  function perception(text: any, entity: any, args: any[]): any;
  function perceptionAnalySis(text: any, entity: any, args: any[]): any;
  function persona(persona: any): any;
  function preMadePrompt(persona: any): any;
  function prePrompt(persona: any): any;
  function premadePrompt(persona: any): any;
  function preprompt(persona: any): any;
  function prettify(): void;
  function prettifyCode(): void;
  function prettyPrint(): void;
  function prettyPrintCode(): void;
  function printAllFunctions(): any;
  function randomFloat(): any;
  function reAsk(): void;
  function reSend(): void;
  function reSubmit(): void;
  function recommend(ideaType: any, details: any, args: any[]): any;
  function refactor(): void;
  function refactorCode(): void;
  function refreShResponse(): void;
  function refreshReply(): void;
  function regen(): void;
  function regenReSponSe(): void;
  function regenReply(): void;
  function regenResponse(): void;
  function regenerate(): void;
  function regenerateReSponSe(): void;
  function regenerateReply(): void;
  function regenerateResponse(): void;
  function renderHTML(node: any): any;
  function renderHtml(node: any): any;
  function renderLinks(node: any): any;
  function renderTags(node: any): any;
  function resend(): void;
  function reviewAttitude(text: any, entity: any, args: any[]): any;
  function reviewCode(): void;
  function reviewEmotion(text: any, entity: any, args: any[]): any;
  function reviewFeeling(text: any, entity: any, args: any[]): any;
  function reviewOpinion(text: any, entity: any, args: any[]): any;
  function reviewPerception(text: any, entity: any, args: any[]): any;
  function reviewSentiment(text: any, entity: any, args: any[]): any;
  function rewrite(): void;
  function rewriteCode(): void;
  function rolePlay(persona: any): any;
  function roleplay(persona: any): any;
  function rp(persona: any): any;
  function runCode(): void;
  function say(msg: any, options: any): any;
  function scrollToBottom(): void;
  function send(msg: any, method: any, args: any[]): any;
  function sendChat(msg: any, method: any, args: any[]): any;
  function sendConverSation(msg: any, method: any, args: any[]): any;
  function sendConversation(msg: any, method: any, args: any[]): any;
  function sendConvo(msg: any, method: any, args: any[]): any;
  function sendInNewChat(msg: any): any;
  function sendInNewConverSation(msg: any): any;
  function sendInNewConversation(msg: any): any;
  function sendInNewConvo(msg: any): any;
  function sendMSg(msg: any, method: any, args: any[]): any;
  function sendMsg(msg: any, method: any, args: any[]): any;
  function sendNewChat(msg: any): any;
  function sendNewConverSation(msg: any): any;
  function sendNewConversation(msg: any): any;
  function sendNewConvo(msg: any): any;
  function sentiment(text: any, entity: any, args: any[]): any;
  function sentimentAnalySis(text: any, entity: any, args: any[]): any;
  function sentimentAnalysis(text: any, entity: any, args: any[]): any;
  function setScheme(value: any): void;
  function shareChat(chatToGet: any, method: any): any;
  function shareConversation(chatToGet: any, method: any): any;
  function shareConvo(chatToGet: any, method: any): any;
  function showAllFunctions(): any;
  function signOff(): void;
  function signOut(): void;
  function signoff(): void;
  function signout(): void;
  function speak(msg: any, options: any): any;
  function speech(msg: any, options: any): any;
  function startNewChat(): void;
  function startNewConversation(): void;
  function startNewConvo(): void;
  function stop(): void;
  function stopGenerating(): void;
  function stopGeneration(): void;
  function submit(msg: any, method: any, args: any[]): any;
  function submitChat(msg: any, method: any, args: any[]): any;
  function submitConverSation(msg: any, method: any, args: any[]): any;
  function submitConversation(msg: any, method: any, args: any[]): any;
  function submitConvo(msg: any, method: any, args: any[]): any;
  function submitInNewChat(msg: any): any;
  function submitInNewConverSation(msg: any): any;
  function submitInNewConversation(msg: any): any;
  function submitInNewConvo(msg: any): any;
  function submitMSg(msg: any, method: any, args: any[]): any;
  function submitNewChat(msg: any): any;
  function submitNewConverSation(msg: any): any;
  function submitNewConversation(msg: any): any;
  function submitNewConvo(msg: any): any;
  function suggest(ideaType: any, details: any, args: any[]): any;
  function suggestion(ideaType: any, details: any, args: any[]): any;
  function summarize(text: any): any;
  function talk(msg: any, options: any): any;
  function tldr(text: any): any;
  function toggleMode(): void;
  function toggleScheme(): void;
  function translate(text: any, outputLang: any, args: any[]): any;
  function translation(text: any, outputLang: any, args: any[]): any;
  function translator(text: any, outputLang: any, args: any[]): any;
  function tts(msg: any, options: any): any;
  function turnOnDarkMode(): void;
  function turnOnLightMode(): void;
  function uglify(): void;
  function uglifyCode(): void;
  function unminify(): void;
  function unminifyCode(): void;
  function uuidv4(): any;
  function writeCode(): void;
  namespace activateAutoRefresh {
    function activate(interval: any): void;
    function deactivate(): void;
    function nowTimeStamp(): any;
    namespace toggle {
      function beacons(): void;
      function refreshFrame(): void;
    }
  }
  namespace activateAutoRefresher {
    function activate(interval: any): void;
    function deactivate(): void;
    function nowTimeStamp(): any;
    namespace toggle {
      function beacons(): void;
      function refreshFrame(): void;
    }
  }
  namespace activateRefresher {
    function activate(interval: any): void;
    function deactivate(): void;
    function nowTimeStamp(): any;
    namespace toggle {
      function beacons(): void;
      function refreshFrame(): void;
    }
  }
  namespace activateSessionRefresher {
    function activate(interval: any): void;
    function deactivate(): void;
    function nowTimeStamp(): any;
    namespace toggle {
      function beacons(): void;
      function refreshFrame(): void;
    }
  }
  namespace autoRefresh {
    function activate(interval: any): void;
    function deactivate(): void;
    function nowTimeStamp(): any;
    namespace toggle {
      function beacons(): void;
      function refreshFrame(): void;
    }
  }
  namespace autoRefreshSession {
    function activate(interval: any): void;
    function deactivate(): void;
    function nowTimeStamp(): any;
    namespace toggle {
      function beacons(): void;
      function refreshFrame(): void;
    }
  }
  namespace autoRefresher {
    function activate(interval: any): void;
    function deactivate(): void;
    function nowTimeStamp(): any;
    namespace toggle {
      function beacons(): void;
      function refreshFrame(): void;
    }
  }
  namespace browser {
    function isChromium(): any;
    function isDarkMode(): any;
    function isFirefox(): any;
    function isFullScreen(): any;
    function isLightMode(): any;
    function isMobile(): any;
  }
  namespace code {
    function execute(code: any): any;
    function extract(msg: any): any;
    function minify(code: any): any;
    function obfuscate(code: any): any;
    function refactor(code: any, objective: any, args: any[]): any;
    function review(code: any): any;
    function unminify(code: any): any;
    function write(prompt: any, outputLang: any, args: any[]): any;
  }
  namespace history {
    function activate(): void;
    function deactivate(): void;
    function isLoaded(): any;
    function isOff(): any;
    function isOn(): any;
    function toggle(): void;
  }
  namespace instructions {
    function add(instruction: any, target: any): any;
    function clear(target: any): any;
    function fetchData(): any;
    function sendRequest(method: any, token: any, body: any, args: any[]): any;
    function toggle(): any;
    function turnOff(): any;
    function turnOn(): any;
  }
  namespace menu {
    const addedEvent: boolean;
    const elements: any[];
    function append(element: any, attrs: any): any;
    function close(): void;
    function open(): void;
  }
  namespace refresher {
    function activate(interval: any): void;
    function deactivate(): void;
    function nowTimeStamp(): any;
    namespace toggle {
      function beacons(): void;
      function refreshFrame(): void;
    }
  }
  namespace response {
    function get(args: any[]): any;
    function getFromAPI(chatToGet: any, responseToGet: any): any;
    function getFromDOM(pos: any): any;
    function getLast(): any;
    function regenerate(): void;
    function stopGenerating(): void;
  }
  namespace scheme {
    function isDark(): any;
    function isLight(): any;
    function set(value: any): any;
    function toggle(): void;
  }
  namespace sessionRefresher {
    function activate(interval: any): void;
    function deactivate(): void;
    function nowTimeStamp(): any;
    namespace toggle {
      function beacons(): void;
      function refreshFrame(): void;
    }
  }
  namespace sidebar {
    const elements: any[];
    const observer: {};
    function activateObserver(): any;
    function append(element: any, attrs: any): any;
    function hide(): void;
    function isOff(): any;
    function isOn(): any;
    function show(): void;
    function toggle(): void;
  }
}
