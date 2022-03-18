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
function myFunction() {
  var x = document.getElementByClassName("edit_content");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}