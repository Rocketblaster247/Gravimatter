//80 x 48
var p = {x:0,y:0,m:1,l:0};
//key = 0: Air, 1: Stone, 2: GravSwitch, 3: Start, 4: End, 5: Key
var lvs = [
  [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [1,3,0,0,0,0,0,0,4,1],
    [1,1,1,1,1,1,1,1,1,1],
  ],
];
var cnv = document.getElementById("cnv");
var ctx = cnv.getContext("2d");
var key = false;
var lv;
var sm = new Image();
sm.src = 'sm.png';
var drawSky = function (x, y) {
  ctx.drawImage(sm, x, y, 24, 16, 0, 0, 8, 8);
};
var drawStone = function (x, y) {
  ctx.drawImage(sm, x, y, 24, 16, 8, 0, 8, 8);
};
var drawGSwitch = function (x, y) {
  ctx.drawImage(sm, x, y, 24, 16, 16, 0, 8, 8);
};
var drawStart = function (x, y) {
  ctx.drawImage(sm, x, y, 24, 16, 0, 8, 8, 8);
};
var drawEnd = function (x, y) {
  ctx.drawImage(sm, x, y, 24, 16, 8, 8, 8, 8);
};
var drawKey = function (x, y) {
  ctx.drawImage(sm, x, y, 24, 16, 16, 8, 8, 8);
};
var prepLev = function () {
  lv = lvs[p.l];
  key = false;
  for (var i = 0; i < lv.length; i ++) {
    for (var e = 0; e < lv[i].length; e ++) {
      switch(lv[i][e]) {
        case 3:
          console.log("Starting @ " + i + ", " + e);
          break;
        case 5:
          console.log("Created Key");
          key = true;
          break;
      }
    }
  }
  drawKey(2, 2);
};
var draw = function () {
  prepLev();
};
sm.onload = draw;
