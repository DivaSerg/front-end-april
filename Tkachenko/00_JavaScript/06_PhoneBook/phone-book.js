/*Object*/
var phonebook = {

        /*Приватные переменные*/

        counter: 0,
        arrInputId: ['inputName', 'inputTel', 'inputEmail', 'buttonAdd'],
        arrInputId2: [document.getElementById('inputName'), document.getElementById('inputTel'), document.getElementById('inputEmail'), document.getElementById('buttonAdd')],
        arrRegExpName: [/^[a-z][a-z0-9]*?([-_][a-z0-9]+){0,2}$/i,
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
            /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/im
        ],

        /*Слежение, приватные методы*/

        listenerTargetAdder: function() {
            phonebook.arrInputId2[3].addEventListener('click', phonebook.addContact);
        } /*метод слежение за нажатием кнопки Добавить контакт*/ ,

        /*добавление данных в таблицу*/
        addContact: function() {

            /*Возврат блокировки полей ввода*/
            for (let i = 1; i < phonebook.arrInputId2.length; i++) {
                phonebook.arrInputId2[i].disabled = true;
            } /*Конец возврата блокировки полей ввода*/

            var arrInputValue = [] /*массив для значений inputов*/ ,
                newTr = document.createElement('tr') /*новая строка*/ ,
                newTd /*новая ячейка*/ ;

            /*Создание новой строки и ее заполнение*/
            tbody.appendChild(newTr);
            newTr.id = 'row__' + phonebook.counter;

            for (let i = 0; i < phonebook.arrInputId2.length - 1; i++) {
                newTd = document.createElement('td');
                newTr.appendChild(newTd);
                newTd.innerHTML = phonebook.arrInputId2[i].value;
                phonebook.arrInputId2[i].value = '';
                phonebook.arrInputId2[i].style.borderColor = 'transparent';
            }

            newTd = document.createElement('td');
            newTr.appendChild(newTd);
            newTd.innerHTML = '<input type="button" id="remove__' + phonebook.counter++ + '" onclick="phonebook.removeContact()" value="Remove" class="btn btn-danger" style="margin: .500em;">';
            /*Конец создания новой строки и ее заполнения*/

            /*Начало записи в локальное хранилище*/
            console.log('dfgdfbdfbdfb');
            var rowNumber = 'row__' + (phonebook.counter - 1);
            var newTrLS = newTr.outerHTML;
            console.log(newTrLS);
            localStorage.setItem(rowNumber, newTrLS);
            /*Конец записи в локальное хранилище*/

        } /*конец метода добавления данных в таблицу*/ ,

        /*удаление данных*/
        removeContact: function() {

            /*Получение ID, по которому кликнули, и удаление этой строки*/
            document.getElementById('tbody').onclick = function fn(e) {
                e = e || event;
                var target = e.target || e.srcElement;

                tbody.removeChild(document.getElementById('row__' + +target.id.slice(8)));
                localStorage.removeItem('row__' + +target.id.slice(8));
            } /*Конец получения ID, по которому кликнули, и удаления этой строки*/

        } /*Конец метода удаления контакта из таблицы*/ ,

        EventListener: function() {

            for (let i = 0; i < phonebook.arrInputId.length; i++) {
                document.getElementById(phonebook.arrInputId[i]).addEventListener('keypress', function() {
                    if (phonebook.arrRegExpName[i].test(document.getElementById(phonebook.arrInputId[i]).value)) {
                        document.getElementById(phonebook.arrInputId[i]).style.borderColor = 'Green';
                        document.getElementById(phonebook.arrInputId[i + 1]).disabled = false;
                    } else document.getElementById(phonebook.arrInputId[i]).style.borderColor = 'Maroon';
                })
            }

        } /*отлов событий*/ ,

        initializer: function() {
            var iterator = localStorage.length - 1;
            if (localStorage.length) {
                for (iterator; iterator >= 0; iterator--) {
                    var _newTr = document.createElement('tr');
                    tbody.appendChild(_newTr);
                    _newTr.id = 'row__' + iterator;
                    _newTr.innerHTML = localStorage.getItem('row__' + iterator);
                    phonebook.counter++;
                }
            }
        } /*заполнение таблицы из localStorage*/ ,

        start: function() {
            // console.log(phonebook.arrInputId2);
            this.initializer();
            this.EventListener();
            this.listenerTargetAdder();
        } /*начало программы*/

    }
    /*End object*/

phonebook.start();
