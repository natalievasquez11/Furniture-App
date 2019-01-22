$(function() {
    $('#furnitureName').val('');
    $('.create-form').on('submit', function(event) {
        event.preventDefault();

        var newDelivery = {
            furn_name: $('#furnitureName').val().trim()
        };
        console.log(newDelivery);
        $.ajax('/api/furniture', {
            type: 'POST',
            data: newDelivery
        }).then(function() {
            console.log('Furniture Order Added');
            $('#furnitureName').val('');
            location.reload();
        });
    });

    $('.devButton').on('click', function(event) {
        $.ajax('/api/furniture/' + $(this).attr('id'), {
            type: 'PUT'
        }).then(function() {
            console.log('Furniture Order Delivered');
            location.reload();
        });
    });
});