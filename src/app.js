/* eslint-disable */
import "bootstrap";
import "./style.css";

//import "./assets/img/rigo-baby.jpg";
import "./assets/img/Prince.jpg";
import "./assets/img/4geeks.ico";

window.onload = function onlyForYou() {
  //write your code here

  let who = ["The dog", "My grandma", "His turtle", "My bird", "My Grandsons"];
  let action = ["ate", "peed", "crushed", "broke", "bathed"];
  let what = ["my homework", "the keys", "the car", "my bed"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function myRanElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  let onlyForYou =
    myRanElement(who) +
    " " +
    myRanElement(action) +
    " " +
    myRanElement(what) +
    " " +
    myRanElement(when);

  console.log(onlyForYou);

  const myDomeExcuse = document.getElementsByTagName("p");

  myDomeExcuse[0].innerText = onlyForYou;
  console.log(myDomeExcuse[0]);
};
