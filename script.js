/* ITEMS INFORMATIONS */
const itemsInfo = [
    {
        "items-id": "001",
        "name": "Autumn Limited Edition Sneakers",
        "price": 250,
        "discount": 50,
        "pic-1": "images/image-product-1.jpg",
        "pic-2": "images/image-product-2.jpg",
        "pic-3": "images/image-product-3.jpg",
        "pic-4": "images/image-product-4.jpg",
        "small-pic-1": "images/image-product-1-thumbnail.jpg",
        "small-pic-2": "images/image-product-2-thumbnail.jpg",
        "small-pic-3": "images/image-product-3-thumbnail.jpg",
        "small-pic-4": "images/image-product-4-thumbnail.jpg"
    },
]


/* Change the number of items */
const minus = document.querySelector(".change-m");
const plus = document.querySelector(".change-p");
const items = document.querySelector(".items");

var count = 0;
function counterUp() {
    if (items.innerHTML >= 0 && items.innerHTML < 10) {
        count++;
        items.innerHTML = count;
    }
}

function counterDown() {
    if (items.innerHTML > 0 && items.innerHTML <= 10) {
        count--;
        items.innerHTML = count;
    }
}

plus.addEventListener("click", counterUp);
minus.addEventListener("click", counterDown);


/* Change the color of the button cart icon */
const button = document.querySelector(".add");
const buttonBasket = document.querySelector(".button-basket");

function changeBasketOn() {
    buttonBasket.src = "images/icon-cart.svg";
}

function changeBasketOut() {
    buttonBasket.src = "images/icon-button-cart.svg";
}

button.addEventListener("mouseenter", changeBasketOn);
button.addEventListener("mouseleave", changeBasketOut);


/* Change number of cart items */
const basketItems = document.querySelector(".basket-items");

function changeBasektItems() {
    if (items.innerHTML > 0) {
        basketItems.innerHTML = items.innerHTML;
        basketItems.style.visibility = "visible";
    }
    
    else {
        basketItems.style.visibility = "hidden";
    }

}

button.addEventListener("click", changeBasektItems);


/* Appear and display cart box */
const cartBox = document.querySelector(".cart");
const basket = document.querySelector(".basket");
const grayOut = document.querySelector(".grayOut");

function cartChangeIn() {
    cartBox.style.display = "flex";
    grayOut.style.display = "block";
        
}

function cartChangeOut() {
    cartBox.style.display = "none";
    grayOut.style.display = "none";
}

basket.addEventListener("click", cartChangeIn);
grayOut.addEventListener("click", cartChangeOut);


/* Add items to cart */
/*
const newItem = document.querySelector(".newItem");
const newItems_num = document.querySelector(".newItem-num");
const newItems_totlatPrice = document.querySelector(".newItem-totalPrice");
*/
const nums = items.innerHTML;
console.log(nums);
const empty = document.querySelector(".empty");

const newItem = document.createElement("div");
newItem.className = "newItem";
newItem.style.order = "1";

const newItem_pic = document.createElement("img");
newItem_pic.className = "newItem-pic";
newItem_pic.src = itemsInfo[0]["small-pic-1"];
newItem_pic.alt = "item image";
newItem.appendChild(newItem_pic);

const newItem_name = document.createElement("p");
newItem_name.className = "newItem-name";
newItem_name.innerHTML = itemsInfo[0]["name"];
newItem.appendChild(newItem_name);

const newItem_price = document.createElement("p");
newItem_price.className = "newItem-price";
newItem_price.innerHTML = itemsInfo[0]["price"];
newItem.appendChild(newItem_price);

const newItem_num = document.createElement("p");
newItem_num.className = "newItem-num";
newItem.appendChild(newItem_num);

const newItem_totlatPrice = document.createElement("p");
newItem_totlatPrice.className = "newItem-totalPrice";
newItem.appendChild(newItem_totlatPrice);

const bin = document.createElement("img");
bin.className = "bin";
bin.src = "images/icon-delete.svg";
bin.alt = "delete icon";
newItem.appendChild(bin);

function changeItems() {
    if (items.innerHTML > 0) {
        empty.style.display = "none"; 
        newItem_num.innerHTML = `×${items.innerHTML}  =`;
        newItem_totlatPrice.innerHTML = `$${125 * items.innerHTML}.00`;
        cartBox.appendChild(newItem);
        newItem.style.display = "grid";
        items.innerHTML = 0;
        count = 0;
    } else {
        newItem.style.display = "none";
        empty.style.display = "block"; 
    }
}

button.addEventListener("click", changeItems);



/* Change the color of delete icon */
function grayColor() {
    bin.src = "images/icon-delete.svg";
}

function redColor() {
    bin.src = "images/icon-delete-red.svg";
}

bin.addEventListener("mouseenter", redColor);
bin.addEventListener("mouseleave", grayColor);


/* Remove items form the cart */
function removeItems() {
    cartBox.removeChild(newItem);
    empty.style.display = "block";
    basketItems.style.visibility = "hidden";
    basketItems.innerHTML = 0;
}

bin.addEventListener("click", removeItems);


