// JavaScript can be used for more advanced video controls or interactions
document.getElementById('loopVideo').addEventListener('ended', function() {
    this.play();
}, false);