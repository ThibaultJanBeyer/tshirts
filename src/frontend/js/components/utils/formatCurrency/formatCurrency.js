const formatCurrency = (value, language) => {
  // split every 3 char from behind. E.g. 1000.00 -> ["1", "000", ".00"]
  value += '';
  const splittedValue = value.split(/(?=(?:...)*$)/),
        decimals = splittedValue.pop(),
        joinedValue = splittedValue.join(",");

  if(language.indexOf('en') > -1) {
    return '$ ' + joinedValue + decimals;
  } else {
    return joinedValue.replace(/\,/g, '.') + decimals.replace(/\./g, ',') + ' €';
  }
};

export default formatCurrency;