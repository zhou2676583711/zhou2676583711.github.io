

function v(){

  $.ajax({

		url : "http://192.168.1.105:8080/a/AServlet",
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
