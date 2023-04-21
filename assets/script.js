var eventsData;

$("#currentDay").text(dayjs().format("dddd, MMMM DD"));


function setHourColors() {
    var now = dayjs();
    for (var i = 10; i < 24; i++) {
        if (i < now.hour()) {
            $("#hour-" + i + " textarea").addClass("past");
        } else if (i == now.hour()) {
            $("#hour-" + i + " textarea").addClass("present");
        } else {
            $("#hour-" + i + " textarea").addClass("future");
        }
    }
}

function loadStoredData() {
    for (var i = 10; i < 24; i++) {
        var hourText = "hour" + i + "text";
        eventsData = JSON.parse(localStorage.getItem(hourText));

        $("#hour-" + i + " textarea").text(eventsData);
    }
    
    // if (!eventsData) {
    //     eventsData = {
    //         hour10: "",
    //         hour11: "",
    //         hour12: "",
    //         //etc
    //     };
    // }
}

function handleSaveClick(event) {
    eventsData = {
                    hour10: "",
                    hour11: "",
                    hour12: "",
                    hour13: "",
                    hour14: "",
                    hour15: "",
                    hour16: "",
                    hour17: "",
                    hour18: "",
                    hour19: "",
                    hour20: "",
                    hour21: "",
                    hour22: "",
                };

    //grabs HTML data
    var hourBlock = $(event.target).parent();
    var text = hourBlock.children("textarea").val();
    var hour = hourBlock.attr("id").split("-")[1];

    //mod data obj 
    var hourSaved = "hour" + hour;
    eventsData.hourSaved = text;
    console.log("i typed: " + text);

    //store this hour's data in local
    hourText = "hour" + hour + "text"
    localStorage.setItem(hourText, JSON.stringify(eventsData.hourSaved));
    //localStorage.setItem("textarea", text);
}

$(".saveBtn").on("click", handleSaveClick)

$(function() {
    loadStoredData();
    setHourColors();
});