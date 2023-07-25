// create an empty string for the text to go on the screen to show up
screenText = ''

// select all the buttons on the calculator
let btns = document.querySelectorAll('button');


// go through the NodeList of buttons and add a click listener to each
btns.forEach(button => {
    // use the addEventListener method to each button 
    button.addEventListener('click', (e) => 
    {
    // assign entry to the innerText of each button (target)
    let entry = e.target.innerText
    // x isnt used for multiplying in JS so need to change to *
    if(entry === 'x')
    {
        screenText += '*'
       
    } 
    // if = is pressed then need to evaluate
    else if(entry === '=')
    {
        // super cool eval function for JS to eval strings!
        screenText = eval(screenText)
        
    } 
    // concat the entry to screenText
    else 
    {
        screenText += entry
    
    }
    // replace the innerText of the screen class with the screenText 
    document.querySelector('.screen').innerText = screenText
      
    })

});

