function encriptacion(texto) {
  array = texto.split("");
  for (var i = 0; i < array.length; i++) {
    if (array[i] == "a") {
      array.splice(i, 1, "ai");
    } else if (array[i] == "e") {
      array.splice(i, 1, "enter");
    } else if (array[i] == "i") {
      array.splice(i, 1, "imes");
    } else if (array[i] == "o") {
      array.splice(i, 1, "ober");
    } else if (array[i] == "u") {
      array.splice(i, 1, "ufat");
    }
  }
  return array.join("");
}

function desencriptacion(texto2) {
  array = texto2.split("");
  for (var i = 0; i < array.length; i++) {
    if (array[i] + array[i + 1] == "ai") {
      array.splice(i, 2, "a");
    } else if (
      array[i] + array[i + 1] + array[i + 2] + array[i + 3] + array[i + 4] ==
      "enter"
    ) {
      array.splice(i, 5, "e");
    } else if (
      array[i] + array[i + 1] + array[i + 2] + array[i + 3] ==
      "imes"
    ) {
      array.splice(i, 4, "i");
    } else if (
      array[i] + array[i + 1] + array[i + 2] + array[i + 3] ==
      "ober"
    ) {
      array.splice(i, 4, "o");
    } else if (
      array[i] + array[i + 1] + array[i + 2] + array[i + 3] ==
      "ufat"
    ) {
      array.splice(i, 4, "u");
    }
  }
  return array.join("");
}
