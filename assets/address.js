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
function toggleDocs(event) {

    if (event.target.className == 'edit') {

        var next = event.target.nextElementSibling.nextElementSibling;


        if (next.style.display == "none") {
            next.style.display = "block";

        } else {
            next.style.display = "none";
        }
    }
}

document.addEventListener('click', toggleDocs, true);
