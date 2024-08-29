window.onload = () => {
	let input = document.querySelector('#input')
	input.oninput = () => {
		let value = this.value.trim();
		let list = document.querySelectorAll('.col-md-4');
		
		if(value){
			list.forEach(elem => {
				if(elem.innerText.search(value) == -1) {
					elem.classList.add('hide');
				}
			});
		}else{
			list.forEach(elem => {
				elem.classList.remove('hide');
			});
		}
		console.log(this.value);
	};
};