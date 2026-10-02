/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = "";

    function a(left, right) {
        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            if (right - left + 1 > longest.length) {
                longest = s.slice(left, right + 1);
            }

            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        a (i, i);
        a (i, i + 1);
    }

    return longest;
};