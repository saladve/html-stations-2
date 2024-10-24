function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  const checkCheckbox = document.getElementById("check");
  if (checkCheckbox.checked) {
    document.getElementById('text').style.backgroundColor = ('#ff0000');
    };
}