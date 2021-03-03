export default function validateEmail(email, addUserClass, setError, unsetError) {
    if (email.trim().length === 0) return false;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase())) {
        unsetError();
        addUserClass = 'btn btn-primary';
        return true;
    } else {
        setError('Email is not valid');
        addUserClass = `${addUserClass} disabled`;
        return false;
    }
}