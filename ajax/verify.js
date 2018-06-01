

function verify(){

  $.ajax({

		url : "http://119.97.235.162:8080/a/AServlet",
		type :"get",
		data : {
			name : $("#username").val()
		},
		dataType : "text",

		success : function(result) {
			$("#span").html(result);

		},
		error : function(err) {
			alert("error\n" + err);
		}
	});


}
