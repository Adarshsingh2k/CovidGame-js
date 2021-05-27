alert("be safe from corona");
// image loader fumction]
function load_image(){
    virus_image = new Image;
    virus_image.src = "virus.png";

    player_img = new Image;
    player_img.src = "hero.png";
    
    
    gem_image = new Image;
    gem_image.src = "gemm.png";
}







//movement of bird
function init(){
    canvas = document.getElementsByClassName("mycanvas");
    console.log(canvas);
    
    // chamge hieght and with using javascript
    w =700
    h= 400
    canvas[0].width = w
    canvas[0].height = h
    
    // work on canvas (**remember this and ask bhaiya)
    pen =  canvas[0].getContext("2d");
        console.log(pen);

    score = 0; 
    game_over = false;   
        
    //we want to create box
    //json objects
    e1 = {
        x: 150,
        y :50,
        W: 60,
        H : 50,
        speed : 20,
    };

    e2 = {
        x: 300,
        y :150,
        W: 70,
        H : 60,
        speed : 45,
    };

    e3 = {
        x: 450,
        y :30,
        W: 80,
        H : 80,
        speed : 70,
        
    };

    e6 = {
        x: 450,
        y :30,
        W: 80,
        H : 80,
        speed : 70,
        
    };
    e4 = {
        x: 450,
        y :30,
        W: 80,
        H : 80,
        speed : 70,
        
    };
    e5 = {
        x: 450,
        y :30,
        W: 80,
        H : 80,
        speed : 70,
        
    };

    enemy =[e1,e2,e3,e4,e5,e6];


    //player object
    player= {
        x: 20,
        y : h/2,
        W: 80,
        H : 80,
        speed: 26,
        moving : false,
    };

    gem= {
        x: w-100,
        y : h/2,
        W: 80,
        H : 80,
        speed: 26,

    };



    
    //create event listener
    canvas[0].addEventListener('mousedown',function(){
            console.log("you pressed the mouse");
            player.moving= true;
    });

    canvas[0].addEventListener('mouseup',function(){
        console.log("you realesed the mouse");
        player.moving= false;
    });
   
    //Different key
	/*
	document.addEventListener('keydown',function(e){
		console.log("You pressed a key");
		console.log(e);
		if(e.key=='t'){
		}
	});*/

}

//game loop

function draw(){

    //clear the old screen
    pen.clearRect(0,0,w,h);

    // Draw this bird on screen
    pen.fillStyle = "red";
    // drawing player
    pen.drawImage(player_img,player.x,player.y,player.W,player.H);

    pen.drawImage(gem_image,gem.x,gem.y,gem.W,gem.H);

    //pen.fillRect(bird.x,bird.y,bird.W,bird.H);
    for(let i=0;i<enemy.length;i++){

        pen.drawImage(virus_image,enemy[i].x,enemy[i].y,enemy[i].W,enemy[i].H);
    }


    pen.fillStyle= "chartreuse";
    pen.fillText("Score" + score,10,10);
    
}

function collision(b1,b2){
    if(Math.abs(b1.x - b2.x)<=30 && Math.abs(b1.y - b2.y)<=30){
        
		return true;
	}
	return false;

}

function update(){
    
    //playe state
     if(player.moving==true){
         player.x+=player.speed;
         score +=20;
     }


     // loop to check collision between corona  and player

     for(let i=0;i<enemy.length;i++){
		if(collision(enemy[i],player)){
            score -= i*100;
            alert("Corona")
			if(score<0){
				game_over = true;
				alert("Game Over");
			}

		}
	}

     // collission
     if(collision(gem,player)){
		game_over = true;
		draw();
		alert("You score" +score);
		//break the game loop -->
	}

    for(let i=0;i<enemy.length;i++){
    
        enemy[i].y+= enemy[i].speed;
            if(enemy[i].y> h-enemy[i].H || enemy[i].y<0){
                enemy[i].speed *=-1;
            }

    }

    

}

 
 function gameloop(){
	if(game_over==true){
		clearInterval(f);
	}
	draw();
	update();
}

 //start of the game
 load_image();

 init();

 //repeatedly call gameloop
var f=setInterval(gameloop,100);