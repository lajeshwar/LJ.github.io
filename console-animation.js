consoleText(['Hello '], 'hello-text');

  function consoleText(words, id) {
    
    var letterCount = 1; //inital letter count
    var x = 1; // position of the letter?
    var waiting = false; // check if letter is all written
    var target = document.getElementById(id) //text id is the target
    
   const run = window.setInterval(function (){
           
      if (letterCount === 0 && waiting === false) { // if letter in the console TExt is not empty and we are not waiting for text, do the following 
        waiting = true; //wait for the text to show
        target.innerHTML = words[0].substring(0, letterCount) //add the first word to the html text
        words.push(usedWord); // get the word out
          x = 1; //reset x pos
          letterCount += x; //add to the count ; 
          waiting = false; // now we can go to next letter
      } 
       
      else if (waiting === false && letterCount != words[0].length+1) {
        target.innerHTML = words[0].substring(0, letterCount);
        letterCount += x;
        } 
        else{
            target.innerHTML += '<red>'+"."+'</red>';
            clearInterval(run);
        }
    },200)
   
    

  }

  