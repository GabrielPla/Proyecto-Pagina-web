function main() {
  $('.main').hide();
  $('.main').fadeIn(1000);
  $('.boton-contacto').on('click', function () {
    $(this).next().slideToggle(300);
  });
};
$(document).ready(main);
