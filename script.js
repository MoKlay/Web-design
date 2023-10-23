let login = false;
function Update() {
    document.getElementById('frame').contentWindow.location.reload(true);
}
function Home(window) {
    document.getElementById('frame').setAttribute('src', window);
        let el = document.getElementById('menu');
        el.style.display = 'block';
        el = document.getElementById('button');
        el.style.left = -31 +'px';
}
function ContentBox(window) {
    document.getElementById('frame').setAttribute('src', window);
        let el = document.getElementById('menu');
        el.style.display = 'none';
        el = document.getElementById('button');
        el.style.left = 0 +'px';
}