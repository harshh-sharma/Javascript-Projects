function backgroundColorChanger(id){
    const body = document.querySelector('#Background-image-container');
    if(id === 'one' || id === 'first'){
        body.style.backgroundImage = 'url(https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg?auto=compress&cs=tinysrgb&w=600)';
        body.style.backgroundPosition= 'center' ;
        body.style.backgroundSize = 'contain';
        body.style.backgroundColor = 'white'
    }
    else if(id === 'two' || id === 'second'){
        body.style.backgroundImage = 'url(https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600)';
        body.style.backgroundPosition= 'center' ;
        body.style.backgroundSize = 'contain';
        body.style.backgroundColor = 'white'
    }
    else{
        body.style.backgroundImage = 'url(https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=600)';
        body.style.backgroundPosition= 'center' ;
        body.style.backgroundSize = 'contain';
        body.style.backgroundColor = 'white'
    }
}

const images = document.querySelector('#image-container');
images.addEventListener('click',function(e){
    console.log(e.target.id);
    backgroundColorChanger(e.target.id);
})