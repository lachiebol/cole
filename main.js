

function randomNumber(max) {
    return Math.random() * max
}

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
    }
}


window.setInterval(cole,500);


cole();
