export const GetTimestamp = () => {
  const time = Date.now();
  const date = new Date(time);
  const year = date.getFullYear();
  const day = date.getDay();
  const month = date.getMonth();

  return `${year}-${month}-${day}`;
};
