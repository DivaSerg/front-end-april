var AddContact = document.getElementById('add-contact'),
    addBtn = document.getElementById('addBtn'),
    book = document.getElementById('phonebook'),
    bookBody = book.getElementsByTagName('tbody')[0],
    regExpName = /^[a-zA-Z ]{2,30}$/,
    regExpPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
    regExpEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
    regExpFabric = {
        'name': regExpName,
        'phone': regExpPhone,
        'email': regExpEmail,
    };

// var request = {};
// for (var i = 0; i < AddContact.elements.length; i++) {
//     if (AddContact.elements[i].attributes.name) {
//         request[AddContact.elements[i].attributes.name] = AddContact.elements[i].attributes.value;
//     }
// }
// console.log(request);

// console.log('name =  + name);

bookBody.addEventListener('click', deleteContact);
addBtn.onclick = checkValid;

function checkValid() {
    var inputs = AddContact.getElementsByTagName('input'),
        i,
        fieldName,
        errors = false;

    for (i = 0; i < inputs.length - 1; i++) {
        fieldName = inputs[i].getAttribute('name');
        if (regExpFabric[fieldName].test(inputs[i].value)) {
            console.log(fieldName + ': correct');
        } else {
            errors = true;
            console.log(fieldName + ': Error');
        };
    }
    if (!errors) {
        addToTable();
    }
}

function addToTable() {

    var inputForm = document.getElementById('add-contact'),
        fields = inputForm.getElementsByTagName('INPUT'),
        i,
        len = fields.length,
        newRow = bookBody.insertRow(bookBody.rows.length),
        currentCell,
        currentInputValue;

    for (i = 0; i < len - 1; i++) {
        currentInputValue = document.createTextNode(fields[i].value);
        currentCell = newRow.insertCell(i);
        currentCell.appendChild(currentInputValue);
    }
    // add last element - action field
    currentInputValue = document.createTextNode('delete');
    currentCell = newRow.insertCell(i);
    currentCell.appendChild(currentInputValue);
}

function deleteContact(event) {
    if ((event.target.innerText == 'delete') && (event.target == event.target.parentNode.lastChild)) {
        bookBody.deleteRow((event.target.parentNode.rowIndex) - 1);
    }
}
