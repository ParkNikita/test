import React, {useState} from 'react';

import TableService from '../API/TableService';
import MyInput from './UI/input/MyInput';
import MyLabel from './UI/label/MyLabel';
import MySelect from './UI/select/MySelect';

const TableCreate = ({tables, setTables}) => {
    const [seats, setSeats] = useState('')
    const [tableType, setTableType] = useState('ordinary')
    const [price, setPrice] = useState('')


    const submit = async function (event) {
        event.preventDefault()
        const response = await TableService.createTable(seats, tableType, price)
        setTables(...tables, ...response.data)        
    }

    return (
        <div className='table-create'>
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

            <MyLabel for="price">price</MyLabel>
            <MyInput
                onChange={e => setPrice(e.target.value)}
                type="number"
                name="price"
                value={price}
            />
            <button onClick={submit}>Submit</button>
        </div>
    );
};

export default TableCreate;