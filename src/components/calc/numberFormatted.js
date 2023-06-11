export const formattedNumber = number => {
    let formattedNumber = number.substring(0, 3) + '-';
    for (let i = 3; i < number.length; i += 1) {
      if ((i - 3) % 2 === 0 && i !== 3) {
        formattedNumber += '-';
      }
      formattedNumber += number[i];
    }
    return formattedNumber;
  };