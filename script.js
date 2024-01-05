// exo 1
// let age = prompt("enter your age");
// if (age < 18) {
//   let a = 18 - age;
//   alert(`${a}`);
// } else {
//   alert("ok");
// }

// console.log("hello");
// 80 - 100, A;
// 70 - 79, B;
// 60 - 69, C;
// 50 - 59, D;
// 0 - 49, F;

// exo 2
// let grad1 = prompt("Give me your score");

// switch (true) {
//   case grad1 >= 80 && grad1 <= 100:
//     alert("Your grade is A");
//     break;
//   case grad1 >= 70 && grad1 <= 79:
//     alert("Your grade is B");
//     break;
//   case grad1 >= 60 && grad1 <= 69:
//     alert("Your grade is C");
//     break;
//   default:
//     alert("No grade");
// }
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, March or May, the season is Spring
// June, July or August, the season is Summer

// let month = prompt("enter the month");
// switch (true) {
//   case month == "January" || month == "February" || month == "December":
//     alert("the season is winter");
//     break;
//   case month == "September" || month == "November" || month == "November":
//     alert("the season is autumn");
//     break;
//   case month == "March" || month == "April" || month == "May":
//     alert("the season is Spring ");
//     break;
//   case month == "June" || month == "July" || month == "August":
//     alert("the season is Summer");
//     break;

//   default:
//     alert("invalide month");
// }

// switch (month) {
//   case "January":
//   case "February":
//   case "December":
//     alert("the season is winter");
//     break;
//   case "September":
//   case "October":
//   case "November":
//     alert("the season is autumn");
//     break;
//   case "March":
//   case "April":
//   case "May":
//     alert("the season is Spring ");
//     break;
//   case "June":
//   case "July":
//   case "August":
//     alert("the season is Summer");
//     break;

//   default:
//     alert("invalide month");
// }

// exo 13
// function calculate(weight, height) {
//   const heightInMeters = height / 100;

//   const bmi = weight / (heightInMeters * heightInMeters);

//   if (bmi < 18.5) {
//     return "Underweight";
//   } else if (bmi >= 18.5 && bmi <= 24.9) {
//     return "Normal weight";
//   } else if (bmi >= 25 && bmi <= 29.9) {
//     return "Overweight";
//   } else {
//     return "Obese";
//   }
// }

// const weight = 70;
// const height = 175;

// const bmiResult = calculate(weight, height);
// console.log(`BMI: ${bmiResult}`);

function Quadratic(a, b, c) {
  let delta = b * b - 4 * a * c;
  console.log({ delta });
  if (delta < 0) {
    return "no solution";
  } else if (delta == 0) {
    return -b / (2 * a);
  } else {
    x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return { x1, x2 };
  }
}

console.log(Quadratic(1, -1, -2));
con;
