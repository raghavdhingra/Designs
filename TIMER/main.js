btn_count = 0;
var counter=0;
const move = () => {
    if (btn_count==0){
        document.getElementById('block_1').classList.add('move');
        btn_count=1;
        document.getElementById('btn').innerHTML='Stop Counter';
    }
    else if (btn_count==1){
        document.getElementById('block_1').classList.remove('move');
        btn_count=0;
        document.getElementById('btn').innerHTML='Start Counter';
    }
    //counter
    var x = setInterval(timer,1000);
    function timer(){
        if (btn_count==1){
            counter+=1;
            document.getElementById('count_1').innerText=counter;
            if (counter!=0){
                document.getElementById('reset_btn').disabled=false;
            }
            }
            else if (btn_count==0) {
                clearInterval(x);
            }
        }
    }
