"use strict";

document.querySelector(".side-nav-button").addEventListener("click", function () {
  document.querySelector(".button-nav").textContent = "<";
  document.querySelector(".stranica").style.gridTemplateColumns = "100px 55px 10% 80%";
  document.querySelector(".nav-list").style.width = "16rem";
  document.querySelector(".glavna-tabela").style.gridColumnStart = "4";
  document.querySelector(".nav-list-top").style.alignItems = "center";
  document.querySelector(".nav-list-bottom").style.alignItems = "center";
  document.querySelector(".nav-list-btn-tekst").style.display = "flex";
});
