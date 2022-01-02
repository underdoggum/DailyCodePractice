// Challenge Website: CodeWars
// Title: Number of People in the Bus
// URL: https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript
// Problem: Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

const number = function(busStops) {
  let peopleOnBus = 0;
  
  busStops.forEach(stop => {
    peopleOnBus += stop[0];
    peopleOnBus -= stop[1];
  })

  return peopleOnBus;
}

console.log(number([[10,0],[3,5],[5,8]]));