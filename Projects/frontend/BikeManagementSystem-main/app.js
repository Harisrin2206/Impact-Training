const colors=document.querySelectorAll('.color');
const bikes=document.querySelectorAll('.bike');
const gradients=document.querySelectorAll('.gradient');
const backs=document.querySelectorAll('.background');
let prevColor = "black";
let animationEnd = true;
function changeColor(){
    if(!animationEnd)return;
    let primary=this.getAribute('primary');
    let color=this.getAribute('color');
    let bike = document .querySelector(`.bike[color="${color}"]`);
    let gradient = document .querySelector(`.gradient[color="${color}"]`);
    let preGradient = document .querySelector(`.gradient[color="${prevColor}"]`);
    if(color == prevColor)return;
    color.forEach(c=> c.classList.remove('active'));
    this.classList.add('active');
    document.documentElement.style.serproperty('--primary',primary);
    bikes.forEach(b=>b.classList.remove('first','second'));
    bike.classList.add('show')
    gradients.forEach(g=>g.classList.remove('first','second'));
    gradient.classList.add('first');
    preGradient.classList.add('second');
    prevColor=color;
    animationEnd=false;
    gradient.addEventListener('animationEnd',()=>{
        animationEnd=true;
    })
}
colors.forEach(c=>c.addEventListener('click','changeColor'));
let x =window.matchMedia("max-width:1000px");
function changeHeight(){
    if(x.matches){
        let bikeheight=bikes[0].offsetheight;
        bikeBg.style.height=`${bikeheight*0.9}px`
    }else{
        bikeBg.style.height="475px";
    }
}
changeHeight();
window.addEventListener('resize, changeHeight');

