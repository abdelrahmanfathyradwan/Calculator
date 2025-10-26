const clearBtn = document.querySelector(".clear");
const decimalBtn = document.querySelector(".decimal");
const equalsBtn = document.querySelector(".equals");
const previousRender= document.querySelector(".previous-operation");
const currentRender = document.querySelector(".current-operation");
const btnNumbersAll = document.querySelectorAll(".number")
const btnOperatorAll = document.querySelectorAll(".operator")


//eventListener on all numbers buttons & append numbers to display
btnNumbersAll.forEach((button)=>{
    button.addEventListener("click",()=>{
        previousRender.textContent = "";
        currentRender.textContent += button.innerHTML
    })
})
// clear display
clearBtn.onclick = function(){
    currentRender.textContent = "";
    previousRender.textContent = 0
}
// delete last numbers
 function deleteLastNum () {
        currentRender.textContent = currentRender.textContent.slice(0,-1);
        currentRender.textContent === 0 ||currentRender.textContent==="" ? previousRender.textContent=0:currentRender.textContent;
}
// decimal Btn listener
decimalBtn.onclick = function (){
    if (currentRender.textContent !== "" || previousRender.textContent !== "") {
         currentRender.textContent += ".";
    }
}

// add operations to display
btnOperatorAll.forEach((operation=>{
    operation.onclick = function (){
        currentRender.textContent +=operation.innerHTML
    }
}))

// calculation
equalsBtn.addEventListener("click",()=>{
    try {
         let expression = currentRender.textContent;
         expression = expression.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
         currentRender.textContent = eval(expression);
    } catch (error) {
        currentRender.textContent = "Invalid Error";
    }
})
