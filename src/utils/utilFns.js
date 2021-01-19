function randomColor() {
    return (
        'rgb(' +
        Math.floor(Math.random() * 255) +
        ',' +
        Math.floor(Math.random() * 255) +
        ',' +
        Math.floor(Math.random() * 255) +
        ')'
    );
}

function randomColorStyle(){
    return {backgroundColor: randomColor()}
}

function randomNumber() {
    return  Math.floor(Math.random() * 100)
}

function generateKey() {
    return generateKey.id++
}
generateKey.id=0;

export {randomColorStyle,randomNumber,generateKey}