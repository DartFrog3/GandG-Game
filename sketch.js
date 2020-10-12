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
let roomIndex = [];


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

    /*arrowLeft = createSprite(75, 325);
    arrowLeftImg.resize(50, 50);
    arrowLeft.addImage(arrowLeftImg);
    arrowLeft.onMousePressed = changeRooms(-0.5);

    arrowRight = createSprite(725, 325);
    arrowRightImg.resize(50, 50);
    arrowRight.addImage(arrowRightImg);
    arrowRight.onMousePressed = changeRooms(0.5);

    arrowUp = createSprite(400, 65);
    arrowUpImg.resize(50, 50);
    arrowUp.addImage(arrowUpImg);
    arrowUp.onMousePressed = changeRooms(1);

    arrowDown = createSprite(400, 700);
    arrowDownImg.resize(50, 50);
    arrowDown.addImage(arrowDownImg);
    arrowDown.onMousePressed = changeRooms(-1);*/

}

/*arrow = { // 5
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
}*/

function draw() {
    createArrows(); // 1
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
            textSize(50);
            text('This is a placeholder for a much cooler looking intro. Your goal is to escape! Traverse the map and find the secret entrance to the hideout to win!')
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
        index : 4,
        player : false,
        description : '',
        dir : ['right', 'left'],
        display : function() {
            background(walkwayImg);
        }
    },

    art : {
        index : 5,
        player : false,
        description : '',
        dir : ['left'],
        display : function() {
            background(artImg);
        }
    },

    bedroom : {
        index : 6,
        player : false,
        description : '',
        dir : ['up', 'right'],
        display : function() {
            background(bedroomImg);
        }
    },

    catacombs : {
        index : 7,
        player : false,
        description : '',
        dir : ['up', 'down'],
        display : function() {
            background(catacombsImg);
        }
    },

    gym : {
        index : 8,
        player : false,
        description : '',
        dir : ['down', 'left'],
        display : function() {
            background(gymImg);
        }
    },

    computer : { // final puzzle room?
        index : 9,
        player : false,
        description : '',
        dir : ['up', 'right'],
        display : function() {
            background(computerImg);
        }
    },

    secret : {
        index : 10,
        player : false,
        description : '',
        dir : ['up', 'down'],
        display : function() {
            background(secretImg);
        }
    },

    end : {
        index : 11,
        player : false,
        description : '',
        dir : [],
        display : function() {
            background(endImg);
            textSize(50);
            text('Congratulations', 275, 400);
        }
    }

    // end room, several rooms (10? maybe 12) with puzzles accross them- usually one main puzzle room with 3-4 element room and a 1-3-1-3-1 room formation
}   

function createArrows() { 
    for (let i in rooms) {
        if (rooms[i]['player'] === true) { // 2
            rooms[i]['display'](); // 3
            for (let k in rooms[i]['dir']) { // 4
                if (rooms[i]['dir'][k] == 'up') {
                    roomIndex[0] = 1;
                    createButton('Up').position(400, 65).mousePressed(changeRooms);
                } else if (rooms[i]['dir'][k] === 'down') {
                    //roomIndex[0] = -1;
                    roomIndex[0] = -1;
                    createButton('Down').position(400, 700).mousePressed(changeRooms);
                } else if (rooms[i]['dir'][k] == 'right') {
                    //roomIndex[0] = 0.5;
                    roomIndex[0] = 1;
                    createButton('Right').position(725, 325).mousePressed(changeRooms);
                } else if (rooms[i]['dir'][k] == 'left') {
                    //roomIndex[0] = -0.5;
                    roomIndex[0] = 1;
                    createButton('Left').position(75, 325).mousePressed(changeRooms);
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

function playerLoc() { // 6
    for (let i in rooms) {
        if (rooms[i]['player'] == true) {
            place = rooms[i]['index'];
            console.log(roomIndex[0]);
            newIndex = place + roomIndex[0];
            return newIndex; 
        }
    }
}

function changeRooms () { // 7
    let newIndex = playerLoc();
    for (let i in rooms) {
        if (rooms[i]['index'] == newIndex) {
            rooms[i]['player'] = true;
            console.log(newIndex);
        } else {
            rooms[i]['player'] = false;
        }
    }
}

function changeRoomz () {
    
}
