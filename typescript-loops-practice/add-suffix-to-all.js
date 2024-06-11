'use strict';
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    result[i] = words[i] + suffix;
  }
  return result;
}
