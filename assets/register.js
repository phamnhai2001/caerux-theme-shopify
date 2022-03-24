Validator({
    form: '#register',
    errorSelector: '.form_message',
    rules: [
        Validator.isFirstname('#firstname'),
        Validator.isLastname('#lastname'),
        Validator.isEmail('#email'),
        Validator.isPassword('#password', 8)
    ]
});