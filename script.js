function startTheParty() {
    document.body.style.backgroundColor = 'hsl('+hue+', 80%, 70%)';
    document.body.style.color = 'hsl('+(hue+180)+', 80%, 70%)';
    hue++
    if(hue > 359) {hue = 0}
}

document.querySelector(".end").disabled = 1;
let hue = 0;
let interval = [];
let startPartyButton = document.querySelector('.start');
startPartyButton.onclick = function() {
    document.querySelector(".ice-cream-img").src = 'ice-cream-go.gif'
    interval = setInterval(startTheParty,0.1);
    document.querySelector(".start").disabled = 1;
    document.querySelector(".end").disabled = 0;
};

let endPartyButton = document.querySelector('.end');
endPartyButton.onclick = function() {
    document.querySelector(".ice-cream-img").src = 'ice-cream-stop.gif';
    document.body.style.backgroundColor = 'darkgrey';
    clearInterval(interval);
    document.querySelector(".start").disabled = 0;
    document.querySelector(".end").disabled = 1;
};
