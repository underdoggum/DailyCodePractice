// Challenge Website: CodeWars
// Title: Build Tower
// URL: https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
// Problem: Build Tower by the following given argument: number of floors (integer and always greater than 0).

// assumptions: nFloors is an integer and greater than 0
const towerBuilder = nFloors => {
  let tower = [];

  for (let i = 0; i < nFloors; i++) {
    let level = " ".repeat(nFloors - 1 - i) + "*".repeat(2 * i + 1) + " ".repeat(nFloors - 1 - i);
    tower.push(level);
  }
  return tower;
}

console.log(towerBuilder(100));