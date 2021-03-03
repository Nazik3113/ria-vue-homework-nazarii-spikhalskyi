export default function validateAge(age, addUserClass, setError, unsetError) {
    if (age.trim().length === 0) return false;
    if (+age > 150) {
        setError('Age should be less than 150');
        addUserClass = `${addUserClass} disabled`;
        return false;
    }
    let res = true;
    for (let number of age.split('')) {
        if (!Number.isNaN(+age) && number !== '.') {
            unsetError();
            addUserClass = 'btn btn-primary';
            res = true;
        } else {
            setError('Age should not contain nothing except numbers');
            addUserClass = `${addUserClass} disabled`;
            res = false;
        }
    }
    return res;
}