import axios from 'axios';

export const sendSMSViaProvider1 = async (message: string, phoneNumber: string) => {
    // Replace with actual provider 1 API details
    const response = await axios.post('https://provider1.example.com/sms', {
        message,
        phoneNumber
    });
    return response.data;
};
