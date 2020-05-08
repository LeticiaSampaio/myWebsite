var rotate = {};

rotate.translate = function(){
    var interval,
        counter = 0;

    interval = setInterval(function(){
        document.getElementById("cube").style.webkitTransform = "rotateY("+counter+"deg)";
        
        if (counter === 360) {
            counter = 0;
        }

        counter++;
    }, 50);

}

rotate.range = function(){
    var interval;

    interval = setInterval(function(){
        var angle_y = document.getElementById("rotate-range-Y").value;
        var angle_x = document.getElementById("rotate-range-X").value;

        document.getElementById("cube").style.webkitTransform = "rotateY("+angle_y+"deg) rotateX("+angle_x+"deg)";
    }, 20);
}


rotate.range();
// rotate.translate();