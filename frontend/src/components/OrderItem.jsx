import { useState } from "react";

import OrderUpdate from "./OrderUpdate";
import MyModal from "./UI/modal/MyModal";


const OrderItem = (props) => {
    const [modal, setModal] = useState('')

    return (
        <tr className='table-item'>
            <td>{props.order.id}</td>
            <td>{props.order.email}</td>
            <td>{props.order.status}</td>
            <td>{props.order.tables.map(table=>
                table.id
                )}
            </td>
            <td><button onClick={() => setModal(true)}>Update</button></td>
            <MyModal visible={modal} setVisible={setModal}>
                <OrderUpdate orderId={props.order.id}/>
            </MyModal>
        </tr>
    );
};

export default OrderItem;