/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let icon = ["♦", "♥", "♠", "♣"];

  let RandomNumbers = numbers[Math.floor(Math.random() * numbers.length)];
  let RandomIcon = icon[Math.floor(Math.random() * icon.length)];
  //write your code here
  document.querySelector(".top-icon").innerHTML = RandomIcon;
  document.querySelector(".number").innerHTML = RandomNumbers;
  document.querySelector(".bottom-icon").innerHTML = RandomIcon;

  if (RandomIcon == "♦" || RandomIcon == "♥") {
    document.querySelector(".top-icon").classList.add("red");
    document.querySelector(".bottom-icon").classList.add("red");
  } else {
    document.querySelector(".bottom-icon").classList.add("black");
    document.querySelector(".top-icon").classList.add("black");
  }
};
