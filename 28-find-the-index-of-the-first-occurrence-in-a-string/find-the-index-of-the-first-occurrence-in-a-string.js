/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};
let haystack = "hello";
let needle = "ll";

console.log(haystack.indexOf(needle));