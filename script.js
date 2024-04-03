let valArray = ['-5','-3','-3.5','-9','-10','-3.5','-3','-5','-1','-1','-1','-1','-1','-1','-1','-1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','1','1','1','1','1','1','1','5','3','3.5','9','10','3.5','3','5'];
let white = document.querySelectorAll('.white');
let black = document.querySelectorAll('.black');
let square = document.querySelectorAll('#square');
let image = document.querySelectorAll('#piece');
let box = 0;
let tempoBox = 0;
let thirdCounter = 0;
let secondValue = 0;
let thirdValue = 0;
let legalMoves = new Array(150);
let secondLegalMoves = new Array(150);
let thirdLegalMoves = new Array(150);
let allWhiteMoves = new Array(150);
let allBlackMoves = new Array(150);
let whiteCheck = false;
let blackCheck = false;
let noDangerMoves = new Array(150);
let counter = 0;
let counter2 = 0;
let boxStorer = 0;
let count = 0 ;
let color = 0; 
let secondBox = 0;
let tempoVal = 0;
let lastBox = 0;
let blackOrWhite = 0;
let legalMoveMade = false;
let whiteKingMove = false;
let blackKingMove = false;
let leftWhiteRook = false;
let rightWhiteRook = false;
let leftBlackRook = false;
let rightBlackRook = false;
let moveSound = document.getElementById("moveSound");
let captureSound = document.getElementById("captureSound");
let castleSound = document.getElementById("castleSound");
let checkSound = document.getElementById("checkSound");

