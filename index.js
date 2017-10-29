// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  const revenueDrivers = [];
  drivers.filter(function (driver) {if (driver['revenue'] > revenue) {revenueDrivers.push(driver)}});
  return revenueDrivers;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const revenueDrivers = [];
  drivers.filter(function (driver) {if (driver['revenue'] > revenue) {revenueDrivers.push(driver['name'])}});
  return revenueDrivers;
}

function exactMatch(drivers, obj) {
  const matchDriversArr = [];
  const key = Object.keys(obj)[0];
  drivers.filter(function (driver) {if (driver[key] === obj[key]) {matchDriversArr.push(driver)}});
  return matchDriversArr;
}

function exactMatchToList(drivers, obj) {
  const matchDriversArr = [];
  const key = Object.keys(obj)[0];
  drivers.filter(function (driver) {if (driver[key] === obj[key]) {matchDriversArr.push(driver['name'])}});
  return matchDriversArr;
}
