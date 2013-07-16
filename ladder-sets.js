var initialRepSum = parseInt(process.argv[2], 10);
var ladder = [1, 2, 3, 4, 3, 2];
var set = 0;
var repSum = 0;

while (repSum < initialRepSum) {
  var reps = ladder[set%6];
  set++;
  console.log('Set ' + set + ': ' + reps + ' reps');
  repSum += reps;
}
