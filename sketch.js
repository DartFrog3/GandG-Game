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
let place;
let newIndex;


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
            arrowLeft.onMousePressed = function() {
                // index -0.5
                changeRooms(-0.5);
            }
        }
    },

    right : {
        display : function() {
            arrowRight = createSprite(725, 325);
            arrowRightImg.resize(50, 50);
            arrowRight.addImage(arrowRightImg);
            arrowRight.onMousePressed = function() {
                // index +0.5
                changeRooms(0.5);
            }
        }
    },

    up : {
        display : function() {
            arrowUp = createSprite(400, 65);
            arrowUpImg.resize(50, 50);
            arrowUp.addImage(arrowUpImg);
            arrowUp.onMousePressed = function() {
                // index +1
                changeRooms(1);
            }
        }
    },

    down : {
        display : function() {
            arrowDown = createSprite(400, 700);
            arrowDownImg.resize(50, 50);
            arrowDown.addImage(arrowDownImg);
            arrowDown.onMousePressed = function() {
                // index -1
                changeRooms(-1);
            }
        }
    }
}

function createArrows() { //adjust function to show only revlevant arrows
    for (let i in rooms) {
        console.log(rooms[i]['dir'] + 'one');
        if (rooms[i]['player'] == true) {
            for (let k in rooms[i]['dir']) {
                console.log(k + 'two');
                if (rooms[i]['dir'][k] == 'up') {
                    arrow.up.display();
                } else if (rooms[i]['dir'][k] == 'down') {
                    arrow.down.display();
                } else if (rooms[i]['dir'][k] == 'right') {
                    arrow.right.display();
                } else if (rooms[i]['dir'][k] == 'left') {
                    arrow.left.display();
                }
            }
        }
    }
    drawSprites();
}

rooms = {
    car : {
        index : 0,
        player : true,
        description : '',
        dir : ['up'],
        display : function() {
            background(carImg);
        }
    },

    hallway : {
        index : 1,
        player : false,
        description : '',
        dir : ['up', 'down'],
        display : function() {
            background(hallwayImg);
        }
    },

    stairs : {
        index : 2,
        player : false,
        description : '',
        dir : ['up', 'down'],
        display : function() {
            background(stairsImg);
        }
    },

    living : {
        index : 3,
        player : false,
        description : '',
        dir : ['down', 'right', 'left'],
        display : function() {
            background(livingImg);
        }
    },

    walkway : {
        index : 3.5,
        player : false,
        description : '',
        dir : ['right', 'left'],
        display : function() {
            background(walkwayImg);
        }
    },

    art : {
        index : 4,
        player : false,
        description : '',
        dir : ['left'],
        display : function() {
            background(artImg);
        }
    },

    bedroom : {
        index : 2.5,
        player : false,
        description : '',
        dir : ['up', 'right'],
        display : function() {
            background(bedroomImg);
        }
    },

    catacombs : {
        index : 5,
        player : false,
        description : '',
        dir : ['up', 'down'],
        display : function() {
            background(catacombsImg);
        }
    },

    gym : {
        index : 6,
        player : false,
        description : '',
        dir : ['down', 'left'],
        display : function() {
            background(gymImg);
        }
    },

    computer : { // final puzzle room?
        index : 5.5,
        player : false,
        description : '',
        dir : ['up', 'right'],
        display : function() {
            background(computerImg);
        }
    },

    secret : {
        index : 6.5,
        player : false,
        description : '',
        dir : ['up', 'down'],
        display : function() {
            background(secretImg);
        }
    },

    end : {
        index : 7.5,
        player : false,
        description : '',
        dir : [],
        display : function() {
            background(endImg);
        }
    }

    // end room, several rooms (10? maybe 12) with puzzles accross them- usually one main puzzle room with 3-4 element room and a 1-3-1-3-1 room formation
}   

function playerLoc(num) {
    for (let i in rooms) {
        if (rooms[i]['player'] == true) {
            place = rooms[i]['index'];
            newIndex = place + num;
            rooms[i]['player'] = false;
            return newIndex; // scope not working but process works correctly- simply fix var scope
        }
    }
}

function changeRooms (it) {
    playerLoc(it);
    for (let i in rooms) {
        if (rooms[i]['index'] == newIndex) {
            rooms[i]['player'] == true;
            rooms[i]['display'];
        }
    }
    //change background and sprites through functions in room class with target input
}
