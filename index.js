let i = 0;
const txt = 'Eric Hoang';
const speed = 225;

document.addEventListener('DOMContentLoaded', function(){
    typeWriter();
});

function typeWriter(){
    if (i < txt.length){
        let h1_elem = document.getElementsByTagName('h1')[0];
        if (i < txt.length){
            h1_elem.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
}