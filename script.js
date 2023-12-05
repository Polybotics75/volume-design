function adjustVolumeSlide(level, kind){
    var volumeSlide = document.querySelector('.volume-slide');
    
    
    //HANDLE THE LEVEL
    var newHeight = Number((level/10)*100); //WHERE 10 IS ASSUMED TO BE THE 'MAX' VALUE OF THE VOLUME RANGE INPUT 
    volumeSlide.style.height = `${newHeight}%`;
    
    
    //HANDLE THE SLIDE COLOR
    if(volumeSlide.classList.contains('high') && kind == 'low'){
        volumeSlide.classList.remove('high');
        volumeSlide.classList.add('low');
    }else if(volumeSlide.classList.contains('low') && kind == 'high'){
        volumeSlide.classList.remove('low');
        volumeSlide.classList.add('high');
    }
}


function readVolumeInput(){
    var volumeInp = document.querySelector('input#volume');
    
    var volume = volumeInp.value;
    var kind = 'low';
    if(volume >= 8){
        kind = 'high';
    }
    
    //CHANGE VOLUME UI
    adjustVolumeSlide(volume, kind);
    
    //CHANGE RATE
    var volumeRate = document.querySelector('.volume-rate');
    volumeRate.innerText = volume;
}

readVolumeInput();


function volumeClick(e){
    var anchor = e.target.closest('div.volume-btn');
    
    
    //CREATE CLICK ANIMATION
    if(!anchor.classList.contains('clicked')){
        anchor.classList.add('clicked');
        setTimeout(function(){
            anchor.classList.remove('clicked');
            
        }, 300);
    }
    
    
    var volumeInp = document.querySelector('input#volume');
    
    var volume = Number(volumeInp.value);
    var newValue;
    
    //ARITHMETICS
    if(anchor.id == "plus"){
        newValue = eval(volume+1);
    }else if(anchor.id == 'minus'){
        newValue = eval(volume - 1);
    }
    
    if(newValue > 10){
        //SHOW ALERT
        alert('Maximum Volume Reached');
    }else if(newValue < 0){
        //SHOW ALERT
        alert('Volume Muted');
    }else{
        volumeInp.value = newValue;
        readVolumeInput();
    }
}



