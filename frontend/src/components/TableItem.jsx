import { useState } from 'react';

import MyModal from './UI/modal/MyModal';
import OrderCreateForm from './OrderCreateForm';


const TableItem = (props) => {
    const [modal, setModal] = useState('')
    
    return (
        <div className='table-item'>
            <p>seats: {props.table.seats}</p>
            <p>table type: {props.table.table_type}</p>
            <p>price: {props.table.price}</p>

            <div className='table-item-btns'>
            <button onClick={() => {setModal(true)}}>Book</button>
            <MyModal visible={modal} setVisible={setModal}>
                <OrderCreateForm table_id={props.table.id}/>
            </MyModal>

            </div>
            
        </div>
    );
};

export default TableItem;