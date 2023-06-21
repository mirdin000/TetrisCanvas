let tetris = document.createElement('div');

let canvas2 = document.getElementById("canvas2");
let ctx2 = canvas2.getContext('2d');

ctx2.fillStyle = 'yellow';
ctx2.font = "italic 18pt Arial";

let canvas3 = document.getElementById("canvas3");
let ctx3 = canvas3.getContext('2d');

ctx3.fillStyle = 'yellow';
ctx3.font = "italic 30pt Arial";
ctx3.fillText('Фигура', 83, 40);


tetris.classList.add('tetris');

for (let i=1; i<181; i++){
    let excel = document.createElement('div');
    excel.classList.add('excel');
    tetris.appendChild(excel);
}

let main = document.getElementsByClassName('main')[0];
main.appendChild(tetris);

let excel = document.getElementsByClassName('excel');
let i = 0;

for (let y=18; y>0; y--){
    for (let x=1; x<11; x++){
        excel[i].setAttribute('posX', x);
        excel[i].setAttribute('posY', y);
        i++;
    }
}

let x = 5, y = 15;
let mainArr = [
    [
        [0, 1],//palka
        [0, 2],
        [0, 3],

        [
            [-1, 1],
            [0, 0],
            [1, -1],
            [2, -2]
        ],

        [
            [1, -1],
            [0, 0],
            [-1, 1],
            [-2, 2]
        ],

        [
            [-1, 1],
            [0, 0],
            [1, -1],
            [2, -2]
        ],

        [
            [1, -1],
            [0, 0],
            [-1, 1],
            [-2, 2]
        ]
    ],
    [
        [1, 0],//kvadrat
        [0, 1],
        [1, 1],

        [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],

        [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],

        [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],

        [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ]
    ],
    [
        [0, 1],//Q
        [1, 1],//Q Q
        [0, 2],//Q

        [
            [0, 1],//
            [1, 0],//Q Q Q
            [0, -1],// Q
            [2, -1]
        ],

        [
            [1, 1],//  Q
            [0, 0],//Q Q
            [-1, 1],// Q
            [-1, -1]
        ],

        [
            [1, -2],//  
            [0, -1],// Q
            [1, 0],//Q Q Q
            [-1, 0]
        ],

        [
            [-2, 0],//Q
            [-1, 1],//Q Q
            [0, 0],// Q
            [0, 2]
        ]
    ],
    [
        [1, 0],//Q
        [0, 1],//Q
        [0, 2],//Q Q

        [
            [0, 0],
            [-1, 1],
            [1, 0],
            [2, -1]
        ],

        [
            [1, -1],
            [1, -1],
            [-1, 0],
            [-1, 0]
        ],

        [
            [-1, 0],
            [0, -1],
            [2, -2],
            [1, -1]
        ],

        [
            [0, -1],
            [0, -1],
            [-2, 0],
            [-2, 0]
        ]
    ],
    [
        [1, 0],//  Q
        [1, 1],//  Q
        [1, 2],//Q Q

        [
            [0, 1],//
            [-1, 0],//Q
            [0, -1],//Q Q Q
            [1, -2]
        ],

        [
            [1, 1],// Q Q
            [0, 2],// Q
            [-1, 1],//Q
            [-2, 0]
        ],

        [
            [1, -2],//
            [2, -1],//Q Q Q
            [1, 0],//     Q
            [0, 1]
        ],

        [
            [-2, 0],//   Q
            [-1, -1],//  Q
            [0, 0],//  Q Q
            [1, 1]
        ]
    ],
    [
        [1, 0],// 
        [1, 1],//  Q Q
        [2, 1],//Q Q

        [
            [0, 2],// Q
            [-1, 1],//Q Q
            [0, 0],//   Q
            [-1, -1]
        ],

        [
            [2, -1],//   
            [1, 0],//   Q Q
            [0, -1],//Q Q
            [-1, 0]
        ],

        [
            [-1, -1],//Q
            [0, 0],//  Q Q
            [-1, 1],//   Q
            [0, 2]
        ],

        [
            [-1, 0],//   
            [0, -1],//   Q Q
            [1, 0],//  Q Q
            [2, -1]
        ]
    ],
    [
        [0, 1],//  Q
        [1, 1],//Q Q
        [1, 2],// Q

        [
            [0, 1],//
            [1, 0],// Q Q
            [0, -1],//  Q Q
            [1, -2]
        ],

        [
            [1, 1],//   Q
            [0, 0],// Q Q
            [-1, 1],//Q
            [-2, 0]
        ],

        [
            [1, -2],//
            [0, -1],// Q Q
            [1, 0],//    Q Q
            [0, 1]
        ],

        [
            [-2, 0],//  Q
            [-1, 1],//Q Q
            [0, 0],// Q
            [1, 1]
        ]
    ]
];

