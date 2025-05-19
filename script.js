const add = function (value_1, value_2) {
    return value_1 + value_2;
};

const substract = function (value_1, value_2) {
    return value_1 - value_2;
};

const multiply = function (value_1, value_2) {
    return value_1 * value_2;
};

const divide = function (value_1, value_2) {
    return value_1 / value_2;
};

const operate = function (value_1, operator, value_2) {
    return operator(value_1, value_2);
};

const buttonList = [
    ["clear", "plusminus", "percent", "divide"],
    ["7", "8", "9", "times"],
    ["4", "5", "6", "minus"],
    ["1", "2", "3", "plus"],
    ["zero", "dot", "equal"],
];

// const buttonList = [
//   ["clear", "7", "4", "1", "0"],
//   ["plusminus", "8", "5", "2", "dot"],
//   ["percent", "9", "6", "3", "equal"],
//   ["divide", "times", "minus", "plus"],
// ];

buttonsContainer = document.querySelector(".buttons-container");
for (const line of buttonList) {
    const lineDiv = document.createElement("div");
    lineDiv.classList.add("line-container");
    buttonsContainer.appendChild(lineDiv);
    for (const button of line) {
        const buttonDiv = document.createElement("div");
        buttonDiv.classList.add(`button`);
        buttonDiv.classList.add(`${button}`);
        buttonDiv.textContent = button;
        lineDiv.appendChild(buttonDiv);
    }
}
