var dom = document.getElementById("fu_title");

var change_white1 = document.getElementById("change_white1");
var change_white2 = document.getElementById("change_white2");
var change_white3 = document.getElementById("change_white3");

var one = document.getElementsByClassName("three_box_one")[0];
var two = document.getElementsByClassName("three_box_two")[0];
var three = document.getElementsByClassName("three_box_three")[0];

var squer = document.getElementById("point_square");
function down() {
  dom.innerHTML = "支持Windows/macOS/Linux/树莓派/嵌入式SDK等平台";

  change_white1.setAttribute("style", "color:white; opacity: 1;");
  change_white2.setAttribute("style", "");
  change_white3.setAttribute("style", "");

  three.setAttribute(
    "style",
    "animation:none;left:420px;z-index:10;transform: scale(1);"
  );

  one.setAttribute(
    "style",
    "animation:none;left:0px;transform: scale(0.83);z-index:5;"
  );

  two.setAttribute(
    "style",
    "animation:none;left:840px;transform: scale(0.83);z-index:8;"
  );

  squer.style.left = 35 + "%";
}

function down2() {
  dom.innerHTML = "填写内网主机信息及应用端口号";

  change_white1.setAttribute("style", "");
  change_white2.setAttribute("style", "color:white; opacity: 1;");
  change_white3.setAttribute("style", "");

  squer.style.left = 49.5 + "%";

  three.setAttribute(
    "style",
    "animation:none;left:0px;z-index:5;transform: scale(0.83);"
  );

  one.setAttribute(
    "style",
    "animation:none;left:840px;z-index:8;transform: scale(0.83);"
  );

  two.setAttribute(
    "style",
    "animation:none;left:420px;z-index:10;transform: scale(1);"
  );
}

function down3() {
  dom.innerHTML = "外网访问域名，连接内网应用";

  change_white1.setAttribute("style", "");
  change_white2.setAttribute("style", "");
  change_white3.setAttribute("style", "color:white; opacity: 1;");

  three.setAttribute(
    "style",
    "animation:none;left:840px;transform: scale(0.83);z-index:8;"
  );

  one.setAttribute(
    "style",
    "animation:none;left:420px;z-index:10;transform: scale(1);"
  );

  two.setAttribute(
    "style",
    "animation:none;left:0px;transform: scale(0.83);z-index:5;"
  );

  squer.style.left = 63.5 + "%";
}
// -----------------------------------------------------------------------------

var foot_title1 = document.getElementById("foot_title1");
var foot_title2 = document.getElementById("foot_title2");
var foot_title3 = document.getElementById("foot_title3");

var list_tag_1 = document.getElementById("list_tag_1");
var list_tag_2 = document.getElementById("list_tag_2");
var list_tag_3 = document.getElementById("list_tag_3");
function fun1() {
  foot_title1.setAttribute("style", "font-size:24px;color:white;");
  foot_title2.setAttribute("style", "font-size:18px;");
  foot_title3.setAttribute("style", "font-size:18px;");

  list_tag_1.setAttribute("style", "display:block");

  list_tag_2.setAttribute("style", "display:none");

  list_tag_3.setAttribute("style", "display:none");
}

function fun2() {
  foot_title1.setAttribute("style", "font-size:18px;");

  foot_title2.setAttribute("style", "font-size:24px;color:white;");

  foot_title3.setAttribute("style", "font-size:18px;");

  list_tag_1.setAttribute("style", "display:none");

  list_tag_2.setAttribute("style", "display:block");

  list_tag_3.setAttribute("style", "display:none");
}

function fun3() {
  foot_title1.setAttribute("style", "font-size:18px;");

  foot_title2.setAttribute("style", "font-size:18px;");

  foot_title3.setAttribute("style", "font-size:24px;color:white;");

  list_tag_1.setAttribute("style", "display:none");

  list_tag_2.setAttribute("style", "display:none");

  list_tag_3.setAttribute("style", "display:block");
}
// -----------------------------------------------------------
var small_box_blue = document.getElementById("small_box_blue");
var small_box_red = document.getElementById("small_box_red");
var small_box_orange = document.getElementById("small_box_orange");

var small_box_parent = document.getElementById("scroll_box_out");

