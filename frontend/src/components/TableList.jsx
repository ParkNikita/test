import TableItem from './TableItem';

const TableList = ({tables}) => {
    
    return (
        <div className='table-list'>
            <h2>Tables</h2>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Seats</th>
                        <th>Table type</th>
                        <th>Price</th>
                        <th>Free</th>
                        <th>Book</th>
                        {localStorage.getItem('isAuth') === 'true' &&
                        <th>Update</th>
                        }
                        
                    </tr>
                </thead>
                <tbody>
                    {tables.map(table=> 
                        <TableItem 
                        table={table}
                        key={table.id}
                        /> 
                    )}    
                </tbody>
            </table>
        </div>
    );
};

export default TableList;