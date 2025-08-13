const operations={
    '/':'/',
    '*':'*',
    '+':'+',
    '-':'-',
}

class Calculator{
    constructor(previousDisplay,currentDisplay) {
        this.previousDisplay=previousDisplay;
        this.currentDisplay=currentDisplay;
        this.clear();
    }
    clear(){
        this.previousOperand='';
        this.currentOperand='';
        this.updateDisplay();
    }
    delete(){
        this.currentOperand=this.currentOperand.toString().slice(0, -1);
        this.updateDisplay();
    }
    appendCharacter(character){
        this.currentOperand+=character;
        this.updateDisplay();
    }

    compute(){
        if (this.currentOperand==='') 
            return;
        try{
            let expression=this.currentOperand.replace(/÷/g, '/');
            const result=eval(expression);

            if (!isFinite(result)) {
                throw new Error("Invalid calculation");
            }
            this.previousOperand=`${this.currentOperand} =`;
            this.currentOperand=result.toString();
        } catch (error){
            this.previousOperand='';
            this.currentOperand='Error';
        }
        this.updateDisplay();
    }
    updateDisplay(){
        this.currentDisplay.innerText=this.currentOperand;
        this.previousDisplay.innerText=this.previousOperand;
    }
}

const numberButtons=document.querySelectorAll('[data-number]');
const equalsButton=document.querySelector('[data-equals]');
const operationButtons=document.querySelectorAll('[data-operation]');
const deleteButton=document.querySelector('[data-delete]');
const bracketButtons=document.querySelectorAll('[data-bracket]');
const allClearButton=document.querySelector('[data-all-clear]');
const previousOperand=document.querySelector('[data-previous-operand]');
const currentOperand=document.querySelector('[data-current-operand]');

const calculator=new Calculator(previousOperand,currentOperand);

allClearButton.addEventListener('click',() => calculator.clear());
deleteButton.addEventListener('click',() => calculator.delete());
equalsButton.addEventListener('click',() => calculator.compute());

numberButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.appendCharacter(button.innerText);
    });
});

operationButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.appendCharacter(button.innerText);
    });
});

bracketButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.appendCharacter(button.innerText);
    });
});