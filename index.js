//function for first part of the message
const firstMessage = () => {
    const starSigns = ['An Aries', 'A Taurus', 'A Gemini', 'A Cancer', 'A Leo', 'A Virgo', 'A Libra', 'A Scorpio', 'A Saggitarius', 'A Capricorn', 'An Aquarius', 'A Piceses'];
    let i = Math.floor(Math.random() * starSigns.length);
    return starSigns[i];
}

// console.log(firstMessage());

const secondMessage = () => {
    const info = ['will enter your life', 'might bring issue', 'is someone to be wary of', 'is in the cards'];
    let i = Math.floor(Math.random() * info.length);
    return info[i];
}

const thirdMessage = () => {
    const message = ['and things might get a little sticky', 'beware of new relationships', 'but despite the bad times things will work out', 'so stop holding back', 'this might just be the sign you needed'];
    let i = Math.floor(Math.random() * message.length);
    return message[i];
}

console.log(`${firstMessage()} ${secondMessage()}, ${thirdMessage()}.`);