/* Manipulation with mobile menu using jQuery */
$(function(){
    $(".close").click(function() {
        $("li, .close").css({"display": "none"});
        $("ul").animate({width: 0, padding: 0});
        $(".grayOut").css({"display": "none"});
        $("body").css({"overflow": "auto"});
    });

    $(".hamburger").click(function() {
        $(".grayOut").css({"display": "block"});
        $("ul").animate({width: "70vw", padding: "2em"});
        $("li, .close").css({"display": "block"});
        $("body").css({"overflow": "hidden"});
    });
});


/* Create the Slider */
const lab = document.querySelector("#left-arrow-bg");
const rab = document.querySelector("#right-arrow-bg");
const pic = document.querySelector(".photo");

const pics = ["1", "2", "3", "4"];
var picIndex = 0;
function slideRight() {
    if (picIndex >= 0 && picIndex < 3) {
        picIndex++;
    } else {
        picIndex = 0;
    }

    let myPic = pics[picIndex];
    pic.src = itemsInfo[0]["pic-" + myPic];

    const smallPic = document.querySelector("#small-" + pics[picIndex]);
    smallPic.style.border = "3px solid hsl(26, 100%, 55%)";
    smallPic.style.filter = "opacity(50%)";

    $(".small-photo").not("#small-" + pics[picIndex]).css({
        "border-color": "hsla(26, 100%, 55%, 0)",
        "filter": "opacity(100%)",
    });
}

function slideLeft() {
    if (picIndex > 0 && picIndex < 4) {
        picIndex--;
    } else {
        picIndex = 3;
    }

    let myPic = pics[picIndex];
    pic.src = itemsInfo[0]["pic-" + myPic];

    const smallPic = document.querySelector("#small-" + pics[picIndex]);
    smallPic.style.border = "3px solid hsl(26, 100%, 55%)";
    smallPic.style.filter = "opacity(50%)";

    $(".small-photo").not("#small-" + pics[picIndex]).css({
        "border-color": "hsla(26, 100%, 55%, 0)",
        "filter": "opacity(100%)",
    });
}

rab.addEventListener("click", slideRight);
lab.addEventListener("click", slideLeft);

const moveSlide = setInterval(slideRight, 5000);


/* Lightbox Effects */
if ( $(window).width() >= 1026) {
    const ids = ["small-1", "small-2", "small-3", "small-4"];
    $(".small-photo").click(function(e) {
        const id = e.target.id;
        $("#" + id).css({
            "border-color": "hsl(26, 100%, 55%)",
            "filter": "opacity(70%)",
        });

        const notIds = [];
        for (let i of ids) {
            if (i !== id) {
                notIds.push(i);
            }
        }

        const [nid1, nid2, nid3] = notIds;
        $(`#${nid1}, #${nid2}, #${nid3}`).css({
            "border": "3px solid white", 
            "filter": "opacity(100%)",
        });
        
        pic.src = itemsInfo[0]["pic-" + id.at(-1)];
    });

    const slider = document.querySelector(".slider");
    const ls = document.querySelector(".left-side");
    const rs = document.querySelector(".right-side");
    const sc = document.querySelector(".slider-close");

    function changeSlider() {
        grayOut.style.display = "block";
        grayOut.style.opacity = "0.6";

        slider.style.width = "fit-content";
        slider.style.position = "absolute";
        slider.style.top = "50%";
        slider.style.left = "50%";
        slider.style.transform = "translate(-50%, -50%)";
        slider.style.zIndex = "5";

        ls.style.display = "block";
        rs.style.display = "block";

        sc.style.display = "block";

        slider.style.transition = "0.3s ease";

        $(".small-photo").css({"border-color": "hsla(26, 100%, 55%, 0)"});

        moveSlide;
    }

    pic.addEventListener("click", changeSlider);

    const la = document.querySelector("#left-arrow");
    const ra = document.querySelector("#right-arrow");

    function changeLAIn() {
        la.src = "images/icon-previous-orange.svg";
    }

    function changeLAOut() {
        la.src = "images/icon-previous.svg";
    }

    lab.addEventListener("mouseenter", changeLAIn);
    lab.addEventListener("mouseleave", changeLAOut);

    function changeRAIn() {
        ra.src = "images/icon-next-orange.svg";
    }

    function changeRAOut() {
        ra.src = "images/icon-next.svg";
    }

    rab.addEventListener("mouseenter", changeRAIn);
    rab.addEventListener("mouseleave", changeRAOut);

    function changeCloseColorIn() {
        sc.src = "images/icon-close-red.svg";
    }

    function changeCloseColorOut() {
        sc.src = "images/icon-close.svg";
    }

    sc.addEventListener("mouseenter", changeCloseColorIn);
    sc.addEventListener("mouseleave", changeCloseColorOut);

    function restSlider() {
        ls.style.display = "none";
        rs.style.display = "none";

        slider.style.transform = "translate(0%, 0%)";
        slider.style.position = "static";
        slider.style.transition = "0.3s ease";

        sc.style.display = "none";

        clearInterval(moveSlide)
    }

    grayOut.addEventListener("click", restSlider);
}
