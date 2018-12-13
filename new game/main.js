var cell = document.getElementsByClassName("cell");
count =0;

function show (event){
var x = event.target;
count++;
x.onclick=false;
if(count%2==0){
    x.innerHTML="X";
    console.log(x);
    
    // x.classList.add("disable");
}else{
    x.innerHTML="o";
    console.log(x);


    // this.onclick=false;
}

}

