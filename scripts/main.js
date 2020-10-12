const myHeading = document.querySelector("h1");



myHeading.onclick = function(){
    alert("You clicked on greeting.");
};

var btn = document.querySelector("button");

function personalizeMessage(){
   
}

function getName(){
    var name = prompt();
    if(!name){
        getName();
    }else{
        localStorage.setItem("name",name);
        myHeading.textContent = "Hello dear "+localStorage.getItem("name");
    }
    
}

if(localStorage.getItem("name") ){
    myHeading.textContent = "Hello dear "+localStorage.getItem("name");    
}else{
    getName();
}

btn.onclick = function(){
    getName();
} 
