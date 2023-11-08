let login = false;
let frame = 0;
function Update() {
    document.getElementsByClassName('iframe')[frame].contentWindow.location.reload(true)
}



function Home(window) {
        let el = document.getElementById('button');
        el.style.left = -31 +'px';
        el = document.getElementById('menu');
        el.style.transform = 'translateY(0%) translateX(-50%)';
        document.getElementsByClassName('iframe')[0].style.transform = 'translateY(200%)'
		document.getElementsByClassName('iframe')[1].style.transform = 'translateY(200%)'
        frame = 0
        setTimeout(function(){
            document.getElementsByClassName('iframe')[0].setAttribute('src', '');
            document.getElementsByClassName('iframe')[1].setAttribute('src', '');
        }, 1000)
        
}
function ContentBox(window) {
    let el = document.getElementById('menu');
    el.style.transform = 'translateY(-100%) translateX(-50%)';
    el = document.getElementById('button');
    el.style.left = 0 +'px';
    el = document.getElementsByClassName('iframe')[frame];
    el.setAttribute('src', window);
    if (frame == 0) {
        document.getElementsByClassName('iframe')[0].style.transform = 'translateY(0%)';
        document.getElementsByClassName('iframe')[1].style.transform = 'translateY(0%)';
        frame = 1;
    } else if (frame == 1) {
        document.getElementsByClassName('iframe')[0].style.transform = 'translateY(-103%)';
        document.getElementsByClassName('iframe')[1].style.transform = 'translateY(-103%)';
        frame = 0;
    } 
}