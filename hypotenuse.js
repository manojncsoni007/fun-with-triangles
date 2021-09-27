const input = document.querySelectorAll('.angle-input');
const checkBtn = document.querySelector('#check-hypotenuse-btn');
const output = document.querySelector('.output-container');


function calculateSumOfSquare(a, b) {
    const sumOfSquare = a * a + b * b;
    return sumOfSquare;
}
checkBtn.addEventListener('click', () => {
    const sumOfSquare = calculateSumOfSquare(Number(input[0].value), Number(input[1].value));
    const calculateHypotenuse = Math.sqrt(sumOfSquare);
    output.innerText = 'Length of Hypotenuse = ' + calculateHypotenuse;
});