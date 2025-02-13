const btnNo = document.getElementById('btnNo');
btnNo.addEventListener('mouseover', function(){
    let x = Math.floor(Math.random()* window.innerWidth) - window.innerWidth / 2;
    let y = Math.floor(Math.random()* 500) - 250 ;

    btnNo,this.style.left=x+"px"
    btnNo,this.style.top=y+"px"
    console.log(x + ',' + y);
    anime({
        targets: '#btnNo',
        translateX: x,
        translateY: y
    });
});