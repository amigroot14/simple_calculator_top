// -----####-----Global Variables and DOM elements-----####-----
displayEl=document.getElementById('display')
displayEl.textContent="0"
clearBtn=document.getElementById('clear')
deleteBtn=document.getElementById('delete')
equalsBtn=document.getElementById('equals')
decimalBtn=document.getElementById('decimal')

numBtns=document.querySelectorAll('.num-btn')
opBtns=document.querySelectorAll('.op-btn')

toClearDisplay=false
firstNum=""
secondNum=""
operation="0"

// -----####-----xxxx-xxxx-xxxx-xxxx-xxxx-----####-----


// -----####-----Event Listeners-----####-----

numBtns.forEach(numBtn => {
    numBtn.addEventListener('click',()=>addToDisplay(numBtn.getAttribute('data-num')))
});

opBtns.forEach(opBtn => {
    opBtn.addEventListener('click',()=>setOperate(opBtn.getAttribute('data-num')))
})

clearBtn.addEventListener('click',()=>clear())
deleteBtn.addEventListener('click',()=>deleteFromLast())
decimalBtn.addEventListener('click',()=>addDecimal())
equalsBtn.addEventListener('click',()=>evaluate())

// -----####-----xxxx-xxxx-xxxx-xxxx-xxxx-----####-----


// -----####-----Functions-----####-----

function addToDisplay(a){
    if(displayEl.textContent==="0" || toClearDisplay) clearDisplay()
    displayEl.textContent+=a
}

function setOperate(operator){
    if (operation!=="-1") evaluate()
    operation=operator
    firstNum=displayEl.textContent
    toClearDisplay=true
}

function evaluate(){
    if (operation==="0"||toClearDisplay) return
    if (operation==="/" && displayEl.textContent==="0"){
        displayEl.textContent="Can not divide by 0!"
        setTimeout(() => {
            clear()
        }, 1000);
        return
    }
    secondNum=displayEl.textContent
    result=operate(operation,firstNum,secondNum)
    displayEl.textContent=roundToFour(result)
    operation="0"
}

function roundToFour(num){
    return (Math.round(num*10000)/10000)
}

function add(a,b=0){
    return(a+b)
}

function subtract(a,b=0){
    return(a-b)
}
function multiply(a,b=1){
    return(a*b)
}
function divide(a,b=1){
    return(a/b)
}

function operate(operation,a,b){
    a=Number(a)
    b=Number(b)
    switch (operation){
        case '+':
            return add(a,b)
        case '-':
            return subtract(a,b)
        case '*':
            return multiply(a,b)
        case '/':
            if(b==="0") return null
            else return divide(a,b)
        default: 
            return null
        
    }
}
function clearDisplay(){
    displayEl.textContent=""
    toClearDisplay=false
}

function clear(){
    displayEl.textContent="0"
    firstNum=""
    secondNum=""
    operation="0"
}

function deleteFromLast(){
    displayEl.textContent.toString().length===1?displayEl.textContent="0":displayEl.textContent=displayEl.textContent.toString().slice(0,-1)
    
}

function addDecimal(){
    if (displayEl.textContent.includes('.')) return
    displayEl.textContent=displayEl.textContent+"."
}



// -----####-----xxxx-xxxx-xxxx-xxxx-xxxx-----####-----













