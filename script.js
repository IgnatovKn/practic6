"use strict";
// Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на
//картинку console.log выводился ее src.
// let elems = document.getElementsByTagName("img");
// for (let i = 0; i < elems.length; i++) {
//   elems[i].onclick = func;
// }
// function func() {
//   console.log(this.getAttribute("src"));
// }

//Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку в
//атрибут title запишется ее текст

// let elems = document.querySelectorAll("a");
// for (let i = 0; i < elems.length; i++) {
//   elems[i].addEventListener("mouseover", func);
// }
// function func() {
//   this.innerHTML = this.innerHTML + "(" + this.href + ")";
// }

// Привяжите всем ссылкам событие - по наведению на ссылку в конец ее
// текста дописывается ее href в круглых скобках

// let elems = document.querySelectorAll("a");
// for (let i = 0; i < elems.length; i++) {
//   elems[i].addEventListener("mouseover", func);
// }
// function func() {
//   this.innerHTML = this.innerHTML + "(" + this.href + ")";
//   this.removeEventListener("mouseover", func);
// }

//Домашнее задание
// №1
//Привяжите всем инпутам следующее событие - по потери фокуса каждый
//инпут выводит свое value в абзац с id="test"
// let elems1 = document.getElementsByTagName("input");
// let elems2 = document.qetElementById("test");

// for (i = 0; i < elems1.Length; i++) {
//   elems1[i].addEventlistener("blur", lostFocus);
// }
// function lostFocus() {
//   elems2.innerHTML = this.value;
// }
// Примечание : в консоле выдает ошибку  на стр 40 . где ошибка?
// пишет что getElementById не функция

// №2
// Для всех инпутов сделайте так, чтобы они выводили свой value алертом
// при нажатии на любой из них, но только по первому нажатию. Повторное
// нажатие на инпут не должно вызывать реакции.
// let elems3 = document.getElementsByTagName("input");
// for (let i = 0; i < elems3.length; i++) {
//   elems3[i].addEventListener("click", func2);
// }
// function func2() {
//   alert(this.value);
//   this.removeEventListener("text", func2);
// }

// №3
// Даны абзацы с числами. По нажатию на абзац в нем должен появится
//квадрат числа, которое он содержит.

// let elems5 = document.getElementsByTagName("p");
// for (let i = 0; i < elems5.length; i++) {
//   elems5[i].addEventListener("click", func5);
// }
// function func5() {
//   this.innerHTML = this.innerHTML * this.innerHTML;
// }

// №4
// Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли
//свое содержимое на правильное количество символов. Сколько символов
//должно быть в инпуте, указывается в атрибуте data-length. Если вбито
//правильное количество, то граница инпута становится зеленой, если
//неправильное - красной.

let elems6 = document.getElementsByTagName("input");
for (let i = 0; i < elems6.length; i++) {
  elems6[i].addEventListener("blur", func6);
}

function func6() {
  let correctLength = this.dataset.length; //правильное количество
  let inputDataLength = this.value.length; //вбитое в инпут количество
  if (correctLength == inputDataLength) {
    this.style.borderColor = "green";
  } else {
    this.style.borderColor = "red";
  }
}
