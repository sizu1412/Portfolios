function tossCoin() {
    var coin = document.getElementById('coin');
    var result = Math.random() < 0.5 ? 'heads' : 'tails';
  
    coin.style.transform = 'rotateX(360deg)';
  
    setTimeout(function() {
      // コイントスの結果に応じてクラスを切り替え
      coin.className = result === 'heads' ? 'coin red-coin' : 'coin blue-coin';
  
      coin.style.transform = 'rotateX(0deg)';
    }, 500);
  }
  