$(document).ready(function() {
  
  $('.sidebar-open').click(function() {
    openSidebar();
  });
  
  $('.sidebar-item').click(function(e) {
    if($('.sidebar').hasClass('sidebar_open')){
      // if($(this).hasClass('sidebar-item_active')){
      // }
    } else {
      e.preventDefault();
    }
    $('.sidebar-item').removeClass('sidebar-item_active');
    $(this).addClass('sidebar-item_active');
    openSidebar();
  });


  function openSidebar() {
      $('.sidebar').addClass('sidebar_open');
      $('.sidebar-open').hide();
      $('.sidebar-item__block').attr('style' , '');
      $('.sidebar').animate({'width' : '322px'}, 350);
      $('.sidebar-logo').addClass('sidebar-logo_active');
      $('.sidebar-item__name').attr('style' , '');
    }
    
    function closeSidebar() {
      $('.sidebar').removeClass('sidebar_open');
    $('.sidebar-list').animate({'height' : '0', 'margin' : '0'}, 100);
    setTimeout(function() {
      $('.sidebar-item__name').animate({'width' : '0'}, 100);
      $('.sidebar-item__block').animate({'padding-left' : '33px'}, 100);
    }, 200);
    setTimeout(function() {
      $('.sidebar-logo').removeClass('sidebar-logo_active');
      sidebar.animate({'width' : '112px'}, 300);
      $('.sidebar-open').fadeIn(300);
    }, 300);
    $('.sidebar-item').removeClass('open');
  }
  
  let sidebar = $('.sidebar');
  let sidebarSec = $('.sidebar-sec');
  $(document).mouseup(function(e) {
    if(!sidebar.is(e.target) && !sidebarSec.is(e.target) && sidebar.has(e.target).length === 0 && sidebarSec.has(e.target).length === 0) {
      closeSidebar_sec();
      closeSidebar();
    }
  });
  
  $('.list').click(function() {
    $(this).toggleClass('open');
    if($(this).hasClass('open')){
      $(this).parents('.sidebar-item__block').find('.sidebar-list').attr('style' , '');
    } else {
      $(this).parents('.sidebar-item__block').find('.sidebar-list').animate({'height' : '0', 'margin' : '0'}, 100);
    }
    
  });

  $('.footer-link').click(function(e) {
    $('.footer-link').removeClass('footer-link-active');
    $(this).addClass('footer-link-active');
    let i = $(this).index($('.footer-link').index());
    if(i == 1){
      $('.main-slide').css({'transform' : 'translate(-100%)'});
    } else if(i == 0) {
      $('.main-slide').css({'transform' : 'translate(0%)'});
    } 
  });

  
  
  function closeSidebar_sec() {
    $('.sidebar-sec').animate({'width' : '0', 'padding-left' : '0', 'padding-right' : '0'}, 200);
  }
  
  $('.sidebar-sec__hide').click(function() {
    closeSidebar_sec();
  });
  
  $('.device__btn').click(function() {
    setTimeout(function() {
      $('.sidebar-sec').animate({'width' : '322px', 'padding-left' : '15px', 'padding-right' : '15px'}, 300);
    }, 200);
  });

  $('.notification svg, .notification-count').click(function() {
    $('.notification').toggleClass('notification_active');
    $('.notification-wrap').toggleClass('notification-wrap_active');
  });
  
  $(document).mouseup(function(e) {
    let notification = $('.notification');
    if(!notification.is(e.target) && notification.has(e.target).length === 0){
      $('.notification').removeClass('notification_active');
      $('.notification-wrap').removeClass('notification-wrap_active');
    }
  })
  
  $('.input-block__btn').click(function() {
    let input = $(this).parents('.input-block').find('input');
    input.removeAttr('disabled');
    let text = input.val();
    input.focus().val('').val(text);
    input.blur(function() {
      input.prop('disabled', true);
    });
  });
  
  $('.input-block__show').click(function() {
    $(this).toggleClass('input-block__hide');
    let input = $(this).parents('.input-block').find('input');
    if($(this).hasClass('input-block__hide')){
      input.attr('type' , 'text');
      input.attr('style' , 'letter-spacing: 1px');
    } else {
      input.attr('type' , 'password');
      input.attr('style' , '');
    }
  });


  $('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
  });
  $('.dropdown').focusout(function () {
      $(this).removeClass('active');
      $(this).find('.dropdown-menu').slideUp(300);
  });
  $('.dropdown .dropdown-menu li').click(function () {
      $(this).parents('.dropdown').find('span').text($(this).text());
      $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
  });

  $('.dropdown-menu li').click(function () {
  var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
    msg = '<span class="msg">Hidden input value: ';
    $('.msg').html(msg + input + '</span>');
  }); 

  $('.modal-close').click(function() {
    $(this).parents('.modal').css({'transform' : 'translateY(200%)'});
    setTimeout(function() {
      $('.modal').hide();
    }, 1000);
  });
  
  setTimeout(function() {
    $('.modal_1').css({'transform' : 'translateY(200%)'});
    setTimeout(function() {
      $('.modal').hide();
    }, 1000);
  }, 5000);


  $('.main-block__drop-btn').click(function() {
    $(this).parents('.main-block__drop-wrap').toggleClass('main-block__drop_active');
  })
  
  $('.custom-file__input').on('change', function() {
    var splittedFakePath = this.value.split('\\');
    $(this).parents('.custom-file').find('.graph-text').addClass('color-success').text(splittedFakePath[splittedFakePath.length - 1]);
    $(this).parents('.custom-file__wrap').find('.custom-file__result').addClass('color-success').text(splittedFakePath[splittedFakePath.length - 1]);

  });
  
  $('#clndr .dhx_calendar-action__show-month').detach().prependTo('#clndr .dhx_calendar__navigation');
  $('#clndr2 .dhx_calendar-action__show-month').detach().prependTo('#clndr2 .dhx_calendar__navigation');
  $('#clndr_sort .dhx_calendar-action__show-month').detach().prependTo('#clndr_sort .dhx_calendar__navigation');



  $('.date-result__block').click(function() {
    $('.station-clndr').animate({'height' : '390px'}, 400);
    $(this).addClass('clndr-opening');
  })
  
  var clndrWrap = $('.station-date')
  $(document).click(function(e) {
    if($('.date-result__block').hasClass('clndr-opening') && !clndrWrap.is(e.target) && clndrWrap.has(e.target).length === 0){
      $('.date-result__block').removeClass('clndr-opening');
      $('.station-clndr').animate({'height' : '0px'}, 400);
    }
  });
  
  
  $('.sort-dropdown').click(function(e) {
    if($(this).hasClass('notf-sort__item_active')){
      $('.sort-dropdown').removeClass('notf-sort__item_active');
    } else {
      $(this).addClass('notf-sort__item_active');
    }
  });
  
  
  $('.sort-date__btn').click(function() {
    if($(this).hasClass('notf-sort__item_active')){
      $('.sort-dropdown').removeClass('notf-sort__item_active');
      $(this).parents('.user-clndr').find('.sort-date').animate({'height' : '270px'}, 300);
    } else {
      $(this).parents('.user-clndr').find('.sort-date').animate({'height' : '0px'}, 300);
    }
  });
  
  
  $(document).mouseup(function(e) {
    let a = $('.user-sort__type')
    let i = $('.sort-date');
    let b = $('.sort-date__btn');
    if(!a.is(e.target) && a.has(e.target).length === 0 && i.has(e.target).length === 0 && !b.is(e.target) && b.has(e.target).length === 0){
      $('.sort-dropdown').removeClass('notf-sort__item_active');
      $('.sort-date').animate({'height' : '0px'}, 300);
    }
  });
  
  
  $('.user-sort__type').click(function() {
    $('.user-sort__type').find('.check').removeClass('check_active');
    $(this).find('.check').addClass('check_active');
  });

  $('.main-point').on('mouseenter', function() {
    $('.main-block_1').addClass('main-block_active');
    idIntervals = setInterval(() => {
      $(this).toggleClass('main-point_active');
    }, 400);
    clearTimeout(idTimeout);
  });
  $('.main-block_1').on('mouseenter', function() {
    $(this).addClass('main-block_active');
    clearTimeout(idTimeout);
    idIntervals = setInterval(() => {
      $('.main-point').toggleClass('main-point_active');
    }, 400);
  });
  $('.main-point').on('mouseleave', function() {
    clearInterval(idIntervals);
    $(this).removeClass('main-point_active');
    idTimeout = setTimeout(() => {
      $('.main-block_1').removeClass('main-block_active');
    }, 3000);
  });
  $('.main-block_1').on('mouseleave', function() {
    $(this).addClass('main-block_active');
    idTimeout = setTimeout(() => {
      $('.main-block_1').removeClass('main-block_active');
    }, 3000);
    clearInterval(idIntervals);
    $('.main-point').removeClass('main-point_active');
  });

});

