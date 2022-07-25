import React, {useState} from 'react';

import OrderService from '../API/OrderService';
import MyInput from './UI/input/MyInput';
import MyLabel from './UI/label/MyLabel';


const OrderCreateForm = ({table_id}) => {
    const [email, setEmail] = useState('')

    const submit = async function (event) {
        event.preventDefault()
        const response = await OrderService.createOrder(table_id, email)
        console.log(response)     
        
    }

    return (
        <div className='table-create'>
            <MyLabel for="email">Email</MyLabel>
            <MyInput
                onChange={e => setEmail(e.target.value)}
                type="email"
                name="email"
                value={email}
            />
            <button onClick={submit}>Submit</button>
        </div>
    );
};

export default OrderCreateForm;