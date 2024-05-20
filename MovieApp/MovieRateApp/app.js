$(function () {
    // Form Submit Event.
    $("#movie-form").on("submit", function (e) {
        e.preventDefault();

        let movTitle = $("#title").val();
        let movRate = $("#rating").val();
        $("#movieList").append(createMovieListItem(movTitle, movRate));

        $("#title").focus();
        $("#movie-form").trigger("reset");

    });

    //Delete Button Event.
    $("ul").on("click", ".removeBtn", function (e) {
        $(e.target).parent().remove();
    });

    //Create Movie List Item.
    function createMovieListItem(title, rating) {
        return `
    <li>
    <span> ${title} </span>
     &#9734; ${rating}
    <button type="button" class="removeBtn">X</button>
    </li>
    `
    }

});