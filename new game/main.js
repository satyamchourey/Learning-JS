var cell = document.querySelectorAll(".cell");
var txt =document.querySelectorAll(".txt");
var count = 0;
var box =document.querySelector(".box");
var row1 =[cell[0],cell[1],cell[2]];
var row2 =[cell[3],cell[4],cell[5]];
var row3 =[cell[6],cell[7],cell[8]];
row1.value = cell[0].value + cell[1].value + cell[2].value;    
row2.value = cell[3].value + cell[4].value + cell[5].value;    
row2.value = cell[6].value + cell[7].value + cell[8].value;    


for (i = 0  ; i < cell.length; i++) {
    console.log('outer');
    cell[i].value=null;

    cell[i].addEventListener("click", function (e) {

        e = e || window.event;
        var target = e.target || e.srcElement;
        count += 1;

        // var x =document.createTextNode("X");
        // var o =document.createTextNode("O");

        if (count % 2 == 0) {
            target.innerHTML="X";            
            target.style.pointerEvents = 'none';
            // target.value=Number(1);
            // cell[i].value=1;
        }
        else if(count % 2 !==0) {
            // target.value = Number(0);
            target.innerHTML = "O";            
            target.style.pointerEvents = 'none';
            // cell[i].value=0;
        }
        check();
    });
    
}

function check(){

    for(var n=0;n<3;n++){
        console.log('run');
        if(cell[n].innerHTML === cell[n].nextSibling.innerHTML ===cell[n].nextSibling.nextSibling.innerHTML){
        alert("you win");
        window.location.reload();
        }
    }        
    
}