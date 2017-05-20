$(document).ready(function () { 
   $("#new_student").validate({
     rules:{
         "student[name]":{
            required: true
          },
          "student[register_number]":{
             required: true
          },
          "student[status]":{
           required: true
          },
          },
          messages: {
           "student[name]":{
            required: "O nome do aluno é obrigatório"
           },
           "student[register_number]":{
            required: "O número do registro é obrigatório"
           },
           "student[status]":{
            required: "O status é obrigatório"
           }     
        }
    });  
}); 