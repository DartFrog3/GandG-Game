let arrowLeft;
let arrowLeftImg;
let arrowRight;
let arrowRightImg;
let arrowUp;
let arrowUpImg;
let arrowDown;
let arrowDownImg;
let dirKey;
let carImg;
let rooms;


function preload() {
    arrowLeftImg = loadImage('sprites/arrowLeft.png');
    arrowRightImg = loadImage('sprites/arrowRight.png');
    arrowUpImg = loadImage('sprites/arrowUp.png');
    arrowDownImg = loadImage('sprites/arrowDown.png');
    carImg = loadImage('assets/car.jpg');


}

function setup() {
    createCanvas(800, 800);

}

function draw() {
    rooms.car.display();
    createArrows();
}

arrow = {
    left : {
        display : function() {
            arrowLeft = createSprite(75, 325);
            arrowLeftImg.resize(50, 50);
            arrowLeft.addImage(arrowLeftImg);
        }
    },

    right : {
        display : function() {
            arrowRight = createSprite(725, 325);
            arrowRightImg.resize(50, 50);
            arrowRight.addImage(arrowRightImg);
        }
    },

    up : {
        display : function() {
            arrowUp = createSprite(400, 65);
            arrowUpImg.resize(50, 50);
            arrowUp.addImage(arrowUpImg);
        }
    },

    down : {
        display : function() {
            arrowDown = createSprite(400, 700);
            arrowDownImg.resize(50, 50);
            arrowDown.addImage(arrowDownImg);
        }
    }
}

function createArrows() { //adjust function to show only revlevant arrows
    arrow.left.display();
    arrow.right.display();
    arrow.up.display();
    arrow.down.display();
    drawSprites();
} // also must make arrows clickable and have the changeRooms function onClick

rooms = {
    car : {
        index : 0,
        display : function() {
            background(carImg);
        }
    },

    // end room, several rooms (10? maybe 12) with puzzles accross them- usually one main puzzle room with 3-4 element room and a 1-3-1-3-1 room formation
}

class player {

    constructor(playerInv, playerLoc) { 
        this.playerInv = playerInv;
        this.playerLoc = playerLoc;

    }
}
    

function changeRooms (target) {
    let currentLoc = player.playerLoc
    //change background and sprites through functions in room class with target input
}