let currentFigure = 0;
let figureBody = 0;
let rotate = 1;

function create(){
    function getRandom(){
        return Math.round(Math.random()*(mainArr.length-1));
    }
    
    rotate = 1;
    currentFigure = getRandom();

 figureBody = [
    document.querySelector(`[posX = "${x}"][posY = "${y}"]`),
    document.querySelector(`[posX = "${+x + mainArr[currentFigure][0][0]}"][posY = "${+y + mainArr[currentFigure][0][1]}"]`),
    document.querySelector(`[posX = "${+x + mainArr[currentFigure][1][0]}"][posY = "${+y + mainArr[currentFigure][1][1]}"]`),
    document.querySelector(`[posX = "${+x + mainArr[currentFigure][2][0]}"][posY = "${+y + mainArr[currentFigure][2][1]}"]`),
 ];

 for (let i = 0; i<figureBody.length; i++){
    figureBody[i].classList.add('figure');
 }
}

let score = 0;
let countRow = 0;
let speed = 0;

ctx2.fillText(`Набранные очки: ${score}`, 20, 40);
ctx2.fillText(`Количество рядов: ${countRow}`, 20, 80);
ctx2.fillText(`Скорость: ${speed}`, 20, 120);

function move(){
    ctx3.clearRect(0, 60, 320, 320);
    ctx3.lineWidth = 1;
    ctx3.strokeStyle = 'black';

    let moveFlag = true;
    let coordinates = [
        [figureBody[0].getAttribute('posX'), figureBody[0].getAttribute('posY')],
        [figureBody[1].getAttribute('posX'), figureBody[1].getAttribute('posY')],
        [figureBody[2].getAttribute('posX'), figureBody[2].getAttribute('posY')],
        [figureBody[3].getAttribute('posX'), figureBody[3].getAttribute('posY')],
    ];

    ctx3.strokeRect(90, 220, 50, 50);
    ctx3.fillRect(90, 220, 50, 50);
    ctx3.fillRect(mainArr[currentFigure][0][0]*52 + 90, -mainArr[currentFigure][0][1]*52 + 220, 50, 50);
    ctx3.strokeRect(mainArr[currentFigure][0][0]*52 + 90, -mainArr[currentFigure][0][1]*52 + 220, 50, 50);
    ctx3.fillRect(mainArr[currentFigure][1][0]*52 + 90, -mainArr[currentFigure][1][1]*52 + 220, 50, 50);
    ctx3.strokeRect(mainArr[currentFigure][1][0]*52 + 90, -mainArr[currentFigure][1][1]*52 + 220, 50, 50);
    ctx3.fillRect(mainArr[currentFigure][2][0]*52 + 90, -mainArr[currentFigure][2][1]*52 + 220, 50, 50);
    ctx3.strokeRect(mainArr[currentFigure][2][0]*52 + 90, -mainArr[currentFigure][2][1]*52 + 220, 50, 50);
    

    for (let i = 0; i<coordinates.length; i++){
        if (coordinates[i][1] == 1 || document.querySelector(`[posX = "${coordinates[i][0]}"][posY = "${coordinates[i][1] - 1}"]`).classList.contains('set')){
            moveFlag = false;
            break;
        }
    }

    if(moveFlag){
        for (let i = 0; i < figureBody.length; i++){
            figureBody[i].classList.remove('figure');
        }
        figureBody = [
            document.querySelector(`[posX = "${coordinates[0][0]}"][posY = "${coordinates[0][1] - 1}"]`),
            document.querySelector(`[posX = "${coordinates[1][0]}"][posY = "${coordinates[1][1] - 1}"]`),
            document.querySelector(`[posX = "${coordinates[2][0]}"][posY = "${coordinates[2][1] - 1}"]`),
            document.querySelector(`[posX = "${coordinates[3][0]}"][posY = "${coordinates[3][1] - 1}"]`),
        ];
        for (let i = 0; i < figureBody.length; i++){
            figureBody[i].classList.add('figure');
        }
    } else {
        for (let i = 0; i < figureBody.length; i++){
            figureBody[i].classList.remove('figure');
            figureBody[i].classList.add('set');
        }
        for (let i=1; i<15; i++){
            let count = 0;
            for(let k=1; k<11; k++){
                if(document.querySelector(`[posX = "${k}"][posY = "${i}"]`).classList.contains('set')){
                    count++;
                    if(count == 10){
                        score += 10;
                        countRow++;
                        if(score % 20 == 0){
                            speed++;
                            clearInterval(interval);
                            interval = setInterval(() => {
                              move();
                            }, 300-(speed*0.001));
                        }
                        
                        ctx2.clearRect(0, 0, 320, 210);
                        ctx2.fillText(`Набранные очки: ${score}`, 20, 40);
                        ctx2.fillText(`Количество рядов: ${countRow}`, 20, 80);
                        ctx2.fillText(`Скорость: ${speed}`, 20, 120);

                        for(let m=1; m<11; m++){
                            document.querySelector(`[posX = "${m}"][posY = "${i}"]`).classList.remove('set');
                        }
                        let set = document.querySelectorAll('.set');
                        let newSet = [];
                        for(let s=0; s<set.length; s++){
                            let setCoordinates = [set[s].getAttribute('posX'), set[s].getAttribute('posY')];
                            if(setCoordinates[1] > i){
                                set[s].classList.remove('set');
                                newSet.push(document.querySelector(`[posX = "${setCoordinates[0]}"][posY = "${setCoordinates[1] - 1}"]`));
                            }
                        }
                        for(let a=0; a<newSet.length; a++){
                            newSet[a].classList.add('set');
                        }
                        i--;
                    }
                }
            }
        }
        for(let n=1; n<11; n++){
            if(document.querySelector(`[posX = "${n}"][posY = "15"]`).classList.contains('set')){
                clearInterval(interval);
                alert('Ты сломал игру!!!');
                break;
            }
        }
        create();
    }
}

