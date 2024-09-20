const calcavg=(a,b,c)=>(a+b+c)/3;

let scoredolphin=calcavg(44,23,71)
let scorekoalas=calcavg(65,54,49)
console.log(scoredolphin,scorekoalas)

const winner =function(avgdolphin,avgkoalas){

if(avgdolphin>= 2*avgkoalas){console.log(`dolphin winn with ${avgdolphin} vs ${avgkoalas}!`)}
else if (avgkoalas >= 2*avgdolphin)
{console.log(`koalas winn with ${avgkoalas} vs ${avgdolphin}!`)}
else {console.log(`no one winn the trophy`)}
}
winner (scoredolphin,scorekoalas)
 
scoredolphin=calcavg(85,54,41)
scorekoalas=calcavg(23,34,27)
console.log(scoredolphin,scorekoalas)
winner(scoredolphin,scorekoalas);