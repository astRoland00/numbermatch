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
        for (let j = 0; j < 8; j++) {
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
        count.style.left = rowrect.width/3+"vw"
        count.style.top = "-"+rowrect.height/2+"vw"
        document.querySelector("footer").appendChild(count)
        document.querySelector("footer").replaceChildren(rowbutton,count)
        for (let x = 0; x < 30; x++) {
            let button = document.createElement("button")
            button.classList.add("block")
            button.addEventListener('touchend', function (ev) {
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

                    if ((selected[0].textContent == selected[1].textContent || parseInt(selected[0].textContent) + parseInt(selected[1].textContent) == 10 ) && (Math.abs(first-second) == 1 || Math.abs(first-second) == 8 || Math.abs(first-second) == 7 || Math.abs(first-second) == 9 )) {
                        let text1 = document.createElement("h2")
                        text1.textContent = selected[0].textContent
                        main.childNodes[first-1].appendChild(text1)
                        let text2 = document.createElement("h2")
                        text2.textContent = selected[1].textContent
                        main.childNodes[second-1].appendChild(text2)
                        selected.forEach(element => {
                            element.remove()
                            console.log(element)
                        });
                        selected = []
                    }else if(((selected[0].textContent == selected[1].textContent || parseInt(selected[0].textContent) + parseInt(selected[1].textContent) == 10 )&&(((Math.abs(first-second)%8)+((Math.abs(first-second)%8)*0.125) == Math.abs(first-second)/8)||((Math.abs(first-second)%8)-((Math.abs(first-second)%8)*0.125)-3.5 == Math.abs(first-second)/8)))&&(CheckBetween(first,second,+9)||CheckBetween(first,second))){
                        let text1 = document.createElement("h2")
                        text1.textContent = selected[0].textContent
                        main.childNodes[first-1].appendChild(text1)
                        let text2 = document.createElement("h2")
                        text2.textContent = selected[1].textContent
                        main.childNodes[second-1].appendChild(text2)
                        selected.forEach(element => {
                            element.remove()
                            console.log("jo es keresztbe van")
                        });
                        selected = []
                    }
                    else{
                        selected.forEach(element => {
                            element.style.backgroundColor = "rgb(220, 229, 236)"
                            console.log("bukott")
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
            })
            button.addEventListener('click', function (ev) {
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

                    if ((selected[0].textContent == selected[1].textContent || parseInt(selected[0].textContent) + parseInt(selected[1].textContent) == 10 ) && (Math.abs(first-second) == 1 || Math.abs(first-second) == 8 || Math.abs(first-second) == 7 || Math.abs(first-second) == 9 )) {
                        let text1 = document.createElement("h2")
                        text1.textContent = selected[0].textContent
                        main.childNodes[first-1].appendChild(text1)
                        let text2 = document.createElement("h2")
                        text2.textContent = selected[1].textContent
                        main.childNodes[second-1].appendChild(text2)
                        selected.forEach(element => {
                            element.remove()
                            console.log(element)
                        });
                        selected = []
                    }else if(((selected[0].textContent == selected[1].textContent || parseInt(selected[0].textContent) + parseInt(selected[1].textContent) == 10 )&&(((Math.abs(first-second)%8)+((Math.abs(first-second)%8)*0.125) == Math.abs(first-second)/8)||((Math.abs(first-second)%8)-((Math.abs(first-second)%8)*0.125)-3.5 == Math.abs(first-second)/8)))&&(CheckBetween(first,second,+9)||CheckBetween(first,second))){
                        let text1 = document.createElement("h2")
                        text1.textContent = selected[0].textContent
                        main.childNodes[first-1].appendChild(text1)
                        let text2 = document.createElement("h2")
                        text2.textContent = selected[1].textContent
                        main.childNodes[second-1].appendChild(text2)
                        selected.forEach(element => {
                            element.remove()
                            console.log("jo es keresztbe van")
                        });
                        selected = []
                    }
                    else{
                        selected.forEach(element => {
                            element.style.backgroundColor = "rgb(220, 229, 236)"
                            console.log("bukott")
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
            })
            let r = Math.floor(Math.random() * 9)
            button.textContent = r
            //matrix[Math.floor(matrix.length/x+1)][matrix%x+1] = r

            button.name = last+x+1
            main.childNodes[last+x].appendChild(button)
            
        }
        last += 30
    }
    
}
function CheckBetween(first,second) {
    let start
    let dif
    if (parseInt(first)<parseInt(second)) {
        start = parseInt(first)
    }else{
        start = parseInt(second)
    }
    if (Math.abs(first-second)%7==0) {
        dif=7
    }else if(Math.abs(first-second)%8==0){
        dif = 8
    }else if(Math.abs(first-second)%9==0){
        dif = 9
    }


    

    for (let i = 1; i < Math.round(Math.abs(parseInt(first)-parseInt(second))/8); i++) {
        const currentNode = main.childNodes[start - 1 + (parseInt(dif) * i)]
        console.warn(currentNode.childNodes[0])
        console.log(parseInt(dif) * i)
        console.log("eddig megy: "+(Math.abs(parseInt(first)-parseInt(second))/8))
        
        if (!currentNode || currentNode.childNodes[0].classList.contains("block")) {
            console.log(`rossz ${start + (dif * i)} -> ${+(dif * i)} -> ${i}`)
            return false;
        }
    }
    console.log("atment")
    return true;
    
}
function Select(button) {
    button.style.backgroundcolor = "blue"
}

window.onload = function(){
    Loader()
}