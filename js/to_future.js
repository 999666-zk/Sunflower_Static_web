var situation_txt1 = document.getElementById("situation_txt1");
var situation_txt2 = document.getElementById("situation_txt2");
var situation_txt3 = document.getElementById("situation_txt3");

var scroll_shu_line = document.getElementById("scroll_shu_line");

var situation_con1 = document.getElementById("situation_con1");
var situation_con2 = document.getElementById("situation_con2");
var situation_con3 = document.getElementById("situation_con3");

var situation = document.getElementsByClassName("situation")[0];
function fun1() {
  situation_txt2.style = "";
  situation_txt3.style = "";
  situation_txt1.style = "color:#fff;";
  scroll_shu_line.style = "width:2px;height:10px;transform: translateY(0px);";
  situation_con2.style = "display: none;z-index:10;";
  situation_con1.style = "display: block;z-index:5;";
  situation_con3.style = "display: none;z-index:1;";
  situation.style =
    'background: url("../img/situation.jpg") no-repeat 50% / cover;';
}
function fun2() {
  situation_txt2.style = "color:#fff;";
  situation_txt3.style = "";
  situation_txt1.style = "";
  scroll_shu_line.style = "width:2px;height:10px;transform: translateY(84px);";
  situation_con2.style = "display: block;z-index:10;";
  situation_con1.style = "display: none;z-index:5;";
  situation_con3.style = "display: none;z-index:1;";
  situation.style =
    'background: url("../img/situation2.jpg") no-repeat 50% / cover;';
}

function fun3() {
  situation_txt3.style = "color:#fff;";
  situation_txt2.style = "";
  situation_txt1.style = "";
  scroll_shu_line.style = "width:2px;height:10px;transform: translateY(168px);";
  situation_con2.style = "display: none;z-index:10;";
  situation_con1.style = "display: none;z-index:5;";
  situation_con3.style = "display: block;z-index:1;";
  situation.style =
    'background: url("../img/situation3.jpg") no-repeat 50% / cover;';
}

// ----------------------------------------------------
