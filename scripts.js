let btn = document.querySelector("div#plus")
let icoBtn = document.querySelector("#done")
let closeBtn = document.querySelector("#close")
let cont = 0

function clearTxt(){
    let txt = document.querySelector("input#txtbox")
    txt.value = ""
    txt.focus()
}

function removeTask(target){
    target = target.parentNode
    target.parentNode.removeChild(target)
}

function addTask(target){
    if(target.id != "to-do"){
    target = target.parentNode}

    if(target.classList.contains("complete")){
        target.classList.remove("complete")
    }else{
    target.classList.add("complete")
    console.log(target.classList)}
}

btn.addEventListener("click", function(){
    const text = document.querySelector("input#txtbox").value

    if(!text){
        document.querySelector("input#txtbox").focus()
        return
    }
    //Select and clone the template
    const template = document.querySelector("#to-do")
    const NewTask = template.cloneNode(true)
    //Removing the ID
    NewTask.removeAttribute("id")

    //Changing the text
    NewTask.querySelector("p").textContent = text
    
    //Remove class
    NewTask.classList.remove("template")

    //Make appear
    NewTask.style.display = "flex"

    //Add item at page
    document.body.appendChild(NewTask)

      

    //Add Remove Event
    const removeBtn = NewTask.querySelector(".removeBtn").addEventListener("click", function(){ removeTask(this)})

    //Add Complete Event
    const addBtn = NewTask.querySelector(".doneBtn").addEventListener("click", function(){
        addTask(this)
    })
    //clear the text
    clearTxt()

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

icoBtn.addEventListener("click", function(){
    window.alert("Hi")
    this.blur()
    if(this.classList.contains("complete")){
        this.classList.remove("complete")
        this.classList.add("to-do")
    }else{
        this.classList.remove("to-do")
        this.classList.add("complete")
    }
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