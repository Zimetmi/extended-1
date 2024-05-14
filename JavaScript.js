/*document.addEventListener('DOMContentLoaded', async function() {
    const inputFields = document.querySelectorAll('.data-input');

    // Функция для загрузки данных из Google Sheets
    async function fetchData() {
        const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets/128bnCwot_ifFV_B5e1Zxi4VrMLIzGyV4X9iBe7JMJMk/values/A1:F100?key=AIzaSyCYgExuxs0Kme9-tWRCsz4gVD9yRjHY74g');
        const data = await response.json();
        
        const tableBody = document.querySelector('#dataTable tbody');
        // Очистка таблицы перед добавлением новых данных
        tableBody.innerHTML = '';
        // Добавление данных в таблицу
        data.values.forEach((row, index) => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${index + 1}</td>
                <td>${row[0]}</td>
                <td>${row[1]}</td>
                <td>${row[2]}</td>
                <td>${row[3]}</td>
                <td>${row[4]}</td>
                <td>${row[5]}</td>
            `;
            tableBody.appendChild(newRow);
        });
        
        // Заполнение значений из ячеек в редактируемые поля ввода
        inputFields.forEach((input, index) => {
            input.placeholder = data.values[index] ? data.values[index][0] : '';
        });
    }

    // Функция для сохранения данных
    async function saveData(value, column, row) {
        const url = 'https://script.google.com/macros/s/AKfycbyAXgt-Q1wikBmbkxVUJ-oqKlG4sIXcVMUt40M2GYx4y_s2b5fFvT0V0LaCXn1sSfPwBA/exec';
        const params = new URLSearchParams({
            column: column,
            row: row,
            value: value
        });
        try {
            const response = await fetch(`${url}?${params.toString()}`);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error saving data:', error);
        }
    }

    // Инициализация загрузки данных и установка интервала сохранения
    await fetchData();

    // Установка значений полей ввода из плейсхолдеров при загрузке страницы
    inputFields.forEach((input, index) => {
        input.value = input.placeholder;
    });

    // Устанавливаем обработчики событий для каждого поля ввода
    inputFields.forEach((input) => {
        input.addEventListener('input', function() {
            const column = input.getAttribute('data-column');
            const row = input.getAttribute('data-row');
            saveData(input.value, column, row);
        });
    });
});

document.addEventListener('DOMContentLoaded', async function() {
    const inputFields = document.querySelectorAll('.data-input');

    // Функция для загрузки данных из Google Sheets
    async function fetchData(column, row) {
        const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/128bnCwot_ifFV_B5e1Zxi4VrMLIzGyV4X9iBe7JMJMk/values/${column}${row}?key=AIzaSyCYgExuxs0Kme9-tWRCsz4gVD9yRjHY74g`);
        const data = await response.json();
        return data.values[0][0]; // Возвращаем значение из ячейки
    }

    // Функция для установки значения в элемент
    async function setValue(element) {
        const column = element.getAttribute('data-column');
        const row = element.getAttribute('data-row');
        const value = await fetchData(column, row);
        element.value = value; // Устанавливаем значение
    }

    // Установка значений для всех элементов
    inputFields.forEach(async function(input) {
        await setValue(input);
    });
});


/*Код гугл скрипта, если что-то случится.
function doGet(e) {
  var sheet = SpreadsheetApp.openById('ID_ГУГЛ_ТАБЛИЦЫ').getActiveSheet();
  var row = e.parameter.row;
  var column = e.parameter.column;
  var value = e.parameter.value;
  sheet.getRange(column + row).setValue(value);
  return ContentService.createTextOutput('Data saved successfully.');
}
*/

document.addEventListener('DOMContentLoaded', async function() {
    const inputFields = document.querySelectorAll('.data-input');

    // Функция для загрузки данных из Google Sheets
    async function fetchData() {
        const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets/128bnCwot_ifFV_B5e1Zxi4VrMLIzGyV4X9iBe7JMJMk/values/A1:F100?key=AIzaSyCYgExuxs0Kme9-tWRCsz4gVD9yRjHY74g');
        const data = await response.json();
        
        const tableBody = document.querySelector('#dataTable tbody');
        // Очистка таблицы перед добавлением новых данных
        tableBody.innerHTML = '';
        // Добавление данных в таблицу
        data.values.forEach((row, index) => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${row[0]}</td>
                <td>${row[1]}</td>
                <td>${row[2]}</td>
                <td>${row[3]}</td>
                <td>${row[4]}</td>
                <td>${row[5]}</td>
            `;
            tableBody.appendChild(newRow);
        });
        
        // Заполнение значений из ячеек в редактируемые поля ввода
        inputFields.forEach((input, index) => {
            input.placeholder = data.values[index] ? data.values[index][0] : '';
        });
    }

    // Функция для сохранения данных
    async function saveData(value, column, row) {
        const url = 'https://script.google.com/macros/s/AKfycbyAXgt-Q1wikBmbkxVUJ-oqKlG4sIXcVMUt40M2GYx4y_s2b5fFvT0V0LaCXn1sSfPwBA/exec';
        const params = new URLSearchParams({
            column: column,
            row: row,
            value: value
        });
        try {
            const response = await fetch(`${url}?${params.toString()}`);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error saving data:', error);
        }
    }

    // Инициализация загрузки данных и установка интервала сохранения
    await fetchData();

    // Установка значений полей ввода из плейсхолдеров при загрузке страницы
    inputFields.forEach((input) => {
    const column = input.getAttribute('data-column');
    const row = input.getAttribute('data-row');
    input.placeholder = fetchData(column, row);
});

    // Устанавливаем обработчики событий для каждого поля ввода
    inputFields.forEach((input) => {
        input.addEventListener('input', function() {
            const column = input.getAttribute('data-column');
            const row = input.getAttribute('data-row');
            saveData(input.value, column, row);
        });
    });
});

document.addEventListener('DOMContentLoaded', async function() {
    const inputFields = document.querySelectorAll('.data-input');

    // Функция для загрузки данных из Google Sheets
    async function fetchData(column, row) {
        const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/128bnCwot_ifFV_B5e1Zxi4VrMLIzGyV4X9iBe7JMJMk/values/${column}${row}?key=AIzaSyCYgExuxs0Kme9-tWRCsz4gVD9yRjHY74g`);
        const data = await response.json();
        return data.values[0][0]; // Возвращаем значение из ячейки
    }

    // Функция для установки значения в элемент
    async function setValue(element) {
        const column = element.getAttribute('data-column');
        const row = element.getAttribute('data-row');
        const value = await fetchData(column, row);
        element.value = value; // Устанавливаем значение
    }

    // Установка значений для всех элементов
    inputFields.forEach(async function(input) {
        await setValue(input);
    });
});



function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


let text = document.querySelector('.time').textContent;
console.log(text);

//Ниже код для подключения гугл таблиц

