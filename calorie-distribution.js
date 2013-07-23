var idealWeight = parseInt(process.argv[2], 10);
var eatenCalories = parseInt(process.argv[3], 10);

var idealWeightLbs = idealWeight * 2.2;

var proteinGrams = 1.5 * idealWeightLbs;
var proteinCalories = 4 * proteinGrams;

var fatCalories = (eatenCalories - proteinCalories) / 2;
var fatGrams = Math.round(fatCalories / 9);

var carbCalories = fatCalories;
var carbGrams = Math.round(carbCalories / 4);

console.log('Ideal weight: ' + idealWeight + ' kg (' + idealWeightLbs + ' lbs)');
console.log('Eaten calories: ' + eatenCalories);
console.log('Desirable distribution:');
console.log('  proteins: ' + proteinGrams + ' grams (' + proteinCalories + ' calories)');
console.log('  (unsaturated) fats: ' + Math.round(fatGrams) + ' grams (' + Math.round(fatCalories) + ' calories)');
console.log('  (low glycemic) carbs: ' + Math.round(carbGrams) + ' grams (' + Math.round(carbCalories) + ' calories)');
