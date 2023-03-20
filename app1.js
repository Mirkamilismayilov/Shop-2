let border = document.querySelectorAll(".border");
let faxmark = document.querySelectorAll(".fa-xmark")
let increment = document.querySelectorAll(".increment");
let decrement = document.querySelectorAll(".decrement")
let numeral = document.querySelectorAll(".numeral");
let total = document.querySelectorAll(".total");
let malinQiymeti = document.querySelectorAll(".reqem");
let YeniCem = 0 ;

for (let i = 0; i < increment.length; i++) {
 let count = 1

// total[i].innerHTML = malinQiymeti[i].textContent
// YeniCem = parseInt(total[i].textContent) + YeniCem

// total[i].innerHTML = YeniCem


increment[i].addEventListener("click" , ()=>{
   
    count++
    numeral[i].innerHTML = count
        console.log("salam")
    })
    


    
decrement[i].addEventListener("click" , ()=>{
    count--
    if (count <= 0) {
        count = 0;
    }else{
        numeral[i].innerHTML = count
    }
    })
    

    faxmark[i].addEventListener("click" , ()=>{
        
        border[i].remove()
            
        })
    
}





