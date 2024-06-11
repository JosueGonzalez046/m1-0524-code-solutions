/* exported addSuffixToAll */
function addSuffixToAll(words: string[], suffix: string): any {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    result[i] = words[i] + suffix;
  }
  return result;
}
