let btn = document.querySelector(".btn");
let container = document.querySelector(".container");
let backbtn = document.querySelector(".btn.back");
let nextbutton = document.querySelector(".btn.next");
let form2 = document.querySelector(".form2");
let form3 = document.querySelector(".form3");

function Nextbtn () {


   container.classList.add("active");
}


btn.addEventListener("click", Nextbtn);


function backbutton () {

    container.classList.remove("active");

}

backbtn.addEventListener("click", backbutton);


function nextbuttons () {

    if(container.classList.contains("active")){
        form2.style = `transform: translateX(-100%); transition:0.5s;`
        form3.style = `transform: translateX(0%); transition:0.5s;`

        
        
    } else{
        form2.style = `transform: translateX(0%); transition:0.5s;`
        form3.style = `transform: translateX(0%); transition:0.5s;`


    }

    
   
}


nextbutton.addEventListener("click", nextbuttons)


