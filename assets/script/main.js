const container = document.getElementById('container');

const initNumContainer = document.getElementById('initial-number')

const btnContainer = document.getElementById('btn-container');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const box5 = document.getElementById('box5');




// Counter's initial number (0)
const initialNum = document.createElement('p');
initialNum.textContent = '0';
initNumContainer.appendChild(initialNum);

initialNum.style.fontSize = '200px';
initialNum.style.color = 'cornflowerblue';
initialNum.style.marginBottom = '30px';
initialNum.style.padding = '10px';

//Decrement x10 button
const subTen = document.createElement('button');
subTen.innerText = '- 10';
box1.appendChild(subTen);

subTen.style.fontWeight = 'bold';
subTen.style.fontSize = '20px';
subTen.style.backgroundColor = 'none';
subTen.style.fontFamily = 'Rubik, sans-serif';
subTen.style.padding = '15px 20px';
subTen.style.border = '2px solid #95B6F7';
subTen.style.borderRadius = '30px';
subTen.style.marginRight = '20px'
subTen.style.cursor = 'pointer';

//Decrement button

const sub = document.createElement('button');
sub.innerText = '-';
box2.appendChild(sub);

sub.style.fontWeight = 'bold';
sub.style.fontSize = '20px';
sub.style.backgroundColor = 'none';
sub.style.fontFamily = 'Rubik, sans-serif';
sub.style.padding = '15px 20px';
sub.style.border = '2px solid #95B6F7';
sub.style.borderRadius = '30px';
sub.style.cursor = 'pointer';


//Reset button

const reset = document.createElement('button');
reset.innerText = 'Reset';
box3.appendChild(reset);

reset.style.fontWeight = 'bold';
reset.style.fontSize = '20px';
reset.style.backgroundColor = 'none';
reset.style.fontFamily = 'Rubik, sans-serif';
reset.style.marginLeft = '20px';
reset.style.marginRight = '20px';
reset.style.padding = '15px 20px';
reset.style.border = '2px solid #95B6F7';
reset.style.borderRadius = '30px';
reset.style.cursor = 'pointer';


//Increment button

const add = document.createElement('button');
add.innerText = '+';
box4.appendChild(add);

add.style.fontWeight = 'bold';
add.style.fontSize = '20px';
add.style.backgroundColor = 'none';
add.style.fontFamily = 'Rubik, sans-serif';
add.style.padding = '15px 20px';
add.style.border = '2px solid #95B6F7';
add.style.borderRadius = '30px';
add.style.cursor = 'pointer';


//Increment x10 button
const addTen = document.createElement('button');
addTen.innerText = '+ 10';
box5.appendChild(addTen);

addTen.style.fontWeight = 'bold';
addTen.style.fontSize = '20px';
addTen.style.backgroundColor = 'none';
addTen.style.fontFamily = 'Rubik, sans-serif';
addTen.style.padding = '15px 20px';
addTen.style.border = '2px solid #95B6F7';
addTen.style.borderRadius = '30px';
addTen.style.marginLeft = '20px'
addTen.style.cursor = 'pointer';


//Dynamic JS for the counter

let count = 0;


subTen.addEventListener('click', () => {
    count -= 10;
    initialNum.innerHTML = count;
    if(count < 0) {
        initialNum.style.color = 'navy';
    }
})

sub.addEventListener('click', () => {
    count -= 1;
    initialNum.innerHTML = count;
    if(count < 0) {
        initialNum.style.color = 'navy';
    }
})

reset.addEventListener('click', () => {
    count = 0;
    initialNum.innerHTML = count;

    if(count === 0) {
        initialNum.style.color = 'cornflowerblue';
    }
})

add.addEventListener('click', () => {
    count += 1; 
    initialNum.innerHTML = count;

    if(count >= 1) {
        initialNum.style.color = '#179bff';
    }
})

addTen.addEventListener('click', () => {
    count += 10; 
    initialNum.innerHTML = count;

    if(count >= 1) {
        initialNum.style.color = '#179bff';
    }
})


if(count > 0) {
    initialNum.style.color = '#179bff';
} else if(count < 0) {
    initialNum.style.color = 'navy';
} else {
    initialNum.style.color = 'cornflowerblue';
}



/* let count = 0;

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;

        if(styles.contains('decrease-ten')) {
            count -= 10;
        } else if(styles.contains('decrease')) {
            count--;
        } else if(styles.contains('reset')) {
            count = 0;
        } else if(styles.contains('increase')) {
            count++;
        } else {
            count += 10;
        }

        if(count > 0) {
            initialNum.style.color = '#179bff';
        } else if(count < 0) {
            initialNum.style.color = 'navy';
        } else {
            initialNum.style.color = 'cornflowerblue';
        }

        initialNum.textContent = count;
    })
}) */

//Keyboard shortcut
