let color = document.querySelector(".color")
let butt = document.querySelector(".butt")



butt.addEventListener("click", ()=>{
    let randColor = "#" + Math.floor(Math.random()* 
    15999999).toString(16)

    document.body.style.backgroundColor = randColor
    color.textContent = randColor
})