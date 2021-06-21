/*--------------------------------start page eight(طلباتي)-------------------------------*/

$('.qtybtn').on('click', function (e) {
    e.preventDefault();
    var $button = $(this);
    var oldValue = $button.parent().find('.quantity').val();
    if ($button.hasClass('up')) {
        var newVal = parseFloat(oldValue) + 1;
    } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 0;
        }
    }
    $button.parent().find('.quantity').val(newVal);
    $button.parent().find('.div-quantity').text(newVal);

});


//delete
$('.delete').click(function (e) {
    var that = $(this);
    e.preventDefault();
    var n = new Noty({
        text: "هل تريد تاكيد الحذف",
        type: "warning",
        killer: true,
        buttons: [
            Noty.button("نعم", 'btn btn-secondary mr-2', function () {
                that.parent().find('tr').delet();
            }),
            Noty.button("لا", 'btn btn-secondary mr-2', function () {
                n.close();
            })
        ]
    });
    n.show();
});//end of delete

/*--------------------------------end page eight(طلباتي)----------------------------------*/