$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})

Chart.defaults.global.defaultFontFamily = 'Kanit';
Chart.defaults.global.elements.rectangle.borderWidth = 3;

$.extend(true, $.fn.dataTable.defaults, {
  "searching": false,
  "info": false,
  "language": {
    "sLengthMenu": "แสดง _MENU_"
  },
  "columnDefs": [{
    "targets": 'no-sort',
    "orderable": false,
  }],
  "dom": "<'row'<'col-12'tr>>" +
    "<'form-row'<'col-6 col-lg-3'l><'col-6 col-lg-6'p><'col-sm-12 col-lg-3 d-none d-lg-block'>>",
  drawCallback: function () {
    $('.dataTables_length').addClass('text-left');
  },
});