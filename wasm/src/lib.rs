use regex::Regex;
use wasm_bindgen::prelude::*;

/// This function get string length.
///
/// # Example
///
/// ```
/// use wasm::get_length;
///
/// let text = "Hello, wasm!";
/// assert_eq!(12, get_length(text));
/// ```
#[wasm_bindgen]
pub fn get_length(text: &str) -> usize {
    text.chars().count()
}

/// This function get white space length.
///
/// # Example
///
/// ```
/// use wasm::get_space_length;
///
/// let text = "Hello, wasm!";
/// assert_eq!(1, get_space_length(text));
/// ```
#[wasm_bindgen]
pub fn get_space_length(text: &str) -> usize {
    if text == "" {
        return 0;
    }

    let re = Regex::new(r"[( |　)+]").unwrap();
    re.captures_iter(text).count()
}

/// This function get new line length.
///
/// # Example
///
/// ```
/// use wasm::get_new_line_length;
///
/// let text = "Hello, wasm!";
/// assert_eq!(1, get_new_line_length(text));
/// ```
#[wasm_bindgen]
pub fn get_new_line_length(text: &str) -> usize {
    if text == "" {
        return 0;
    }

    let re = Regex::new(r"\r\n|\n").unwrap();
    re.captures_iter(text).count() + 1
}
