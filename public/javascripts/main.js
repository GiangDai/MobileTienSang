// ẩn hiện modal
var modal = document.getElementById('myModal');

var oder = document.getElementById('oder');
console.log(oder);


var btn = document.getElementById('cart');
var close = document.getElementsByClassName('close')[0];
var close_footer = document.getElementsByClassName('close-footer')[0];


btn.onclick = function () {
  modal.style.display = "block";
}

close.onclick = function () {
  modal.style.display = "none";
}
close_footer.onclick = function () {
  modal.style.display = "none";
}

// var order = document.getElementsByClassName('order')[0];
// order.onclick = function () {
//   alert("Cảm ơn bạn đã thanh toán đơn hàng")
// }

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// class product{

//   title;
//   price;
//   img;
// }

// let listPd = {};

// update cart 
function updatecart() {
  var cart_item = document.getElementsByClassName("cart-items")[0];
  var cart_rows = cart_item.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cart_rows.length; i++) {
    var cart_row = cart_rows[i]
    var price_item = cart_row.getElementsByClassName("cart-price ")[0]
    var quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0]
    
    var price = parseFloat(price_item.innerText)// chuyển một chuổi string sang number để tính tổng tiền.
    var quantity = quantity_item.value // lấy giá trị trong thẻ input
    total = total + (price * quantity)
    
  }
  document.getElementsByClassName("cart-total-price")[0].innerText = total + 'VNĐ'
  
  // Thay đổi text = total trong .cart-total-price. Chỉ có một .cart-total-price nên mình sử dụng [0].
  // len = cart_rows.length;
  
  // for (let i = 0; i < len; i++) {
  //   listPd[i] = new product();
  //   listPd[i].title = cart_row.getElementsByClassName('cart-item-title')[0].innerText;
  //   console.log(listPd[i].title);
  //   listPd[i].img = cart_row.getElementsByTagName('img')[0].src;
  //   listPd[i].price = cart_row.getElementsByClassName('cart-price cart-column')[0].value;
    
  // }
  // if(len == 0){
  //   listPd = {};
  
  
  // }
  // var dem = 0;
  // if(listPd.length != cart_row.length){
  //   for (let j = 0; j < listPd.length; j++) {
  //     for (let i = 0; i < cart_row.length; i++) {
  //       if(listPd[i].title == cart_row.getElementsByClassName('cart-item-title')[0].value){
  //         dem = dem+1;
  //         break;
          
  //       }
        
  //     }
    
  //   }  
  // }
  // if(dem == 0){

  // }
  
  // console.log(listPd);
  
}

// thay đổi số lượng sản phẩm
var quantity_input = document.getElementsByClassName("cart-quantity-input");
for (var i = 0; i < quantity_input.length; i++) {
  var input = quantity_input[i];
  input.addEventListener("change", function (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
}

// xóa cart

// var remove_cart = document.getElementsByClassName("btn-danger");
// for (var i = 0; i < remove_cart.length; i++) {
//   var button = remove_cart[i];
//   button.addEventListener("click", function () {
//     var button_remove = event.target
//     button_remove.parentElement.parentElement.remove();
//     updatecart();
//   })
  
// }

// class product{
//   n;
//   title;
//   img;
//   price;
// }


  


// Thêm vào giỏ
var add_cart = document.getElementsByClassName("btn-cart");
for (var i = 0; i < add_cart.length; i++) {
  var add = add_cart[i];
  add.addEventListener("click", function (event) {

    var button = event.target;
    var product = button.parentElement.parentElement.parentElement;
    // var img = product.parentElement.getElementsByClassName("img-product")[0].src
    var img = product.getElementsByTagName('img')[0].src;
    var slug = product.getElementsByClassName('slug')[0].innerText;
    var title = product.getElementsByClassName("content-product-h3")[0].innerText
    var price = product.getElementsByClassName("price")[0].innerText;
    // console.log(slug);
    addItemToCart(title, price, img, slug);
    // Khi thêm sản phẩm vào giỏ hàng thì sẽ hiển thị modal
    modal.style.display = "block";
    
    updatecart()
  })
}

function addItemToCart(title, price, img, slug) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cart_title = cartItems.getElementsByClassName('cart-item-title')
  //Nếu title của sản phẩm bằng với title mà bạn thêm vao giỏ hàng thì sẽ thông 
  //cho user.
  for (var i = 0; i < cart_title.length; i++) {
    if (cart_title[i].innerText == title) {
      alert('Sản Phẩm Đã Có Trong Giỏ Hàng')
      return
    }
  }

  var cartRowContents = `
  <div class="cart-item cart-column">
      <img class="cart-item-image" src="${img}" width="100" height="100">
      <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column">${price}</span>
  <span class="cart-item-slug cart-column" style="display: none;">${slug}</span>
  <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button">Xóa</button>
      <form name="oder-form">
  `

    //xóa cart
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove()
    updatecart()
  })
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })

 
  
}

var oderForm = document.forms['oder-form'];
var arrslugs = [];

function countProducts() {
  var products = document.getElementsByClassName('cart-items')[0].getElementsByClassName('cart-item-slug');
  
  for (let i = 0; i < products.length; i++) {
    
    arrslugs[i] = products[i].innerText;
    console.log(arrslugs[i]);
    var htmlForm = document.createElement('div')
    htmlForm.classList.add('form-slug');
    var htmlFormContent = `<input name="slugOder" style="display: none;" value=${arrslugs[i]} type="text"></input>`
    htmlForm.innerHTML = htmlFormContent;
    oderForm.append(htmlForm);

    
  }
}

var order = document.getElementsByClassName('order')[0];

order.onclick = function () {
  updatecart()
  countProducts();
  console.log(arrslugs);
  // alert("Cảm ơn bạn đã thanh toán đơn hàng")
  oderForm.action = "/oder-client/";
  oderForm.submit();
}


