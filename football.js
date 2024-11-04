const scores = ["2:1", "1:1", "3:2", "0:1", "2:2", "1:0", "4:3", "0:0", "3:3", "2:0","1:2", "3:1", "1:1", "4:2", "2:1", "1:3", "3:3", "2:0", "0:1", "3:0",   "1:2", "2:1", "0:0", "1:1", "2:3", "1:0", "4:1", "0:0", "3:2", "2:1", "1:1", "0:2", "3:3", "2:0", "1:0", "2:1", "3:3", "0:1"]

let homeCount = 0;
let awayCount = 0;

const calculateScores = (scores) => {
  for (let i = 0; i < scores.length; i++) {
    let scoreArray = scores[i].split(":");
    if (Number(scoreArray[0]) > Number(scoreArray[1])) {
        homeCount += 3;
    }
    else if (Number(scoreArray[0]) === Number(scoreArray[1])) {
        homeCount += 1;
        awayCount +=1;
      }
    if (Number(scoreArray[0]) < Number(scoreArray[1])) {
        awayCount += 3;
  }
};
return `Home score: ${homeCount}, Away score: ${awayCount}`;
};

console.log(calculateScores(scores));