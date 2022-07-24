import React, {useState} from 'react';

import TableService from '../API/TableService';
import MyInput from './UI/input/MyInput';
import MyLabel from './UI/label/MyLabel';
import MySelect from './UI/select/MySelect';

const TableFilter = ({setTables}) => {
    const [seats, setSeats] = useState('')
    const [tableType, setTableType] = useState('ordinary')
    const [priceFrom, setPriceFrom] = useState('')
    const [priceTo, setPriceTo] = useState('')

    const submit = async function (event) {
        event.preventDefault()
        const response = await TableService.filterTables(seats, tableType, priceFrom, priceTo)
        setTables(response.data)
        console.log(response)     
        
    }

    return (
        <div className='table-filter'>
            <MyLabel for="seats">Number of seats</MyLabel>
            <MyInput
                onChange={e => setSeats(e.target.value)}
                type="number"
                name="seats"
                value={seats}
            />
            <MyLabel for="type">type of table</MyLabel>

            <MySelect
                onChange={e => setTableType(e)}
                name='type'
                value={tableType}
                options={[
                    {value: 'ordinary', name: 'Ordinary table'},
                    {value: 'cabin', name: 'Cabin'},
                    {value: 'room', name: 'Room'}
                ]}
            />

            <MyLabel for="price_from">From price</MyLabel>
            <MyInput
                onChange={e => setPriceFrom(e.target.value)}
                type="number"
                name="price_from"
                value={priceFrom}
            />
            <MyLabel for="price_to">To price</MyLabel>
            <MyInput
                onChange={e => setPriceTo(e.target.value)}
                type="number"
                name="price_to"
                value={priceTo}
            />
            <button onClick={submit}>Submit</button>
        </div>
    );
};

export default TableFilter;