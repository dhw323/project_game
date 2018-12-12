//RESIZE, DEBOUNCE idk how the fuck im supposed to make this work

// console.dir();  -> displays more of an object style. There's a bunch of console.X(); it's a way of showing -> 아마 MDN 보고서 다른 거 쓰고 싶을거야

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const coord_value = {
    left_top_x: 0,
    left_top_y: 0,
    left_bottom_x: 0,
    left_bottom_y: canvas.height,
    right_top_x: canvas.width,
    right_top_y: 0,
    rigth_bottom_x: canvas.width,
    rigth_bottom_y: canvas.height,
    buffer_player: 20,
};

let playerSpeed = 5;

//player
const playerBeginCoord = {
    radius: 20,
    playerX: coord_value.left_bottom_x + coord_value.buffer_player + 20,
    playerY: coord_value.left_bottom_y - coord_value.buffer_player - 20,
};

const playerPath = (x, y) => {
    let path = new Path2D();
    path.arc(x, y, playerBeginCoord.radius, 0, 2 * Math.PI);
    return path;
}

const player = {
    path: playerPath(playerBeginCoord.playerX, playerBeginCoord.playerY),
    fillStyle: "#b2aba9", //ash grey
    strokeStyle: "white",
};

const drawPlayer = () => {
    ctx.beginPath();

    if (player.fillStyle != undefined) {
        ctx.fillStyle = player.fillStyle;
        ctx.fill(player.path);
    }

    if (player.strokeStyle != undefined) {
        ctx.strokeStyle = player.strokeStyle;
        ctx.stroke(player.path);
    }


};

const step = () => {
   // console.log("inside step");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    //drawObstacle();

    window.requestAnimationFrame(step); //when you are done wih ALL the other stuff, call yourself again: hence this line resides at the last within the function
}

const onKeyDown = (event) => {
    //console.log(event);
    let key = event.key;
    if (key === "ArrowUp"){       
        playerBeginCoord.playerY += -1 * playerSpeed;
        console.log("pressed up", playerBeginCoord.playerY);
       } //if 를 여러변 쌓으면 여러 키 동시에 누르는 행위 입력으로 가능
    if (key === "ArrowDown"){
        console.log("pressed down");
        playerBeginCoord.playerY += 1 * playerSpeed;
    }
    if (key === "ArrowLeft"){
        console.log("pressed left");
        playerBeginCoord.playerX += -1 * playerSpeed;
    }
    if (key === "ArrowRight"){
        console.log("pressed right");
        playerBeginCoord.playerX += 1 * playerSpeed;
    }
};

document.addEventListener("keydown", onKeyDown);//keydown, keyup, keypress = down+up

window.requestAnimationFrame(step);



//step(); //위에 거(requestBlaBla)는 준비 되면 run함, 컴 내에서 as fast as the RAM can handle

/*
const circle = (x, y, radius) => {
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
};
*/

/*
const drawSquare = (x, y) => {
    ctx.beginPath();
    ctx.strokeRect(100, 100, 100, 100); //some is startpoint, some is parameter > 캔버스 사이즈 바껴도 이 렉탱글은 100*100 pixel이도록 해야해
};
*/

/*
const drawMan = (x, y) => {
    ctx.beginPath();
    circle(x, y, 50); //up to here is only a path, it's neither storked nor filled
    ctx.strokeStyle = "gold";
    ctx.stroke();
    ctx.fillStyle = "ivory";
    ctx.fill();
};
*/

/*
const step = () => {
    console.log("check_diane")
    ctx.clearRect(0, 0, canvas.width, canvas.height);//you gotta erase previous, the whole canvas
    drawMan(100, 100);
    playerX += -0.5;
    playerY += -0.2;
    

    window.requestAnimationFrame(step); //when you are done wih ALL the other stuff, call yourself again: hence this line resides at the last within the function
};

window.requestAnimationFrame(step);
*/








//setting the width and height by the window size

/*
const onResize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; //그치만 요게 만약 펑션 바깥에 따로 있으면 창 사이즈 바꾸면 새로고침을 눌러 줘야지 맞게 돼. 
    step();
};


//DEBOUNCE: don't do it a million times, just do it once
const debounce = (func) => {
    let timerID;

    return (event) => {
        if (timerID) {
            clearTimeout(timerID);
        }        
        timerID = setTimeout(func, 100, event); //after a certain amt of time, we're gonna run smth
        //setTimeout(run this(func), onely after waiting this much time(X), then pass along event and run(parameter needed to run func)) 근데 이 타임이 이벤트가 일어나는 빈도보다 더 길 수 있잖아 > 그러니 그 구간 안에서는 한번만 해 (그 사이의 트리거를 다 무시해라) 아, 사실은 만약 그 wait 동안에 이벤트가 다시 일어난다면 그냥 타이머를 리셋해라
    };

};

window.addEventListener("resize", debounce(onResize)); //detecting a resize
window.addEventListener("load", onResize);
*/

//delete this later
console.log(coord_value, playerBeginCoord.playerX, playerBeginCoord.playerY);