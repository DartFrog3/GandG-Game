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
let scrollImg;
let scroll;


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
    scrollImg = loadImage('sprites/scroll.png');

}

function setup() { // bug of no arrows at first
    createCanvas(800, 800);
    //rooms.car.display();

    arrowLeft = createSprite(75, 325);
    arrowLeftImg.resize(50, 50);
    arrowLeft.addImage(arrowLeftImg);

    arrowRight = createSprite(725, 325);
    arrowRightImg.resize(50, 50);
    arrowRight.addImage(arrowRightImg);
    
    arrowUp = createSprite(400, 65);
    arrowUpImg.resize(50, 50);
    arrowUp.addImage(arrowUpImg); 

    arrowDown = createSprite(400, 700);
    arrowDownImg.resize(50, 50);
    arrowDown.addImage(arrowDownImg); 

    arrowUp.onMousePressed = function() {
        changeRooms(1);
    }
    
    arrowDown.onMousePressed = function() {
        changeRooms(-1);
    }
    
    arrowRight.onMousePressed = function() {
        changeRooms(0.5);
    }
    
    arrowLeft.onMousePressed = function() {
        changeRooms(-0.5);
    }

}

function draw() {
     // 1
}

rooms = {
    car : {
        index : 0,
        player : true,
        description : '',
        dir : ['up'],
        display : function() {
            background(carImg);
            createScroll('Your goal is to escape! Traverse the map and find the secret entrance to the hideout to win!');
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
        dir : ['down', 'up', 'left'],
        display : function() {
            background(livingImg);
        }
    },

    walkway : {
        index : 4,
        player : false,
        description : '',
        dir : ['down'],
        display : function() {
            background(walkwayImg);
        }
    },

    art : {
        index : 8,
        player : false,
        description : '',
        dir : [],
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
        index : 3.5,
        player : false,
        description : '',
        dir : ['up', 'down'],
        display : function() {
            background(catacombsImg);
        }
    },

    gym : {
        index : 4.5,
        player : false,
        description : '',
        dir : ['down', 'right'],
        display : function() {
            background(gymImg);
        }
    },

    computer : { // final puzzle room?
        index : 5,
        player : false,
        description : '',
        dir : ['up', 'left'],
        display : function() {
            background(computerImg);
        }
    },

    secret : {
        index : 6,
        player : false,
        description : '',
        dir : ['up', 'down'],
        display : function() {
            background(secretImg);
        }
    },

    end : {
        index : 7,
        player : false,
        description : '',
        dir : [],
        display : function() {
            background(endImg);
            createScroll('Congratulations! You escaped and found the secret hideout!')
        }
    }

    // end room, several rooms (10? maybe 12) with puzzles accross them- usually one main puzzle room with 3-4 element room and a 1-3-1-3-1 room formation
}   

function createArrows() { 
    arrowUp.visible = false;
    arrowDown.visible = false; // maybe change these visibles to remove? look into docs
    arrowRight.visible = false;
    arrowLeft.visible = false;

    for (let i in rooms) {
        if (rooms[i]['player'] === true) { // 2
            rooms[i]['display'](); // 3
            for (let k in rooms[i]['dir']) { // 4
                if (rooms[i]['dir'][k] == 'up') {
                    arrowUp.visible = true;
                } else if (rooms[i]['dir'][k] === 'down') {
                    arrowDown.visible = true;
                } else if (rooms[i]['dir'][k] == 'right') {
                    arrowRight.visible = true;
                } else if (rooms[i]['dir'][k] == 'left') {
                    arrowLeft.visible = true;
                    
                } else {
                    continue;
                }
            }
            drawSprites();
        } else {
            continue;
        }
    }
}

function playerLoc(it) { // 6
    for (let i in rooms) {
        if (rooms[i]['player'] == true) {
            place = rooms[i]['index'];
            newIndex = place + it;
            return newIndex; 
        }
    }
}

function changeRooms(it) { // 7
    let newIndex = playerLoc(it);
    for (let i in rooms) {
        if (rooms[i]['index'] == newIndex) {
            rooms[i]['player'] = true;
        } else {
            rooms[i]['player'] = false;
        }
    }
    createArrows();
}

function createScroll(message) {
    scroll = createSprite(400, 400);
    scrollImg.resize(600, 600);
    scroll.addImage(scrollImg);
    drawSprite();
    textSize(30);
    text(message, 200, 200, 600, 600); // text going under image need a fix
    scroll.onMousePressed = function() {
        scroll.visible = false;
    }

    

}

function label(message) {
    // blank rect at bottom (50, 600, 750, 750)
    // have puzzles or interactables call
    // maybe keep an empty on perm?
}
