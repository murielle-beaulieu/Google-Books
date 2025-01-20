export const validation = (formValues) => {
  let isValid = true;
  let errors = [];
  let data = formValues.bookSearch;

  if (data === '') {
    isValid = false;
    errors.input = 'Please enter at least a character for your search';
  }

  if (data.length >= 15) {
    isValid = false;
    errors.input = 'Please refrain from searching for more than 15 characters at a time';
  }

  return {isValid, errors};
}
