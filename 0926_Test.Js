function Multiple() {
    let num = prompt("원하는 단을 입력하세요");
    document.write(`<h1>${num}단</h1>`);
    if (num <= 0 || num >= 10) {
        alert("구구단에 들어가는 수가 아닙니다");
    } else {
        for (let i = 1; i < 10; i++) {
            document.write(`${num} X ${i}<br>`)
        };
    }
}
Multiple();