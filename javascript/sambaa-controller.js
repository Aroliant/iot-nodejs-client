try{ var a =$; } catch(e){ 	alert('Unable to load jQuery'); }

if(!navigator.onLine){
	alert('Unable to connect Internet');
}

var config = {
	developer_key 	: '',
	application_key : '',
	location		: '',
	attributes  	: '',
	app_type		: ''
};

var sambaa = {
	setValue : function(attr,val){
		if(typeof val !== "undefined"){
			var data = 	attr + " : " + val;
		}else{
			var data = attr;
		}

		$.ajax({	
		method: "GET",
		url: "http://www.aroliant.com/app/sambaa/requestSetter.php",
		data: { 
			developer_key: config.developer_key,
			application_key: config.application_key,
			data : data
			}
		})
		.done(function( msg ) {
			console.log('value set !' + "\n" + msg);	
		})
		.fail(function() {
			console.log('Unable to connect Internet');
		});

	}
	
};
