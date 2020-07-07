$( window ).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
        $( "#white-logo" ).hide();
        $( "#blue-logo" ).show();
    }
    else
    {
        $( "#white-logo" ).show();
        $( "#blue-logo" ).hide();
    }

});