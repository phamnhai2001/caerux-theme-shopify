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
for (var i = 0; i < content.length; i++) {
  let div = content[i];
  let button = buttons[i];
  button.onclick = function() {
    if (div.className == "open") {
      //shrink the box
      div.className = "update";
    } 
  };
}
