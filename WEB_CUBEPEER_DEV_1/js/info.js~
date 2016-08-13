jQuery(document).ready(function($){
//$('#form-container').submit(saveData);
});



function saveData() {
    
    function loadData() {
        

        var $requestInfo = $('#requestInfo');
 
        // load request information data
        var info = new Object();
        info.firstName = $('#firstName').val();
        info.companyName = $('#companyName').val();
        info.mobileNumber = $('#mobileNumber').val();
        info.emailAddress = $('#emailAddress').val();
        info.request = $('#request').val();

        
        // YOUR CODE GOES HERE!
        console.log(info.firstName +" "+ info.companyName+" "+"Contact Vidverma ");
        info.resetInfo = function() {
            $('#form-container').reset();
        };
        //info.resetInfo();
        grecaptcha.reset();
        return false;
    }
    
    loadData();
    return false;
}

