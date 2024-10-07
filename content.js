function changeUnit() {
    setTimeout(function () {
        try{
            var panel = document.getElementsByClassName("panel__dimensions")[0].innerText;
            if (panel && !panel.includes("cm")) {
                const original = panel; 
                const text = panel.slice(1, -1);
                var arr = text.replaceAll("in", "").split(" x ");
                for (var i = 0; i < arr.length; i++) {
                    arr[i] = Number(arr[i] * 2.54).toFixed(2) + "cm";
                }
                var content = original + "\n("+arr.join(" x ")+")";
                document.getElementsByClassName("panel__dimensions")[0].innerText = content;
            }
        }   catch (error) {}
            setTimeout(changeUnit, 100);
        }, 100)
}


document.addEventListener('click', function (event) {
    if (window.location.href.startsWith("https://pedalplayground.com/")) {
        changeUnit();
    }
}, true);