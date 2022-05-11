const onSaleBtn= document.querySelector("#on-sale");
const ownedBtn = document.querySelector("#owned");

const tab1= document.querySelector("#tab-1");
const tab2=document.querySelector("#tab-2");

onSaleBtn.addEventListener("click", function(){

 
    onSaleBtn.setAttribute("style", "background-color:#0D0C22; color: #fff");
    ownedBtn.setAttribute("style","background-color: #fff; color: #0D0C22 ");

    tab2.classList.add("d-none");
    tab1.classList.remove("d-none");
    tab1.classList.add("d-block");
 
})

ownedBtn.addEventListener("click", function(){
   
    ownedBtn.setAttribute("style", "background-color:#0D0C22; color: #fff");
    onSaleBtn.setAttribute("style","background-color: #fff; color: #0D0C22 ");


    tab1.classList.add("d-none");
    tab2.classList.remove("d-none");
    tab2.classList.add("d-block");
 
 
})


