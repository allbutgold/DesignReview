const blackText = document.querySelectorAll("a");
/* for (let i = 0; i < blackText.length; i++)  */


document.getElementById("darkMode").addEventListener("click", ()=>{
    if (document.body.style.backgroundColor === "white") {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        blackText[0].style.color = "white"
        
    } else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        blackText[0].style.color = "black"
    }
})
