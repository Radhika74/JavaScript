const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach(function(button) {
    console.log(button)
    //event listener 
    button.addEventListener('click', function(e) {
        console.log(e)
        console.log(e.target)
        if(e.target.id=='grey') {
            body.style.backgroundColor = 'grey';
        } else if(e.target.id=='pink'){
            body.style.backgroundColor = 'pink';
        } else if(e.target.id=='blue'){
            body.style.backgroundColor ='blue';
        } else if(e.target.id=='yellow'){
            body.style.backgroundColor ='yellow';
        } else if (e.target.id=='red'){
            body.style.backgroundColor ='red';
        } else if (e.target.id=='green'){
            body.style.backgroundColor ='green';
        } 
    });
    });


