//uc1
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
    console.log("uc1 - Employee is absent");
    return;
} else {
    console.log("uc1 - Employee is present");
}

//uc2
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck) {
    case IS_PART_TIME: 
    empHrs = PART_TIME_HOURS;
    break;
    case IS_FULL_TIME:
empHrs = FULL_TIME_HOURS;
break;
    default:
    empHrs = 0; 
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("uc2 - Employee Wage: " + empWage);

//uc3
function getWorkingHours(empCheck) {
    switch (empCheck) {
    case IS_PART_TIME:
    return PART_TIME_HOURS;
    case IS_FULL_TIME:
    return FULL_TIME_HOURS;
    default:
    return 0;
    }
}
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    empWage = empHrs * WAGE_PER_HOUR;
    console.log("uc3 - Employee wage: " + empWage);

//uc4
let NUM_OF_WORKING_DAYS = 20;
for(let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}
empWage = empHrs * WAGE_PER_HOUR;
console.log("uc4 - Total hours: " + empHrs + " , Employee wage: " + empWage);

//uc5
let MAX_HRS_IN_MONTH = 100;
NUM_OF_WORKING_DAYS = 10;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
totalWorkingDays++;
let empCheck = Math.floor(Math.random() * 10) % 3;
totalEmpHrs += getWorkingHours(empCheck);
}
empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("uc5 - Total Days:" + totalWorkingDays + " ,Total Hrs: " + totalEmpHrs + " ,Emp Wage" + empWage);

//uc6
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
    }
    
    MAX_HRS_IN_MONTH = 160;
    NUM_OF_WORKING_DAYS = 20;
    totalEmpHrs = 0;
    totalWorkingDays = 0;
    let empDailyWageArr = new Array();
    
    while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    }
    
    empWage = calcDailyWage(totalEmpHrs);
    console.log("uc6 - Total Days: " + totalWorkingDays + " ,Total Hrs: " + totalEmpHrs + " ,Emp wage: " + empWage);
 
//uc7A
let totEmpWage = 0;
function sum(dailyWage) {
totEmpWage == dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("uc7A - Total days: " + totalWorkingDays + " ,Total hrs: " + totalEmpHrs +" ,Emp wage: " + totEmpWage);

function totalWages(totalWages, dailyWage) {
return totalWages + dailyWage;
}

console.log("uc7A - Emp wage with reduse: " + empDailyWageArr.reduce(totalWages, 0));

//uc 7B
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
dailyCntr++;
return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("uc7B - Daily wage map");
console.log(mapDayWithWageArr);

//uc 7C 
function fulltimeWage(dailyWage) {
return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("uc7C - Daily wage filter when fulltime wage earned");
console.log(fullDayWageArr);

//uc 7D
function findFulltimewage(dailyWage) {
return dailyWage.includes("160");
}
console.log("uc 7D - First time fulltime wage was earned on day: " + mapDayWithWageArr.find(findFulltimewage));

//uc 7E
function isAllFulltimeWage(dailyWage) {
return dailyWage.includes("160");
}
console.log("uc 7E - Check all element have full time wage:" + fullDayWageArr.every(isAllFulltimeWage));

//uc 7F
function isAnyPartTimmeWage(dailyWage) {
return dailyWage.includes("80");
}
console.log("uc 7F - Check if any part time wage: " + mapDayWithWageArr.some(isAnyPartTimmeWage));

//uc 7G
function totalDaysWorked(numOfDays, dailyWage) {
if(dailyWage >0) return numOfDays+1;
return numOfDays;
}
console.log("uc 7G - Number of days emp worked: " + empDailyWageArr.reduce(totalDaysWorked, 0));
   
//uc 8 
MAX_HRS_IN_MONTH = 100;
NUM_OF_WORKING_DAYS = 20;
totalEmpHrs = 0;
totalWorkingDays = 0;
empDailyWageArr = new Array();
let empDaiilyWageMap = new Map();

function calcDailyWage(empHrs) {
return empHrs * WAGE_PER_HOUR;
}

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
totalWorkingDays++;
let empCheck = Math.floor(Math.random * 10) % 3;
let empHrs = getWorkingHours(empCheck);
totalEmpHrs += empHrs;
empDailyWageArr.push(calcDailyWage(empHrs));
empDaiilyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
}

console.log(empDaiilyWageMap);
function totalWages(totalWage, dailyWage) {
return totalWage + dailyWage;
}
console.log("uc 7A - Emp wage map total hrs: " + Array.from(empDaiilyWageMap.values()).reduce(totalWages, 0));

