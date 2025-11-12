
 
function updateRangeValue(slider) {
    let valueDisplay = slider.nextElementSibling;
    if (!valueDisplay || !valueDisplay.classList.contains('range-value')) {
        valueDisplay = document.createElement('span');
        valueDisplay.className = 'range-value';
        slider.parentNode.insertBefore(valueDisplay, slider.nextSibling);
    }
    valueDisplay.textContent = slider.value + "%";
}
