document.addEventListener('DOMContentLoaded', function() {

  var ru = {
    monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", 
    "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    // full names of months
    months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", 
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    // short names of days
    daysShort: ["В", "П", "В", "С", "Ч", "П", "С"],
    // full names of days
    days: ["Воскресенье", "Понидельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
  };

  Date.prototype.getWeekDay = function() {
    var day = this.getDay();
    if(day==0) return 7;
    else return day;  
  }

  Date.prototype.getWeekStartDate = function() {
    var date = new Date(this.getTime());      
    date.setDate(this.getDate()-(this.getWeekDay()-1));
    return date;     
  }
  
  Date.prototype.getWeekEndDate = function() {
    var date = new Date(this.getTime());      
    date.setDate(this.getDate()+(7-this.getWeekDay()));
    return date;     
  }

  msInDay = 86400000;
  currentDate = new Date;
  prevWeekDate = new Date(currentDate - (7 * msInDay));
  
  prevWeekStartDate = prevWeekDate.getWeekStartDate();
  prevWeekEndDate = prevWeekDate.getWeekEndDate();
  
  var date = new Date();
  
  var date1 = new Date(), y = date1.getFullYear(), m = date1.getMonth() - 1;
  var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  var firstDay1 = new Date(y, m, 1);
  var lastDay1 = new Date(y, m + 1, 0);
  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  
  dhx.i18n.setLocale('calendar', ru);
  var clndr = new dhx.Calendar('clndr', {
    weekStart: 'monday',
    width: '260px',
    thisMonthOnly: 'true',
    dateFormat: '%j %M. %Y',
    range: 'true',
    date: new Date(firstDay1)
  });
  

  
  


  var today = document.querySelector('.clndr-today');
  today.addEventListener('click', function() {
    clndr.setValue(new Date());
  });
  var yesterday = document.querySelector('.clndr-yesterday');
  yesterday.addEventListener('click', function() {
    var d = new Date();
    d.setDate(d.getDate()-1);
    clndr.setValue(d);
  });
  var week = document.querySelector('.clndr-week');
  week.addEventListener('click', function() {
    clndr.setValue([new Date().getWeekStartDate(), (new Date().getWeekEndDate())]);
  });
  var last7 = document.querySelector('.clndr-7_day');
  last7.addEventListener('click', function() {
    clndr.setValue([new Date().setDate(new Date().getDate()-6), new Date()]);
  });
  var lastWeek = document.querySelector('.clndr-last_week');
  lastWeek.addEventListener('click', function() {
    clndr.setValue([prevWeekDate.getWeekStartDate(), prevWeekDate.getWeekEndDate()]);
  });
  var last14 = document.querySelector('.clndr-last_14');
  last14.addEventListener('click', function() {
    clndr.setValue([new Date().setDate(new Date().getDate()-13), new Date()]);
  });
  var month = document.querySelector('.clndr-month');
  month.addEventListener('click', function() {
    clndr.setValue([firstDay, lastDay]);
  });
  var last30 = document.querySelector('.clndr-last_30');
  last30.addEventListener('click', function() {
    clndr.setValue([new Date().setDate(new Date().getDate()-30), new Date()]);
  });
  var lastMonth = document.querySelector('.clndr-last_month');
  lastMonth.addEventListener('click', function() {
    clndr.setValue([firstDay1, lastDay1]);
  });
  var allTime = document.querySelector('.clndr-all');
  allTime.addEventListener('click', function() {
    clndr.setValue([new Date(2017, 10 ,11), new Date()]);
  });
  
  
  
  // var inputToday = document.querySelector('.clndr-input_today');
  // var inputYesterday = document.querySelector('.clndr-input_yesterday');
  // inputToday.oninput = function() {
  //   var valInputToday = inputToday.value;
  //   inputYesterday.value = '';
  //   clndr.setValue([new Date().setDate(new Date().getDate() - valInputToday), new Date()]);
  // }
  // inputYesterday.oninput = function() {
  //   var valInputYesterday = inputYesterday.value;
  //   inputToday.value = '';
  //   clndr.setValue([new Date().setDate(new Date().getDate() - valInputToday), new Date()]);
  //   // clndr2.setValue(new Date().setDate(new Date().getDate() - 1));
  // }
  

  var resultFrom = document.querySelector('#resultFrom');
  var resultTo = document.querySelector('#resultTo');
  var resultFrom2 = document.querySelector('#resultFrom2');
  var resultTo2 = document.querySelector('#resultTo2');
  var resultFrom3 = document.querySelector('#resultFrom3');
  var resultTo3 = document.querySelector('#resultTo3');
  clndr.events.on('change', function (date) {
    resultFrom.innerHTML = clndr.getValue()[0];
    resultFrom2.innerHTML = clndr.getValue()[0];
    resultFrom3.innerHTML = clndr.getValue()[0];
    if(clndr.getValue()[1] == undefined){
      resultTo.innerHTML = '';
      resultTo2.innerHTML = '';
      resultTo3.innerHTML = '';
    } else {
      resultTo.innerHTML = clndr.getValue()[1];
      resultTo2.innerHTML = clndr.getValue()[1];
      resultTo3.innerHTML = clndr.getValue()[1];
    };
  });
  
  
  var resultText = document.querySelector('.date-result__text');
  var itemsClndr = document.querySelector('.clndr-items'); 
  var itemClndr = document.querySelectorAll('.clndr-item');
  itemsClndr.addEventListener('click', function(e) {
    if(e.target.classList.contains('clndr-item')){
      Array.from(itemClndr).forEach(item => {
        item.classList.remove('color-1');
      });
      e.target.classList.add('color-1');
      resultText.textContent = e.target.textContent;
    }
  });
  
  
  
  
  last7.click();
  last7.classList.add('color-1');
  
  var datePrev = document.querySelector('.date-prev');
  var dateNext = document.querySelector('.date-next');
  var activeItem = document.querySelector('.clndr-item.color-1').getAttribute('data-index');
  datePrev.addEventListener('click', function() {
    if(activeItem == 0){
      activeItem = 10;
    }
    activeItem = +activeItem - 1;
    itemClndr[activeItem].click();
  });
  dateNext.addEventListener('click', function() {
    activeItem = +activeItem + 1;
    if(activeItem == 10){
      activeItem = 0;
    }
    itemClndr[activeItem].click();
  });
  
 
  var days = document.querySelector('.clndr-wrap');
  var day = document.querySelectorAll('.dhx_calendar-day');

  days.addEventListener('click', function(e) {
    if(e.target.classList.contains('dhx_calendar-day')){
      document.querySelector('.date-result__text').innerHTML = 'Другой диапазон'; 
      Array.from(document.querySelectorAll('.clndr-item')).forEach(item => {
        item.classList.remove('color-1');
      });
    }
  });
  
});

