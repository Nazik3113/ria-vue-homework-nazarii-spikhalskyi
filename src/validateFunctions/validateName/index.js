export default function validateNames(name, addUserClass, setError, unsetError) {
    if (name.trim().length === 0) return false;
    for (let letter of name.trim().split('')) {
        if (letter.toUpperCase() === letter.toLowerCase() && letter !== ' ') {
            setError('Name should not contain numbers or symbols');
            addUserClass = `${addUserClass} disabled`;
            return false;
        }
    }
    if (name.length > 20) {
        setError('Name length should be less than 20');
        addUserClass = `${addUserClass} disabled`;
        return false;
    } else {
        unsetError();
        addUserClass = 'btn btn-primary';
        return true;
    }
}