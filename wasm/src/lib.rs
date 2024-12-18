use jieba_rs::Jieba;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn cut(text: &str, hmm: bool) -> Vec<String> {
    let jieba = Jieba::new();
    return jieba.cut(text, hmm).iter().map(|s| s.to_string()).collect();
}
