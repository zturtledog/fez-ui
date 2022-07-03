function button(x, y, w, h) {//a inline button like the first version
  if (hitbox(x, y, w, h, mouseX, mouseY)) {

    if (mouseIsPressed) {
      return true;
    }

    cursor(HAND);
  }
  return false;
}

function vslider(v, x, y, h, m, f) {//a verticle slider
  let uy = map(v, m, f, y, y + h);

  if (hitbox(x - 5, y, 10, h, mouseX, mouseY)) {
    if (mouseIsPressed) {
      return map(mouseY, y, y + h, m, f);
    }
  }

  return v;
}

function slider() {}

function checkbox() {}

function colorpicker() {}

//util

function centredtext(_text, x, y) {
  text(_text, x - textWidth(_text) / 2, y);
}

function hitbox(x, y, w, h, px, py) {
  return px > x && px < x + w && py > y && py < y + h;
}

function hyperect(x,y,w,h,c) {
  beginShape();
  vertex(x+c, y);
  vertex(x+w-c, y);
  vertex(x+w, y+c);
  vertex(x+w, y+h-c);
  vertex(x+w-c, y+h);
  vertex(x+c, y+h);
  vertex(x, y+h-c);
  vertex(x, y+c);
  endShape(CLOSE);
}
