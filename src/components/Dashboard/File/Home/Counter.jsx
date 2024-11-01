import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { errorToast } from '../../../External Files/Toast/toast';
import Ezerp from "../../../External Files/Icons/erp.png"
import { fetchCounters, fetchFinancialYears } from '../../../External Files/api/api';

function Counter() {
    const [selectedCounter, setSelectedCounter] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [financialYears, setFinancialYears] = useState([]);
    const [counters, setCounters] = useState([]);
    const navigate = useNavigate();

    const handleCounterClick = async () => {
        // Fetch counters when the select dropdown is clicked
        if (counters.length === 0) {
            await loadCounters();
        }
    };

    const handleCounterChange = (event) => {
        setSelectedCounter(event.target.value);
    };

    const handleYearClick = async () => {
        if (financialYears.length === 0) {
            await loadFinancialYears();
        }
    };

    const handleYearChange = (event) => {
        const yearId = event.target.value;
        setSelectedYear(yearId);
    };

    const loadCounters = async () => {
        try {
            const additionalData = [
                { key: "officecode", value: "RD01", type: "text" },
                { key: "officeid", value: "1", type: "text" },
                { key: "employeeid", value: "1", type: "text" },
                { key: "usertypeid", value: "1", type: "text" }
            ];

            const formData = await fetchCounters(additionalData);
            
                const countersData = formData.counters.map(counter => ({
                    value: counter.counter_id,
                    label: counter.counter_name,
                }));
                setCounters(countersData);
           
            } catch (error) {
                console.error('Error fetching counters:', error);
                errorToast('An error occurred while fetching counters');
            }
        };

    const loadFinancialYears = async () => {
        try {
            const additionalData = [
                { key: "officecode", value: "RD01", type: "text" },
                { key: "officeid", value: "1", type: "text" },
                { key: "employeeid", value: "1", type: "text" },
                { key: "usertypeid", value: "1", type: "text" }
            ];

            const formData = await fetchFinancialYears(additionalData);

                const years = formData.financial_years.map(year => ({
                    value: year.financeid,
                    label: year.financial_year,
                }));
                setFinancialYears(years);

            } catch (error) {
                console.error('Error fetching financial years:', error);
                errorToast('An error occurred while fetching financial years');
            }
        };

    const handleChoose = () => {
        if (!selectedCounter || !selectedYear) {
            errorToast('Please select both a counter and a financial year!');
            return;
        }

        console.log('Selected Counter:', selectedCounter);
        console.log('Selected Financial Year:', selectedYear);
        navigate('/');
    };

    const handleClose = () => {
        navigate('/signin');
    };

    return (
        <>
            <div className="max-w-screen-sm m-auto border my-10">
                <div className="">
                    <img src={ Ezerp } alt="" className='w-28 absolute p-3' />
                    <img className='h-[250px] w-full' src="https://en.idei.club/uploads/posts/2023-06/1686806232_en-idei-club-p-office-cartoon-dizain-krasivo-4.jpg" alt="" />
                </div>
                <div className="w-[70%] m-auto py-8">
                    <div className="py-5">
                        <label htmlFor="selectBox">Select Counter</label>
                        <select id="selectBox" className='w-[90%] py-2 bg-slate-100 border shadow-lg mx-2' value={selectedCounter} onClick={handleCounterClick} onChange={handleCounterChange}>
                            <option value="" disabled>Select a counter</option>
                            {counters.map((counter) => (
                                <option key={counter.value} value={counter.value}>
                                    {counter.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className=''>
                        <label htmlFor="financialYear">Select Financial Year:</label>
                        <select id="financialYear" className='w-[90%] py-2 bg-slate-100 border shadow-lg mx-2' value={selectedYear} onClick={handleYearClick} onChange={handleYearChange}>
                            <option value="" disabled>Select a year</option>
                            {financialYears.map((year) => (
                                <option key={year.value} value={year.value}>
                                    {year.label}
                                </option>
                            ))}
                        </select>
                        <div className='flex gap-5 justify-center py-5'>
                            <button className='bg-gradient-to-r from-indigo-800 via-blue-500 to-blue-400 px-5 py-1 text-white rounded-lg' onClick={handleChoose}>Choose</button>
                            <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400 px-5 py-1 text-white rounded-lg' onClick={handleClose}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Counter;







// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { errorToast } from '../../../External Files/Toast/toast';
// import Ezerp from "../../../External Files/Icons/erp.png"

// function Counter() {
//     const [selectedCounter, setSelectedCounter] = useState('');
//     const [selectedYear, setSelectedYear] = useState('');
//     const [financialYears, setFinancialYears] = useState([]);
//     const [counters, setCounters] = useState([]);
//     const navigate = useNavigate();

//     const handleCounterClick = async () => {
//         // Fetch counters when the select dropdown is clicked
//         if (counters.length === 0) {
//             await fetchCounters();
//         }
//     };

//     const handleCounterChange = (event) => {
//         setSelectedCounter(event.target.value);
//     };

//     const handleYearClick = async () => {
//         if (financialYears.length === 0) {
//             await fetchFinancialYears();
//         }
//     };

//     const handleYearChange = (event) => {
//         const yearId = event.target.value;
//         setSelectedYear(yearId);
//     };

//     const fetchCounters = async () => {
//         try {
//             const additionalData = [
//                 { key: "officecode", value: "RD01", type: "text" },
//                 { key: "officeid", value: "1", type: "text" },
//                 { key: "employeeid", value: "1", type: "text" },
//                 { key: "usertypeid", value: "1", type: "text" }
//             ];

//             const formData = new URLSearchParams();
//             additionalData.forEach(data => formData.append(data.key, data.value));

//             const response = await axios.post('http://app.ezyerp.live/counterlist.php', formData, {
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded',
//                     'Accept': 'application/json',
//                 },
//             });

//             if (response.status === 200 && response.data.flag && response.data.counters) {
//                 const countersData = response.data.counters.map(counter => ({
//                     value: counter.counter_id,
//                     label: counter.counter_name,
//                 }));
//                 setCounters(countersData);
//             } else {
//                 throw new Error('Failed to fetch counters');
//             }
//         } catch (error) {
//             console.error('Error fetching counters:', error);
//             errorToast('An error occurred while fetching counters');
//         }
//     };

//     const fetchFinancialYears = async () => {
//         try {
//             const additionalData = [
//                 { key: "officecode", value: "RD01", type: "text" },
//                 { key: "officeid", value: "1", type: "text" },
//                 { key: "employeeid", value: "1", type: "text" },
//                 { key: "usertypeid", value: "1", type: "text" }
//             ];

//             const formData = new URLSearchParams();
//             additionalData.forEach(data => formData.append(data.key, data.value));

//             const response = await axios.post('http://app.ezyerp.live/financialyears.php', formData, {
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded',
//                     'Accept': 'application/json',
//                 },
//             });

//             if (response.status === 200 && response.data.flag && response.data.financial_years) {
//                 const years = response.data.financial_years.map(year => ({
//                     value: year.financeid,
//                     label: year.financial_year,
//                 }));
//                 setFinancialYears(years);
//             } else {
//                 throw new Error('Failed to fetch financial years');
//             }
//         } catch (error) {
//             console.error('Error fetching financial years:', error);
//             errorToast('An error occurred while fetching financial years');
//         }
//     };

//     const handleChoose = () => {
//         if (!selectedCounter || !selectedYear) {
//             errorToast('Please select both a counter and a financial year!');
//             return;
//         }

//         console.log('Selected Counter:', selectedCounter);
//         console.log('Selected Financial Year:', selectedYear);
//         navigate('/admin');
//     };

//     const handleClose = () => {
//         navigate('/');
//     };

//     return (
//         <>
//             <div className="max-w-screen-sm m-auto border my-10">
//                 <div className="">
//                     <img src={ Ezerp } alt="" className='w-28 absolute p-3' />
//                     <img className='h-[250px] w-full' src="https://en.idei.club/uploads/posts/2023-06/1686806232_en-idei-club-p-office-cartoon-dizain-krasivo-4.jpg" alt="" />
//                 </div>
//                 <div className="w-[70%] m-auto py-8">
//                     <div className="py-5">
//                         <label htmlFor="selectBox">Select Counter</label>
//                         <select id="selectBox" className='w-[90%] py-2 bg-slate-100 border shadow-lg mx-2' value={selectedCounter} onClick={handleCounterClick} onChange={handleCounterChange}>
//                             <option value="" disabled>Select a counter</option>
//                             {counters.map((counter) => (
//                                 <option key={counter.value} value={counter.value}>
//                                     {counter.label}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>

//                     <div className=''>
//                         <label htmlFor="financialYear">Select Financial Year:</label>
//                         <select id="financialYear" className='w-[90%] py-2 bg-slate-100 border shadow-lg mx-2' value={selectedYear} onClick={handleYearClick} onChange={handleYearChange}>
//                             <option value="" disabled>Select a year</option>
//                             {financialYears.map((year) => (
//                                 <option key={year.value} value={year.value}>
//                                     {year.label}
//                                 </option>
//                             ))}
//                         </select>
//                         <div className='flex gap-5 justify-center py-5'>
//                             <button className='bg-gradient-to-r from-indigo-800 via-blue-500 to-blue-400 px-5 py-1 text-white rounded-lg' onClick={handleChoose}>Choose</button>
//                             <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400 px-5 py-1 text-white rounded-lg' onClick={handleClose}>Close</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Counter;
