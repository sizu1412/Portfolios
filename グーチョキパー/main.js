// ジャンケンの手の選択肢
const hands = ['グー', 'チョキ', 'パー'];

// プレイヤーの選択した手を保持する変数
let playerHand = '';

// プレイヤーの手を選択したときの処理
function selectHand(hand) {
  playerHand = hand;
  playGame();
}

// コンピュータの手をランダムに選択する関数
function getComputerHand() {
  const randomIndex = Math.floor(Math.random() * hands.length);
  return hands[randomIndex];
}

// ジャンケンの勝敗を判定する関数
function getWinner(player, computer) {
  if (player === computer) {
    return '引き分けです！';
  } else if (
    (player === 'グー' && computer === 'チョキ') ||
    (player === 'チョキ' && computer === 'パー') ||
    (player === 'パー' && computer === 'グー')
  ) {
    return 'あなたの勝ちです！';
  } else {
    return 'あなたの負けです！';
  }
}

// ゲームの進行を管理する関数
function playGame() {
  const computerHand = getComputerHand();
  const result = getWinner(playerHand, computerHand);
  document.getElementById('result').textContent = `あなたは${playerHand}を選びました。コンピュータは${computerHand}を選びました。${result}`;
}

// ボタンにクリックイベントを追加
document.getElementById('rock').addEventListener('click', function() {
  selectHand('グー');
});
document.getElementById('paper').addEventListener('click', function() {
  selectHand('パー');
});
document.getElementById('scissors').addEventListener('click', function() {
  selectHand('チョキ');
});

