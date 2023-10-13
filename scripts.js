let btn = document.querySelector("div#plus")
let icoBtn = document.querySelector("#done")
let closeBtn = document.querySelector("#close")

btn.addEventListener("click", function(){
    let text = document.querySelector("input#txtbox").value
    let title = document.querySelector("#answer")
    title.textContent = text
})
// Btn OK Settings 
icoBtn.addEventListener("mouseover", function(){
    let icon = document.querySelector("#to-do i")
    icon.style.transition = "0.6s"
    icon.style.color = "white"
})

icoBtn.addEventListener("mouseout", function(){
    let icon = document.querySelector("#to-do i")
    icon.style.color = "black"
})

/* Btn Close Settings */
closeBtn.addEventListener("mouseover", function(){
    let icon = document.querySelector("#close i")
    icon.style.transition = "0.6s"
    icon.style.color = "white"
})

closeBtn.addEventListener("mouseout", function(){
    let icon = document.querySelector("#close i")
    icon.style.color = "black"
})

closeBtn.addEventListener("click",function(){
    let title = document.querySelector("#answer")
    title.textContent = "Insira sua tarefa"
})