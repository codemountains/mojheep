/* tslint:disable */
/* eslint-disable */
/**
* This function get string length.
*
* # Example
*
* ```
* use wasm::get_length;
*
* let text = "Hello, wasm!";
* assert_eq!(12, get_length(text));
* ```
* @param {string} text
* @returns {number}
*/
export function get_length(text: string): number;
/**
* This function get white space length.
*
* # Example
*
* ```
* use wasm::get_space_length;
*
* let text = "Hello, wasm!";
* assert_eq!(1, get_space_length(text));
* ```
* @param {string} text
* @returns {number}
*/
export function get_space_length(text: string): number;
/**
* This function get new line length.
*
* # Example
*
* ```
* use wasm::get_new_line_length;
*
* let text = "Hello, wasm!";
* assert_eq!(1, get_new_line_length(text));
* ```
* @param {string} text
* @returns {number}
*/
export function get_new_line_length(text: string): number;
