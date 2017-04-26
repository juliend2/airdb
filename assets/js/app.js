// var Table = require('./tables.js').Table;
$(function(){
  var fieldTypes = [
   {name: 'Text', slug: 'text'},
   {name: 'Float', slug: 'real'},
   {name: 'Datetime', slug: 'datetime'},
   {name: 'Integer', slug: 'int'}
  ];

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
  console.log(window.Table);
});
