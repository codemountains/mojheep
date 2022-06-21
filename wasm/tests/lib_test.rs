use wasm::{get_length, get_new_line_length, get_space_length};

#[test]
fn lib_works() {
    let text = "Hello, wasm!";
    assert_eq!(12, get_length(text));
    assert_eq!(1, get_space_length(text));
    assert_eq!(1, get_new_line_length(text));
}
