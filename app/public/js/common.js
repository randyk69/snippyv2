$(function() {

  $('.save-code-form').submit(function(e) {
      e.preventDefault();
      $.post('save-code', {
          title: $('#title').val(),
          category: $('#category').val(),
          codes: $('#codes').val()
      }, function(result){
         window.location.href = 'http://localhost:3000';
      });
  });

  $('.save-category-form').submit(function(e) {
      e.preventDefault();
      $.post('save-category', {
          category: $('#category').val()
      }, function(result){
         window.location.href = 'http://localhost:3000';
      });
  });

  $('.btn-delete').on('click', function(e) {
      e.preventDefault();
      var key = $(this).attr('data-key');
      //console.log(key);
      //alert(key);

      $.ajax({
          url: '/delete-code/'+key,
          type: 'DELETE',
          success: function(data) {
            window.location.href = 'http://localhost:3000/category/'+String(data);
            //alert(data);
          }
      });

  });

});
