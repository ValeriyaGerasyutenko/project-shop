'use strict'

let popupInit = document.querySelectorAll('.popupInit');
let form__submit =  document.querySelectorAll('.form__submit');

popupInit.forEach(function(item){
	item.addEventListener('click', function(){		
		document.querySelector('body').classList.add('activeModal')
	})
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

	validName.forEach(function(name){
		name.addEventListener('keypress', function(){
			console.log(this.value.match(/\w{3,}/g));

			if(this.value.match(/\w{3,}/g)){
				console.log('+')
				this.parentElement.classList.remove('red');
				this.parentElement.classList.add('green')
			} else {
				this.parentElement.classList.add('red')
			}



		});
	});




})