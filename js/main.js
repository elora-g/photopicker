'use strict';   // Mode strict du JavaScript

/*VARIABLES*/

var index;
var photos;
var total;


/*FONCTIONS*/

function onClickListItem(){
    var selectedPhotos;

    this.classList.toggle('selected');

    selectedPhotos = document.querySelectorAll('.photo-list li.selected');

    total.textContent = selectedPhotos.length;
}



/*CODE PRINCIPAL*/

photos = document.querySelectorAll('.photo-list li');
total  = document.querySelector('#total em');

for(index = 0; index < photos.length; index++){
    photos[index].addEventListener('click', onClickListItem);
}