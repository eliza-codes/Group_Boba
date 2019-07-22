//red : "red";
//yellow : "yellow;
//blank : "0";

var board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var turn = 0;

var win = false;

function display_input(grid, num) {
    if (win == false){
        if (board[num] != "yellow" && board[num] != "red") {
            if (turn == 1 && grid.style.backgroundColor != "yellow") {
                grid.style.backgroundColor = "yellow";
                turn = 0;
                board[num] = "yellow";
            } else if (turn == 0) {
                grid.style.backgroundColor = "red";
                turn = 1;
                board[num] = "red";
            } else if (turn == 0 && grid.style.backgroundColor != "red") {
                grid.style.backgroundColor = "red";
                turn = 1;
                board[num] = "red";
            } else {
                grid.style.backgroundColor = "yellow";
                turn = 0;
                board[num] = "yellow";
            }
            checkwin("yellow");
            checkwin("red");
        }
    }
    console.log(board);
}   

function checkwin(player) {
    if (board[0] == player && board[1] == player && board[2] == player && board[3] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[1] == player && board[2] == player && board[3] == player && board[4] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[2] == player && board[3] == player && board[4] == player && board[5] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[3] == player && board[4] == player && board[5] == player && board[6] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[7] == player && board[8] == player && board[9] == player && board[10] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[8] == player && board[9] == player && board[10] == player && board[11] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[9] == player && board[10] == player && board[11] == player && board[12] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[10] == player && board[11] == player && board[12] == player && board[13] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[14] == player && board[15] == player && board[16] == player && board[17] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[15] == player && board[16] == player && board[17] == player && board[18] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[16] == player && board[17] == player && board[18] == player && board[19] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[17] == player && board[18] == player && board[19] == player && board[20] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[21] == player && board[22] == player && board[23] == player && board[24] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[22] == player && board[23] == player && board[24] == player && board[25] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[23] == player && board[24] == player && board[25] == player && board[26] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[24] == player && board[25] == player && board[26] == player && board[27] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[28] == player && board[29] == player && board[30] == player && board[31] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[29] == player && board[30] == player && board[31] == player && board[32] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[30] == player && board[31] == player && board[32] == player && board[33] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[31] == player && board[32] == player && board[33] == player && board[34] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[35] == player && board[36] == player && board[37] == player && board[38] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[36] == player && board[37] == player && board[38] == player && board[39] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[37] == player && board[38] == player && board[39] == player && board[40] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[38] == player && board[39] == player && board[40] == player && board[41] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[0] == player && board[7] == player && board[14] == player && board[21] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[1] == player && board[8] == player && board[15] == player && board[22] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[2] == player && board[9] == player && board[16] == player && board[23] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[3] == player && board[10] == player && board[17] == player && board[24] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[4] == player && board[11] == player && board[18] == player && board[25] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[5] == player && board[12] == player && board[19] == player && board[26] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[6] == player && board[13] == player && board[20] == player && board[27] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[7] == player && board[14] == player && board[21] == player && board[28] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[8] == player && board[15] == player && board[22] == player && board[29] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[9] == player && board[16] == player && board[23] == player && board[30] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[10] == player && board[17] == player && board[24] == player && board[31] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[11] == player && board[18] == player && board[25] == player && board[32] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[12] == player && board[19] == player && board[26] == player && board[33] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[13] == player && board[20] == player && board[27] == player && board[34] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[14] == player && board[21] == player && board[28] == player && board[35] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[15] == player && board[22] == player && board[29] == player && board[36] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[16] == player && board[23] == player && board[30] == player && board[37] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[17] == player && board[24] == player && board[31] == player && board[38] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[18] == player && board[25] == player && board[32] == player && board[39] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[19] == player && board[26] == player && board[33] == player && board[40] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[20] == player && board[27] == player && board[34] == player && board[41] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[3] == player && board[9] == player && board[15] == player && board[21] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[4] == player && board[10] == player && board[16] == player && board[22] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[5] == player && board[11] == player && board[17] == player && board[23] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[6] == player && board[12] == player && board[18] == player && board[24] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[13] == player && board[19] == player && board[25] == player && board[31] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[20] == player && board[26] == player && board[32] == player && board[38] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[10] == player && board[16] == player && board[22] == player && board[28] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[11] == player && board[17] == player && board[23] == player && board[29] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[12] == player && board[18] == player && board[24] == player && board[30] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[19] == player && board[25] == player && board[31] == player && board[37] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[17] == player && board[23] == player && board[29] == player && board[35] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[18] == player && board[24] == player && board[30] == player && board[36] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[3] == player && board[11] == player && board[19] == player && board[27] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[2] == player && board[10] == player && board[18] == player && board[26] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[1] == player && board[9] == player && board[17] == player && board[25] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[0] == player && board[8] == player && board[16] == player && board[24] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[7] == player && board[15] == player && board[23] == player && board[31] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[14] == player && board[22] == player && board[30] == player && board[38] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[10] == player && board[18] == player && board[26] == player && board[34] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[9] == player && board[17] == player && board[25] == player && board[33] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[8] == player && board[16] == player && board[24] == player && board[32] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[15] == player && board[23] == player && board[31] == player && board[39] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[17] == player && board[25] == player && board[33] == player && board[41] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    } else if (board[16] == player && board[24] == player && board[32] == player && board[40] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
    }
}


function displayMessage(player){
    message.innerHTML = player + " wins!! ";
}
   
function resetgrid(){
    var message = document.querySelector("#message");
    message.innerHTML="";
    for (var i = 0; i < 42; i++){
        board[i] = 0;
        document.querySelector("#grid" + i).style.backgroundColor = "white"; 
        
    }
    turn = 0;
    win = false;
    
}
