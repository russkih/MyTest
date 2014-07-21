$(function() {
    createCalendar("calendar", 2014, 4)
    $("#calendar td ").click(day_click)
});

function day_click(){
    console.log(this)
}

function createCalendar(id, year, month) {
    var elem = document.getElementById(id);

    var mon = month - 1; // месяцы в scool идут от 0 до 11, а не от 1 до 12
    var d = new Date(year, mon);

    var table = '<table id='+'month'+2014+""+4+'><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    // заполнить первый ряд от понедельника
    // и до дня, с которого начинается месяц
    // * * * | 1  2  3  4
    for (var i=0; i<getDay(d); i++) {
        table += '<td></td>';
    }

    // ячейки календаря с датами
    while(d.getMonth() == mon) {
        table += '<td>'+d.getDate()+'</td>';

        if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
            table += '</tr><tr>';
        }

        d.setDate(d.getDate()+1);
    }

    // добить таблицу пустыми ячейками, если нужно
    if (getDay(d) != 0) {
        for (var i=getDay(d); i<7; i++) {
            table += '<td></td>';
        }
    }

    // закрыть таблицу
    table += '</tr></table>';

    // только одно присваивание innerHTML
    elem.innerHTML = table;
}

function getDay(date) { // получить номер дня недели, от 0(пн) до 6(вс)
    var day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}