small_box_blue.onclick = function () {
  var new_div = document.createElement("div");
  var new_span_in = document.createElement("span");

  new_span_in.setAttribute(
    "style",
    "display:block;width:40px;height:40px;margin:auto;margin-top:314px;text-align:center;"
  );
  new_span_in.setAttribute("class", "fa fa-close fa-2x");
  new_span_in.setAttribute("id", "close_the_new_div");
  new_div.appendChild(new_span_in);
  new_div.setAttribute(
    "style",
    '  width: 100%;height: 55%;background-color: pink;position: fixed;top: 4%;left: 0px;z-index: 999;  background:url("../img/scroll1.jpg") no-repeat 50%/cover;  transition: all 1s;'
  );
  small_box_parent.appendChild(new_div);

  var new_big_style = document.getElementById("new_big_style");
  new_big_style.setAttribute(
    "style",
    "display:block;width:600px:height:200px;"
  );

  document
    .getElementById("big_title")
    .setAttribute(
      "style",
      "font-size:52px;text-align:center;margin-top:22%;cursor: pointer;color: #fff;"
    );

  document
    .getElementsByClassName("img_txt")[0]
    .setAttribute(
      "style",
      "font-size: 20px;color: hsla(0,0%,100%,.6);margin-bottom: 58px;text-align:center;"
    );

  document
    .getElementsByClassName("wei_zhi")[0]
    .setAttribute(
      "style",
      "  width: 640px;margin: auto;background-color:yellow;"
    );
  for (var i = 0; i <= 5; i++) {
    document
      .getElementsByClassName("img_text_link")
      [i].setAttribute(
        "style",
        "width: 200px;height: 56px;line-height: 56px;font-size: 20px;text-align: center; border-radius: 8px;background: rgba(41,41,41,.6);cursor: pointer;float:left;margin:0px 4px;"
      );
  }
  for (var i = 0; i <= 2; i++) {
    document
      .getElementsByClassName("new_img_box")
      [i].setAttribute(
        "style",
        "    display:block;width: 32px;height: 32px; margin: 14px 19px 9px 36px;float:left;"
      );
  }
  for (var i = 0; i <= 2; i++) {
    document
      .getElementsByClassName("new_span1")
      [i].setAttribute(
        "style",
        "width: max-content;height: 56px;line-height: 56px;font-size: 20px;text-align: center;border-radius: 8px;cursor: pointer;display:block;float:left;"
      );
  }
  new_div.insertBefore(new_big_style, new_span_in);

  // -----------------------close----------------------------
  var close_box = document.getElementById("close_the_new_div");
  close_box.onclick = function () {
    new_big_style.setAttribute(
      "style",
      "display:none;width:600px:height:200px;"
    );
    small_box_parent.appendChild(new_big_style);
    small_box_parent.removeChild(new_div);
  };
};

// --------------------------------------------------------------------------

small_box_red.onclick = function () {
  var new_div = document.createElement("div");
  var new_span_in = document.createElement("span");

  new_span_in.setAttribute(
    "style",
    "display:block;width:40px;height:40px;margin:auto;margin-top:314px;text-align:center;"
  );
  new_span_in.setAttribute("class", "fa fa-close fa-2x");
  new_span_in.setAttribute("id", "close_the_new_div");
  new_div.appendChild(new_span_in);
  new_div.setAttribute(
    "style",
    '  width: 100%;height: 55%;background-color: pink;position: fixed;top: 4%;left: 0px;z-index: 999;  background:url("../img/scroll3.jpg") no-repeat 50%/cover;  transition: all 1s;'
  );
  small_box_parent.appendChild(new_div);

  var new_big_style2 = document.getElementById("new_big_style2");
  new_big_style2.setAttribute(
    "style",
    "display:block;width:600px:height:200px;"
  );

  document
    .getElementById("big_title2")
    .setAttribute(
      "style",
      "font-size:52px;text-align:center;margin-top:22%;cursor: pointer;color: #fff;"
    );

  document
    .getElementsByClassName("img_txt2")[0]
    .setAttribute(
      "style",
      "font-size: 20px;color: hsla(0,0%,100%,.6);margin-bottom: 58px;text-align:center;"
    );

  document
    .getElementsByClassName("wei_zhi2")[0]
    .setAttribute(
      "style",
      "  width: 640px;margin: auto;background-color:yellow;"
    );
  for (var i = 0; i <= 5; i++) {
    document
      .getElementsByClassName("img_text_link2")
      [i].setAttribute(
        "style",
        "width: 200px;height: 56px;line-height: 56px;font-size: 20px;text-align: center; border-radius: 8px;background: rgba(41,41,41,.6);cursor: pointer;float:left;margin:0px 4px;"
      );
  }
  for (var i = 0; i <= 2; i++) {
    document
      .getElementsByClassName("new_img_box2")
      [i].setAttribute(
        "style",
        "    display:block;width: 32px;height: 32px; margin: 14px 19px 9px 36px;float:left;"
      );
  }
  for (var i = 0; i <= 2; i++) {
    document
      .getElementsByClassName("new_span2")
      [i].setAttribute(
        "style",
        "width: max-content;height: 56px;line-height: 56px;font-size: 20px;text-align: center;border-radius: 8px;cursor: pointer;display:block;float:left;"
      );
  }
  new_div.insertBefore(new_big_style2, new_span_in);

  // -----------------------close----------------------------
  var close_box = document.getElementById("close_the_new_div");
  close_box.onclick = function () {
    new_big_style2.setAttribute(
      "style",
      "display:none;width:600px:height:200px;"
    );
    small_box_parent.appendChild(new_big_style2);
    small_box_parent.removeChild(new_div);
  };
};

