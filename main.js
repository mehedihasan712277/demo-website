function showMenu() {
  document.querySelector(".menuList").style.width = "100%";
}
function closeMenu() {
  document.querySelector(".menuList").style.width = "0px";
  
}
function myf() {
  document.querySelector(".menuList").style.width = "0px";
}
function  showLogin() {
  document.getElementById("log").style.display = "block";
  document.getElementById("s").style.display = "block";
  document.getElementById("sign").style.display = "none";
  document.getElementById("l").style.display = "none";
}
function  showSingup() {
  document.getElementById("log").style.display = "none";
  document.getElementById("s").style.display = "none";
  document.getElementById("sign").style.display = "block";
  document.getElementById("l").style.display = "block";
}