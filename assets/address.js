Validator({
    form: '#formAddress',
    errorSelector: '.form_message',
    rules: [
        Validator.isCompany('#company'),
        Validator.isSurname('#first_name','#last_name'),
        Validator.isPhone('#phone_number'),
        Validator.isCode('#post_number'),
        Validator.isCity('#city'),
        Validator.isAddress('#street')

    ]
});

// show hide button
var content = document.getElementsByClassName("update");
var buttons = document.getElementsByClassName("edit");
button.onclick = function() {
    if (content.style.display !== 'none') {
        content.style.display = 'none';
    }
    else {
        content.style.display = 'block';
    }
};