/* Charts */
window.chartConfig = {};
window.onload = function() {
  var mChartOne = document.getElementById('mChartOne');
  if(mChartOne) {
    chartConfigNew();
    var mChartOne_ctx = mChartOne.getContext('2d');
    window.mChartObj = new Chart(mChartOne_ctx, window.chartConfig);
  }
};
function chartConfigNew() {
  window.chartConfig = {
    type: 'line',
    data: {
      labels: window.chartData.labels,
      datasets: [{
        label: 'Уровень зеркала в приемном канале',
        fill: true,
        backgroundColor: 'rgba(55, 81, 255, .05)',
        borderColor: '#3751FF',
        data: window.chartData.receiving,
      }, {
        label: 'Уровень зеркала в отводящем канале',
        fill: true,
        backgroundColor: 'rgba(22, 206, 185, .05)',
        borderColor: '#16CEB9',
        data: window.chartData.outlet,
      }, {
        label: 'Количество сброшенной воды',
        fill: true,
        backgroundColor: 'rgba(245, 0, 104, .05)',
        borderColor: '#F50068',
        data: window.chartData.water,
      }]
    },
    options: {
      responsive: true,
      aspectRatio: '3',
      legend: {
        display: false
      },
      title: {
        display: false
      },
      tooltips: {
        mode: 'nearest',
        intersect: true,
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: false
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: false
          }
        }]
      }
    }
  };
}
function chartUpdate() {
  chartConfigNew();
  window.mChartObj.data = window.chartConfig.data;
  window.mChartObj.update();
}