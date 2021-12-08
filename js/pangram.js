// Challenge Website: HackerRank
// Title: Pangram
// URL: https://www.hackerrank.com/challenges/one-month-preparation-kit-pangrams/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one
// Problem: A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.

const pangrams = str => {
  let alphabetStr = "abcdefghijklmnopqrstuvwxyz";
  let alphabetArr = alphabetStr.split("");

  for (let char of alphabetArr) {
    if (!str.toLowerCase().split("").includes(char)) {
      return "not pangram";
    }
  }
  return "pangram";
}

console.log(pangrams("The quick brown fox jumps over the lazy dog"))