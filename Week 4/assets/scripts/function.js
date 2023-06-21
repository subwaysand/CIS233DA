showTime();

let gasLevel = 0;
let brakeSet = 1;
let tc = 1;
let battCharge = 0;

function getGas() {
  if (gasLevel == 0) {
    gasLevel == 1;
    document.getElementById("gas").src = "./assets/images/gas1.png";
    document.getElementById("bttn_gas").src = "./assets/images/bttn_gas_1.PNG";
  } else {
    gasLevel == 0;
    document.getElementById("gas").src = "./assets/images/gas0.png";
    document.getElementById("bttn_gas").src = "./assets/images/bttn_gas_0.PNG";
  }
}

function parkingBrake() {
  if (brakeSet == 1) {
    brakeSet = 0;
    document.getElementById("brake").src = "./assets/images/p0.PNG";
    document.getElementById("bttn_park").src =
      "./assets/images/bttn_park_0.PNG";
  } else {
    brakeSet = 1;
    document.getElementById("brake").src = "./assets/images/p1.PNG";
    document.getElementById("bttn_park").src =
      "./assets/images/bttn_park_1.PNG";
  }
}

function tcSetting() {
  if (tc == 1) {
    tc = 0;
    document.getElementById("trac").src = "./assets/images/trac1.PNG";
    document.getElementById("bttn_trac").src =
      "./assets/images/bttn_trac_1.PNG";
  } else {
    tc = 1;
    document.getElementById("trac").src = "./assets/images/trac0.PNG";
    document.getElementById("bttn_trac").src =
      "./assets/images/bttn_trac_0.PNG";
  }
}

function battPower() {
  if (battCharge == 0) {
    battCharge = 1;
    document.getElementById("batt").src = "./assets/images/batt1.PNG";
    document.getElementById("bttn_batt").src =
      "./assets/images/bttn_batt_1.PNG";
  } else {
    battCharge = 0;
    document.getElementById("batt").src = "./assets/images/batt1.PNG";
    document.getElementById("bttn_batt").src =
      "./assets/images/bttn_batt_0.PNG";
  }
}
