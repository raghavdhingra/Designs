var x = document.getElementById('button_circle');
var y = document.getElementById('spot');
var z = document.getElementById('light_glow');
const on = () => {
    if (x.className=='' || x.className=='moveL'){
        x.className='moveR';
        y.className='light_spot';
        z.className='light_out';
        document.body.style.background='#90ffff';
    }
	else if (x.className=='moveR') {
        x.className='moveL';
        y.className='';
        z.className='';
        document.body.style.background='#00ffff';
    }
}