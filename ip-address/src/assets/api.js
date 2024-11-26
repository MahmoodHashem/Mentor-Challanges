// Import Axios
import axios from 'axios';

// Create an API helper class
class ApiHelper {
  constructor() {
    this.baseUrl = 'https://ipapi.co';
  }

  // Method to get IP information
  async getIpInfo(ip, format = 'json') {
    try {
      const response = await axios.get(`${this.baseUrl}/${ip}/${format}/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching IP information:', error);
      throw error; // Re-throw the error for further handling if needed
    }
  }
}

// Export an instance of the ApiHelper class
export default new ApiHelper();