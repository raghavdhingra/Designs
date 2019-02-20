var x = document.getElementById('nav-icon1');
func = () => {
  if(x.className=='' || x.className=='close'){
    x.className='open';
  }
  else if (x.className=='open'){
    x.className='close';
  }
}