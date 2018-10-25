document.addEventListener('DOMContentLoaded', function(){

	var btn = document.querySelectorAll('p.btn');
	var ctn = document.querySelectorAll('div.cnt');
	for (var i = 0; i < btn.length; i++) {
		btn[i].onclick = function(){
		for (var i = 0; i < btn.length; i++)
		{btn[i].classList.add('del_btn');}
		this.nextElementSibling.classList.add('active');}
	}	
	var cancel = document.querySelectorAll('div.cancel');
	for (var i = 0; i < cancel.length; i++) {
		cancel[i].onclick  = function(){
		for (var i = 0; i < btn.length; i++) {
			btn[i].classList.remove('del_btn');
			ctn[i].classList.remove('active');
		}		
	}	
	}
	
},false)
