var eq = document.getElementById("equation");
var buttons = document.getElementsByClassName("calc-button");
var operations = document.getElementsByClassName("operation");
var operation_value = ['-', '+', '/', '*', '.'];
var equals = document.getElementById("equals");
var anime = document.getElementById("animation")
var body = document.getElementById("body")

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        eq.value += buttons[i].innerHTML
    };
    switch (buttons[i].innerHTML) {
        case 'AC':
            buttons[i].onclick = function () {
                eq.value = '';
            };
            break;
        case 'BS':
            buttons[i].onclick = function () {
                eq.value = eq.value.slice(0, eq.value.length - 1);
            };
            break;
    }
}

for (let i = 0; i < operations.length; i++) {
    operations[i].onclick = function () {
        if (operation_value.includes(eq.value[eq.value.length - 1])) {
            eq.value = eq.value.slice(0, eq.value.length - 1);
        }
        if (!eq.value == '') {
            eq.value += operations[i].innerHTML;
        }
    }
}


equals.onclick = function () {
    var equation = eq.value;
    eq.value = eval(equation);
}
anime.onclick = function () {
    const random_hex_color_code = () => {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return '#' + n.slice(0, 6);
    };
    body.setAttribute("style", 'backgrounnd-color: ' + random_hex_color_code + ';');

}