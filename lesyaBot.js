// перед запуском проверь айдишник переменной h, а так же напиши что нибудь, чтобы вк присвойл новым сообщениям [data-admin="0"]
// еще надо будет сделать первую ставку самому, чтобы скрипт понял, выйграл ты или пройграл
// так же учти, что при каждом новом запуске, каждую переменную над будет поменять (можно просто обновить страницу и запустить скрипт по новой)


let x = "выиграли";
let y = "проиграли";
let j = "остаются";
let h = "#im_editable-158861435"; // айдишник поля
let M = 50;
setInterval(function() {
  let O = document.querySelectorAll('[data-admin="0"] .im-mess--text');
  let T = O[O.length - 1].innerHTML;
  
  if (T.includes(y)) {
    M = M + 50;

    if (M > 600) {
      M = 50;
    }
  } else if (T.includes(x)) {
    M = M + 50;

    if (M > 250) {
      M = 50;
    }
  } else if (T.includes(j)) {
    M = M + 50;

    if (M > 250) {
      M = 50;
    }
  } else {
    M = 50;
  }
  
  $(h).innerHTML = `Казино ${M}ккк`;
  $(".im-chat-input--send").click();
}, 5000);