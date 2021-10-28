
$(function () {
    var $gorevListesi = $("#tasksList");
    var $gorevInput= $("#taskInput");
    var $bildirim = $("#notification");

    $.ajax({
        type: "GET",
        dataType: 'json',
        url: 'TaskData/GetTaskData',
        success: function (data) {
            data.responseText.forEach((item) => {
                $gorevListesi.append("<li>" + item.GorevAciklama + "<button class='delete'>&#10006</button></li>");
                bildirimGizle();
                $(".delete").on("click", function () {

                    var $parent = $(this).parent();

                    $parent.css("animation", "fadeOut .3s linear");

                    setTimeout(function () {
                        $parent.remove();
                        bildirimGizle();
                    }, 295);

                })
            })
        },
        error: function (response) {
            console.log(response)
        }
    })


    var bildirimGizle = function () {
            if (!$gorevListesi.children().length) {
                $bildirim.fadeIn("fast");
            } else {
                $bildirim.css("display", "none")
            }
        }

    $("#taskAdd").on("click", function () {

            if (!$gorevInput.val()) { return false; }

            $gorevListesi.append("<li>" + $gorevInput.val() + "<button class='delete'>&#10006</button></li>");

            $gorevInput.val("");

            bildirimGizle();

            $(".delete").on("click", function () {

                var $parent = $(this).parent();

                $parent.css("animation", "fadeOut .3s linear");

                setTimeout(function () {
                    $parent.remove();
                    bildirimGizle();
                }, 295);

            })
        })
    });
