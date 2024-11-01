import axios from 'axios';

const API_URL = 'http://app.ezyerp.live';

const defaultHeaders = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json',
};

const postRequest = async (endpoint, data) => {
    try {
        const formData = new URLSearchParams();
        data.forEach(item => formData.append(item.key, item.value));

        const response = await axios.post(`${API_URL}/${endpoint}`, formData, { headers: defaultHeaders });
        
        if (response.status === 200 && response.data.flag) {
            return response.data;
        } else {
            throw new Error('API call failed');
        }
    } catch (error) {
        console.error(`Error in ${endpoint}:`, error);
        throw error;
    }
};

export const loginUser = (formData) => {
    return postRequest('login.php', formData);
};

export const fetchCounters = (additionalData) => {
    return postRequest('counterlist.php', additionalData);
};

export const fetchFinancialYears = (additionalData) => {
    return postRequest('financialyears.php', additionalData);
};

export const fetchCustomers = (data) => {
    return postRequest('customerlist.php', data);
}

export const fetchSalesMan = (data) => {
    return postRequest('salesman.php', data);
};

export const fetchPriceType = (data) => {
    return postRequest('PriceType.php', data);
};

export const fetchSalesItems = (data) => {
    return postRequest('salesitems.php', data);
};