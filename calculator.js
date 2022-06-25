// let string = "";
// // let screen = document.querySelector('input');
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button) => {
//     button.addEventListener('click', (e) => {
//         if (e.target.innerHTML == '=') {
//             try {
//                 string = eval(string);
//                 document.querySelector('input').value = string;
//             } catch {
//                 string = "Error!";
//                 document.querySelector('input').value = string;
//             }
//         } else if (e.target.innerHTML == 'AC') {
//             string = "";
//             document.querySelector('input').value = string;
//         } else if (e.target.innerHTML == 'C') {
//             string = string.innerHTML.slice(0, -1);
//             string = ""

//         } else {
//             string = string + e.target.innerHTML;
//             document.querySelector('input').value = string;
//         }

//     })
// })

let buttons = document.querySelectorAll('.button');
Array
    .from(buttons)
    .forEach((button) => {
        button.addEventListener("click", handel)
    })

function handel(e) {
    const display = document.getElementById("input");
    const value = e.target.innerText;
    switch (value) {
        case "AC":
            display.innerText = ""
            break;

        case "C":
            display.innerText = display.innerText.slice(0, -1)
            break;

        case "=":
            try {
                display.innerText = eval(display.innerText)
            } catch {
                display.innerText = "SYNTAX ERROR!"
            }
            break;

        default:
            display.innerText += value
            break;
    }
}