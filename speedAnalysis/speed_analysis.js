let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
  // テストテキストを表示
  document.getElementById("inputText").value = testText;
  // 結果表示と入力欄をリセット
  document.getElementById("output").innerHTML = "";
  const userInput = document.getElementById("userInput");
  userInput.value = "";
  userInput.readOnly = false;
  // タイマー開始
  startTime = Date.now();

  // ボタンを「テスト終了」に切り替え
  const btn = document.getElementById("btn");
  btn.textContent = "テスト終了";
  btn.onclick = endTest;
}

function endTest() {
  // タイマー終了
  endTime = Date.now();
  const userInput = document.getElementById("userInput");
  userInput.readOnly = true;

  // 経過時間（秒）
  const timeElapsed = (endTime - startTime) / 1000;
  const text = userInput.value;

  // 単語数：空白で分割して空文字を除外
  const typedWords = text.trim().split(/\s+/).filter(w => w).length;
  // 文字数：すべての空白を除去した文字列長
  const totalChars = text.replace(/\s+/g, "").length;

  // WPM 計算
  const wpm = timeElapsed > 0
    ? Math.round((typedWords / timeElapsed) * 60)
    : 0;

  // 結果を表示
  const output = document.getElementById("output");
  output.innerHTML = `
    <h2>タイピングテストの結果:</h2>
    <p>入力した文字数: ${totalChars}</p>
    <p>入力した単語数: ${typedWords}</p>
    <p>経過時間: ${timeElapsed.toFixed(2)} 秒</p>
    <p>分あたりの単語数 (WPM): ${wpm}</p>
  `;

  // ボタンを「テスト開始」に戻す
  const btn = document.getElementById("btn");
  btn.textContent = "テストを開始";
  btn.onclick = startTest;
}
