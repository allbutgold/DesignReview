
document.getElementById("darkMode").addEventListener("click", ()=>{
    if (document.body.style.backgroundColor === "white") {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        
        
        
    } else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
    }
})
