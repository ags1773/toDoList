window.onload = function() {
  document.querySelector("input").focus();
}

$('#add').on('click',function(){
  $('#add i').toggleClass('fa-plus-square-o fa-minus-square-o')
  $('input').slideToggle(350).focus();
});

$('ul').on('click', 'li', function(){
  $(this).toggleClass('done');

  if($('li').hasClass('done')){
    $('#deleteBtn').slideDown(350).css('display', 'block');
  }else{
    $('#deleteBtn').slideUp(350).css('display', 'block');
  }
});

$('ul').on('mouseover mouseout', 'li', function(){
  $(this).toggleClass('liHover');
});

$('#deleteBtn').click(function(){
  $('li').remove('.done');
  $('#deleteBtn').slideUp(350).css('display', 'block');
});

$('input').keyup(function(e){
  if(e.which === 13){
    var item = $('input').val();
    if(item){
      $('ul').append('<li>' + item + '</li>');
      $('input').val('');
    }
    e.preventDefault();
  }
});