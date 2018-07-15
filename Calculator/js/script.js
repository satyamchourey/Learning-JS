

let elements = document.querySelectorAll(".input");
elements.forEach(el => {
    el.addEventListener("click" , function (e) {
        let num = e.target.value;
        insert(num);
    });    
});


function insert(num){
    document.myForm.textview.value=document.myForm.textview.value+num;

}

function clear(){
    document.myForm.textview.value="";
}

function equal (){
    document.myForm.textview.value=eval(document.myForm.textview.value);

}
document.querySelector(".equal").addEventListener("click",equal );
document.querySelector(".clear").addEventListener("click",clear );
