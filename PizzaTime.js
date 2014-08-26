$(function(){
	
	$("#cities").change(function (){
		$(".pizzaSelection").hide();
		$("#"+this.value).show();

	});

	$(".pizzaSelection").change(function (){
		$(".ingredients").hide();
		$(".ingredientContainer").show();
		$("#"+this.value).show();
	});

	$("button").click(function(){
		$(".ingredients").hide();
		$(".ingredientContainer").hide();
		$(".pizzaSelection").hide();

	});


});
