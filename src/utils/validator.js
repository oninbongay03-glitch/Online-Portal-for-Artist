const validateAll = (form, patterns) => {
    const errorMessages = [];
    const inputs = form.querySelectorAll('input');

    patterns.forEach(pattern => {
        const input = Array.from(inputs).find(input => input.id === pattern.id);
        const value = input.value.trim();
        
        if(pattern.required && (!value || value === "" || value.length === 0)) {
            errorMessages.push(pattern.message.required);
        }

        if(value && value !== "" && !pattern.pattern.test(value)){
            errorMessages.push(pattern.message.pattern);
        }
    });

    return errorMessages;
}

export { validateAll };