module.exports = (fullName) => {

  if (typeof fullName !== 'string') {
    return 'Error';
  }

  const splittedFullname = fullName.split(' ');
  const [firstName, lastName] = splittedFullname;

  if (!firstName || !lastName || splittedFullname.length > 2) {
    return 'Error';
  }

  else {
    return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() +
    ' ' + 
    lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
  }

};