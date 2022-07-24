import React, {useState} from 'react';

import OrderService from '../API/OrderService';
import MyInput from './UI/input/MyInput';
import MyLabel from './UI/label/MyLabel';
import MySelect from './UI/select/MySelect';

const OrderUpdate = ({orderId}) => {
    const [status, setStatus] = useState('Pending')

    const submit = async function (event) {
        event.preventDefault()
        const response = await OrderService.updateOrder(status, orderId)   
        console.log(response)
    }

    return (
        <div className='order-update'>
            <MyLabel for="status">Status</MyLabel>
            <MySelect
                onChange={e => setStatus(e)}
                name='status'
                value={status}
                options={[
                    {value: 'BOOKED', name: 'Booked'},
                    {value: 'PENDING', name: 'Pending'},
                    {value: 'CANCELED', name: 'Canceled'}
                ]}
            />
            <div>
                <button onClick={submit}>Submit</button>
            </div>
            
        </div>
    );
};

export default OrderUpdate;