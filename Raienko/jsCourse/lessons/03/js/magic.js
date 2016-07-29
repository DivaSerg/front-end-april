var form=document.getElementById('theForm');
form.addEventListener('keyup',regSplit);
function regSplit() {
  var inputValue=document.getElementById('input-email').value,
  magicString=('<span class="red">'+inputValue+'</span>'+'<span>@</span>'+'<span class="green">'+inputValue+'</span>'),
  newdiv=document.getElementById('text-holder');
  newdiv.innerHTML=magicString;
}
