document.getElementById('f').addEventListener('submit',function(e){
  e.preventDefault();
  this.reset();
  document.getElementById('ok').style.display='block';
});

document.getElementById('entrar').addEventListener('click',function(){
  var c=document.getElementById('capa');
  c.classList.add('out');
  document.body.classList.remove('cover-open');
  window.scrollTo(0,0);
  setTimeout(function(){c.style.display='none'},650);
});
