var browser = prompt("Please eneter your Browser", "Chrome");

debugger;

if (browser === "Chrome" || browser === "Mobile") {
  alert("Chrome condition");
} else if (browser === "Firefox") {
  alert("Firefox condition");
} else if (browser === "Safari") {
  alert("Safari condition");
} else if (browser === "Explorer") {
  alert("Explorer condition");
} else {
  alert("Default");
}

switch (browser) {
  case "Chrome":
  case "Mobile":
    alert("Chrome condition");
    break;

  case "Firefox":
    alert("Firefox condition");
    break;

  case "Safari":
    alert("Safari condition");
    break;

  case "Explorer":
    alert("Explorer condition");
    break;

  default:
    alert("Default");
    break;
}