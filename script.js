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

let month = prompt("enter the month");
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

switch (month) {
  case "January":
  case "February":
  case "December":
    alert("the season is winter");
    break;
  case "September":
  case "October":
  case "November":
    alert("the season is autumn");
    break;
  case "March":
  case "April":
  case "May":
    alert("the season is Spring ");
    break;
  case "June":
  case "July":
  case "August":
    alert("the season is Summer");
    break;

  default:
    alert("invalide month");
}
