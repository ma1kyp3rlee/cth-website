const heights = [300,400,600];
const widths = [100,200,300];
const colors = ['#F14B2F', '#06306F', '#FFFC66', '#fff']

function createBox() {
    const container = $('.container');
    const div = document.createElement('div');
    div.style.height = heights[Math.floor(Math.random() * heights.length)] + 'px';
    div.style.width = widths[Math.floor(Math.random() * widths.length)] + 'px';
    div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    container.append(div);
}

$(document).ready(() => {
    for (let i = 0; i < 20; i++) {
        createBox();
    }
})