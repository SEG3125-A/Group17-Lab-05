function validateName(txtName) {
    var a = document.getElementById(txtName).value;
    // This filter asks for only alphabetical characters for the name
    var filter = /^[A-Za-z]+$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateEmail(txtEmail) {
    var a = document.getElementById(txtEmail).value;
    // This filter asks for the characters '@' and '.' to be included in the email
    var filter = /^[A-Za-z]+\@[A-Za-z]+\.[A-Za-z]+$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for the format ###-###-#### for the phone number
    var filter = /^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1\d{4}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCreditCard(txtCreditCard) {
    var a = document.getElementById(txtCreditCard).value;
    // This filter asks for the format #### #### #### #### for the credit card number
    var filter = /^\d{4} \d{4} \d{4} \d{4}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCVV(txtCVV) {
    var a = document.getElementById(txtCVV).value;
    // This filter asks for the format ### for the CVV
    var filter = /^\d{3}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateExpDate(txtExpDate) {
    var a = document.getElementById(txtExpDate).value;
    // This filter asks for the format MM/YY for the credit card expiration date
    var filter = /^\d{2}\/\d{2}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/ 
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["02/23/2024","02/26/2024","02/26/2024","03/04/2024"]
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) == -1 ]
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    $("#customer-name").on("change", function(){ // calls validateName and displays error alert if not valid
        if (!validateName("customer-name")){
            $("#customer-name-alert").removeClass("d-none");
            $("#customer-name").val("");
        }
        else {
            $("#customer-name-alert").addClass("d-none");
        }
    });

    $("#customer-email").on("change", function(){ // calls validateEmail and displays error alert if not valid
        if (!validateEmail("customer-email")){
            $("#customer-email-alert").removeClass("d-none");
            $("#customer-email").val("");
        }
        else {
            $("#customer-email-alert").addClass("d-none");
        }
    });

    $("#customer-phone").on("change", function(){ // calls validatePhone and displays error alert if not valid
        if (!validatePhone("customer-phone")){
            $("#customer-phone-alert").removeClass("d-none");
            $("#customer-phone").val("");
        }
        else {
            $("#customer-phone-alert").addClass("d-none");
        }
    });

    $("#customer-cc").on("change", function(){ // calls validateCreditCard and displays error alert if not valid
        if (!validateCreditCard("customer-cc")){
            $("#customer-cc-alert").removeClass("d-none");
            $("#customer-cc").val("");
        }
        else {
            $("#customer-cc-alert").addClass("d-none");
        }
    });

    $("#customer-cvv").on("change", function(){ // calls validateCVV and displays error alert if not valid
        if (!validateCVV("customer-cvv")){
            $("#customer-cvv-alert").removeClass("d-none");
            $("#customer-cvv").val("");
        }
        else {
            $("#customer-cvv-alert").addClass("d-none");
        }
    });

    $("#customer-cc-exp").on("change", function(){ // calls validateExpDate and displays error alert if not valid
        if (!validateExpDate("customer-cc-exp")){
            $("#customer-cc-exp-alert").removeClass("d-none");
            $("#customer-cc-exp").val("");
        }
        else {
            $("#customer-cc-exp-alert").addClass("d-none");
        }
    });

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery 
    // You can try different themes (the names are under the calendars) / This is Excite Bike 
    // To use a different theme you must include its css in your HTML file. 
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/ 
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/ 
    $( "#dateTimeInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before Feb 16st 2024
            minDate: new Date('02/16/2024'),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }   
    );
});