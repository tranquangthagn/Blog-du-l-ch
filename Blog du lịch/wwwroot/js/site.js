// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var sizeImg = document.getElementsByClassName('slice-travel')[0].clientWidth;
var moveSlie = document.getElementsByClassName('silce-img')[0];
var Img = moveSlie.getElementsByTagName("img");
var Max = sizeImg * Img.length;
Max -= sizeImg;
var move = 0;
function Next() {
    if (move < Max) move += sizeImg;
    else move = 0;
    moveSlie.style.marginLeft = '-' + move + 'px';   
};
function Back() {
    if (move == 0) move = Max;
    else move -= sizeImg;
    moveSlie.style.marginLeft = '-' + move + 'px';
}
setInterval(function () {
    Next();
},5000)