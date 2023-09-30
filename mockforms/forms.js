function add(a,b){
console.log(a + b)
}
add (3,5);
add (4,7)



function greet(name1){
    console.log("hello" + " " + name1)
}
    greet("Tobi")

    function double(number,){
        console.log(2*number)
    }
    double(8);


    // function matchPassword() {  
    //     var pw1 = document.getElementById("pswd1");  
    //     var pw2 = document.getElementById("pswd2");  
    //     if(pw1 != pw2)  
    //     {   
    //       alert("Passwords did not match");  
    //     } else {  
    //       alert("Password created successfully");  
    //     }  
    //   }  
      let button = document.querySelector("#butn")
     function operation(){
          let password1=document.querySelector("#password1").value
          let password2= document.querySelector("#password2").value

          if(password1 === password2) {
            alert("Password created successfully");  
        }else{
            alert("password did not match")
        }  
    }
           