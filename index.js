var day = prompt("Please eneter your day, for example - thursday" );

debugger;


switch (day) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "fruday":
   alert("working day");
   break;

  case "saturday":
  case "sunday":
    alert("weekend");
    break;

    default:
    alert("Can not define, please try another value");
    break;
}