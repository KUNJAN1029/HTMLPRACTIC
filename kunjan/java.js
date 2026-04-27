const a = 60;
if (a % 2 == 0) {
  console.log("The number " + a + " is an even number");
} else {
  console.log("The number " + a + " is not a even number");
}
if (a > 0) {
  console.log("The number " + a + " is POSITIVE");
} else if (a == 0) {
  console.log("The number " + a + " is ZERO");
} else {
  console.log("The number " + a + " is NEGATIVE");
}
if (a >= 90 || a == 100) {
  console.log("The marks " + a + " is A");
} else if (a >= 70 || a < 90) {
  console.log("The marks " + a + " is B");
} else if (a >= 60 || a < 70) {
  console.log("The marks " + a + " is C");
} else if (a >= 50 || a < 60) {
  console.log("The marks " + a + " is D");
} else {
  console.log("The marks " + a + " is F");
}
// const yourage = Number(prompt("Enter your age"))
// if (17<yourage) {
//     console.log("you are ", yourage-17 ," years older than me")
// }
// else {
//     console.log("you are " , 17-yourage , " years younger than me");
// }
const num1 = 78;
const num2 = 90;
const num3 = 56;
if (num1 > num2 && num1 > num3) {
  console.log("The largest number is ", num1);
} else if (num2 > num3) {
  console.log("The largest number is ", num2);
} else {
  console.log("The largest number is ", num3);
}
const season = prompt("Enter the month").toLowerCase();

if (
    season == "september" ||
    season == "october" ||
    season == "november")
{
  console.log("The season is Autumn");
}
else if (
  season == "december" ||
  season == "january" ||
  season == "february")
{
  console.log("The season is Winter");
}
else if (
    season == "march" ||
    season == "april" ||
    season == "may")
{
  console.log("The season is Summer");
}
else if (
    season == "june" ||
    season == "july" ||
    season == "august")
{
  console.log("The season is Rainy");
}
