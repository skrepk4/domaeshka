document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("drinkSelect").addEventListener("change", (event) => {
        const drinkMessage = {
            coffee: "ви вибрали каву",
            tea: "ви вибрали чай",
            juice: "ви вибрали сік"
        };
        document.getElementById("drinkMessage").innerText = drinkMessage[event.target.value];
    });

    document.getElementById("checkDayButton").addEventListener("click", () => {
        const dayInput = document.getElementById("dayInput").value.trim().toLowerCase();
        const workDays = ["понеділок", "вівторок", "середа", "четвер", "п'ятниця"];
        const weekendDays = ["субота", "неділя"];

        let message = "невірний день тижня";
        if (workDays.includes(dayInput)) {
            message = "це робочий день";
        } else if (weekendDays.includes(dayInput)) {
            message = "це вихідний день";
        }
        document.getElementById("dayMessage").innerText = message;
    });

    document.getElementById("checkSeasonButton").addEventListener("click", () => {
        const month = parseInt(document.getElementById("monthInput").value);
        let message = "невірний номер місяця.";

        if (month >= 1 && month <= 12) {
            if ([12, 1, 2].includes(month)) {
                message = "це зима";
            } else if ([3, 4, 5].includes(month)) {
                message = "це весна";
            } else if ([6, 7, 8].includes(month)) {
                message = "це літо";
            } else if ([9, 10, 11].includes(month)) {
                message = "це осінь";
            }
        }
        document.getElementById("seasonMessage").innerText = message;
    });

    document.getElementById("checkDaysButton").addEventListener("click", () => {
        const month = parseInt(document.getElementById("daysMonthInput").value);
        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        let message = "Невірний номер місяця.";
        if (month >= 1 && month <= 12) {
            message = `У цьому місяці ${daysInMonth[month - 1]} днів.`;
        }
        document.getElementById("daysMessage").innerText = message;
    });

    document.getElementById("checkColorButton").addEventListener("click", () => {
        const color = document.getElementById("colorInput").value.trim().toLowerCase();
        const colorMessages = {
            червоний: "стоп",
            зелений: "йти",
            жовтий: "чекати"
        };
        const message = colorMessages[color] || "невідомий колір.";
        document.getElementById("colorMessage").innerText = message;
    });

document.getElementById("calcButton").addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;

let result;
    if (operation === "/" && num2 === 0) {
        result = "Ділення на нуль неможливе.";
    } else {
        switch (operation) {
            case "+": result = num1 + num2; break;
            case "-": result = num1 - num2; break;
            case "*": result = num1 * num2; break;
            case "/": result = num1 / num2; break;
            default: result = "Невідома операція.";
        }
    }
    document.getElementById("calcResult").innerText = `Результат: ${result}`;
    });
});