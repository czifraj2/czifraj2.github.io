// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
        "img/2.gif",
        "img/4.gif",
        "img/8.gif",
        "img/16.gif",
        "img/32.gif",
        "img/64.gif",        
        "img/128.gif",
        "img/256.gif",
        "img/512.gif",        
        "img/1024.gif",
        "img/2048.gif",


    ];
    for(var i = 0; i < imageList.length; i++ ) 
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
