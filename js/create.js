import selectedAnswer from "./viewEvents.js";
import {playSounds} from "./audio.js";

export const $board = document.getElementById('board'),
    $language = document.getElementById('language'),
    numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

 export const createLevel = () => {
    $board.innerHTML = '';
    const random = Math.floor(Math.random() * 10);
    $board.dataset.answer = random;
    playSounds(random);

    const currentAnswr = shuffle(numbers);

    currentAnswr.forEach(number => {
        const liElement = document.createElement('li');
        liElement.innerText = number;
        liElement.dataset.id = number;
        $board.appendChild(liElement);
    });

    const playButton = document.createElement('li');
    playButton.classList.add('play-again');
    playButton.dataset.id ='play-again';
    $board.appendChild(playButton);
}

const shuffle = (num_ar) => {
    // console.log("num_ar ->", num_ar);
    let counter = num_ar.length;
    while(counter>0){
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp_ar = num_ar[counter];
        num_ar[counter] = num_ar[index];
        num_ar[index] = temp_ar;
    }
    return num_ar;
}
$board.addEventListener('click', selectedAnswer);

export default createLevel;