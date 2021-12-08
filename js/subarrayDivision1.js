// Challenge Website: HackerRank
// Title: Subarray Division 1
// URL: https://www.hackerrank.com/challenges/one-month-preparation-kit-the-birthday-bar/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one
// Problem: Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it. Lily decides to share a contiguous segment of the bar selected such that: The length of the segment matches Ron's birth month, and, The sum of the integers on the squares is equal to his birth day. Determine how many ways she can divide the chocolate.


const birthday = (segmentArr, day, month) => {
  const reducer = (prev, curr) => prev + curr;
  let matches = 0;

  for (let i = 0; i < segmentArr.length - month + 1; i++) {
    const subSegmentArr = segmentArr.slice(i, i + month);
    if (subSegmentArr.reduce(reducer) === day) {
      matches += 1;
    }
  }
  return matches;  
}


console.log(birthday([4, 1], 1, 4));

