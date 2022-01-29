var date = moment().format("MMMM dddd DD YYYY");


$("#currentDay").text(date);
console.log($("#currentDay").innerText);

$(".container").on("click", ".description", function(){
    var text = $(this)
    .text()
    .trim();

    var textInput = $("<textarea>")
        .addClass("col-10 textarea")
        .val(text);

    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

$(".container").on("blur", "textarea", function(){
    var text = $(this)
        .val()
        .trim();

    // var status = $(this)
    //     .closest(".container")
    //     .attr("id")

    // var index = $(this)
    //     .closest(".container-item")
    //     .index();

    var descriptionBlock = $("<p>")
        .addClass("col-10 description")
        .text(text);

    $(this).replaceWith(descriptionBlock);
});

var checkTime = function () {
    var hour = $(".time-block").text().trim();

    var time = moment(hour, "LT");
    console.log(time)

    //remove any old classes from element
    $(".time-block").removeClass(".present .past .future");

    // apply new class if task is near/over due date
    if (moment().isAfter(time)) {
        $(".description").addClass(".past");
    } else if (moment().isBefore(time)) {
        $(".description").addClass(".future");
    } else {
        $(".description").addClass(".present");
    }
}

checkTime();