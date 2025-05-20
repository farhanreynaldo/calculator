const operate = function (value_1, operator, value_2) {
    if (operator === "+") {
        return Number(value_1) + Number(value_2);
    } else if (operator === "-") {
        return Number(value_1) - Number(value_2);
    } else if (operator === "*") {
        return Number(value_1) * Number(value_2);
    } else if (operator === "÷") {
        return Number(value_1) / Number(value_2);
    } else {
        return undefined;
    }
};

let display = "";
let operator = "";
let value_1 = "";
let value_2 = "";

const buttonMap = {
    clear: "AC",
    plusminus: "+/-",
    percent: "%",
    divide: "÷",
    times: "×",
    minus: "−",
    plus: "+",
    dot: ".",
    equal: "=",
    7: "7",
    8: "8",
    9: "9",
    4: "4",
    5: "5",
    6: "6",
    1: "1",
    2: "2",
    3: "3",
    0: "0",
};

const populateDisplay = function (key) {
    if (key === "AC") {
        operator = "";
        value_1 = "";
        value_2 = "";
    } else if (key === "=") {
        let result = operate(value_1, value_2, operator);
        value_1 = result;
        value_2 = "";
        operator = "";
    } else if (["+", "-", "x", "÷"].includes(key)) {
        operator = key;
    } else {
        if (!value_1) {
            value_2 = key;
        } else {
            value_1 = key;
        }
    }
    display = `${value_1}${operator}${value_2}`;
    screenDiv.textContent = display;
};

const buttonList = [
    ["clear", "plusminus", "percent", "divide"],
    ["7", "8", "9", "times"],
    ["4", "5", "6", "minus"],
    ["1", "2", "3", "plus"],
    ["0", "dot", "equal"],
];

buttonsContainer = document.querySelector(".buttons-container");
for (const line of buttonList) {
    const lineDiv = document.createElement("div");
    lineDiv.classList.add("line-container");
    buttonsContainer.appendChild(lineDiv);
    for (const button of line) {
        const buttonDiv = document.createElement("button");
        buttonDiv.classList.add(`button`);
        buttonDiv.id = button;
        buttonDiv.textContent = buttonMap[button];
        lineDiv.appendChild(buttonDiv);
    }
}

screenDiv = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonValue = buttonMap[button.id];
        populateDisplay(buttonValue);
    });
});
