function calculateSquare() {
    let input = document.getElementById("numberInput").value;
    let result = input * input;
    document.getElementById("result").innerHTML = `The square of ${input} is <span style="font-size:1.2em; font-weight:bold;">${result}</span>`;
}
