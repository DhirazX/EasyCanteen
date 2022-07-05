
var itemName = document.querySelector(".itemName");
var itemPrice = document.querySelector(".itemPrice");
var itemQty= document.querySelector(".itemQty");
var totalPrice = document.querySelector(".totalPrice");
var addQty = document.querySelector("#addQty");
var subQty = document.querySelector("#subQty");
// itemQty.innerText = '1';
// itemPrice.innerText = '70';
totalPrice.innerText = itemQty.innerText * itemPrice.innerText;

console.log("LOG");
addQty.addEventListener("click",()=>{
    itemQty.innerText++;
    totalPrice.innerText = itemQty.innerText * itemPrice.innerText;
});

subQty.addEventListener("click",()=>{
    if(itemQty.innerText == 1){
        return;
    }
    itemQty.innerText--;
    totalPrice.innerText = itemQty.innerText * itemPrice.innerText;
});


//PUSHING ITEM DETAILS ON LOCAL STORAGE
if(JSON.parse(localStorage.getItem("cart"))==null){
    var itemArr = [];
}else{
    var itemArr = JSON.parse(localStorage.getItem("cart"));
}

function pushItem(){
    console.log("Inside push item func");
    let loadout={
       itemName: itemName.innerText,
       itemPrice: totalPrice.innerText,
       itemQty: itemQty.innerText
    }
    itemArr.push(loadout);
    localStorage.setItem("cart",JSON.stringify(itemArr));
}
console.log("ITEMAMS");
document.querySelector("#add-to-cart").addEventListener("click",()=>{
    modal.classList.add('active');
    overlay.classList.add('active');
    pushItem();
});

document.querySelector("#go-to-cart").addEventListener("click",()=>{
    window.location.href = 'cart.php';
});


//MODAL
const modal = document.querySelector('.modal');
const modalBtn = document.querySelector(".modal-btn");
const overlay = document.querySelector("#overlay");
modalBtn.addEventListener("click",()=>{
    modal.classList.add("hidden");
    modal.classList.remove("active");
    overlay.classList.add("hidden");
    overlay.classList.remove("active");
});


