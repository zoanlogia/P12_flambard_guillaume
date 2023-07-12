export const setDateLetter = (input) => {
  let dayOfWeek;

  // Check if input is a string
  if (typeof input === "string") {
    const date = new Date(input);
    dayOfWeek = date.getDay();
  } else if (typeof input === "number") {
    // Adjust dayOfWeek to match dayMap if input is a number
    dayOfWeek = input % 7;
  } else {
    throw new Error("Invalid input type for setDateLetter function");
  }

  const dayMap = {
    0: "D", // Sunday
    1: "L", // Monday
    2: "M", // Tuesday
    3: "M", // Wednesday
    4: "J", // Thursday
    5: "V", // Friday
    6: "S", // Saturday
  };

  return dayMap[dayOfWeek];
};
