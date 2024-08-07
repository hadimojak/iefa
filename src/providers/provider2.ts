import axios from 'axios';

export const sendSMSViaProvider2 = async (message: string, phoneNumber: string) => {
    // Replace with actual provider 2 API details
    const response = await axios.post('https://provider2.example.com/sms', {
        message,
        phoneNumber
    });
    return response.data;
};
