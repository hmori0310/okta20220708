window.onload = function () {
  var buys = JSON.parse(localStorage.getItem("buys")),//ローカルストレージの商品データ配列
  fragment2 = document.createDocumentFragment(),//DOMの追加処理用のフラグメント
  ele = document.getElementById('js_shopping_list'),//カートの商品を追加する要素
  reset_btn = document.getElementById('js_confirm');//購入確定ボタン
  if (buys) {
    // 購入履歴の数分、要素を作成
    for (var i = 0; i < buys.length; i++) {
      var li = document.createElement('li'),
      h2 = document.createElement('h2'),
      price = document.createElement('div');
      date =  document.createElement('div');

      price.classList.add('price');
      
      h2.appendChild(document.createTextNode(buys[i].name));
      date.appendChild(document.createTextNode(buys[i].Day));
      price.appendChild(document.createTextNode(buys[i].price));
      li.appendChild(h2);
      li.appendChild(date);
      li.appendChild(price);
      fragment2.appendChild(li);
    }

  }

  // 作成した要素の追加
  ele.appendChild(fragment2);

  reset_btn.addEventListener('click',function () {
      
    localStorage.removeItem('buys');
  
  });

};