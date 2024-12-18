// Import WASM runtime and WASM module
importScripts("./pkg/xp_ch_word_splitter_worker.js");

onmessage = function (event) {
    // Initialize wasm_bindgen (load the WASM module)
    wasm_bindgen("./pkg/xp_ch_word_splitter_worker_bg.wasm").then(() => {
        const data = event.data;

        const result = wasm_bindgen.cut(data, false);
        postMessage(result);

    }).catch((err) => {
        console.error("Failed to initialize wasm_bindgen:", err);
    });
};
