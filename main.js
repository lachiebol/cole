

function randomNumber(max) {
    return Math.random() * max
}



function coleLikesCounterStrike(text) {
    let words=text.split(' ');
    for (let word of words) {

        let content = document.getElementById('cole');


        let wordDiv=document.createElement('div');
        content.appendChild(wordDiv);
        for(let letter of word) {
            
            let span=document.createElement('span');
            span.textContent=letter;
            span.style.transition='color 250ms linear';

            wordDiv.appendChild(span);
        }
    }
}

coleLikesCounterStrike('Cole is fucking men');


let rainbowColours=[
    "#9400D3",
    "#4B0082",
    "#0000FF",
    "#00FF00",
    "#FFFF00",
    "#FF7F00",
    "#FF0000",
]

function cole() {
    let content = document.getElementById('cole');

    let spans=content.children;

    let {width,height} = content.getBoundingClientRect();
    for (let span of spans) {
        span.classList.add('animation');

        if(span.classList.contains('rotated')) {
            content.style.transform=`rotate(${randomNumber(1)}turn)`;
            
            content.style.left=`${randomNumber(window.innerWidth-width)}px`;
            content.style.top=`${randomNumber(window.innerHeight-height)}px`;
            span.classList.remove('rotated');
        } else {
            content.style.transform=`rotate(${randomNumber(1)}turn)`;
            span.classList.add('rotated');
            content.style.left=`${randomNumber(window.innerWidth-width)}px`;
            content.style.top=`${randomNumber(window.innerHeight-height)}px`;
        }


        let letters=span.children;
        for(let letter of letters) {

            let newColourIndex=Math.floor(randomNumber(rainbowColours.length));

            letter.style.color=`${rainbowColours[newColourIndex]}`;
        }
    }
}



document.body.addEventListener("mousemove", function () {
    const audio = document.querySelector("audio");
    audio.volume = 0.01;
    var resp = audio.play();

    if (resp!== undefined) {
        resp.then(_ => {
            // autoplay starts!
        }).catch(error => {
        //show error
        });
    }
})


window.setInterval(cole,500);


cole();
