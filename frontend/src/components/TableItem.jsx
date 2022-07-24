import { useState } from 'react';

import MyModal from './UI/modal/MyModal';
import OrderCreateForm from './OrderCreateForm';


const TableItem = (props) => {
    const [modal, setModal] = useState('')
    
    return (
        <tr className='table-item'>
            <td>{props.table.id}</td>
            <td>{props.table.seats}</td>
            <td>{props.table.table_type}</td>
            <td>{props.table.price}</td>
            <td><button onClick={() => {setModal(true)}}>Book</button></td>

            <MyModal visible={modal} setVisible={setModal}>
                <OrderCreateForm table_id={props.table.id}/>
            </MyModal>  
        </tr>
    );
};

export default TableItem;