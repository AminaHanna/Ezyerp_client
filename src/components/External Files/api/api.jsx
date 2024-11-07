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

export const loginUser = () => {
    const formData = [
        { key: "username", value: "admin", type: "text" },
        { key: "password", value: "admin", type: "text" },
        { key: "officecode", value: "RD01", type: "text" }
      ];
    return postRequest('login.php', formData);
};

export const fetchCounters = () => {
    const counterData = [
        { key: "officecode", value: "RD01", type: "text" },
        { key: "officeid", value: "1", type: "text" },
        { key: "employeeid", value: "1", type: "text" },
        { key: "usertypeid", value: "1", type: "text" }
      ];
    return postRequest('counterlist.php', counterData);
};

export const fetchFinancialYears = () => {
    const additionalData = [
        { key: "officecode", value: "RD01", type: "text" },
        { key: "officeid", value: "1", type: "text" },
        { key: "employeeid", value: "1", type: "text" },
        { key: "usertypeid", value: "1", type: "text" }
    ];
    return postRequest('financialyears.php', additionalData);
};

export const fetchCustomers = () => {
    const datas = [
        { key: "officeid", value: "1" },
        { key: "officecode", value: "RD01" },
        { key: "financialyearid", value: "1" }
      ];
     
    return postRequest('customerlist.php', datas);
}

export const fetchSalesMan = () => {
    const data = [
        { key: "officeid", value: "1" },
        { key: "officecode", value: "RD01" },
        { key: "financialyearid", value: "1" },
      ];
    return postRequest('salesman.php', data);
};

export const fetchPriceType = () => {
    const data = [
        { key: "officeid", value: "1" },
        { key: "officecode", value: "RD01" },
        { key: "financialyearid", value: "1" },
      ];
    return postRequest('PriceType.php', data);
};

export const fetchSalesItems = (data) => {
    // const data = [
    //     { key: "officeid", value: "1" },
    //     { key: "officecode", value: "RD01" },
    //     { key: "financialyearid", value: "1" },
    //     { key: "column", value: columnValue },
    //     { key: "barcode", value: formattedQuery }
    //   ];
    return postRequest('salesitems.php', data);
};