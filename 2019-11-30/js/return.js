const $runter = $('#runter');
$runter.click(function () {
    if (shi !== 0) {
        render(data[shi].pid)
        shi = data[shi].pid
    } else {
        shi = 1;
        alert('当前已经到最顶层')
    }
})
