const menuButton = document.querySelector('.menu');
const navigation = document.querySelector('nav');
const navList = document.querySelector('nav ul');


var active = false;
menuButton.addEventListener('click', ()=>{
			if(active){
    				navigation.style.height = '0px';
    				navList.style.display = 'none';
							active = false;
					} else {
    				navigation.style.height = '300px';
    				navList.style.display = 'flex';
							active = true;
				}
});