// ------------------------------------------------------------

small_box_orange.onclick = function () {
  var new_div = document.createElement("div");
  var new_span_in = document.createElement("span");

  new_span_in.setAttribute(
    "style",
    "display:block;width:40px;height:40px;margin:auto;margin-top:314px;text-align:center;"
  );
  new_span_in.setAttribute("class", "fa fa-close fa-2x");
  new_span_in.setAttribute("id", "close_the_new_div");
  new_div.appendChild(new_span_in);
  new_div.setAttribute(
    "style",
    '  width: 100%;height: 55%;background-color: pink;position: fixed;top: 4%;left: 0px;z-index: 999;  background:url("../img/scroll2.jpg") no-repeat 50%/cover;  transition: all 1s;'
  );
  small_box_parent.appendChild(new_div);

  var new_big_style3 = document.getElementById("new_big_style3");
  new_big_style3.setAttribute(
    "style",
    "display:block;width:600px:height:200px;"
  );

  document
    .getElementById("big_title3")
    .setAttribute(
      "style",
      "font-size:52px;text-align:center;margin-top:22%;cursor: pointer;color: #fff;"
    );

  document
    .getElementsByClassName("img_txt3")[0]
    .setAttribute(
      "style",
      "font-size: 20px;color: hsla(0,0%,100%,.6);margin-bottom: 58px;text-align:center;"
    );

  document
    .getElementsByClassName("wei_zhi3")[0]
    .setAttribute(
      "style",
      "  width: 640px;margin: auto;background-color:yellow;"
    );
  for (var i = 0; i <= 5; i++) {
    document
      .getElementsByClassName("img_text_link3")
      [i].setAttribute(
        "style",
        "width: 200px;height: 56px;line-height: 56px;font-size: 20px;text-align: center; border-radius: 8px;background: rgba(41,41,41,.6);cursor: pointer;float:left;margin:0px 4px;"
      );
  }
  for (var i = 0; i <= 2; i++) {
    document
      .getElementsByClassName("new_img_box3")
      [i].setAttribute(
        "style",
        "    display:block;width: 32px;height: 32px; margin: 14px 19px 9px 36px;float:left;"
      );
  }
  for (var i = 0; i <= 2; i++) {
    document
      .getElementsByClassName("new_span3")
      [i].setAttribute(
        "style",
        "width: max-content;height: 56px;line-height: 56px;font-size: 20px;text-align: center;border-radius: 8px;cursor: pointer;display:block;float:left;"
      );
  }
  new_div.insertBefore(new_big_style3, new_span_in);

  // -----------------------close----------------------------
  var close_box = document.getElementById("close_the_new_div");
  close_box.onclick = function () {
    new_big_style3.setAttribute(
      "style",
      "display:none;width:600px:height:200px;"
    );
    small_box_parent.appendChild(new_big_style3);
    small_box_parent.removeChild(new_div);
  };
};

// -----------------------------------------------------

