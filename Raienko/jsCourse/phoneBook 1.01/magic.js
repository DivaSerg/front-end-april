var book = document.getElementById('phonebook'),
  inputName=document.getElementById('input-name'),
  inputPhone=document.getElementById('input-phone'),
  inputEmail=document.getElementById('input-email'),
  inputSearch=document.getElementById('input-search'),
  inputForm=document.getElementById('input-form'),
  searchBtn=document.getElementById('searchBtn'),
  resetBtn=document.getElementById('resetBtn'),
  addBtn=document.getElementById('addBtn'),
  saveBtn=document.getElementById('saveBtn'),
  loadBtn=document.getElementById('loadBtn'),
  clearBtn=document.getElementById('clearBtn'),
  regExpName=/^[a-zA-Z ]{2,30}$/,
  regExpPhone=/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
  regExpEmail=/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
  bookBody=book.getElementsByTagName('tbody')[0],
  regExpFabric={
    'name':regExpName,
    'phone':regExpPhone,
    'email':regExpEmail,
    'light':onlineLighter,
    'check':checkValid
  };

bookBody.addEventListener('click',deleteContact);
inputForm.addEventListener('keyup',regExpFabric.light);

addBtn.onclick=regExpFabric.check;
searchBtn.onclick=searchInTable;
resetBtn.onclick=resetSearch;
saveBtn.onclick=saveTable;
loadBtn.onclick=loadTable;
clearBtn.onclick=clearTable;

function onlineLighter(event) {
  var fieldName = event.target.getAttribute('name');
  if (regExpFabric[fieldName].test(event.target.value)) {
    event.target.style.background='springgreen';
  } else {event.target.style.background='#FF6D60';};
}
function checkValid(){
  var inputs=inputForm.getElementsByTagName('INPUT'),
    i,
    len=inputs.length,
    fieldName,
    errors=false;
  for (i=0;i<len;i++) {
    fieldName=inputs[i].getAttribute('name');
    if(regExpFabric[fieldName].test(inputs[i].value)) {
      console.log(fieldName+': correct');
    } else {
      errors=true;
      console.log(fieldName+': Error');
    };
  }
  if (!errors) {
    addToTable();
  }
}
function saveTable() {
  console.log("Saving..");
  var rowsArr=bookBody.rows,
    len=rowsArr.length,
    i,
    rowsArrStrd=[];
  for (i=0;i<len;i++){
    rowsArrStrd[i]=JSON.stringify(rowsArr[i].innerHTML);
  }
  localStorage.rows=JSON.stringify(rowsArrStrd);
  console.log("Successfully saved");
}
function loadTable() {

  var i,
    parsedArray=JSON.parse(localStorage.rows),
    len;

  clearTable();
  //add new rows
  console.log("Loading..");
  len=parsedArray.length;
  for (i=0;i<len;i++) {
    bookBody.insertRow(bookBody.rows[i]);
    bookBody.rows[i].innerHTML=JSON.parse(parsedArray[i]);
  }
  console.log("Successfully loaded");
}
function clearTable() {
  //remove current rows, if they are
  var len=bookBody.rows.length,
    i;
  console.log('Clearing table..');
  for (i = len-1; i>=0; i--) {
      bookBody.deleteRow(i);
  }
  console.log("Successfully cleared");
}
function addToTable() {

  var inputForm=document.getElementById('input-form'),
    fields=inputForm.getElementsByTagName('INPUT'),
    i,
    len=fields.length,
    newRow = bookBody.insertRow(bookBody.rows.length),
    currentCell,
    currentInputValue;

  for (i=0;i<len;i++) {
    currentInputValue=document.createTextNode(fields[i].value);
    currentCell = newRow.insertCell(i);
    currentCell.appendChild(currentInputValue);
  }
  // add last element - action field
  currentInputValue=document.createTextNode('delete');
  currentCell = newRow.insertCell(i);
  currentCell.appendChild(currentInputValue);
}
function deleteContact(event) {
  if ((event.target.innerText=='delete')&&(event.target==event.target.parentNode.lastChild)) {
    bookBody.deleteRow((event.target.parentNode.rowIndex)-1);
  }
}
function searchInTable () {
  var i,
    searchValue=inputSearch.value,
    rowsAmount=bookBody.rows.length;
  for (i=0;i<rowsAmount;i++){
    if (bookBody.rows[i].firstChild.innerHTML.indexOf(inputSearch.value)>-1) {
      bookBody.rows[i].style.display='table-row';
    } else {
      bookBody.rows[i].style.display='none';
    }
  }
}
function resetSearch() {
  inputSearch.value='';
  searchInTable();
}
