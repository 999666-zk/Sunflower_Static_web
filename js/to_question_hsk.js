var days_very_box1 = document.getElementById("days_very_box1");
var days_very_box2 = document.getElementById("days_very_box2");
var days_very_box4 = document.getElementById("days_very_box4");
var days_very_box3 = document.getElementById("days_very_box3");
var days_bigger_box = document.getElementById("days_bigger_box");
function funBackChange1() {
  days_very_box1.setAttribute("style", "outline: 4px solid rgb(220, 87, 121);");

  days_very_box2.setAttribute("style", "outline:none;");

  days_very_box3.setAttribute("style", "outline:none;");

  days_very_box4.setAttribute("style", "outline:none;");

  days_bigger_box.setAttribute(
    "style",
    '  background: url("../img/show_img1.png") no-repeat 50% / cover;'
  );
}

function funBackChange2() {
  days_very_box1.setAttribute("style", "outline:none;");

  days_very_box2.setAttribute("style", "outline: 4px solid rgb(220, 87, 121);");

  days_very_box3.setAttribute("style", "outline:none;");

  days_very_box4.setAttribute("style", "outline:none;");

  days_bigger_box.setAttribute(
    "style",
    '  background: url("../img/show_img2.png") no-repeat 50% / cover;'
  );
}

function funBackChange3() {
  days_very_box1.setAttribute("style", "outline:none;");

  days_very_box2.setAttribute("style", "outline: none;");

  days_very_box3.setAttribute("style", "outline:4px solid rgb(220, 87, 121);");

  days_very_box4.setAttribute("style", "outline:none;");

  days_bigger_box.setAttribute(
    "style",
    '  background: url("../img/show_img3.png") no-repeat 50% / cover;'
  );
}

function funBackChange4() {
  days_very_box1.setAttribute("style", "outline:none;");

  days_very_box2.setAttribute("style", "outline: none;");

  days_very_box3.setAttribute("style", "outline:none;");

  days_very_box4.setAttribute("style", "outline:4px solid rgb(220, 87, 121);");

  days_bigger_box.setAttribute(
    "style",
    '  background: url("../img/show_img4.png") no-repeat 50% / cover;'
  );
}
