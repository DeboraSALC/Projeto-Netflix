var content = document.getElementsByTagName('body')[0];
var lightMode = document.getElementById('luz');
lightMode.addEventListener('click', function() {
    lightMode.classList.toggle('active');
    content.classList.toggle('light');
})