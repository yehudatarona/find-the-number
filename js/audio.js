import {  $language } from "./create.js";
export const $audioTag = document.getElementById('audio');

export const soundsUrl = {
    wrong: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/250758/wronganswer.mp3',
    correct: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/250758/rightanswer.mp3',
    he: {
        where: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/250758/number_where.mp3',
        0: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/250758/number_0.mp3',
        1: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/250758/number_1.mp3',
        2: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/250758/number_2.mp3',
        3: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/250758/number_3.mp3',
        4: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/250758/number_4.mp3',
        5: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/250758/number_5.mp3',
        6: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/250758/number_6.mp3',
        7: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/250758/number_7.mp3',
        8: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/250758/number_8.mp3',
        9: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/250758/number_9.mp3'
    },
    en: {
        where: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/250758/number_where.en.mp3',
        0: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/250758/number_0.en.mp3',
        1: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/250758/number_1.en.mp3',
        2: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/250758/number_2.en.mp3',
        3: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/250758/number_3.en.mp3',
        4: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/250758/number_4.en.mp3',
        5: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/250758/number_5.en.mp3',
        6: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/250758/number_6.en.mp3',
        7: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/250758/number_7.en.mp3',
        8: 'https://s3-us-west-2.amazonaws.com/s.scdpn.io/250758/number_8.en.mp3',
        9: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/250758/number_9.en.mp3'
    }
};

export const playSound = (language, sound)=>{
    $audioTag.src = soundsUrl[language][sound];
    // console.log('playSound-$audioTag.src-->'),  $audioTag.src;
    $audioTag.play();
    
}

export const playSounds = (num)=>{
    playSound($language.value, 'where');
    setTimeout(()=>{
        playSound($language.value, num)
        
    }, 1600)

}
