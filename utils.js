function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
}


function celciusToFahrenhei(celcius){
    return (celcius * 9/5) + 32;
}

module.exports = {
generateRandomNumber,
celciusToFahrenhei
};