




const img = document.getElementsByClassName("img")[0];
const btn = document.getElementsByClassName("btn")[0];

btn.addEventListener("click", event => {

    if (img.style.visibility == "hidden") 
        
        {
        img.style.visibility = "visible";
        btn.textContent = "Hide";
    } 
    
    else
    
    {
        img.style.visibility = "hidden";
        btn.textContent = "Show";
    }

});



 
