//let location;

const { thistle } = require("color-name");

let arrowLeft;
let arrowLeftImg;
let arrowRight;
let arrowRightImg;
let arrowUp;
let arrowUpImg;
let arrowDown;
let arrowDownImg;
let dirKey;

function preload() {
    arrowLeftImg = loadImage('sprites/arrowLeft.png');

}

function setup() {
    createCanvas(800, 800);
    background('red');

}

function draw() {
    arrowLeft = createSprite(75, 325);
    arrowLeftImg.resize(50, 50);
    arrowLeft.addImage(arrowLeftImg);
    drawSprite(arrowLeft);

}

class arrow {
    constructor (left, right, up, down, dirKey) {
        this.left = arrowLeft;
        this.right = arrowRight;
        this.up = arrowUp;
        this.down = arrowDown;
        this.dirKey = dirKey;

    }

    drawArrow(dir) {
        //make it create arrow off dir list
    }
}
class rooms {

    constructor(roomsList, car, y, z) { 
        this.roomsList = roomsList;
        this.car = car;
        this.y = y;
        this.z = z;
    }

    roomsList = ["car"];

    createCar() {
        //put in background image
    }


    

}

function changeRooms () {
    //location = new room
    //change background and sprites
}
