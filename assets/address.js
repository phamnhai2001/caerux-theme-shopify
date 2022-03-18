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
var content = Array.from(document.querySelectorAll(".update"));

content.forEach(function(el){
    //var content= el.querySelector(".content");
    var button = el.querySelector(".edit");
    button.addEventListener("click", function () {
        el.classList.toggle("open");
           
    }, false)
});