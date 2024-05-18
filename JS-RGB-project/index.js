const changeBgColor = () => {

    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    const colorDigits = `rgb(${r}, ${g}, ${b})`
    document.body.style.backgroundColor = colorDigits;
    document.body.innerHTML = "<h2>" + colorDigits + "</h2>"
}

changeBgColor()
setInterval(changeBgColor, 1300)