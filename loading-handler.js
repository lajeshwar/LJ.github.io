

window.onload = async function load (){
await new Promise(resolve =>{

    requestAnimationFrame(() => {
        setTimeout(()=>{
            const right = document.getElementById("right").style.display = "flex";

            const left = document.getElementById("left").style.display = "flex";
        },300)
        resolve();
         }); 
       
})
}


