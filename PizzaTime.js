$(function(){
	$(".pizzaSelection").hide();

	$("#cities").change(function (){
		$(".pizzaSelection").hide();
		$("#"+this.value).show();
	});
});
