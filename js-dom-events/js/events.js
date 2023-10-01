// step another

// {/* <button onclick="document.body.style.backgroundColor='red'">make red</button> */ }


// step another

function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}

// step another

const makeBlue1 = document.getElementById('make-blue');
makeBlue1.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// step another

const makePurple1 = document.getElementById('make-purple');
makePurple1.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}