let main = document.getElementsByTagName("main")[0]
let matrix = []
let last = 0
let selected = []
let countrow = 5


function MatrixIndex(i) {
    return [matrix.length/i,matrix%i]
}
function Loader() {
    for (let i = 0; i < 15; i++) {
        let row = []
        for (let j = 0; j < 10; j++) {
            let div = document.createElement("div")
            div.classList.add("element")
            div.style.width = "50px"
            div.style.height = "50px"
            main.appendChild(div)
            row.push(0)
        }
        matrix.push(row)
    }
    AddRows()

}

function AddRows() {
    if (countrow>0) {
        countrow--
        let rowbutton = document.querySelector("footer>button")
        let rowrect = rowbutton.getBoundingClientRect()
        let count = document.createElement("p")
        count.textContent = countrow
        count.style.left = rowrect.width+105+"px"
        count.style.top = "-"+rowrect.height/2+"px"
        rowbutton.appendChild(count)
        rowbutton.replaceChildren("+",count)
        for (let x = 0; x < 30; x++) {
            let button = document.createElement("button")
            button.onclick = function(){
                button.style.backgroundColor = "lightblue"
                if (selected.length == 2) {
                    
                    selected.forEach(element => {
                        element.style.backgroundColor = "rgb(220, 229, 236)"
                        console.log(element)
                    });
                    selected = []
                    selected.push(button)
                }else if(selected.length==1 && selected[0] != button){
                    selected.push(button)
                    let first = selected[0].name
                    let second = selected[1].name

                    if ((selected[0].textContent == selected[1].textContent || parseInt(selected[0].textContent) + parseInt(selected[1].textContent) == 10 ) && (Math.abs(first-second) == 1 || Math.abs(first-second) == 10 || Math.abs(first-second) == 11 || Math.abs(first-second) == 9)) {
                        let text1 = document.createElement("h2")
                        text1.textContent = selected[0].textContent
                        main.childNodes[first].appendChild(text1)
                        let text2 = document.createElement("h2")
                        text2.textContent = selected[1].textContent
                        main.childNodes[second].appendChild(text2)
                        selected.forEach(element => {
                            element.remove()
                            console.log(element)
                        });
                        selected = []
                    }else{
                        selected.forEach(element => {
                            element.style.backgroundColor = "rgb(220, 229, 236)"
                            console.log(element)
                        });
                        selected = []
                    }
                }
                else if(selected.length==1 && selected[0] == button){
                    selected[0].style.backgroundColor = "rgb(220, 229, 236)"
                    selected = []
                }
                else{
                    selected.push(button)
                }
            }
            let r = Math.floor(Math.random() * 9)
            button.textContent = r
            //matrix[Math.floor(matrix.length/x+1)][matrix%x+1] = r
            console.log(Math.floor(matrix.length/x))
            console.log(matrix%x)
            button.name = last+x
            main.childNodes[last+x].appendChild(button)
            
        }
        last += 30
    }
    
}
function Select(button) {
    button.style.backgroundcolor = "blue"
}

window.onload = function(){
    Loader()
}