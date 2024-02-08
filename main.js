function calculateMoney(ticketSale) {
  const ticketPrice = 120;
  const caretakerSalary = 500;
  const staffNo = 8;
  const lunchCost = 50;

  if (ticketSale < 0) {
    return "Invalid Number";
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

function monthlySavings(arr, livingCost) {
  if (Array.isArray(arr) === undefined) {
    return "invalid input";
  }
  if (typeof livingCost !== "number") {
    return "invalid input";
  }
  let totalIncome = 0;
  for (let i = 0; i < arr.length; i++) {
    totalIncome += payments[i];
  }

  let totalTax = 0;
  for (let i = 0; i < arr.length; i++) {
    if (payments[i] >= 3000) {
      totalTax += payments[i] * 0.2;
    }
  }
  const savingAmount = totalIncome - livingCost - totalTax;
  if (savingAmount >= 0) {
    return savingAmount;
  } else {
    return "earn more";
  }
}