let interval = setInterval(() => {
    move();
}, 300);

let flag = true;

window.addEventListener('keydown', function (e){
    let coordinates1 = [figureBody[0].getAttribute('posX'), figureBody[0].getAttribute('posY')];
    let coordinates2 = [figureBody[1].getAttribute('posX'), figureBody[1].getAttribute('posY')];
    let coordinates3 = [figureBody[2].getAttribute('posX'), figureBody[2].getAttribute('posY')];
    let coordinates4 = [figureBody[3].getAttribute('posX'), figureBody[3].getAttribute('posY')];

    function getNewState(a){

        flag = true;

        let figureNew = [
            document.querySelector(`[posX = "${+coordinates1[0] + a}"][posY = "${coordinates1[1]}"]`),
            document.querySelector(`[posX = "${+coordinates2[0] + a}"][posY = "${coordinates2[1]}"]`),
            document.querySelector(`[posX = "${+coordinates3[0] + a}"][posY = "${coordinates3[1]}"]`),
            document.querySelector(`[posX = "${+coordinates4[0] + a}"][posY = "${coordinates4[1]}"]`),
        ];
        for (let i = 0; i<figureNew.length; i++){
            if(!figureNew[i] || figureNew[i].classList.contains('set')){
                flag = false;
            }
        }

        if (flag == true){
            for (let i = 0; i < figureBody.length; i++){
                figureBody[i].classList.remove('figure');
            }

            figureBody = figureNew;

            for (let i = 0; i < figureBody.length; i++){
                figureBody[i].classList.add('figure');
            }
        }
    }

    if (e.keyCode == 37){
        getNewState(-1);
    } else if (e.keyCode == 39){
        getNewState(1);
    } else if (e.keyCode == 40){
        move();
    } else if (e.keyCode == 38){
        flag = true;

        let figureNew = [
            document.querySelector(`[posX = "${+coordinates1[0] + mainArr[currentFigure][rotate + 2][0][0]}"][posY = "${+coordinates1[1] + mainArr[currentFigure][rotate + 2][0][1]}"]`),
            document.querySelector(`[posX = "${+coordinates2[0] + mainArr[currentFigure][rotate + 2][1][0]}"][posY = "${+coordinates2[1] + mainArr[currentFigure][rotate + 2][1][1]}"]`),
            document.querySelector(`[posX = "${+coordinates3[0] + mainArr[currentFigure][rotate + 2][2][0]}"][posY = "${+coordinates3[1] + mainArr[currentFigure][rotate + 2][2][1]}"]`),
            document.querySelector(`[posX = "${+coordinates4[0] + mainArr[currentFigure][rotate + 2][3][0]}"][posY = "${+coordinates4[1] + mainArr[currentFigure][rotate + 2][3][1]}"]`),
        ];
        for (let i = 0; i<figureNew.length; i++){
            if(!figureNew[i] || figureNew[i].classList.contains('set')){
                flag = false;
            }
        }

        if (flag == true){
            for (let i = 0; i < figureBody.length; i++){
                figureBody[i].classList.remove('figure');
            }

            figureBody = figureNew;

            for (let i = 0; i < figureBody.length; i++){
                figureBody[i].classList.add('figure');
            }

            if (rotate < 4){
                rotate++;
            } else {
                rotate = 1;
            }
        }
    }
})


create();

