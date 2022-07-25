import { useState } from 'react';

import MyModal from './UI/modal/MyModal';
import OrderCreateForm from './OrderCreateForm';
import TableUpdate from './TableUpdate';

const TableItem = (props) => {
    const [modalBook, setModalBook] = useState('')
    const [modalUpdate, setModalUpdate] = useState('')
    
    return (
        <tr className='table-item'>
            <td>{props.table.id}</td>
            <td>{props.table.seats}</td>
            <td>{props.table.table_type}</td>
            <td>{props.table.price}</td>
            <td>
                {props.table.is_free
                ? 'Yes'
                : 'No'
                }

            </td>
            <td><button onClick={() => {setModalBook(true)}}>Book</button></td>
            {localStorage.getItem('isAuth') === 'true' &&
                <td><button onClick={() => {setModalUpdate(true)}}>Update</button></td>
            }
            
            
            

            <MyModal visible={modalBook} setVisible={setModalBook}>
                <OrderCreateForm table_id={props.table.id}/>
            </MyModal>
            
            <MyModal visible={modalUpdate} setVisible={setModalUpdate}>
                <TableUpdate modal={setModalUpdate} table_id={props.table.id}/>
            </MyModal>    
        </tr>
    );
};

export default TableItem;