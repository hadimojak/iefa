export const sendSMS = async (message: string, phoneNumber: string) => {
  return `${message}    + ${phoneNumber}`;
};
