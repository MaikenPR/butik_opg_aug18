function minConfirmSlet(question, message) {

    if (confirm(question)) {
        alert(message);
        return true;
    } else {
        return false;
    }
}