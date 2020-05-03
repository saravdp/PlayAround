$(() => {
    $('#edit-preferences').click(function(){
     $('#edit-preferences-modal').addClass('is-active');
    });
    $('.modal-card-head button.delete, .modal-save, .modal-cancel').click(function(){
      $('#edit-preferences-modal').removeClass('is-active');
    });
  });
  $(() => {
    $('#edit-preferences1').click(function(){
     $('#edit-preferences-modal').addClass('is-active');
    });
    $('.modal-card-head button.delete, .modal-save, .modal-cancel').click(function(){
      $('#edit-preferences-modal').removeClass('is-active');
    });
  });
  $(() => {
    $('#edit-preferences2').click(function(){
     $('#edit-preferences-modal').addClass('is-active');
    });
    $('.modal-card-head button.delete, .modal-save, .modal-cancel').click(function(){
      $('#edit-preferences-modal').removeClass('is-active');
    });
  });