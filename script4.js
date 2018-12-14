//select canvas
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

// [ PARAMETERS ]
// (parameters_CANVAS) coordinate values
var cv_coord = {
    //this is an object
    //key:value
    left_top_x: 0,
    left_top_y: 0,
    left_bottom_x: 0,
    left_bottom_y: canvas.height,
    right_top_x: canvas.width,
    right_top_y: 0,
    rigth_bottom_x: canvas.width,
    rigth_bottom_y: canvas.height,
};


// (parameters_PLAYER) coordinate values
var player_value = {
    buffer: 20,
    speed: 5,
    radius: 30,
};

var player_coord = {
    x: cv_coord.left_bottom_x + player_value.buffer + player_value.radius,
    y: cv_coord.left_bottom_y - player_value.buffer - player_value.radius,
};

// (parameters_rain) coordinate values
var rain_value = {
    speed: 300,
    radius: 10,
    
};

var rain_coord = {
x: cv_coord.left_top_x + player_value.buffer + rain_value.radius,
y: cv_coord.left_top_y + player_value.buffer + rain_value.radius,
};
console.log(rain_coord.x, rain_coord.y, player_coord.x, player_coord.y,);


//drawPlayer
const drawPlayer = (x, y) => {
    ctx.beginPath();
    ctx.arc(x, y, player_value.radius, 0, 1*Math.PI); //line is there, but invisible
    ctx.closePath();
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.fillStyle = "#b2aba9"; //ash grey
    ctx.fill();
};

//drawPlayer(player_coord.x, player_coord.y);

/*
//(player) move player left
const movePlayerLeft = () => {
    player_coord.x += -1 * player_value.speed;
    drawPlayer(player_coord.x, player_coord.y);
    console.log(player_coord.x);
};
//(player) move player right
const movePlayerRight = () => {
    player_coord.x += 1 * player_value.speed;
    drawPlayer(player_coord.x, player_coord.y);
    console.log(player_coord.x);
};
*/



 //(player) add keyboard listeners - left key down
 const onKeyLeftDown = (event) => {
    //console.log(event);
    let key = event.key;    
    if (key === "ArrowLeft"){        
        player_coord.x += -1 * player_value.speed;
        console.log("pressed left");
        console.log(player_coord.x);
    }    
};
//(player) add keyboard listeners - right key down
const onKeyRightDown = (event) => {
    //console.log(event);
    let key = event.key;    
    if (key === "ArrowRight"){       
        player_coord.x += 1 * player_value.speed;
        console.log("pressed right"); 
        console.log(player_coord.x);
    }    
};


//(player) don't go outside left
//(player) don't go outside right






//(rain) [add time element]
//(rain) move rain down
//(rain) draw rain
// at first just have different SET X-values
// then use math.random function


//(score) check if rain meets player => return only T/F
//(score) if T then score + 1
//(score) if F then do nothing
//add score: +1 => at some point, DON'T DRAW RAIN


//(score check) check if score is 10 (or whatever number) => return T/F
//(score check) if T then 'stage clear' => draw new level?
//(score check) if F then do nothing


//(timer) [add time element]
//(timer) show time <= draw time


//(counter) if...
//how many rain drops?
//if there more than 3, stop drawing
//counter


/*

const onKeyDown = (event) => {
    //console.log(event);
    let key = event.key;
    if (key === "ArrowUp"){       
       player_y += -1 * player_speed;
        console.log("pressed up", player_y);
       } //if 를 여러변 쌓으면 여러 키 동시에 누르는 행위 입력으로 가능
    if (key === "ArrowDown"){        
        player_y += 1 * player_speed;
        console.log("pressed down", player_y);
    }
    if (key === "ArrowLeft"){        
        player_x += -1 * player_speed;
        console.log("pressed left", player_x);
    }
    if (key === "ArrowRight"){       
        player_x += 1 * player_speed;
        console.log("pressed right", player_x); 
    }
};
*/


const step = () => {
    // console.log("inside step");
 
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     drawPlayer(player_coord.x, player_coord.y);
     //drawObstacle();
  
     window.requestAnimationFrame(step); //when you are done wih ALL the other stuff, call yourself again: hence this line resides at the last within the function
     //this function already holds the time interval in which the screen refreshes - it figures out by the computer 상태 
 };


document.addEventListener("keydown", onKeyLeftDown);
document.addEventListener("keydown", onKeyRightDown);//keydown, keyup, keypress = down+up

window.requestAnimationFrame(step);

//console.log();
