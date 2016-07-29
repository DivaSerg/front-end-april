
var sendBtn=document.getElementById('send-button');
sendBtn.onclick=generateRequest;

function generateRequest(event) {
  console.log('send thi shit');

  var request= new XMLHttpRequest(),
    someShit={};

  console.log(event);
  console.log(event.target.form[0].attributes.name.value);
  console.log(event.target.form[0].value);

  for (var i=0;i<3;i++) {
    someShit[event.target.form[i].attributes.name.value]=event.target.form[i].value
  }

  request.open("POST", 'http://192.168.1.74:4730/answers', true);
  request.setRequestHeader("Content-type", "application/json");
  someShit=JSON.stringify(someShit);
  request.onreadystatechange = function(){
    console.table(JSON.parse(request.response));
  }
  request.send(someShit);

  console.log('shit sent');
} 