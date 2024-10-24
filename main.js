

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

    for (let span of spans) {
        span.classList.add('animation');

        if(span.classList.contains('rotated')) {
            content.style.transform=`rotate(${randomNumber(1)}turn)`;
            
            content.style.left=`${randomNumber(window.innerWidth)}px`;
            content.style.top=`${randomNumber(window.innerHeight)}px`;
            span.classList.remove('rotated');
        } else {
            content.style.transform=`rotate(${randomNumber(1)}turn)`;
            span.classList.add('rotated');
            content.style.left=`${randomNumber(window.innerWidth)}px`;
            content.style.top=`${randomNumber(window.innerHeight)}px`;
        }


        let letters=span.children;
        for(let letter of letters) {

            let newColourIndex=Math.floor(randomNumber(rainbowColours.length));

            letter.style.color=`${rainbowColours[newColourIndex]}`;
        }
    }
}


window.setInterval(cole,500);


cole();
