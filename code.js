


$(document).ready(function () {

    $("#x").submit(x);

    var x = document.getElementById("x").value;

    switch (x)
    {
        case "Monday":
            $("#output").text("Begin the week");
            break;
        case "Tuesday":
            $("#output").text("The second day");
            break;
        case "Wednesday":
            $("#output").text("Mid-week day");
            break;
        case "Thursday":
            $("#output").text("Yes Thursday");
            break;
        case "Friday":
            $("#output").text("TGIF");
            break;
        case "Saturday":
            $("#output").text("Weekend part one ");
            break;
        case "Sunday":
            $("#output").text("Sunday before Monday");
            break;
        default:
            $("#output").text("nothing");
    }

});