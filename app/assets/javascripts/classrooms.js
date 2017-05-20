$(document).ready(function() {
     $('#name').autocomplete({
     source: '/seachstudents',
     dataType: 'json',
     minLength: 0,
     change: function(event, ui) {
     if (!ui.item) {
       $('#name').val('');
     }
  },
  select: function(event, ui) {
      if (ui.item) {
            $("#classroom_student_id").val(ui.item.id);
         }
       }
   });
});

$(document).ready(function() {
     $('#course').autocomplete({
     source: '/searchcourse',
     dataType: 'json',
     minLength: 0,
     change: function(event, ui) {
     if (!ui.item) {
       $('#course').val('');
     }
  },
  select: function(event, ui) {
      if (ui.item) {
            $("#classroom_course_id").val(ui.item.id);
         }
       }
   });
});



$(document).ready(function () { 
   $("#new_classroom").validate({
     rules:{
         name:{
           required: true
          },
          course:{
           required: true
          }
          },
         messages: {
           name:{
            required: "O aluno é obrigatório"
           },
           course:{
            required: "O curso é obrigatório"
           }     
        }
    });  
}); 