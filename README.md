# XP-Chinese-Word-Splitter (js worker)

This project is aimed to help with word splitting in chinese centenses. The goal is to do that on client's side without utilizing any sever resources.

## Prerequisites

- Rust (1.30.0 or later)
- [WASM-Pack](https://github.com/rustwasm/wasm-pack)
- http-server (optionally to run example)

## Building

First you need to build WASM project:

```
> cd ./wasm
> wasm-pack build --target no-modules --out-dir ../example/pkg
```

Now from `pkg` you need import `wasm.js` file to your worker. Then call the only function `process_zh(args: string)`, in response you will get an `Array<{ han: string, pin: string }>`.

```javascript
// Import WASM runtime and WASM module
importScripts("./pkg/xp_ch_word_splitter_worker.js");

onmessage = function (event) {
  // Initialize wasm_bindgen (load the WASM module)
  wasm_bindgen("./pkg/xp_ch_word_splitter_worker_bg.wasm")
    .then(() => {
      const data = event.data;

      const result = wasm_bindgen.cut(data, false);
      postMessage(result);
    })
    .catch((err) => {
      console.error("Failed to initialize wasm_bindgen:", err);
    });
};
```

## Run example

1. Do the first step from <b>Building</b> block.
2. Run:

```node-js
> npx http-server ./example
```
