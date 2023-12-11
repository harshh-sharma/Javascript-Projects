const buttons = document.querySelectorAll('.button');
    const body = document.querySelector('body');
    buttons.forEach(function (button) {
        console.log(button);
        addEventListener('click',(e) => {
            document.querySelector('#para').style.display = 'none';
            document.querySelector('h1').style.color = 'Black';
            if(e.target.id == 'aqua'){
                body.style.backgroundColor = 'aqua';
                document.querySelector('#container').style.backgroundColor = 'black';
            }
            else if(e.target.id == 'yellow'){
                body.style.backgroundColor = 'yellow';
                document.querySelector('#container').style.backgroundColor = 'black';
            }
            else if (e.target.id == 'blue')
            {
                body.style.backgroundColor = 'blue';
                document.querySelector('#container').style.backgroundColor = 'black';
            }
            else{
                body.style.backgroundColor = 'blueviolet';
                document.querySelector('#container').style.backgroundColor = 'black';
                
            }
        })
        
    });
    