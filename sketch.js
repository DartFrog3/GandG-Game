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
let lockImg;
let lock;
let redKey;
let redKeyImg;
let blackKey;
let blackKeyImg;
let goldKey;
let goldKeyImg;
let keyhole;
let keyholeImg;
let clockImg;
let clock;
let playerInv = [];
let lockbase;
let lockbaseImg;
let scroll2Img;
let scroll2;
let label;
let labelImg;
let label2;
let label2Img;


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
    clockImg = loadImage('sprites/clock.png');
    keyholeImg = loadImage('sprites/keyhole.png');
    redKeyImg = loadImage('sprites/redKey.png');
    blackKeyImg = loadImage('sprites/blackKey.png');
    goldKeyImg = loadImage('sprites/goldKey.png');
    lockImg = loadImage('sprites/lock.png');
    lockbaseImg = loadImage('assets/lockbase.jpg');
    scroll2Img = loadImage('sprites/scroll2.png');
    labelImg = loadImage('sprites/label.png');
    label2Img = loadImage('sprites/label2.png');

}

function setup() { // bug of no arrows at first
    createCanvas(800, 800);
    input = createInput();

    arrowLeft = createSprite(75, 325);
    arrowLeftImg.resize(50, 50);
    arrowLeft.addImage(arrowLeftImg);

    arrowRight = createSprite(725, 325);
    arrowRightImg.resize(50, 50);
    arrowRight.addImage(arrowRightImg);
    
    arrowUp = createSprite(400, 65);
    arrowUpImg.resize(50, 50);
    arrowUp.addImage(arrowUpImg); 

    arrowDown = createSprite(400, 750);
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
            scroll = createSprite(400, 325);
            scrollImg.resize(400, 400);
            scroll.addImage(scrollImg);
            drawSprite(scroll);
            scroll.onMousePressed = function() {
                scroll.visible = false;
            }
            invBar();
        }
    },

    hallway : {
        index : 1,
        player : false,
        description : '',
        dir : ['up', 'down'],
        display : function() {
            background(hallwayImg);
            invBar();
        }
    },

    stairs : {
        index : 2,
        player : false,
        description : '',
        dir : ['up', 'down'],
        display : function() {
            background(stairsImg);
            invBar();
        }
    },

    living : {
        index : 3,
        player : false,
        description : '',
        dir : ['down', 'up', 'left'],
        display : function() {
            background(livingImg);
            invBar();
            clock = createSprite(725, 100);
            clockImg.resize(75, 75);
            clock.addImage(clockImg);
            clock.onMousePressed = function() {
                label = createSprite(450, 600);
                labelImg.resize(800, 400);
                label.addImage(labelImg);
                drawSprite(label);
            }
            drawSprite(clock);
        }
    },

    walkway : {
        index : 4,
        player : false,
        description : '',
        dir : ['down'],
        display : function() {
            background(walkwayImg);
            invBar();
            blackKey = createSprite(75, 650);
            blackKeyImg.resize(30, 30);
            blackKey.addImage(blackKeyImg);
            blackKey.onMousePressed = function() {
                blackKey.visible = false;
                addInv('blackKey');
                playerInv.push('blackKey');
            }
            drawSprite(blackKey);
            
        }
    },

    art : {
        index : 8,
        player : false,
        description : '',
        dir : [],
        display : function() {
            background(artImg);
            invBar();
        }
    },

    bedroom : {
        index : 2.5,
        player : false,
        description : '',
        dir : ['up', 'right'],
        display : function() {
            background(bedroomImg);
            invBar();
        }
    },

    catacombs : {
        index : 3.5,
        player : false,
        description : '',
        dir : ['up', 'down'],
        display : function() {
            background(catacombsImg);
            invBar();
        }
    },

    gym : {
        index : 4.5,
        player : false,
        description : '',
        dir : ['down', 'right'],
        display : function() {
            background(gymImg);
            invBar();
            redKey = createSprite(600, 550);
            redKeyImg.resize(30, 30);
            redKey.addImage(redKeyImg);
            drawSprite(redKey);
            redKey.onMousePressed = function() {
                redKey.visible = false;
                addInv('redKey');
                playerInv.push('redKey');
            }

        }
    },

    computer : {
        index : 5,
        player : false,
        description : '',
        dir : ['up', 'left'],
        display : function() {
            background(computerImg);
            invBar();
            lock = createSprite(600, 475);
            lockImg.resize(30, 30);
            lock.addImage(lockImg);
            lock.onMousePressed = function() {
                background(lockbaseImg);
                input.position(330, 470);
                button = createButton('-');
                button.position(480, 470);
                button.mousePressed(checkCode);
                textAlign(CENTER);
                textSize(50);
            }
            drawSprite(lock);
        }
    },

    secret : {
        index : 6,
        player : false,
        description : '',
        dir : ['down'],
        display : function() {
            background(secretImg);
            invBar();
        
            keyhole = createSprite(400, 400);
            keyhole2 = createSprite(400, 430);
            keyhole3 = createSprite(400, 460);
            keyholeImg.resize(30, 30);
            keyhole.addImage(keyholeImg);
            keyhole2.addImage(keyholeImg);
            keyhole3.addImage(keyholeImg);
            keyhole.onMousePressed = function() {
                if (playerInv.length == 3) {
                    changeRooms(1);
                } else {
                    label2 = createSprite(450, 600);
                    label2Img.resize(800, 400);
                    label2.addImage(label2Img);
                    drawSprite(label2);
                }
            }
            drawSprite(keyhole);
            drawSprite(keyhole2);
            drawSprite(keyhole3);
        }  
    },

    end : {
        index : 7,
        player : false,
        description : '',
        dir : [],
        display : function() {
            background(endImg);
            scroll2 = createSprite(400, 325);
            scroll2Img.resize(400, 400);
            scroll2.addImage(scroll2Img);
            drawSprite(scroll2);
            scroll2.onMousePressed = function() {
                scroll2.visible = false;
            }
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
                    drawSprite(arrowUp);
                } else if (rooms[i]['dir'][k] === 'down') {
                    arrowDown.visible = true;
                    drawSprite(arrowDown);
                } else if (rooms[i]['dir'][k] == 'right') {
                    arrowRight.visible = true;
                    drawSprite(arrowRight);
                } else if (rooms[i]['dir'][k] == 'left') {
                    arrowLeft.visible = true;
                    drawSprite(arrowLeft);
                } else {
                    continue;
                }
            }
        
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

function invBar() {
    for (let k = 0; k < 14; k++) {
        strokeWeight(5);
        noFill();
        rect(50+k*50, 650, 50, 50);
    }

    for (z in playerInv) {
        addInv(playerInv[z]);
    }
}

function addInv(item) {
    if (item == 'blackKey') {
        blackKey = createSprite(75, 675);
        blackKeyImg.resize(50, 50);
        blackKey.addImage(blackKeyImg);
        drawSprite(blackKey);
    } else if (item == 'redKey') {
        redKey = createSprite(125, 675);
        redKeyImg.resize(50, 50);
        redKey.addImage(redKeyImg);
        drawSprite(redKey);
    } else if (item == 'goldKey') {
        goldKey = createSprite(175, 675);
        goldKeyImg.resize(50, 50);
        goldKey.addImage(goldKeyImg);
        drawSprite(goldKey);
    } else {
        console.log('fail');
    }
}

function checkCode() {
    const code = input.value();
    input.position(-100, -100);
    button.position(-100, -100);
    if (int(code) == 155) {
        playerInv.push('goldKey');
        changeRooms(0);
        return true;
    } else {
        changeRooms(0);
        return false;
    }
}
