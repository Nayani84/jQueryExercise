let movieArr = [];
$(function () {
    // Form Submit Event.
    hideShowSelect();
    $("#movie-form").on("submit", function (e) {
        e.preventDefault();

        let movTitle = $("#title").val();
        let movRate = parseInt($("#rating").val());

        if (!movieArr.find(m => m.title.toLowerCase() === movTitle.toLowerCase())) {
            let obj = { "title": movTitle, "rating": movRate };
            $("#movieList").append(createMovieListItem(obj));
            movieArr.push(obj);
        }
        else {
            alert(`${movTitle} has already been rated!!!`);
        }

        $("#title").focus();
        //Clear Form inputs.
        $("#movie-form").trigger("reset");
        hideShowSelect();
        //Reset Sort Dropdown.
        $("#optSort option:eq(0)").prop("selected", true);
    });

    //Delete Button Event.
    $("ul").on("click", ".removeBtn", function (e) {
        const movieName = $(e.target).closest('li').children('span')[0].innerHTML;
        movieArr.splice(movieArr.findIndex(t => t.title == movieName), 1);
        $(e.target).closest('li').remove();
        hideShowSelect();
    });

    //Sort Movie list.
    $("#optSort").on("change", function (e) {
        switch (e.target.value) {
            case '1':
                movieArr.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case '2':
                movieArr.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case '3':
                movieArr.sort((a, b) => a.rating - b.rating);
                break;
            case '4':
                movieArr.sort((a, b) => b.rating - a.rating);
                break;
            default:
                console.log('No option');
        }
        $("#movieList").empty();
        movieArr.forEach((obj) => {
            $("#movieList").append(createMovieListItem(obj));
        });
    });

    //Show Optionlist if there is atleast 1 movie. else hide.
    function hideShowSelect() {
        if ($("#movieList").children().length > 0) {
            $('#divSort').show();
        }
        else {
            $('#divSort').hide();
        }
    }

    //Create Movie List Item.
    function createMovieListItem(obj) {
        return `
    <li>
    <span> ${obj.title} </span>
     <span>&#9734; ${obj.rating}
    <button type="button" class="removeBtn">X</button><span>
    </li>
    `
    }

});