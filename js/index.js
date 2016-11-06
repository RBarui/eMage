window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000;
var c1 = null;
var img = null;
var imgF1 = null;
var imgF2 = null;
var imgF3 = null;
var imgF4 = null;
var imgF5 = null;
var imgF6 = null;
var imgF7 = null;
var imgF8 = null;
var file = null;
var canvas = document.getElementById("c1");
var ctx = canvas.getContext("2d");

function upload() {
  file = document.getElementById("file");
  img = new SimpleImage(file);
  imgF1 = new SimpleImage(file);
  imgF2 = new SimpleImage(file);
  imgF3 = new SimpleImage(file);
  imgF4 = new SimpleImage(file);
  imgF5 = new SimpleImage(file);
  imgF6 = new SimpleImage(file);
  imgF7 = new SimpleImage(file);
  imgF8 = new SimpleImage(file);
  c1 = document.getElementById("c1");
  img.drawTo(c1);
  alert("Image uploaded");
}

function f1() {
  if (img == null || !img.complete()) {
    alert("Image not uploaded");
  } else {
    for (var pixel of imgF1.values()) {
      var gray = (pixel.getRed() + pixel.getBlue() + pixel.getGreen()) / 3;
      pixel.setRed(gray);
      pixel.setBlue(gray);
      pixel.setGreen(gray);
    }
    imgF1.drawTo(c1);
    alert("Filter applied");
  }
}

function f3() {
  if (img == null || !img.complete()) {
    alert("Image not uploaded");
  } else {
    for (var pixel of imgF3.values()) {
      if (pixel.getY() <= imgF3.getHeight() / 6) {
        pixel.setRed(pixel.getRed() + 100);
      } else if (pixel.getY() > imgF3.getHeight() / 6, pixel.getY() <= imgF3.getHeight() / 3) {
        pixel.setRed(pixel.getRed() + 100);
        pixel.setGreen(pixel.getGreen() + 50);
      } else if (pixel.getY() > imgF3.getHeight() / 3, pixel.getY() <= imgF3.getHeight() / 2) {
        pixel.setRed(pixel.getRed() + 100);
        pixel.setGreen(pixel.getGreen() + 100);
      } else if (pixel.getY() > imgF3.getHeight() / 2, pixel.getY() <= 2 * imgF3.getHeight() / 3) {
        pixel.setGreen(pixel.getGreen() + 100);
      } else if (pixel.getY() > 2 * imgF3.getHeight() / 3, pixel.getY() <= 5 * imgF3.getHeight() / 6) {
        pixel.setBlue(pixel.getBlue() + 100);
      } else {
        pixel.setRed(pixel.getRed() + 50);
        pixel.setBlue(pixel.getBlue() + 50);
      }
    }
    imgF3.drawTo(c1);
    alert("Filter applied");
  }
}

function f2() {
  if (img == null || !img.complete()) {
    alert("Image not uploaded");
  } else {
    for (var pixel of imgF2.values()) {
      if (pixel.getX() <= imgF2.getWidth() / 3) {
        pixel.setRed(pixel.getRed() + 100);
      } else if (pixel.getX() > imgF2.getWidth() / 3, pixel.getX() <= 2 * imgF2.getWidth() / 3) {
        pixel.setGreen(pixel.getGreen() + 100);
        pixel.setRed(pixel.getRed() + 100);
        pixel.setBlue(pixel.getBlue() + 100);
      } else {
        pixel.setBlue(pixel.getBlue() + 100);
      }
    }
    imgF2.drawTo(c1);
    alert("Filter applied");
  }
}

function f4() {
  if (img == null || !img.complete()) {
    alert("Image not uploaded");
  } else {
    for (var pixel of imgF4.values()) {
      if (pixel.getY() <= imgF4.getHeight() / 2 && pixel.getX() <= imgF4.getWidth() / 2) {
        pixel.setBlue(pixel.getBlue() + 100);
      } else if (pixel.getX() > imgF4.getWidth() / 2, pixel.getY() <= imgF4.getHeight() / 6) {
        pixel.setRed(pixel.getRed() + 100);
      } else if (pixel.getX() > imgF4.getWidth() / 2, pixel.getY() > imgF4.getHeight() / 6, pixel.getY() <= imgF4.getHeight() / 3) {
        pixel.setGreen(pixel.getGreen() + 100);
        pixel.setRed(pixel.getRed() + 100);
        pixel.setBlue(pixel.getBlue() + 100);
      } else if (pixel.getX() > imgF4.getWidth() / 2, pixel.getY() > imgF4.getHeight() / 3, pixel.getY() <= imgF4.getHeight() / 2) {
        pixel.setRed(pixel.getRed() + 100);
      } else if (pixel.getY() > imgF4.getHeight() / 2, pixel.getY() <= 2 * imgF4.getHeight() / 3) {
        pixel.setGreen(pixel.getGreen() + 100);
        pixel.setRed(pixel.getRed() + 100);
        pixel.setBlue(pixel.getBlue() + 100);
      } else if (pixel.getY() > 2 * imgF4.getHeight() / 3, pixel.getY() <= 5 * imgF4.getHeight() / 6) {
        pixel.setRed(pixel.getRed() + 100);
      } else {
        pixel.setGreen(pixel.getGreen() + 100);
        pixel.setRed(pixel.getRed() + 100);
        pixel.setBlue(pixel.getBlue() + 100);
      }
    }
    imgF4.drawTo(c1);
    alert("Filter applied");
  }
}

