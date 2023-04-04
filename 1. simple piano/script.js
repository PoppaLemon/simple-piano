let one = document.getElementById("first");
let two = document.getElementById("second");
let three = document.getElementById("third");
let four = document.getElementById("fourth");
let five = document.getElementById("fifth");
let six = document.getElementById("sixth");


one.onclick = function() {
    const audioOne = new Audio("tune/E.mp3");
    audioOne.play();

    one.style.opacity = 0.90;
    one.style.borderColor = "#A5D7E8";
    setTimeout(
    function() {
        one.style.opacity = 1;
        one.style.borderColor = "#19376D";
    }, 200
    );
    }

two.onclick = function() {
    const audioTwo = new Audio("tune/B.mp3");
    audioTwo.play();

    two.style.opacity = 0.90;
    two.style.borderColor = "#A5D7E8";
    setTimeout(
        function(){
        two.style.opacity = 1;
        two.style.borderColor = "#19376D";
        }, 200
    );
}

three.onclick = function() {
    const audioThree = new Audio("tune/G.mp3");
    audioThree.play();

    three.style.opacity = 0.90;
    three.style.borderColor = "#A5D7E8";
    setTimeout(
        function(){
        three.style.opacity = 1;
        three.style.borderColor = "#19376D";
        }, 200
    );
}

four.onclick = function() {
    const audioFour = new Audio("tune/D.mp3");
    audioFour.play();

    four.style.opacity = 0.90;
    four.style.borderColor = "#A5D7E8";
    setTimeout(
        function(){
        four.style.opacity = 1;
        four.style.borderColor = "#19376D";
        }, 200
    );
}

five.onclick = function() {
    const audioFive = new Audio("tune/A.mp3");
    audioFive.play();

    five.style.opacity = 0.90;
    five.style.borderColor = "#A5D7E8";
    setTimeout(
        function(){
       five.style.opacity = 1;
       five.style.borderColor = "#19376D";
        }, 200
    );
}

six.onclick = function() {
    const audioSix = new Audio("tune/Ee.mp3");
    audioSix.play();

    six.style.opacity = 0.90;
    six.style.borderColor = "#A5D7E8";
    setTimeout(
        function(){
        six.style.opacity = 1;
        six.style.borderColor = "#19376D";
        }, 200
    );
}


document.onkeyup = function(e){
    if (e.key === "Q" || e.key === "q") {
        one.onclick();
    }
    else if(e.key === "W" || e.key === "w"){
        two.onclick();
    }
    else if(e.key === "E" || e.key === "e"){
        three.onclick();
    }
    else if(e.key === "R" || e.key === "r"){
        four.onclick();
    }
    else if(e.key === "T" || e.key === "t"){
        five.onclick();
    }
    else if(e.key === "Y" || e.key === "y"){
        six.onclick();
    }
}