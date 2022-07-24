
import OrderItem from "./OrderItem";



const OrderList = ({orders}) => {

    return (
        <div className='order-list'>
            <h2>Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Email</th>
                        <th>status</th>
                        <th>table id</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order=> 
                        <OrderItem 
                        order={order}
                        key={order.id}
                        />
                    )}    
                </tbody>
            </table>
        </div>
    );
};

export default OrderList;