function f5() {
  if (img == null || !img.complete()) {
    alert("Image not uploaded");
  } else {
    for (var pixel of imgF5.values()) {
      var x = pixel.getX();
      var y = pixel.getY();
      if (x <= 50) {
        pixel.setGreen(pixel.getGreen() + 100);
        pixel.setRed(pixel.getRed() + 100);
        pixel.setBlue(pixel.getBlue() + 100);
      } else if (imgF5.getWidth() - x <= 50) {
        pixel.setGreen(pixel.getGreen() + 100);
        pixel.setRed(pixel.getRed() + 100);
        pixel.setBlue(pixel.getBlue() + 100);
      } else if (y <= 50) {
        pixel.setGreen(pixel.getGreen() + 100);
        pixel.setRed(pixel.getRed() + 100);
        pixel.setBlue(pixel.getBlue() + 100);
      } else if (imgF5.getHeight() - y <= 50) {
        pixel.setGreen(pixel.getGreen() + 100);
        pixel.setRed(pixel.getRed() + 100);
        pixel.setBlue(pixel.getBlue() + 100);
      } else {
        pixel.setGreen(pixel.getGreen() + 4);
        pixel.setRed(pixel.getRed() + 62);
        pixel.setBlue(pixel.getBlue() + 100);
      }
    }
    imgF5.drawTo(c1);
    alert("Filter applied");
  }
}

function f6() {
  if (img == null || !img.complete()) {
    alert("Image not uploaded");
  } else {
    for (var pixel of imgF6.values()) {
      var gray = (pixel.getRed() + pixel.getBlue() + pixel.getGreen()) / 3;
      if (gray < 128) {
        pixel.setRed(gray * 2);
        pixel.setGreen(0);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(2 * gray - 255);
        pixel.setBlue(2 * gray - 255);
      }
    }
    imgF6.drawTo(c1);
    alert("Filter applied");
  }
}

function f7() {
  if (img == null || !img.complete()) {
    alert("Image not uploaded");
  } else {
    for (var pixel of imgF7.values()) {
      if (pixel.getY() > 50 * Math.sin(pixel.getX() / 50) + (5 * imgF7.getHeight() / 6)) {
        pixel.setRed(pixel.getRed() + 73);
        pixel.setGreen(pixel.getGreen() + 100);
        pixel.setBlue(pixel.getBlue() + 100)
      } else {
        var tr = pixel.getRed() * 0.393 + pixel.getGreen() * 0.769 + pixel.getBlue() * 0.189;
        var tg = pixel.getRed() * 0.349 + pixel.getGreen() * 0.686 + pixel.getBlue() * 0.168;
        var tb = pixel.getRed() * 0.272 + pixel.getGreen() * 0.534 + pixel.getBlue() * 0.131;
        if (tr > 255) {
          pixel.setRed(255);
        } else {
          pixel.setRed(tr);
        }
        if (tg > 255) {
          pixel.setGreen(255);
        } else {
          pixel.setGreen(tg);
        }
        if (tb > 255) {
          pixel.setBlue(255);
        } else {
          pixel.setBlue(tb);
        }
      }
    }
    imgF7.drawTo(c1);
    alert("Filter applied");
  }
}

function f8() {
  if (img == null || !img.complete()) {
    alert("Image not uploaded");
  } else {
    var imgNew = new SimpleImage(imgF8.getWidth(), imgF8.getHeight());
    imgNew = imgF8;
    for (var pixel of imgF8.values()) {
      var x = pixel.getX();
      var y = pixel.getY();
      var j;
      function randomNaturalNumber() {
        j = Math.floor((Math.random() * 10) + 1);
      }
      var k;
      function randomInterger() {
        k = Math.floor((Math.random() * 10) + 1);
        var a = Math.random();
        if (a <= 0.5) {
          k = -k;
        }
      }
      var i = Math.random();
      if (i <= 0.9) {
        if (x < 11) {
          randomNaturalNumber();
          x = x + j;
        } else if (x > imgF8.getWidth() - 11) {
          randomNaturalNumber();
          x = x - j;
        } else {
          randomInterger();
          x = x + k;
        }
        if (y < 11) {
          randomNaturalNumber();
          y = y + j;
        } else if (y > imgF8.getHeight() - 11) {
          randomNaturalNumber();
          y = y - j;
        } else {
          randomInterger();
          y = y + k;
        }
        imgNew.setPixel(x, y, pixel);
      } else {
        imgNew.setPixel(x, y, pixel);
      }
    }
    imgNew.drawTo(c1);
    alert("Filter applied");
  }
}

function resetImage() {
  if (img == null || !img.complete()) {
    alert("Image not uploaded");
  } else {
    img.drawTo(c1);
    imgF1 = new SimpleImage(file);
    imgF2 = new SimpleImage(file);
    imgF3 = new SimpleImage(file);
    imgF4 = new SimpleImage(file);
    imgF5 = new SimpleImage(file);
    imgF6 = new SimpleImage(file);
    imgF7 = new SimpleImage(file);
    imgF8 = new SimpleImage(file);
    alert("Image reset");
  }
}

function clearCanvas() {
  var context1 = c1.getContext("2d");
  context1.clearRect(0, 0, c1.width, c1.height);
  document.getElementById("file").value = "";
  alert("Canvas Cleared");
}
function dlCanvas() {
  var dt = canvas.toDataURL('image/png');
  /* Change MIME type to trick the browser to downlaod the file instead of displaying it */
  dt = dt.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');

  /* In addition to <a>'s "download" attribute, you can define HTTP-style headers */
  dt = dt.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png');

  this.href = dt;
};