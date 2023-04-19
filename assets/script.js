var eventsData;

function setHourColors() {
    var now = dayjs();
    for (var i = 9; i < 18; i++) {
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
    const eventsData = JSON.parse(localStorage.getItem("calendarEvents"));
    if (!eventsData) {
        eventsData = {
            hour10: "",
            hour11: "",
            hour12: "",
            //etc
        };
    }
}

function handleSaveClick(event) {
    //grabs HTML data
    var hourBlock = $(event.target).parent();
    var value = hourBlock.children("textarea").val();
    var hour = hourBlock.attr("id").split("-")[1];

    //mod data obj
    eventsData["hour" + hour] = value;

    //store this hour's data in local
    localStorage.setItem("calendarEvents", JSON.stringify(eventsData));
}

$(function() {
    loadStoredData();
    setHourColors();
});

$(".saveBtn").on("click", )