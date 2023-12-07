var c=['blue','yellow','aqua','green']
var btn=document.getElementById('btn')
var color=document.getElementById('target')
btn.addEventListener('click',change)
function change(){
    var r=Math.floor(Math.random()*4)
    document.body.style.backgroundColor=c[r]
    color.innerText="background:"+ c[r]
}
