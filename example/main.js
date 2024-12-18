try {
    // Initialize the Web Worker
    const worker = new Worker("./worker.js");

    // Receive the result
    worker.onmessage = function (event) {
        console.log("Result from Web Worker:", event.data);
    };

    // Catch error event
    worker.onerror = function (error) {
        console.error("Worker encountered an error: ", error.message);
    };

    // Send data to the worker
    console.log('Post to worker: ', '一年多前，有份刊物嘱我写稿，题目已经指定了出来');
    worker.postMessage('一年多前，有份刊物嘱我写稿，题目已经指定了出来');


} catch (e) {
    console.error('Worker init error: ', e);
}
