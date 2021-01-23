
function kilometerToMeter(kilomer) {
    const feet = kilomer / 1000;
    return feet;
}
const senior = [4000, 3000, 7000];

const nanaFeet = kilometerToMeter(senior[0]);
console.log(nanaFeet);
const naniFeet = kilometerToMeter(3000);
console.log(naniFeet);
const dadiFeet = kilometerToMeter(7000);
console.log(dadiFeet);

