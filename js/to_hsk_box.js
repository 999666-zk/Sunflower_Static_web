var very_big_box = document.getElementById("very_big_box");
var very_big_box2 = document.getElementById("very_big_box2");
var product_arguments = document.getElementById("product_arguments");
var productor = document.getElementById("productor");
function changeother1() {
  very_big_box.setAttribute("style", "display: block;");

  very_big_box2.setAttribute("style", "display:none;");

  product_arguments.setAttribute("style", "font-weight:400;");

  productor.setAttribute("style", "font-weight:700;");
}
function changeother2() {
  very_big_box.setAttribute("style", "display: none;");

  very_big_box2.setAttribute("style", "display:block;");

  product_arguments.setAttribute("style", "font-weight:700;");

  productor.setAttribute("style", "font-weight:400;");
}

// ----------------------------------------------------
