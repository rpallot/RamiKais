$(document).ready(function(){

	$("#text").focus(function() {
		$(this).animate({ width: "248px" }, 500);
	});
	
	$("#text").blur(function() {
		$(this).animate({ width: "198px" }, 500);
	});
	
	$("#name").focus(function() {
		$(this).animate({ width: "248px" }, 500);
	});
	
	$("#name").blur(function() {
		$(this).animate({ width: "198px" }, 500);
	});
	
	$("#mail").focus(function() {
		$(this).animate({ width: "248px" }, 500);
	});
	
	$("#mail").blur(function() {
		$(this).animate({ width: "198px" }, 500);
	});
	
	
		var name = $("#name").text();
		var mail = $("#mail").text();
		var text = $("#text").text();
	
	$("#test").click(function(){
		
		var nameText = $("#test").text();
		$("#test").text(nameText);
	
	});
	
	$("#sendmail").click(function(){
		var valid = "";
		var isr = " is required.";
		var name = $("#name").text();
		var mail = $("#mail").text();
		var text = $("#text").text();
		
		/*
		if (parseInt(name.length) < 1) {
			valid += "<br />Name"+isr.
		}
		
		if (!mail.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
			valid += "<br />A valid email"+isr.
		}
		
		if (text.length < 1) {
			valid += "<br />A message"+isr.
		}
		
		if (valid!="") {
			$("#response").fadeIn("slow");
			$("#response").html("Error: " + valid);
		} else {
			
			var datastr = name= + name + "&mail=" + mail + "&text=" + text; 
			$("#response").css("display", "block");
			$("#response").html("Sending message....");
			$("#response").fadeIn("slow");
			setTimeout("send('"+datastr+"')",2000);
		}
		*/
		return false
		
		});
	/*	
	function send(datastr) {
		$.ajax({
			type: 		"POST",
			url:		"../php/mail.php",
			data:		datastr,
			cache:		false,
			success:	function(html) {
							$("#response").fadeIn("slow");
							$("#response").html(html);
							setTimeout('$("#response").fadeOut("slow")', 2000);
						}
		});
	*/
	});
		