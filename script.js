const inputContainer = document.querySelector(".input");
const button = document.querySelector(".btn");
const output = document.querySelector(".output");

button.addEventListener("click",()=>{
    let day = inputContainer.value;
   day=  day.toLowerCase();
    if(day==="monday"){
        output.innerHTML="<p>Tuesday</p>";
    }
    else if (day==="tuesday"){
        output.innerHTML="<p>Wednesday</p>";
    }
    else if (day==="wednesday"){
        output.innerHTML="<p>Thursday</p>";
    }
    else if (day==="thursday"){
        output.innerHTML="<p>Friday</p>";
    }
    else if (day==="friday"){
        output.innerHTML="<p>Saturday</p>";
    }
    else if (day==="saturday"){
        output.innerHTML="<p>Sunday</p>";
    }
    else if(day==="sunday"){
        output.innerHTML="<p>Monday</p>";
    }
    else if(day===""){
       alert("Please Enter Today's day")
    }
    else{
        output.innerHTML="<p>PLease enter correct day</p>"
    }
})