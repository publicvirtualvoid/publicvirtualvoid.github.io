---
title: "ChatGPT CSS Tweaks"
---

```css
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;1,500&display=swap");

html {
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  color: #cccccc;
  line-height: normal;

  letter-spacing: 0.03em;
}

code {
  font-size: 15px;
  font-family: "Consolas", Monaco, monospace !important;
  line-height: 1;
  color: #eee;
}

code > * {
  border: 0;
  border-image-width: 0;
}

.bg-black {
  background-color: rgb(31, 31, 31);
}

code .hljs-function {
  color: #4ec9b0;
}
code .hljs-params {
  color: #cccccc;
}
code .hljs-keyword {
  color: #c586c0;
}
code .hljs-type {
  color: #569cd6;
}
code .hljs-string {
  color: #ce9178;
}
code .hljs-number {
  color: #b5cea8;
}
code .hljs-comment {
  color: #6a9955;
}
code .hljs-title,
.hljs-built_in {
  color: #dcdcaa;
}

li p strong,
h1,
h2,
h3,
h4,
.font-semibold,
.font-bold {
  color: #ddd;
  letter-spacing: 0.04em;
  font-weight: 500;
}

@media (min-width: 1280px) {
  .gizmo .gizmo\:xl\:max-w-\[48rem\] {
    max-width: 60rem;
  }
}

li {
  margin-bottom: 0.5em;
}

li:last-child {
  margin-bottom: 0;
}
```
