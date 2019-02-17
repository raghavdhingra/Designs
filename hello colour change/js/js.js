const match_literals = /0|1|2|3|4|5|6|7|8|9|a|b|c|d|e|f/i;
const change = () => {
var color_change = prompt('Type color-code or color-name, to change the color of the text: ','Type here......');
var first = color_change.charAt(0);
var result = match_literals.test(first);
if (result == true){
	if (color_change.length==3 || color_change.length==6){
		changed = '#'+color_change;
		document.getElementById('main_element').style.color=changed;
	}
	else {
		document.getElementById('main_element').style.color=color_change;
	}
}
else{
	document.getElementById('main_element').style.color=color_change;
}
}
const change_name = () => {
	var new_name = prompt('Enter a name to display:','Type here....');
	if (new_name===null){
		document.getElementById('main_element').innerText='HELLO';
	}
	else{
	document.getElementById('main_element').innerText=new_name;
	}
}
var x=1;
const func1 = () => {
	if (x==1){
		x+=1;
	document.getElementById('main_element').style.opacity=0;
	document.getElementById('help').style.opacity=1;
	document.getElementById('help').style.zIndex=11;
	}
	else if (x==2) {
		x-=1;
		document.getElementById('main_element').style.opacity=1;
		document.getElementById('help').style.opacity=0;
		document.getElementById('help').style.zIndex=1;
	}
}
const func2 = () => {
	if (x==2){
	x-=1;
	document.getElementById('main_element').style.opacity=1;
	document.getElementById('help').style.opacity=0;
	document.getElementById('help').style.zIndex=1;
	}
}
const func3 = () => {
	var color_change = prompt('Type color-code or color-name, to change background color: ','Type here......');
var first = color_change.charAt(0);
var result = match_literals.test(first);
if (result == true){
	if (color_change.length==3 || color_change.length==6){
		changed = '#'+color_change;
		document.body.style.background=changed;
	}
	else {
		document.body.style.background=color_change;
	}
}
else{
	document.body.style.background=color_change;
}
}