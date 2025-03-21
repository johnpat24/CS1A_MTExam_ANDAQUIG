//prompt ask the user
let age = parseInt(prompt(" enter your age: "));
// it will check what group you in
if (age < 5) {
  console.log(" you are a Toddler");
} else if (age >= 5 && age <= 12) {
  console.log(" you are a Child");
} else if (age >= 13 && age <= 19) {
  console.log(" you are a Teenager");
} else if (age <= 20 && age >= 35) {
  console.log(" you are a Young Adult");
} else if (age <= 36 && age >= 60) {
  console.log(" you are a Middle Age");
} else if (age > 60) {
  console.log(" you are a senior");
} else {
  console.log(" wrong input");
}