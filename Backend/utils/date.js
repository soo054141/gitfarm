/* eslint-disable no-shadow */
const dt = new Date();
export const year = dt.getFullYear();
export const month = dt.getMonth() + 1;
export const date = dt.getDate();
export const ONE_YEARS_AGO = 1;
export const TWO_YEARS_AGO = 2;
export const RECENT_THREE_YEARS = [
  year - TWO_YEARS_AGO,
  year - ONE_YEARS_AGO,
  year,
];
export const THREE_YEARS = 3;
// eslint-disable-next-line no-use-before-define
export const today = `${year}-${fillZero(month, 2, "0")}-${fillZero(
  date,
  2,
  "0",
)}`;
export const startOfDay = "T00:00:00Z";
export const endOfDay = "T23:59:59Z";
export const todaySince = `${today}${startOfDay}`;
export const todayUntil = `${today}${endOfDay}`;
// NOTE: test때는 두번째 monthDays 사용하기(API rate limit 방지)
export const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// export const monthDays = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
// export const repoName = ["ci-cd-practice", "commento-assignment"];
export const monthPerYear = 12;
export const customDate = (year, month, day) => ({
  year,
  month,
  day,
});

export function fillZero(target, targetLenth, padString) {
  const str = target.toString();
  return str.padStart(targetLenth, padString);
}

const checkLeapYear = (year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

const getFebruary = () => {
  const isLeapYear = checkLeapYear(year);

  return isLeapYear
    ? Array.from({ length: 29 }, () => 0)
    : Array.from({ length: 28 }, () => 0);
};

export const getMonthCalendar = (month) => {
  const thirtyOneDaysMonth = ["01", "03", "05", "07", "08", "10", "12"];
  const february = "02";
  const monthReg = new RegExp(month);

  if (month === february) {
    return getFebruary(year);
  }

  if (monthReg.test(thirtyOneDaysMonth)) {
    return Array.from({ length: 31 }, () => 0);
  }

  return Array.from({ length: 30 }, () => 0);
};

export const fillZeroMonth = fillZero(month, 2, "0");
