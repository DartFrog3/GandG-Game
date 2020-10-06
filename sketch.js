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
let artImg;
let hallwayImg;
let catacombsImg;
let stairsImg;
let bedroomImg;
let computerImg;
let gymImg;
let livingImg;
let walkwayImg;
let secretImg;
let endImg;
let rooms;


function preload() {
    arrowLeftImg = loadImage('sprites/arrowLeft.png');
    arrowRightImg = loadImage('sprites/arrowRight.png');
    arrowUpImg = loadImage('sprites/arrowUp.png');
    arrowDownImg = loadImage('sprites/arrowDown.png');
    carImg = loadImage('assets/car.jpg');
    artImg = loadImage('assets/art.jpg');
    hallwayImg = loadImage('assets/hallway.jpg');
    catacombsImg = loadImage('assets/catacombs.jpg');
    stairsImg = loadImage('assets/stairs.jpg');
    bedroomImg = loadImage('assets/bedroom.jpg');
    gymImg = loadImage('assets/gym.jpg');
    computerImg = loadImage('assets/computer.jpg');
    livingImg = loadImage('assets/living.jpg');
    walkwayImg = loadImage('assets/walkway.jpg');
    secretImg = loadImage('assets/secret.jpg');
    endImg = loadImage('assets/end.jpg');

}

function setup() {
    createCanvas(800, 800);
    rooms.car.display();
}

function draw() {
    
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
            arrowUp.onMousePressed = function() {
                rooms.hallway.display(); // must be edited
            }
        }
    },

    down : {
        display : function() {
            arrowDown = createSprite(400, 700);
            arrowDownImg.resize(50, 50);
            arrowDown.addImage(arrowDownImg);
            arrowDown.onMousePressed = function() {
                rooms.car.display(); // must be edited
            }
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
        description : '',
        dir : ['up'],
        display : function() {
            background(carImg);
        }
    },

    hallway : {
        index : 1,
        description : '',
        dir : ['up', 'down'],
        display : function() {
            background(hallwayImg);
        }
    },

    stairs : {
        index : 2,
        description : '',
        dir : ['up', 'down'],
        display : function() {
            background(stairsImg);
        }
    },

    living : {
        index : 3,
        description : '',
        dir : ['down', 'right', 'left'],
        display : function() {
            background(livingImg);
        }
    },

    walkway : {
        index : 4,
        description : '',
        dir : ['right', 'left'],
        display : function() {
            background(walkwayImg);
        }
    },

    art : {
        index : 5,
        description : '',
        dir : ['left'],
        display : function() {
            background(artImg);
        }
    },

    bedroom : {
        index : 6,
        description : '',
        dir : ['up', 'right'],
        display : function() {
            background(bedroomImg);
        }
    },

    catacombs : {
        index : 7,
        description : '',
        dir : ['up', 'down'],
        display : function() {
            background(catacombsImg);
        }
    },

    gym : {
        index : 8,
        description : '',
        dir : ['down', 'left'],
        display : function() {
            background(gymImg);
        }
    },

    computer : { // final puzzle room?
        index : 9,
        description : '',
        dir : ['up', 'right'],
        display : function() {
            background(computerImg);
        }
    },

    secret : {
        index : 10,
        description : '',
        dir : ['up', 'down'],
        display : function() {
            background(secretImg);
        }
    },

    end : {
        index : 11,
        description : '',
        dir : [],
        display : function() {
            background(endImg);
        }
    }

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
