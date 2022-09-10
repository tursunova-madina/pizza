"use strict";
const size = document.querySelectorAll("#size");
const order = document.querySelector("#order");
const ingredients = document.querySelectorAll("#ingredients");
const ingredient = document.querySelector(".ingredient");
const additional=document.querySelectorAll("#additional");
const adding=document.querySelector(".adding");


size.forEach((item) => {
  item.addEventListener("click", () => {
    removeClass();
    item.classList.add("active");
    order.textContent = `${item.textContent}`;
  });
});

function removeClass() {
  size.forEach((item) => {
    item.classList.remove("active");
  });
}

let array = [];
let chose = -1;
ingredients.forEach((item) => {
  item.addEventListener("click", () => {
    if (!array.includes(`${item.value}`)) {
      chose++;
      array.unshift(item.value);
      let text = document.createElement("p");
      text.setAttribute("class", "text-center text-light m-0");
      text.classList.add(`p${chose}`);
      text.textContent = `${item.value}`;
      ingredient.appendChild(text);
    } else {
      let look = array.findIndex((mn) => mn == item.value);
      let clear = document.querySelector(`.p${look}`);
      clear.textContent = "";
      array[look] = "";
    }
  });
});


let arr = [];
let ch = -1;
additional.forEach((item) => {
  item.addEventListener("click", () => {
    if (!arr.includes(`${item.value}`)) {
      ch++;
      arr.unshift(item.value);
      let text = document.createElement("p");
      text.setAttribute("class", "text-center text-light m-0");
      text.classList.add(`p${chose}`);
      text.textContent = `${item.value}`;
      adding.appendChild(text);
    } else {
      let look = array.findIndex((n) => n == item.value);
      let clear = document.querySelector(`.cp${look}`);
      clear.textContent = "";
      arr[look] = "";
    }
  });
});





function myunction() {
  var x = document.getElementById("mySelect").value;
  document.getElementById("twentyfive").innerHTML = x;
}
