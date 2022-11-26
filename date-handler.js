
const getDate = () => { 
    const rawDate = new Date();

    const formattedDate = rawDate.toLocaleDateString().replaceAll("/",".");
    
    document.getElementById("date").innerHTML = formattedDate;

}
const getTime = () => { 
    const rawDate = new Date();

    const formattedDate = rawDate.toLocaleTimeString().replaceAll("/",".");
    
    document.getElementById("time").innerHTML = formattedDate;

}
window.onload = () =>{
    getDate();
    getTime();
    setInterval(getTime,1000);
}

