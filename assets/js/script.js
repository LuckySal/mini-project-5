var timerId;
timerId = setInterval(clockTick, 1000);
function clockTick() {
    $("#time-display").val(moment().format("MMMM Do, YYYY h:mm:ss a"));
}

$("#due-date-input").datepicker();

