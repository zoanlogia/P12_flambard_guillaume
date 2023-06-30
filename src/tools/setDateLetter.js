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
    0: "S", // Sunday
    1: "M", // Monday
    2: "T", // Tuesday
    3: "W", // Wednesday
    4: "T", // Thursday
    5: "F", // Friday
    6: "S", // Saturday
  };

  return dayMap[dayOfWeek];
};
