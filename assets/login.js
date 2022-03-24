Validator({
    form: '#login_form',
    errorSelector: '.form_message',
    rules: [
        Validator.isEmail('#email'),
        Validator.isPassword('#password',8)
    ]
});

