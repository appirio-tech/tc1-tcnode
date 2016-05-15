$(document).ready(function(){
	$("#searchHandleButton").click(function(){
		var inputHandle = $("#handleInput").val();
		if($.trim(inputHandle) == '') {
			$(this).after('<p class="error">Please first input a handle, then click Search</p>');
			return false;
		} else {
			$("#SearchHandleForm").submit();
		}
	});
	
	$("#handleInput").focus(function(){
		$("#searchHandleButton").siblings(".error").remove();
	});
	
});