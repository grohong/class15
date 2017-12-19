console.log('my-note app.js');
//DOM
var storage = window.localStorage;
var memo = document.getElementById('memo');
var about = document.getElementById('about');

var newNote = function() {
  storage.clear();
  location.reload();
  memo.value = '';
};

var saveNote = function() {
  console.log(memo.value);
  storage.setItem('note', memo.value);
  alert('메모가 저장되었습니다.');
};

var readExistNote = function() {
  if (storage.length !== 0) {
  memo.value = storage.getItem('note');
  console.log('get note');
  }
};

var saveNoteFile = function() {
  var blob = new Blob([memo.value], {type: "text/plain;charset=utf-8"});
  saveAs(blob, 'note.txt');
};

var fullScreen = function() {
  if (screenfull.enabled) {
    screenfull.request();
  } else {
    alert('전체화면이 지원되지 않습니다.');
  }
};

var showAbout = function() {
  console.log(about);
  about.style.display = 'block'
};

var exitAbout = function() {
  about.style.display = "none";
}

$(function () {
  console.log('start page');
  readExistNote();
});


$('.btn-newnote').click(newNote);
$('.btn-savenote').click(saveNote);
$('.btn-savenote-file').click(saveNoteFile);
$('.btn-fullscreen').click(fullScreen);
$('.btn-about').click(showAbout);
$('.about').click(exitAbout);
