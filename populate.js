if ($('.mr-compare li.commit').length === 1) {
    var title = $('.mr-compare li.commit .commit-row-message').text();
    var body = $('.mr-compare li.commit .commit-row-description.js-toggle-content p')
        .map(function () {
            return $(this).text();
        })
        .get()
        .join('\n\n')
        .trim();

    console.log(title);
    console.log(body);

    $('#merge_request_title').val(title);
    $('#merge_request_description').val(body);
}
console.log($('.mr-compare li.commit'));