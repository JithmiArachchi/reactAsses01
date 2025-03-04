let search = document.querySelector('.search-box');
// arrow function
document.querySelector('#search-icon').onclick = ()=> {
    search.classList.toggle('active');
}

const movies = ["Moana 2", "Avatar", "TOGO2", "Titanic", "The Fault in Our Stars"];
    let options = document.getElementById("movies");

    for (let i = 0; i < movies.length; i++) {
        let option = document.createElement("option"); 
        option.value = movies[i];  
        option.textContent = movies[i]; 
        options.appendChild(option); 
    }

const contentContainer = document.getElementById("ticketSeats");
let myArray =[]
// Loop to create 20 buttons
for (let i = 1; i <= 50; i++) {
    let button = document.createElement("button");
    button.className = "seats";
    button.id = `selectedSeats${i}`;
    button.innerText = i;
    button.style.backgroundColor = "green";
    
   
    button.onclick = function () {
       
        if(button.style.backgroundColor == "red"){
            button.style.backgroundColor = "green";
            button.style.color = "white";
            selectSeats(i ,'min');
            myArray = myArray.filter(num => num !== i);           
            selectedSeats.innerText=myArray;
        }else {
            button.style.backgroundColor = "red";
        button.style.color = "white";
        selectSeats(i,1);
        myArray.push(i);
        selectedSeats.innerText=myArray;
        }
         
    };

    contentContainer.appendChild(button); // Append button directly
}

const selectedSeats = document.getElementById("selectedSeats");
const tot = document.getElementById("tot");
const balance = document.getElementById("balance");
let count=0 ;
function selectSeats(seat , avil) {
    console.log(`Seat ${seat} selected`);
    if(avil=='min'){
    count--;
    }else{
        count++;
    }
    
    //select.innerText = select.innerText+' / '+ seat  ;
    tot.innerText = count;

      balance.innerHTML = 50-count;
}

 

function issueTickets(){ 
    
    let userName = document.getElementById("userName");
    let selectedSeats = document.getElementById("selectedSeats");
   
    const booking = {   
        name :userName.value,
        seats :selectedSeats.innerText,
        movie: options.value
    }

    let tableBody= document.getElementById("tableBody");
    tableBody.innerHTML= tableBody.innerHTML+
                        '<tr> <td>'+booking.name+' </td> <td>'+booking.seats+' </td> <td>'+booking.movie+' </td></tr>';  
                        myArray=[];  
                        userName.innerText ="";                  

}