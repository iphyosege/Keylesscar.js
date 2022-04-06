//make a keyless car!
//function declaration
function checkDriverAge() {
  var age = prompt("what is your age?");
  var mgs = "";
  if (Number(age) < 18) {
    mgs = "Sorry, you are too young to drive this car.Powering off";
  } else if (Number(age) === 18) {
    mgs = "Congratulations on your first year of driving.Enjoy your ride";
  } else if (Number(age) > 18) {
    mgs = "Powering On.Enjoy the ride";
  }
  return mgs;
}

//function expression
var checkDriverAge2 = function () {
  var age = prompt("what is your age?");
  var mgs = "";
  if (Number(age) < 18) {
    mgs = "Sorry, you are too young to drive this car.Powering off";
  } else if (Number(age) === 18) {
    mgs = "Congratulations on your first year of driving.Enjoy your ride";
  } else if (Number(age) > 18) {
    mgs = "Powering On. Enjoy the ride";
  }
  return mgs;
};

//calling the functions
alert(checkDriverAge());
console.log(checkDriverAge2());
