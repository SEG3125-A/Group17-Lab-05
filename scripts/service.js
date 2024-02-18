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

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#customer-phone").on("change", function(){
        if (!validatePhone("customer-phone")){
            alert("Wrong format for phone number. Please re-enter.");
            $("#customer-phone").val("");
            $("#customer-phone").addClass("error");
        }
        else {
            $("#customer-phone").removeClass("error");
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


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put 
    $("#customer-cc").on("mouseenter", function(){
        $("#customer-cc").addClass("showInput");
    });

    $("#customer-cc").on("mouseleave", function(){
        $("#customer-cc").removeClass("showInput");
    });
  
    // https://jqueryui.com/tooltip/ 
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#customer-cc").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });


});