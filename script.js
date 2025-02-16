const input = document.querySelector("input")
const buttons = document.querySelectorAll("button")
let resultString = ""

let arr = Array.from(buttons)

const evaluateExpression = (expression) => {
    try{
        return new Function("return " + expression)();
    }
    catch{
        return "Syntax Error"
    }
}

arr.forEach(button => {
    button.addEventListener("click",(e) => {
        if(e.target.innerHTML === "=")
        {
           resultString = evaluateExpression(resultString)
           input.value = resultString
        }

        else if(e.target.innerHTML === "AC")
        {
            resultString = ""
            input.value = resultString
        }

        else if(e.target.innerHTML === "DEL")
        {
            resultString = resultString.slice(0,resultString.length-1)
            input.value = resultString
        }

        else{
            resultString = resultString + e.target.innerHTML
            input.value = resultString
        }
    })
})





