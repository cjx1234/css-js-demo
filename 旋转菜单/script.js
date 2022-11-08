const open=document.getElementById('open');
const close=document.getElementById('close')
const container=document.querySelector('.container')

open.addEventListener('click',()=>container.classList.add('show-nav'))
close.addEventListener('click',()=>container.classList.remove('show-nav'))

$(window).scroll(function(){
    var scrollHeight=document.documentElement.scrollTop
    $("#WaitLst").css({top:scrollHeight+0+"px"}).show()
});
