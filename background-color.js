function changeBackgroundColor() {
    const colors = ['#ff9999', '#99ff99', '#9999ff', '#ffcc99', '#cc99ff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}