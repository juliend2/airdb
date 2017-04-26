$(function(){
  // debugger;
  $('#js-add-field').on('click', function(e) {
   e.preventDefault();
   $('#js-fields').append('<p>'+
                            '<input name="field_names[]" type="text" placeholder="Field name">'+
                            '<select name="field_types[]">'+
                             _.join(_.map(fieldTypes, function(fieldType){
                               return '<option value="'+fieldType.slug+'">'+fieldType.name+'</option>';
                             }), '')+
                            '</select>'+
                          '</p>');
  });
});
