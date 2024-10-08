function changeUnit() {
    setTimeout(function () {
        try {
            if (document.querySelector("#convert-units-cm").checked) {
                var panel = document.getElementsByClassName("panel__dimensions")[0].innerText;
                if (panel && !panel.includes("cm")) {
                    const original = panel;
                    const text = panel.slice(1, -1);
                    var arr = text.replaceAll("in", "").replaceAll("mm", "").split(" x ");
                    for (var i = 0; i < arr.length; i++) {
                        if (panel.includes("in")) {
                            arr[i] = Number(arr[i] * 2.54).toFixed(2) + "cm";
                        } else if (panel.includes("mm")) {
                            arr[i] = Number(arr[i] / 10).toFixed(2) + "cm";
                        }
                    }
                    if (document.querySelector("#convert-units").checked) {

                        var content = original + "\n (" + arr.join(" x ") + ")";
                    } else {
                        var content = "(" + arr.join(" x ") + ")";
                    }
                    document.getElementsByClassName("panel__dimensions")[0].innerText = content;
                }
            }
        } catch (error) { }
        setTimeout(changeUnit, 50);
    }, 50)
}

document.addEventListener('click', function (event) {
    if (window.location.href.startsWith("https://pedalplayground.com/")) {
        changeUnit();
    }
}, true);


if (window.location.href.startsWith("https://pedalplayground.com/")) {
    console.log("Pedal Playground");
    document.querySelector('.panel__action').outerHTML += '<div class="panel__action"><label for="convert-units" class="convert-units">Use cm for units</label><input id="convert-units-cm" type="checkbox"></div>';

}