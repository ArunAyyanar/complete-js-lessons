const day = "wednesday";

switch (day) {
  case "monday":
    console.log("It is monday");
    break;
  case "tuesday":
    console.log("tuesday");
  case "wednesday":
    console.log("wed");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekends");
  default:
    console.log("Not a valid day");
}
