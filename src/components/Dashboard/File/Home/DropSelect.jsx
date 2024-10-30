import React, { useEffect, useState } from 'react'

function DropSelect() {
    const [values, setValues] = useState([]);
    const [options, setOptions] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => setValues(data))
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        setOptions(values.map(value => ({ value: value.id, label: value.title })))
    }, [values]);

    return (
        <>
            <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
                {
                    options.map((item) => <option value={item.value}>{item.label}</option>)
                }
            </select>
        </>
    )
}

export default DropSelect
    
  