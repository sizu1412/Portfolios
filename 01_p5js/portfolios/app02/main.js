console.log("main.js!!");

//==========
// p5.jsを使ってみよう
// 		公式サイト: https://p5js.org/
//		Get Started: https://p5js.org/get-started/
//		References: https://p5js.org/reference/

/**
 * p5.js初期化関数
 */
function setup(){
    // キャンバスを用意する
    const canvas = createCanvas(680, 400);
    canvas.parent("myCanvas");// キャンバスを配置
    //angleMode(DEGREES);// 角度モードを0~360に
    //noLoop();
}

/**
 * p5.js連続して実行される関数
 */
  function draw() {
    background(80);
    stroke(10);
    strokeWeight(8);
    noFill();
  
    if (mouseIsPressed) {
      rectMode(CENTER);
    }
    else {
      rectMode(CORNER); // デフォルト
    }
  
    push();
    translate(width/2, height/2);
    rotate((mouseX/width)*2*PI);
    rect(0, 0, 300, 125);
    pop();
  }