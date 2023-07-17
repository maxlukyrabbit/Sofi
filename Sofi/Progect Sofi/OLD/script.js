function ispass() {
  var litlelater = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "e",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ];
  var biglater = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "E",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
  ];
  var digtal = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbol = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "+",
    "-",
    "/",
    "=",
  ];
  document.getElementById("2").value = "";
  if (
    document.getElementById("1").value < 6 ||
    document.getElementById("1").value == ""
  ) {
    alert("Вы либо безумец, лобо гений, но что-то сделали не правиьно! ;)");
  } else {
    for (let i = 0; i < document.getElementById("1").value; i++) {
      const min = 0;
      const max = 3;

      const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
      if (randomInt == 0) {
        const a = 0;
        const b = 26;

        const c = Math.floor(Math.random() * (b - a + 1)) + a;

        document.getElementById("2").value += litlelater[c];
      }

      if (randomInt == 1) {
        const a = 0;
        const b = 26;

        const c = Math.floor(Math.random() * (b - a + 1)) + a;

        document.getElementById("2").value += biglater[c];
      }

      if (randomInt == 2) {
        const a = 0;
        const b = 9;

        const c = Math.floor(Math.random() * (b - a + 1)) + a;

        document.getElementById("2").value += digtal[c];
      }

      if (randomInt == 3) {
        const a = 0;
        const b = 13;

        const c = Math.floor(Math.random() * (b - a + 1)) + a;

        document.getElementById("2").value += symbol[c];
      }
    }
  }
}
