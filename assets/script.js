// shows current date in correct format
$("#currentDay").text(dayjs().format("dddd, MMMM DD"));

//changes hourly background color based on current time by adding classes
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

// loads, or gets, text from local storage for each hour
function loadStoredData() { 
    for (var i = 10; i < 24; i++) {
        var hourText = "hour" + i + "text";
        eventsData = JSON.parse(localStorage.getItem(hourText));

        $("#hour-" + i + " textarea").text(eventsData);
    }
}

// stores, or sets, text in local storage
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

    // grabs HTML data 
    var hourBlock = $(event.target).parent();
    var text = hourBlock.children("textarea").val();
    var hour = hourBlock.attr("id").split("-")[1];

    // edits the text of the eventsData object at the clicked hour 
    var hourSaved = "hour" + hour;
    eventsData.hourSaved = text;

    // stores this hour's data in local storage with custom hour title
    hourText = "hour" + hour + "text"
    localStorage.setItem(hourText, JSON.stringify(eventsData.hourSaved));
}

// when a saveBtn is clicked, it is handled, which means the text is stored locally
$(".saveBtn").on("click", handleSaveClick)

// calls functions to show local data and change hour colors
$(function() {
    loadStoredData();
    setHourColors();
});