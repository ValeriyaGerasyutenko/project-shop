'use strict'

let popupInit = document.querySelectorAll('.popupInit');
let form__submit =  document.querySelectorAll('.form__submit');
let closeBtn = document.querySelectorAll('.close-icon')

function up() {
	let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	let t;
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
}

popupInit.forEach(function(item){
	item.addEventListener('click', function(){		
		document.querySelector('body').classList.add('activeModal');
		up();
	});


});

closeBtn.forEach(function(item){
	item.addEventListener('click', function(){		
		document.querySelector('body').classList.remove('activeModal');
		
	});


});


form__submit.forEach(function(item){
	item.addEventListener('click', function(){		
		console.log('submit')
	})
});


let form = document.querySelectorAll('form');

form.forEach(function(item){
	/* valid name */
	let validName = item.querySelectorAll('.validName');
	let validPhone = item.querySelectorAll('.validPhone');
	let validMail = item.querySelectorAll('.validMail');

	validName.forEach(function(name){
		name.addEventListener('keypress', function(){
			console.log(this.value.match(/\w{3,}/g));

			if(this.value.match(/[a-zA-Zа-яА-ЯёЁ']{2,}/igm)){
				console.log('+')
				this.classList.remove('red');
				this.classList.add('green');
			} else {
				this.classList.add('red');
			}

		});
	});
	validPhone.forEach(function(name){
		name.addEventListener('keypress', function(){
			console.log(this.value.match(/\w{3,}/g));

			if(this.value.match(/^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){7,12}\d$/gm)){
				console.log('+')
				this.classList.remove('red');
				this.classList.add('green');
			} else {
				this.classList.add('red');
			}

		});
	});


	validMail.forEach(function(name){
		name.addEventListener('keypress', function(){
			console.log(this.value.match(/\w{3,}/g));

			if(this.value.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/gim)){
				console.log('+')
				this.classList.remove('red');
				this.classList.add('green');
			} else {
				this.classList.add('red');
			}

		});
	});

})

