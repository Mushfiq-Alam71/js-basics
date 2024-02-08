function calculateMoney(ticketSale) {
  const ticketPrice = 120;
  const caretakerSalary = 500;
  const staffNo = 8;
  const lunchCost = 50;

  if (ticketSale < 0) {
    return "You've Entered Invalid Number.";
  }

  const dailyLunchCost = staffNo * lunchCost;
  const dailyExpense = caretakerSalary + dailyLunchCost;
  const dailyIncome = ticketPrice * ticketSale;
  const dailyRemaining = dailyIncome - dailyExpense;
  return dailyRemaining;
}

function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  }

  const nameChar = ["a", "y", "i", "e", "o", "u", "w"];
  const lastChar = name.toLowerCase().charAt(name.length - 1);

  if (nameChar.includes(lastChar)) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

function deleteInvalids(array) {
  if (Array.isArray(array) === false) {
    return "Invalid Array";
  }

  let onlyNumbers = [];
  for (const number of array) {
    if (typeof number === "number" && Number.isFinite(number)) {
      onlyNumbers.push(number);
    }
  }
  return onlyNumbers;
}

function password(obj) {
  const name = obj.name;
  const birthYear = obj.birthYear;
  const siteName = obj.siteName;

  if (
    obj.name === undefined ||
    obj.birthYear === undefined ||
    obj.siteName === undefined
  ) {
    return "invalid";
  }

  if (birthYear.toString().length !== 4) {
    return "invalid";
  }

  const formatSiteName =
    siteName.charAt(0).toUpperCase() + siteName.slice(1).toLowerCase();

  const password = formatSiteName + "#" + name + "@" + birthYear;
  return password;
}

function monthlySavings(arr, livingCost) {}
