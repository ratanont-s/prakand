$(function () {
    'use strict'
  
    $('[data-toggle="offcanvas"]').on('click', function () {
      $('.offcanvas-collapse').toggleClass('open')
      $('body').toggleClass('offcanvas-open')
    })
})

Chart.defaults.global.defaultFontFamily = 'Kanit';
Chart.defaults.global.elements.rectangle.borderWidth = 3;