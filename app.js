$(document).ready(function() {

    $('#js-shopping-list-form').submit(function() {




        var item = $('#shopping-list-entry').val();
        //var ul="<li>"+username+"</li>";
        if (item.length < 2)

        {
            alert('please add item');
            return false;
        }

        if (item == $('.shopping-item').text().length)

        {
            alert('this item alredy exists');
            return false;
        }



        var ul = $('.template-shopping-list li').clone();
        console.log(ul);
        ul = $(ul);
        ul.find('.shopping-item').text(item);
        $('.shopping-list').append(ul);
        return false;

    });

    $('.shopping-list').on('click', '.shopping-item-delete', function() {
        $(this).parent().parent().remove();

    });

    $('.shopping-list').on('click', '.shopping-item-toggle', function() {

        $(this).closest('div').siblings().toggleClass('shopping-item__checked');


    });




});
