


function headDisplay() {

    var heading = document.createElement("h1");
    var headData = document.createTextNode("This");
    heading.appendChild(headData);
    document.getElementById("heading").appendChild(heading);
    
    (function(){
        document.getElementById("heading").disabled=true;
    })();
    }
    
    function pDisplay() {
        var p =document.createElement("P");
        var pData=document.createTextNode("is");
        p.appendChild(pData);
        document.getElementById("para").appendChild(p);
       
        (function(){
            document.getElementById("para").disabled=true;
        })();
    }
    function btnDisplay(){
        var btn =document.createElement("button");
        var btnData=document.createTextNode("SCRIPTED");
        btn.appendChild(btnData);
        document.getElementById("btn").appendChild(btn);
        (function(){
            document.getElementById("btn1").disabled=true;
        })();
    }
    function taDisplay(){
        var taDiv =document.createElement("div")
        var ta =document.createElement("textarea")
taDiv.appendChild(ta);
        
        document.getElementById("text-area").appendChild(taDiv);
        (function(){
            document.getElementById("text-area").disabled=true;
        })();
    }



    