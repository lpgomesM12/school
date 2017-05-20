$(document).ready(function () { 
   $("#new_course").validate({
     rules:{
         "course[name]":{
            required: true
          },
          "course[description]":{
             required: true
          },
          "course[status]":{
           required: true
          },
       
          },
          messages: {
           "course[name]":{
            required: "O nome do curso é obrigatório"
           },
           "course[description]":{
            required: "A descrição do curso é obrigatória"
           },
           "course[status]":{
            required: "O status é obrigatório"
           }     
        }
    });  
}); 