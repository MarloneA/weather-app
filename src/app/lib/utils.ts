export function dateToString(date: number) {
  const res = new Date(date * 1000);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return res.toLocaleDateString("en-US", options);
};
