var info = new Object();
// {firstName, companyName, mobileNumber, emailAddress, message};
 
 $(document).ready(function(){
    $("button").click(function(){
        info.firstName = $("#firstName").val;
		console.log(info.firstName);
    
	
	var saveData = function (info){
		console.log(info.firstName);
	}
	});
});


var recaptchaCallback = function() {
	var forms = document.getElementsByTagName('form');
	var pattern = /(^|\s)g-recaptcha(\s|$)/;

	for (var i = 0; i < forms.length; i++) {
		var divs = forms[i].getElementsByTagName('div');

		for (var j = 0; j < divs.length; j++) {
			var sitekey = divs[j].getAttribute('data-sitekey');

			if (divs[j].className && divs[j].className.match(pattern) && sitekey) {
				grecaptcha.render(divs[j], {
					'sitekey': sitekey,
					'theme': divs[j].getAttribute('data-theme'),
					'type': divs[j].getAttribute('data-type'),
					'size': divs[j].getAttribute('data-size'),
					'tabindex': divs[j].getAttribute('data-tabindex'),
					'callback': divs[j].getAttribute('data-callback'),
					'expired-callback': divs[j].getAttribute('data-expired-callback')
				});

				break;
			}
		}
	}
}

