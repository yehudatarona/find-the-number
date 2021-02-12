import { $board, $language, createLevel } from "./create.js";
import { soundsUrl, $audioTag, playSound, playSounds } from "./audio.js";

const selectedAnswer = ($event) => {
    const isLiElement = $event.target.localName === "li";

    const currentSelectedAnswer = $event.target.dataset.id;
    const correctAnswer = $board.dataset.answer;
    const currentLanguage = language.value;

    if (!isLiElement) {
        return false;
    }
    const isPlayButton = $event.target.dataset.id === 'play-again';
    if (isPlayButton) {
        return playSounds(correctAnswer)
    }


    playSound(currentLanguage, currentSelectedAnswer);

    if (currentSelectedAnswer === correctAnswer) {
        $board.classList.add("correct");

        $audioTag.src = soundsUrl.correct;
        $audioTag.play();

        setTimeout(() => {
            $board.classList.remove("correct");
            createLevel();
        }, 1300);
    }
    else {
        $board.classList.add("wrong");

        $audioTag.src = soundsUrl.wrong;
        $audioTag.play();

        setTimeout(() => {
            playSound(currentLanguage, currentSelectedAnswer);

        }, 1100)

        setTimeout(() => {
            $board.classList.remove("wrong");
        }, 1300);

    }
};

export default selectedAnswer;
