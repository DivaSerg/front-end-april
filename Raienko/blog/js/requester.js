function REQUESTER() {
  var urlBase={}, 
    paramsBase={};
  this.setURL= function (){
    urlBase[arguments[0]]=arguments[1];
  };
  this.setParams = function() {
    var parameters={};
     if (arguments[1]) {
      parameters.method = (arguments[1]);
     };
     if (arguments[2]) {
      parameters.async = (arguments[2]);
     };
     if (arguments[3]) {
      parameters.datatype = (arguments[3]);
     };
     if (arguments[4]) {
      parameters.header = (arguments[4]);
     };
    paramsBase[arguments[0]] = parameters;
  }
  this.show = function () {
    console.table(paramsBase);
    console.table(urlBase);
    
  };
  this.post = function () {
    var newrequest=[];
    newrequest[0]=urlBase[arguments[0]],
    newrequest[1]=paramsBase[arguments[1]];
    console.log(newrequest);
  }
};
a = new REQUESTER;
a.setURL('base','/api/v1/');
a.setURL('show-all','/articles');
a.setURL('open-article','articles/:id');
a.setURL('create','/article/create/');
a.setParams('get','GET','true','json');
a.setParams('post','POST','true','json','header');

a.post('show-all','get');
a.post('create','post');
a.show();