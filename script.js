const operate = function (value_1, value_2, operator) {
    let result;
    if (operator === "+") {
        result = Number(value_1) + Number(value_2);
    } else if (operator === "-") {
        result = Number(value_1) - Number(value_2);
    } else if (operator === "x") {
        result = Number(value_1) * Number(value_2);
    } else if (operator === "/") {
        result = Number(value_1) / Number(value_2);
    } else {
        return undefined;
    }
    return result.toFixed(2);
};

const buttonMap = {
    clear: "AC",
    plusminus: "+/-",
    percent: "%",
    divide: "/",
    times: "x",
    minus: "-",
    plus: "+",
    dot: ".",
    equal: "=",
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
};

let display = "";
let operator = "";
let value_1 = "";
let value_2 = "";

const resetAll = function () {
    operator = "";
    value_1 = "";
    value_2 = "";
};

const populateDisplay = function (key) {
    if (key === "AC") {
        resetAll();
    } else if (key === "=") {
        let result = operate(value_1, value_2, operator);
        value_1 = result.toString();
        value_2 = "";
        operator = "";
    } else if (["+", "-", "x", "/"].includes(key)) {
        if ((value_1 != "") & (value_2 != "")) {
            let result = operate(value_1, value_2, operator);
            value_1 = result.toString();
            value_2 = "";
            operator = "";
        }
        operator = key;
    } else if (key == "%") {
        if ((value_1 != "") & (operator == "")) {
            value_1 = (Number(value_1) / 100).toString();
        } else if ((value_2 != "") & (operator != "")) {
            value_2 = (Number(value_2) / 100).toString();
        } else {
            return;
        }
    } else if (key == "+/-") {
        if ((value_1 != "") & (operator == "")) {
            value_1 = value_1.startsWith("-")
                ? value_1.slice(1)
                : `-${value_1}`;
        } else if ((value_2 != "") & (operator != "")) {
            value_2 = value_2.startsWith("-")
                ? value_2.slice(1)
                : `-${value_2}`;
        } else {
            return;
        }
    } else {
        if (operator == "") {
            if (key == "." && value_1.includes(".")) return;
            value_1 += key;
        } else {
            if (key == "." && value_2.includes(".")) return;
            value_2 += key;
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
