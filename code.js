$(document).ready(function () {



        $("#submitWeek").submit(function (event) {
         event.preventDefault();

            var caseTest = $("input[type='radio']:checked").val();

            switch (caseTest) {
                case "monday":
                    $("#output").text("Begin the week");
                    break;
                case "tuesday":
                    $("#output").text("The second day");
                    break;
                case "wednesday":
                    $("#output").text("Mid-week day");
                    break;
                case "thursday":
                    $("#output").text("Yes Thursday");
                    break;
                case "friday":
                    $("#output").text("TGIF");
                    break;
                case "saturday":
                    $("#output").text("Weekend part one ");
                    break;
                case "sunday":
                    $("#output").text("Sunday before Monday");
                    break;
                default:
                    $("#output").text("nothing");
            }
        });

    });


