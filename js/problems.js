"use strict";

// Problem №2

// const firstNumber=-4;
// const secondNumber=7;
// const array=[];

// for(let i=firstNumber;i<=secondNumber;i++){

//     array.push(i);
// }

// console.log(array)

// =============

// Problem №4

// const library=[
//   {
//     title:"The Road Ahead",
//     author:"Bill Gates",
//     libraryID:1254
//   },
//   {
//     title:"Walter Isaacson",
//     author:"Steve Jobs",
//     libraryID:4264
//   },
//   {
//     title:"Mockingjay: The Final Book of The Hunger Games ",
//     author:"Suzanne Collins",
//     libraryID:3245
//   }
// ]

// let array=[]

// library.forEach(function(item){
// let title=(item.title)
// let author=(item.author)
// let id=(item.libraryID)
// array.push(title)
// array.push(author)
// array.push(id)
// })

// console.log(array);

// =================
// Problem №3

// let array = [10,20,30,40,50];
// let indexMove = -4;
// array.splice(indexMove,1);
// console.log(array);

// ================

// Problem №1

const array=["a","a","a",1,1,2,3,3,5,9,2,6]

function sameNum(array){
  let nums={}
  for (let i=0;i<array.length;i++){
    if(nums[array[i]]){
      nums[array[i]]+=1
    }else{
      nums[array[i]]=1
    }
  }
  for(let key in nums){
    if(nums[key]>=1){
      console.log(key+' : '+nums[key]+' times.');
    }
  }
  console.log(nums);
}
sameNum(array)

