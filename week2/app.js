const number = document.getElementById("counting-num");

let count = 0;
number.textContent = count;

// +1 버튼
const incButton = document.getElementById("increase");

function increaseCount() {
    count++; // count = count + 1
    number.textContent = count; // 숫자 변화 반영
}

incButton.addEventListener("click", increaseCount);

// -1 버튼
const decButton = document.getElementById("decrease");

function decreaseCount() {
    count--; // count = count - 1
    number.textContent = count; // 숫자 변화 반영
}

decButton.addEventListener("click", decreaseCount);

// RESET 버튼
const resetButton = document.getElementById("reset")

function resetCount() {
    count = 0; // count = 0
    number.textContent = count; // 숫자 변화 반영
}

resetButton.addEventListener("click", resetCount);

// +10 버튼
const incTenButton = document.getElementById("increaseTen");

function increaseTenCount() {
    count += 10; // count = count + 1
    number.textContent = count; // 숫자 변화 반영
}

incTenButton.addEventListener("click", increaseTenCount);

// 110 버튼
const decTenButton = document.getElementById("decreaseTen");

function decreaseTenCount() {
    count -= 10; // count = count + 1
    number.textContent = count; // 숫자 변화 반영
}

decTenButton.addEventListener("click", decreaseTenCount);