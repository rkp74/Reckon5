function updateFileName(input) {
    var filename = input.files[0].name;
    var label = input.parentElement.querySelector('.file-label');
    label.textContent = filename;
}