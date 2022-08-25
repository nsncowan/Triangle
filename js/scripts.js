function grabLengths(event) {
  event.preventDefault();
  const side1 = parseInt(document.getElementById("side1input").value);
  const side2 = parseInt(document.getElementById("side2input").value);
  const side3 = parseInt(document.getElementById("side3input").value);
  if (side1 === side2 && side2 === side3){
    return "equilateral triangle";
  }
  else if (side1 === side2  || side2 === side3 || side3 === side1){
    //isosceles
  }
  else if ((side1 + side2 > side3) || (side1 + side3 > side2) || (side2 + side3 > side1)){
    //scalene
  }
  else {
    //not triangle
  }
  
  //return [side1, side2, side3]
}

window.addEventListener("load", function() {
  let form = document.querySelector("form");
  const sideLengths = form.addEventListener("submit", grabLengths);

});