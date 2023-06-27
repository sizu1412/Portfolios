console.log("main.js!!");


// サイコロを振る関数
function rollDice() {
    // 1から6までのランダムな整数を生成
    var result = Math.floor(Math.random() * 6) + 1;
    return result;
  }
  
  // サイコロを振る例
  var diceRoll = rollDice();
  console.log("サイコロの結果: " + diceRoll);
  