for(let i = 0; i < 64; i++){
    if(valArray[i] == -5)
    image[i].src = "Images/br.png";
    if(valArray[i] == -3)
    image[i].src = "Images/bn.png";
    if(valArray[i] == -3.5)
    image[i].src = "Images/bb.png";
    if(valArray[i] == -9)
    image[i].src = "Images/bq.png";
    if(valArray[i] == -10)
    image[i].src = "Images/bk.png";
    if(valArray[i] == -1)
    image[i].src = "Images/bp.png";
    if(valArray[i] == 5)
    image[i].src = "Images/wr.png";
    if(valArray[i] == 3.5)
    image[i].src = "Images/wb.png";
    if(valArray[i] == 3)
    image[i].src = "Images/wn.png";
    if(valArray[i] == 9)
    image[i].src = "Images/wq.png";
    if(valArray[i] == 10)
    image[i].src = "Images/wk.png";
    if(valArray[i] == 1)
    image[i].src = "Images/wp.png";
    if(valArray[i] == 0)
    image[i].src = "Images/transparent.png";
}
function bishop(){
    if(valArray[box] == 3.5){
        for(let x = 0; x < 4; x++){
            tempoBox = box;
            if(x == 0){
                while(tempoBox > 8 && tempoBox % 8 != 0){
                    tempoBox = tempoBox - 9;
                    if(valArray[tempoBox] == 0)
                    legalMoves[counter++] = tempoBox;
                    if(valArray[tempoBox] < 0){
                        legalMoves[counter++] = tempoBox;
                        break;
                    }
                    if(valArray[tempoBox] > 0)
                    break;
                }
            }
            if(x == 1){
                while(tempoBox >= 8 && tempoBox % 8 != 7){
                    tempoBox = tempoBox - 7;
                    if(valArray[tempoBox] == 0)
                    legalMoves[counter++] = tempoBox;
                    if(valArray[tempoBox] < 0){
                        legalMoves[counter++] = tempoBox;
                        break;
                    }
                    if(valArray[tempoBox] > 0)
                    break;
                }
            }
            if(x == 2){
                while(tempoBox >= 0 && tempoBox < 55 && tempoBox % 8 != 7){
                    tempoBox = tempoBox + 9;
                    if(valArray[tempoBox] == 0)
                    legalMoves[counter++] = tempoBox;
                    if(valArray[tempoBox] < 0){
                        legalMoves[counter++] = tempoBox;
                        break;
                    }
                    if(valArray[tempoBox] > 0)
                    break;
                }
            }
            if(x == 3){
                while(tempoBox <= 55 && tempoBox % 8 != 0){
                    tempoBox = tempoBox + 7;
                    if(valArray[tempoBox] == 0)
                    legalMoves[counter++] = tempoBox;
                    if(valArray[tempoBox] < 0){
                        legalMoves[counter++] = tempoBox;
                        break;
                    }
                    if(valArray[tempoBox] > 0)
                    break;
                }
            }
        }
    }
    if(valArray[box] == -3.5){
        for(let x = 0; x < 4; x++){
            tempoBox = box;
            if(x == 0){
                while(tempoBox > 8 && tempoBox % 8 != 0){
                    tempoBox = tempoBox - 9;
                    if(valArray[tempoBox] == 0)
                    legalMoves[counter++] = tempoBox;
                    if(valArray[tempoBox] > 0){
                        legalMoves[counter++] = tempoBox;
                        break;
                    }
                    if(valArray[tempoBox] < 0)
                    break;
                }
            }
            if(x == 1){
                while(tempoBox >= 8 && tempoBox % 8 != 7){
                    tempoBox = tempoBox - 7;
                    if(valArray[tempoBox] == 0)
                    legalMoves[counter++] = tempoBox;
                    if(valArray[tempoBox] > 0){
                        legalMoves[counter++] = tempoBox;
                        break;
                    }
                    if(valArray[tempoBox] < 0)
                    break;
                }
            }
            if(x == 2){
                while(tempoBox >= 0 && tempoBox < 55 && tempoBox % 8 != 7){
                    tempoBox = tempoBox + 9;
                    if(valArray[tempoBox] == 0)
                    legalMoves[counter++] = tempoBox;
                    if(valArray[tempoBox] > 0){
                        legalMoves[counter++] = tempoBox;
                        break;
                    }
                    if(valArray[tempoBox] < 0)
                    break;
                }
            }
            if(x == 3){
                while(tempoBox <= 55 && tempoBox % 8 != 0){
                    tempoBox = tempoBox + 7;
                    if(valArray[tempoBox] == 0)
                    legalMoves[counter++] = tempoBox;
                    if(valArray[tempoBox] > 0){
                        legalMoves[counter++] = tempoBox;
                        break;
                    }
                    if(valArray[tempoBox] < 0)
                    break;
                }
            }
        }
    }
}
function knight(){
    if(valArray[box] == 3){
        if(valArray[box - 10] <= 0 && box > 8 && (box % 8 > 1))
        legalMoves[counter++] = box - 10;
        if(valArray[box - 17] <= 0 && box > 15 && (box % 8 > 0))
        legalMoves[counter++] = box - 17;
        if(valArray[box - 15] <= 0 && box > 15 && (box % 8 < 7))
        legalMoves[counter++] = box - 15;
        if(valArray[box - 6] <= 0 && box > 8 && (box % 8 < 6))
        legalMoves[counter++] = box - 6;
        if(valArray[box + 6] <= 0 && box < 56 && (box % 8 > 1))
        legalMoves[counter++] = box + 6;
        if(valArray[box + 15] <= 0 && box < 48 && (box % 8 > 0))
        legalMoves[counter++] = box + 15;
        if(valArray[box + 17] <= 0 && box < 48 && (box % 8 < 7))
        legalMoves[counter++] = box + 17;
        if(valArray[box + 10] <= 0 && box < 56 && (box % 8 < 6))
        legalMoves[counter++] = box + 10;
    }
    if(valArray[box] == -3){
        if(valArray[box - 10] >= 0 && box > 8 && (box % 8 > 1))
        legalMoves[counter++] = box - 10;
        if(valArray[box - 17] >= 0 && box > 15 && (box % 8 > 0))
        legalMoves[counter++] = box - 17;
        if(valArray[box - 15] >= 0 && box > 15 && (box % 8 < 7))
        legalMoves[counter++] = box - 15;
        if(valArray[box - 6] >= 0 && box > 8 && (box % 8 < 6))
        legalMoves[counter++] = box - 6;
        if(valArray[box + 6] >= 0 && box < 56 && (box % 8 > 1))
        legalMoves[counter++] = box + 6;
        if(valArray[box + 15] >= 0 && box < 48 && (box % 8 > 0))
        legalMoves[counter++] = box + 15;
        if(valArray[box + 17] >= 0 && box < 48 && (box % 8 < 7))
        legalMoves[counter++] = box + 17;
        if(valArray[box + 10] >= 0 && box < 56 && (box % 8 < 6))
        legalMoves[counter++] = box + 10;
    }
}
function rook(){
    if(valArray[box] == 5){
        for(let x = 0; x < 4; x++){
            tempoBox = box;
            if(x == 0){
                while(tempoBox > 0){
                    tempoBox = tempoBox - 8;
                    if(valArray[tempoBox] == 0)
                    legalMoves[counter++] = tempoBox;
                    if(valArray[tempoBox] < 0){
                        legalMoves[counter++] = tempoBox;
                        break;
                    }
                    if(valArray[tempoBox] > 0)
                    break;
                }
            }
            if(x == 1){
                while(tempoBox < 63){
                    tempoBox = tempoBox + 8;
                    if(valArray[tempoBox] == 0)
                    legalMoves[counter++] = tempoBox;
                    if(valArray[tempoBox] < 0){
                        legalMoves[counter++] = tempoBox;
                        break;
                    }
                    if(valArray[tempoBox] > 0)
                    break;
                }
            }
            if(x == 2){
                while(tempoBox % 8 != 7){
                    tempoBox = tempoBox + 1;
                    if(valArray[tempoBox] == 0)
                    legalMoves[counter++] = tempoBox;
                    if(valArray[tempoBox] < 0){
                        legalMoves[counter++] = tempoBox;
                        break;
                    }
                    if(valArray[tempoBox] > 0)
                    break;
                }
            }
        if(x == 3){
            while(tempoBox % 8 != 0){
                tempoBox = tempoBox - 1;
                if(valArray[tempoBox] == 0)
                legalMoves[counter++] = tempoBox;
                if(valArray[tempoBox] < 0){
                    legalMoves[counter++] = tempoBox;
                    break;
                }
                if(valArray[tempoBox] > 0)
                break;
            }
        }
    }
    }
    if(valArray[box] == -5){
        for(let x = 0; x < 4; x++){
            tempoBox = box;
            if(x == 0){
                while(tempoBox > 0){
                    tempoBox = tempoBox - 8;
                    if(valArray[tempoBox] == 0)
                    legalMoves[counter++] = tempoBox;
                    if(valArray[tempoBox] > 0){
                        legalMoves[counter++] = tempoBox;
                        break;
                    }
                    if(valArray[tempoBox] < 0)
                    break;
                }
            }
            if(x == 1){
                while(tempoBox < 63){
                    tempoBox = tempoBox + 8;
                    if(valArray[tempoBox] == 0)
                    legalMoves[counter++] = tempoBox;
                    if(valArray[tempoBox] > 0){
                        legalMoves[counter++] = tempoBox;
                        break;
                    }
                    if(valArray[tempoBox] < 0)
                    break;
                }
            }
            if(x == 2){
                while(tempoBox % 8 != 7){
                    tempoBox = tempoBox + 1;
                    if(valArray[tempoBox] == 0)
                    legalMoves[counter++] = tempoBox;
                    if(valArray[tempoBox] > 0){
                        legalMoves[counter++] = tempoBox;
                        break;
                    }
                    if(valArray[tempoBox] < 0)
                    break;
                }
            }
        if(x == 3){
            while(tempoBox % 8 != 0){
                tempoBox = tempoBox - 1;
                if(valArray[tempoBox] == 0)
                legalMoves[counter++] = tempoBox;
                if(valArray[tempoBox] > 0){
                    legalMoves[counter++] = tempoBox;
                    break;
                }
                if(valArray[tempoBox] < 0)
                break;
            }
        }
    }
    }
    }
    function queen(){
        if(valArray[box] == 9){
            for(let x = 0; x < 4; x++){
                tempoBox = box;
                if(x == 0){
                    while(tempoBox > 8 && tempoBox % 8 != 0){
                        tempoBox = tempoBox - 9;
                        if(valArray[tempoBox] == 0)
                        legalMoves[counter++] = tempoBox;
                        if(valArray[tempoBox] < 0){
                            legalMoves[counter++] = tempoBox;
                            break;
                        }
                        if(valArray[tempoBox] > 0)
                        break;
                    }
                }
                if(x == 1){
                    while(tempoBox >= 8 && tempoBox % 8 != 7){
                        tempoBox = tempoBox - 7;
                        if(valArray[tempoBox] == 0)
                        legalMoves[counter++] = tempoBox;
                        if(valArray[tempoBox] < 0){
                            legalMoves[counter++] = tempoBox;
                            break;
                        }
                        if(valArray[tempoBox] > 0)
                        break;
                    }
                }
                if(x == 2){
                    while(tempoBox >= 0 && tempoBox < 55 && tempoBox % 8 != 7){
                        tempoBox = tempoBox + 9;
                        if(valArray[tempoBox] == 0)
                        legalMoves[counter++] = tempoBox;
                        if(valArray[tempoBox] < 0){
                            legalMoves[counter++] = tempoBox;
                            break;
                        }
                        if(valArray[tempoBox] > 0)
                        break;
                    }
                }
                if(x == 3){
                    while(tempoBox <= 55 && tempoBox % 8 != 0){
                        tempoBox = tempoBox + 7;
                        if(valArray[tempoBox] == 0)
                        legalMoves[counter++] = tempoBox;
                        if(valArray[tempoBox] < 0){
                            legalMoves[counter++] = tempoBox;
                            break;
                        }
                        if(valArray[tempoBox] > 0)
                        break;
                    }
                }
            }
            for(let x = 0; x < 4; x++){
                tempoBox = box;
                if(x == 0){
                    while(tempoBox > 0){
                        tempoBox = tempoBox - 8;
                        if(valArray[tempoBox] == 0)
                        legalMoves[counter++] = tempoBox;
                        if(valArray[tempoBox] < 0){
                            legalMoves[counter++] = tempoBox;
                            break;
                        }
                        if(valArray[tempoBox] > 0)
                        break;
                    }
                }
                if(x == 1){
                    while(tempoBox < 63){
                        tempoBox = tempoBox + 8;
                        if(valArray[tempoBox] == 0)
                        legalMoves[counter++] = tempoBox;
                        if(valArray[tempoBox] < 0){
                            legalMoves[counter++] = tempoBox;
                            break;
                        }
                        if(valArray[tempoBox] > 0)
                        break;
                    }
                }
                if(x == 2){
                    while(tempoBox % 8 != 7){
                        tempoBox = tempoBox + 1;
                        if(valArray[tempoBox] == 0)
                        legalMoves[counter++] = tempoBox;
                        if(valArray[tempoBox] < 0){
                            legalMoves[counter++] = tempoBox;
                            break;
                        }
                        if(valArray[tempoBox] > 0)
                        break;
                    }
                }
            if(x == 3){
                while(tempoBox % 8 != 0){
                    tempoBox = tempoBox - 1;
                    if(valArray[tempoBox] == 0)
                    legalMoves[counter++] = tempoBox;
                    if(valArray[tempoBox] < 0){
                        legalMoves[counter++] = tempoBox;
                        break;
                    }
                    if(valArray[tempoBox] > 0)
                    break;
                }
            }
        }
        }
        if(valArray[box] == -9){
            for(let x = 0; x < 4; x++){
                tempoBox = box;
                if(x == 0){
                    while(tempoBox > 8 && tempoBox % 8 != 0){
                        tempoBox = tempoBox - 9;
                        if(valArray[tempoBox] == 0)
                        legalMoves[counter++] = tempoBox;
                        if(valArray[tempoBox] > 0){
                            legalMoves[counter++] = tempoBox;
                            break;
                        }
                        if(valArray[tempoBox] < 0)
                        break;
                    }
                }
                if(x == 1){
                    while(tempoBox >= 8 && tempoBox % 8 != 7){
                        tempoBox = tempoBox - 7;
                        if(valArray[tempoBox] == 0)
                        legalMoves[counter++] = tempoBox;
                        if(valArray[tempoBox] > 0){
                            legalMoves[counter++] = tempoBox;
                            break;
                        }
                        if(valArray[tempoBox] < 0)
                        break;
                    }
                }
                if(x == 2){
                    while(tempoBox >= 0 && tempoBox < 55 && tempoBox % 8 != 7){
                        tempoBox = tempoBox + 9;
                        if(valArray[tempoBox] == 0)
                        legalMoves[counter++] = tempoBox;
                        if(valArray[tempoBox] > 0){
                            legalMoves[counter++] = tempoBox;
                            break;
                        }
                        if(valArray[tempoBox] < 0)
                        break;
                    }
                }
                if(x == 3){
                    while(tempoBox <= 55 && tempoBox % 8 != 0){
                        tempoBox = tempoBox + 7;
                        if(valArray[tempoBox] == 0)
                        legalMoves[counter++] = tempoBox;
                        if(valArray[tempoBox] > 0){
                            legalMoves[counter++] = tempoBox;
                            break;
                        }
                        if(valArray[tempoBox] < 0)
                        break;
                    }
                }
            }
            for(let x = 0; x < 4; x++){
                tempoBox = box;
                if(x == 0){
                    while(tempoBox > 0){
                        tempoBox = tempoBox - 8;
                        if(valArray[tempoBox] == 0)
                        legalMoves[counter++] = tempoBox;
                        if(valArray[tempoBox] > 0){
                            legalMoves[counter++] = tempoBox;
                            break;
                        }
                        if(valArray[tempoBox] < 0)
                        break;
                    }
                }
                if(x == 1){
                    while(tempoBox < 63){
                        tempoBox = tempoBox + 8;
                        if(valArray[tempoBox] == 0)
                        legalMoves[counter++] = tempoBox;
                        if(valArray[tempoBox] > 0){
                            legalMoves[counter++] = tempoBox;
                            break;
                        }
                        if(valArray[tempoBox] < 0)
                        break;
                    }
                }
                if(x == 2){
                    while(tempoBox % 8 != 7){
                        tempoBox = tempoBox + 1;
                        if(valArray[tempoBox] == 0)
                        legalMoves[counter++] = tempoBox;
                        if(valArray[tempoBox] > 0){
                            legalMoves[counter++] = tempoBox;
                            break;
                        }
                        if(valArray[tempoBox] < 0)
                        break;
                    }
                }
            if(x == 3){
                while(tempoBox % 8 != 0){
                    tempoBox = tempoBox - 1;
                    if(valArray[tempoBox] == 0)
                    legalMoves[counter++] = tempoBox;
                    if(valArray[tempoBox] > 0){
                        legalMoves[counter++] = tempoBox;
                        break;
                    }
                    if(valArray[tempoBox] < 0)
                    break;
                }
            }
        }
        }
    }
    function king(){
        if(valArray[box] == 10){
        if(valArray[box - 9] <= 0 && box > 8 && (box % 8 > 0))
        legalMoves[counter++] = box - 9;
        if(valArray[box - 8] <= 0 && box > 8)
        legalMoves[counter++] = box - 8;
        if(valArray[box - 7] <= 0 && box > 8 && (box % 8 < 7))
        legalMoves[counter++] = box - 7;
        if(valArray[box - 1] <= 0 && (box % 8 > 0))
        legalMoves[counter++] = box - 1;
        if(valArray[box + 1] <= 0 && (box % 8 < 7))
        legalMoves[counter++] = box + 1;
        if(valArray[box + 9] <= 0 && box < 55 && (box % 8 < 7))
        legalMoves[counter++] = box + 9;
        if(valArray[box + 8] <= 0 && box < 56)
        legalMoves[counter++] = box + 8;
        if(valArray[box + 7] <= 0 && box < 56 && (box % 8 > 0))
        legalMoves[counter++] = box + 7;
        if(whiteKingMove == false && rightWhiteRook == false && valArray[box + 2] == 0 && valArray[box + 1] == 0)
        legalMoves[counter++] = box + 2;
        if(whiteKingMove == false && leftWhiteRook == false && valArray[box - 2] == 0 && valArray[box - 1] == 0)
        legalMoves[counter++] = box - 2;
        }
        if(valArray[box] == -10){
            if(valArray[box - 9] >= 0 && box > 8 && (box % 8 > 0))
            legalMoves[counter++] = box - 9;
            if(valArray[box - 8] >= 0 && box > 8)
            legalMoves[counter++] = box - 8;
            if(valArray[box - 7] >= 0 && box > 8 && (box % 8 < 7))
            legalMoves[counter++] = box - 7;
            if(valArray[box - 1] >= 0 && (box % 8 > 0))
            legalMoves[counter++] = box - 1;
            if(valArray[box + 1] >= 0 && (box % 8 < 7))
            legalMoves[counter++] = box + 1;
            if(valArray[box + 9] >= 0 && box < 55 && (box % 8 < 7))
            legalMoves[counter++] = box + 9;
            if(valArray[box + 8] >= 0 && box < 56)
            legalMoves[counter++] = box + 8;
            if(valArray[box + 7] >= 0 && box < 56 && (box % 8 > 0))
            legalMoves[counter++] = box + 7;
            if(blackKingMove == false && rightBlackRook == false && valArray[box + 2] == 0 && valArray[box + 1] == 0)
            legalMoves[counter++] = box + 2;
            if(blackKingMove == false && leftBlackRook == false && valArray[box - 2] == 0 && valArray[box -1] == 0)
            legalMoves[counter++] = box - 2;
        }
    }
    function pawn(){
        if(valArray[box] == 1){
            if(box > 47){
                tempoBox = box;
                for(let q = 0; q < 2; q++){
                    tempoBox = tempoBox - 8;
                    if(valArray[tempoBox] == 0)
                    legalMoves[counter++] = tempoBox;
                    else
                    break;
                }
            }
            else{
                if(valArray[box - 8] == 0)
                legalMoves[counter++] = box - 8;
            }
            if(valArray[box - 9] < 0)
            legalMoves[counter++] = box - 9;
            if(valArray[box - 7] < 0)
            legalMoves[counter++] = box - 7;
        }
        if(valArray[box] == -1){
            if(box < 16){
                tempoBox = box;
                for(let q = 0; q < 2; q++){
                    tempoBox = tempoBox + 8;
                    if(valArray[tempoBox] == 0)
                    legalMoves[counter++] = tempoBox;
                    else
                    break;
                }
            }
            else{
                if(valArray[box + 8] == 0)
                legalMoves[counter++] = box + 8;
            }
            if(valArray[box + 9] > 0)
            legalMoves[counter++] = box + 9;
            if(valArray[box + 7] > 0)
            legalMoves[counter++] = box + 7;
        }
    }
    function whiteMoves(){
                secondBox = box;
        for(let b = 0; b < 64; b++){
            if(valArray[b] > 0){
                box = b;
                bishop();
                knight();
                rook();
                queen();
                king();
                pawn();
                box = secondBox;
            }
        }
        for(let e = 0 ; e < 150; e++)
        allWhiteMoves[e] = 0;
        for(let c = 0; c < counter; c++){
            allWhiteMoves[c] = legalMoves[c];
            legalMoves[c] = 0;
        }
        for(let d = 0; d < counter; d++){
            if(valArray[allWhiteMoves[d]] == -10){
                blackCheck = true;
                break;
            }
        }
        counter = 0;
    }
    function blackMoves(){
        for(let b = 0; b < 64; b++){
            if(valArray[b] < 0){
                secondBox = box;
                box = b;
                bishop();
                knight();
                rook();
                queen();
                king();
                pawn();
                box = secondBox;
            }
        }
        for(let e = 0 ; e < 150; e++)
        allBlackMoves[e] = 0;
        for(let c = 0; c < counter; c++){
            allBlackMoves[c] = legalMoves[c];
            legalMoves[c] = 0;
        }
        for(let d = 0; d < counter; d++){
            if(valArray[allBlackMoves[d]] == 10){
                whiteCheck = true;
                break;
            }
        }
        counter = 0;
    }
    function pieceMovement(){
    counter = 0;
    bishop();
    knight();
    rook();
    queen();
    king();
    pawn();

    counter2 = 0 ;
    thirdCounter = counter;
    for(let u = 0; u < thirdCounter; u++){
        secondLegalMoves[u] = legalMoves[u];
    }
    for(let g = 0; g < thirdCounter; g++){
        legalMoves[g] = secondLegalMoves[g];
        secondValue = valArray[box];
        valArray[box] = 0;
        boxStorer = legalMoves[g];
        thirdValue = valArray[legalMoves[g]];
        valArray[legalMoves[g]] = 1;
        counter = 0;
        for(let b = 0; b < 64; b++){
            if(valArray[b] < 0){
                secondBox = box;
                box = b;
                bishop();
                knight();
                rook();
                queen();
                king();
                pawn();
                box = secondBox;
            }
        }
        for(let n = 0; n < counter; n++){
            if(legalMoves[n] == 10){
                whiteCheck = true;
                break;
            }
           else
           whiteCheck = false;
        }
        if(whiteCheck == false){
            thirdLegalMoves[counter2++] = secondLegalMoves[g]; 
        }
        valArray[box] = secondValue;
        valArray[boxStorer] = thirdValue;
    }
    for(let z = 0; z < counter2; z++){
        legalMoves[z] = thirdLegalMoves[z];
        thirdLegalMoves[z] = 0;
    }
    // To highlight the legal moves
    for(let k = 0; k < counter2; k++){
        if((valArray[box] > 0 && blackOrWhite % 2 == 0) || (valArray[box] < 0 && blackOrWhite % 2 == 1)){
            if(square[legalMoves[k]].className == 'black')
        square[legalMoves[k]].style.backgroundColor = 'rgb(171, 10, 16)';
            else
        square[legalMoves[k]].style.backgroundColor = 'rgb(224, 18, 25)';
        }
    }
}
function mechanics(){
    
    if(count % 2 == 0 && valArray[box] != 0){
        if(valArray[box] > 0 && blackOrWhite % 2 == 0){
        tempoVal = valArray[box];
        lastBox = box;
        square[box].style.backgroundColor = 'yellow';
        count++;
        pieceMovement();
        }
            if(valArray[box] < 0 && blackOrWhite % 2 == 1){
            tempoVal = valArray[box];
            lastBox = box;
            square[box].style.backgroundColor = 'yellow';
            count++;
            pieceMovement();
            }
    }
    else if(count % 2 != 0){
        // To avoid double click at a square
        if(box == lastBox){
            for(let n = 0; n < counter2; n++){
                legalMoves[n] = 0;
            }
            count++;
            for (let i = 0; i < black.length; i++) {
                black[i].style.backgroundColor = "rgb(50, 149, 168)";
                white[i].style.backgroundColor = 'white';
              }
            return;
        }
        // To remove the previous highlighted move
        for (let i = 0; i < black.length; i++) {
            black[i].style.backgroundColor = "rgb(50, 149, 168)";
            white[i].style.backgroundColor = 'white';
          }
          // To check whether a legal move is made
        for(let m = 0; m < counter2; m++){
            if(legalMoves[m] == box){
                legalMoveMade = true;
                break;
            }
            else
            legalMoveMade = false;
        }
        for(let n = 0; n < counter2; n++){
            legalMoves[n] = 0;
        }
        counter2 = 0;
        if(legalMoveMade == false){
            count++;
            return;
        }
        if(valArray[lastBox] == 10 && whiteKingMove == false && rightWhiteRook == false && box == 62){
            valArray[box] = 10;
            valArray[lastBox] = 0;
            valArray[61] = 5;
            valArray[63] = 0;
            square[lastBox].style.backgroundColor = 'rgb(230, 230, 30)';
            square[box].style.backgroundColor = 'yellow';
            whiteKingMove = true;
            castleSound.play();
        }
        else if(valArray[lastBox] == 10 && whiteKingMove == false && leftWhiteRook == false && box == 58){
            valArray[box] = 10;
            valArray[lastBox] = 0;
            valArray[59] = 5;
            valArray[56] = 0;
            square[lastBox].style.backgroundColor = 'rgb(230, 230, 30)';
            square[box].style.backgroundColor = 'yellow';
            whiteKingMove = true;
            castleSound.play();
        }
        else if(valArray[lastBox] == -10 && blackKingMove == false && rightBlackRook == false && box == 6){
            valArray[box] = -10;
            valArray[lastBox] = 0;
            valArray[5] = -5;
            valArray[7] = 0;
            square[lastBox].style.backgroundColor = 'rgb(230, 230, 30)';
            square[box].style.backgroundColor = 'yellow';
            blackKingMove = true;
            castleSound.play();
        }
        else if(valArray[lastBox] == -10 && blackKingMove == false && leftBlackRook == false && box == 2){
            valArray[box] = -10;
            valArray[lastBox] = 0;
            valArray[3] = 5;
            valArray[0] = 0;
            square[lastBox].style.backgroundColor = 'rgb(230, 230, 30)';
            square[box].style.backgroundColor = 'yellow';
            blackKingMove = true;
            castleSound.play();
        }
        else{
        // To highlight the last moves
        square[lastBox].style.backgroundColor = 'rgb(230, 230, 30)';
        square[box].style.backgroundColor = 'yellow';
        // To play sound after every move 
        if(valArray[box] == 0)
        moveSound.play();
        else
        captureSound.play();
    // Checking these for castling
    if(valArray[lastBox] == 5 && lastBox == 63)
    rightWhiteRook = true;
    if(valArray[lastBox] == 5 && lastBox == 56)
    leftWhiteRook = true;
    if(valArray[lastBox] == -5 && lastBox == 7)
    rightBlackRook = true;
    if(valArray[lastBox] == -5 && lastBox == 0)
    leftBlackRook = true;
    if(valArray[lastBox] == 10 && lastBox == 60)
    whiteKingMove = true;
    if(valArray[lastBox] == -10 && lastBox == 4)
    blackKingMove = true;

    valArray[box] = tempoVal;
    valArray[lastBox] = 0;
        }
        for(let i = 0; i < 64; i++){
            if(valArray[i] == -5)
            image[i].src = "Images/br.png";
            if(valArray[i] == -3)
            image[i].src = "Images/bn.png";
            if(valArray[i] == -3.5)
            image[i].src = "Images/bb.png";
            if(valArray[i] == -9)
            image[i].src = "Images/bq.png";
            if(valArray[i] == -10)
            image[i].src = "Images/bk.png";
            if(valArray[i] == -1)
            image[i].src = "Images/bp.png";
            if(valArray[i] == 5)
            image[i].src = "Images/wr.png";
            if(valArray[i] == 3.5)
            image[i].src = "Images/wb.png";
            if(valArray[i] == 3)
            image[i].src = "Images/wn.png";
            if(valArray[i] == 9)
            image[i].src = "Images/wq.png";
            if(valArray[i] == 10)
            image[i].src = "Images/wk.png";
            if(valArray[i] == 1)
            image[i].src = "Images/wp.png";
            if(valArray[i] == 0)
            image[i].src = "Images/transparent.png";
        }
        whiteMoves();
        blackMoves();
        if(blackOrWhite % 2 == 1)
            blackCheck = false;
        else
        whiteCheck = false;
        if(whiteCheck == true){
            for(let p = 0; p < 64; p++)
            if(valArray[p] == 10)
            square[p].style.backgroundColor = 'red';
            checkSound.play();
        }
        if(blackCheck == true){
            for(let p = 0; p < 64; p++)
            if(valArray[p] == -10)
            square[p].style.backgroundColor = 'red';
            checkSound.play();
        }
        count++;
        blackOrWhite++;
    }
}
