let button = document.querySelector("#btn")

button.addEventListener('click', e => {
    //button.style.background = 'rgb(47	53	59)'
    button.style.color = 'rgb(245 245 245)'

    //let bg = document.querySelector('body')
    //bg.style.background = "black"

    let bg = document.querySelector('body')
    bg.style.background = "black"

    
    
    let picker = document.querySelector('#cp')
    console.log(picker.value)
    bg.style.background = picker.value;
    bg.style.color = "white"
  

    

})

let button2 = document.querySelector("#btn1")

button2.addEventListener('click', e => {
    //button.style.background = 'rgb(47	53	59)'
    button2.style.color = 'rgb(245 245 245)'

    

    let bg = document.querySelector('body')
    bg.style.background = "black"
    bg.style.color = "white"

})

let button3 = document.querySelector("#btn2")

button3.addEventListener('click', e => {
    let slider = document.querySelector("#sr")
    let h1 = document.querySelector("h1")
    h1.style.fontSize = slider.value
    bg.style.color = slider.value

})


