export const setDateLetter = (dateString) => {
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
  
    const dayMap = {
      0: 'S', // Sunday
      1: 'M', // Monday
      2: 'T', // Tuesday
      3: 'W', // Wednesday
      4: 'T', // Thursday
      5: 'F', // Friday
      6: 'S', // Saturday
    };

    return dayMap[dayOfWeek];
}