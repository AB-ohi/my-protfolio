document.getElementById('profile-img').addEventListener('mouseover',function(){
    const aroAddStyle = document.getElementById('img-aro');
    aroAddStyle.style.marginRight = '2px';
})
document.getElementById('profile-img').addEventListener('mouseout',function(){
    const aroAddStyle = document.getElementById('img-aro');
    aroAddStyle.style.marginRight = '-190px';
})