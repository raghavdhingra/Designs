var x=1;
const open1 = () => {
	if(x==1){
		x+=1;
		document.getElementById('jadd1').className='kj jadu1';
		document.getElementById('jadd2').className='kj jadu2';
		document.getElementById('jadd3').className='kj jadu3';
		document.getElementById('jadd4').className='kj jadu4';
		document.getElementById('jadd5').className='kj jadu5';
		document.getElementById('jadd6').className='kj jadu6';
		document.getElementById('hh').innerText='X';
	}
	else if(x==2){
		x-=1;
		document.getElementById('jadd1').className='kj rev1';
		document.getElementById('jadd2').className='kj rev2';
		document.getElementById('jadd3').className='kj rev3';
		document.getElementById('jadd4').className='kj rev4';
		document.getElementById('jadd5').className='kj rev5';
		document.getElementById('jadd6').className='kj rev6';
		document.getElementById('hh').innerText='M';
	}
}