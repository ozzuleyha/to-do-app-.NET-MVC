
$(function () {
    //Attaching DOM element to varibles
    var $tasksList = $("#tasksList");
    var $taskInput = $("#taskInput");
    var $notification = $("#notification");

    //Counting amount of items in the list
    //To display or hide notification
    var displayNotification = function () {
        if (!$tasksList.children().length) {
            //$notification.css("display", "block");
            $notification.fadeIn("fast");
        } else {
            $notification.css("display", "none")
        }
    }

    //Attaching event handler to the add button
    $("#taskAdd").on("click", function () {

        //Returning false if the input is empty
        if (!$taskInput.val()) { return false; }

        //Appending li with the input value
        $tasksList.append("<li>" + $taskInput.val() + "<button class='delete'>&#10006</button></li>");

        //Cleaning input after add event
        $taskInput.val("");

        //Display/Hide Notification
        displayNotification();

        //Attaching even handler to the delete button
        $(".delete").on("click", function () {

            //Assigning "this" to varible, as it doesn't
            //work correctly with setTimeout() function
            var $parent = $(this).parent();

            //Displaying CSS animation
            $parent.css("animation", "fadeOut .3s linear");

            //Timeout on remove function
            setTimeout(function () {
                $parent.remove();
                displayNotification();
            }, 295);

        })
    })
});

