
// name
// password
// email
// address
    function a (){
        var text1 =document.createTextNode("Enter Name ");
        document.getElementById("root1").appendChild(text1);
        let textArea = document.createElement("textarea");
        document.getElementById("root1").appendChild(textArea);
        name1.disabled=true;
    }
    function b (){
        var text2 =document.createTextNode("Enter Password ");
        document.getElementById("root2").appendChild(text2);
        let textArea = document.createElement("textarea");
        document.getElementById("root2").appendChild(textArea);
        password.disabled=true;

    }
    function c (){
        var text3 =document.createTextNode("Enter Email ");
        document.getElementById("root3").appendChild(text3);
        let textArea = document.createElement("textarea");
        document.getElementById("root3").appendChild(textArea);
        email.disabled=true;

    }
    function d (){
        var text4 =document.createTextNode("Enter Address ");
        document.getElementById("root4").appendChild(text4);
        let textArea = document.createElement("textarea");
        document.getElementById("root4").appendChild(textArea);
        address.disabled=true;

    }
    function e (){
        
    alert("Your Details are submitted");
        window.location.reload();
    }

      var name1 =document.createElement("button");
      var data1 = document.createTextNode("Name");
      name1.appendChild(data1);
      name1.onclick=a;
      document.getElementById("root1").appendChild(name1);

      var password =document.createElement("button");
      var data2 = document.createTextNode("Password");
      password.appendChild(data2);
      document.getElementById("root2").appendChild(password);
      password.onclick=b;

      var email =document.createElement("button");
      var data3 = document.createTextNode("Email");
      email.appendChild(data3);
      document.getElementById("root3").appendChild(email);
      email.onclick=c;

      var address =document.createElement("button");
      var data4 = document.createTextNode("Address");
      address.appendChild(data4);
      document.getElementById("root4").appendChild(address);
      address.onclick=d;

      var rest =document.createElement("button");
      var dataR = document.createTextNode("Reset");
      rest.appendChild(dataR);
      rest.onclick=e;
      document.getElementById("root5").appendChild(rest);
  