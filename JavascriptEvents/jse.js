var head = document.getElementsByTagName("head")[0];
var link = document.createElement("link");
link.rel = "stylesheet";
link.href = "./jse.css";
head.appendChild(link);

const content = document.body;
content.innerHTML = `<section id="product"></section>`;
const section = document.querySelector("section");
section.innerHTML = `<div class="left-column">
<img id="productImg" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg" alt="">
</div><div class="right-column">
<div class="product-description">
  <h1 id="name">Men Navy Blue Solid Sweatshirt</h1>
  <h4 id="brand">United Colors of Benetton</h4>
  <h3>Price: Rs <span id="price">2599</span></h3>
  <div class="description">
    <h3>Description</h3>
    <p id="description">Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem</p>
  </div>
  <div class="product-preview">
    <h3>Product Preview</h3>
    <div class="previewImg">
        <img id="img0" class="active" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg" alt="">
        <img id="img1" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg" alt="">
        <img id="img2" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg" alt="">
        <img id="img3" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg" alt="">
        <img id="img4" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg" alt="">
        
    </div>
  </div>
</div>
  <div class="btn">
    <button id="add-to-cart">Add to Cart</button>
  </div>
</div>`;
let toggle = () => {
  let pic = document.querySelector("#productImg");
  pic.src =
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg";
};
let zero = document.querySelector("#img0");
zero.addEventListener("click", function () {
  toggle();
});

let toggle1 = () => {
  let pic = document.querySelector("#productImg");
  pic.src =
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg";
};
let one = document.querySelector("#img1");
one.addEventListener("click", function () {
  toggle1();
});

let toggle2 = () => {
  let pic = document.querySelector("#productImg");
  pic.src =
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg";
};
let two = document.querySelector("#img2");
two.addEventListener("click", function () {
  toggle2();
});

let toggle3 = () => {
  let pic = document.querySelector("#productImg");
  pic.src =
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg";
};
let three = document.querySelector("#img3");
three.addEventListener("click", function () {
  toggle3();
});

let toggle4 = () => {
  let pic = document.querySelector("#productImg");
  pic.src =
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg";
};

let four = document.querySelector("#img4");
four.addEventListener("click", function () {
  toggle4();
});

let clas = document.querySelector(".active");
clas.onclick = function () {
  clas.classList.add("active");
  clas1.classList.remove("active");
  clas2.classList.remove("active");
  clas3.classList.remove("active");
  clas4.classList.remove("active");
};

let clas1 = document.querySelector("#img1");
clas1.onclick = function () {
  this.classList.add("active");
  clas.classList.remove("active");
  clas2.classList.remove("active");
  clas3.classList.remove("active");
  clas4.classList.remove("active");
};

let clas2 = document.querySelector("#img2");
clas2.onclick = function () {
  this.classList.add("active");
  clas.classList.remove("active");
  clas1.classList.remove("active");
  clas3.classList.remove("active");
  clas4.classList.remove("active");
};

let clas3 = document.querySelector("#img3");
clas3.onclick = function () {
  this.classList.add("active");
  clas.classList.remove("active");
  clas1.classList.remove("active");
  clas2.classList.remove("active");
  clas4.classList.remove("active");
};

let clas4 = document.querySelector("#img4");
clas4.onclick = function () {
  this.classList.add("active");
  clas1.classList.remove("active");
  clas2.classList.remove("active");
  clas3.classList.remove("active");
  clas.classList.remove("active");
};
