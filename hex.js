c=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
var b=document.getElementById("btn")
var color=document.getElementById("target")
b.addEventListener('click',change)
var i,r;
function change(){
    col='#'
    for(i=0;i<6;i++){
        d=Math.floor(Math.random()*16)
        col=col+c[d]

    }
    document.body.style.backgroundColor=col
    color.innerText='background:'+col
}