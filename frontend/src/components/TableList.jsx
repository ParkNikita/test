import React from 'react';
import TableItem from './TableItem';

const TableList = ({tables}) => {
    
    return (
        <div className='table-list'>
            {tables.map(table=> 
                    <TableItem 
                    table={table}
                    key={table.id}
                    />
                    
                )}
        </div>
    );
};

export default TableList;