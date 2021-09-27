const input = document.querySelectorAll('.angle-input');
const checkBtn = document.querySelector('#chech-triangle-btn');
const output = document.querySelector('.output-container');


function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}
checkBtn.addEventListener('click', () => {
    const sumOfAngles = calculateSumOfAngles(Number(input[0].value), Number(input[1].value), Number(input[2].value));
    if (sumOfAngles === 180) {
        output.innerText = 'Yeah, This angle form a Triangle 👌';
    } else {
        output.innerText = 'No no 🙅‍♂️, it does not form Triangle';
    }
})