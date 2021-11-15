 
 $("#update_user").submit(function(event){
     event.preventDefault();

     let formdata = $(this).serializeArray();
        emp = {};
        $.map(formdata , (hmn)=>{
            
             emp[hmn.name] = hmn.value;
         
        })
        console.log(emp.id);
        let request = {
            url : `http://localhost:3000/api/users/${emp.id}`,
            method : 'PUT' , 
            data : emp 
        }

        $.ajax(request).done((res)=>{
            alert("User Successfully Updated..!");
        })
      
 })
 
if(window.location.pathname == "/"){
    $deletebtn = $('.table tbody td a.delete');
    $deletebtn.click(function(){
        var id = $(this).attr("data-id")

      var request2 = {
          url : `http://localhost:3000/api/users/${id}`,
          method : "DELETE"
      } 
  

 if(confirm("Delete This User?!")){
     $.ajax(request2).done((res)=>{
         alert("User DELETED Successfully..!");
         location.reload();
     })
 }      
    })

}
 