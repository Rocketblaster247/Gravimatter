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
var drawO = function (x, y, id) {
  switch (id) {
    case 0:
      ctx.drawImage(sm, 0, 0, 8, 8, x, y, 8, 8);
      break;
    case 1:
      ctx.drawImage(sm, 8, 0, 8, 8, x, y, 8, 8);
      break;
    case 2:
      ctx.drawImage(sm, 16, 0, 8, 8, x, y, 8, 8);
      break;
    case 3:
      ctx.drawImage(sm, 0, 8, 8, 8, x, y, 8, 8);
      break;
    case 4:
      ctx.drawImage(sm, 8, 8, 8, 8, x, y, 8, 8);
      break;
    case 5:
      ctx.drawImage(sm, 16, 8, 8, 8, x, y, 8, 8);
      break;
  }
};
var prepLev = function () {
  lv = lvs[p.l];
  key = false;
  for (var i = 0; i < lv.length; i ++) {
    for (var e = 0; e < lv[i].length; e ++) {
      var px = e * 8;
      var py = i * 8;
      switch(lv[i][e]) {
        case 3:
          console.log("Starting @ " + i + ", " + e);
          break;
        case 5:
          console.log("Created Key");
          key = true;
          break;
      }
      drawO(px, py, lv[i][e]);
    }
  }
};
var draw = function () {
  prepLev();
};
sm.onload = draw;
