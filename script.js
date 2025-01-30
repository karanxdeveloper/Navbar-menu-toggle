const toggleBtn = document.getElementById("toggleBtn")
let menu = document.querySelector(".pages")
console.log(toggleBtn)
console.log(menu)

toggleBtn.addEventListener("click",(e)=>{
   if(menu.classList.contains("show")){
    menu.classList.remove("show")
   }else{
    menu.classList.add("show")
   }
    
   
})