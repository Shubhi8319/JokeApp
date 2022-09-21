let form = document.querySelector("form")
let p1 = document.querySelector(".p1")
let p2 = document.querySelector(".p2")
let joke = document.querySelector(".joke")
form.addEventListener("submit",getdata)

async function getdata(e){
    e.preventDefault()
    let res = await fetch('https://official-joke-api.appspot.com/jokes/programming/random')
    let data = await res.json()
    let joke1 = data[0].setup
    let joke2 = data[0].punchline
    joke.style.display = "block"
    joke.style.padding = "10px"
    p1.innerText = joke1
    p2.innerText = joke2
    form.reset()
}


