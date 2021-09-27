const input = document.querySelectorAll('.angle-input');
const output = document.querySelector('.output-container');
const checkBtn = document.querySelector('#check-triangle-area');

function angleMultiplication(a, b) {
    const angleMulti = a * b;
    return angleMulti;
}

checkBtn.addEventListener('click', () => {
    const angleMulti = angleMultiplication(Number(input[0].value), Number(input[1].value));
    const areaOfTriangle = angleMulti / 2;
    output.innerText = 'The area of triangle is ' + areaOfTriangle;
});