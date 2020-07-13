function moveBall(ball,rod1,rod2){
    
    let y = ball.getBoundingClientRect().top;
    let x = ball.getBoundingClientRect().left;
    
    let xop = '+';
    let yop = '-';

    if(p2 == false){
        xop = '-';
        yop = '+';
    }
    
    let interval = setInterval(function() {
        x = parseInt(eval('x' + xop + '1'));
        y = parseInt(eval('y' + yop + '1'));
        
        ball.style.left = x + 'px';
        ball.style.top = y + 'px';
        if( x > (window.innerWidth - 53)){
            xop = '-';
            // right-boundary
        }
        if( y < 20){
            // top-boundary
            var range = rod1.getBoundingClientRect().left;
            if( x >= (range - 25) && x <= (range + 200)){
                yop = '+';
                currScore = currScore + 10;
            }
            else if (y == 0) {
                clearInterval(interval);
                p1 = false;
                p2 = true;
                rod1.style.left = (window.innerWidth/2 - 100) + 'px';
                rod2.style.left = (window.innerWidth/2 - 100) + 'px';
                ball.style.left = (window.innerWidth/2 - 15) + 'px';
                ball.style.top = 20 + 'px';
                // let hs = parseInt(localStorage.getItem("highScore"));
                // if (currScore > hs){
                //     localStorage.setItem("hightScore",currScore);
                //     window.alert('New High Score : ' + currScore);
                // } else
                // window.alert('You loose !!! Your Score : ' + currScore + ' High Score : ' + hs);
                window.alert('your score' + currScore);
                currScore = 0;
            }
        }
        if( x <= 1){
            // left-boundary
            xop = '+';
        }
        if( y > (window.innerHeight - 20 - 50)){
            // bottom-boundary
            var range = rod2.getBoundingClientRect().left;
            if( x >= (range - 25) && x <= (range + 200)){
                yop = '-';
                currScore = currScore + 10;
            }
            else if (y == (window.innerHeight-50)) {
                clearInterval(interval);
                p1 = true;
                p2 = false;
                rod1.style.left = (window.innerWidth/2 - 100) + 'px';
                rod2.style.left = (window.innerWidth/2 - 100) + 'px';
                ball.style.left = (window.innerWidth/2 - 15) + 'px';
                ball.style.top = (window.innerHeight - 70) + 'px';
                // let hs = parseInt(localStorage.getItem("highScore"));
                // if (currScore > hs){
                //     localStorage.setItem("hightScore",currScore);
                //     window.alert('New High Score : ' + currScore);
                // } else
                // window.alert('You loose !!! Your Score : ' + currScore +  ' High Score : ' + hs);
                window.alert('your score' + currScore);
                currScore = 0;
            }
        }
    },5);

}

function start(){
    let rod1 = document.getElementById('rod-1');
    let rod2 = document.getElementById('rod-2');
    let ball = document.getElementById('ball');

    let x = rod1.getBoundingClientRect().left;
    
    moveBall(ball,rod1,rod2);

    window.addEventListener('keypress',function (event){
        
        let key = event.keyCode;
        
        if(key == 97){
            x = x - 10;
            if(x >= 0){
                rod1.style.left = x +'px';
                rod2.style.left =  x +'px';
            } else {
                x = 0;
            }

        }else if(key == 100){
            x = x + 10;
            if(x <= (window.innerWidth - 200)){
                rod1.style.left = x + 'px';
                rod2.style.left = x + 'px';
            } else {
                x = window.innerWidth - 200;
            }
        }
    });
}

var p1 = true;
var p2 = true;

var currScore = 0;
localStorage.setItem("highScore",0);

window.addEventListener('keypress',function (){
    if(this.event.keyCode == 13){
        start();
    }
});
