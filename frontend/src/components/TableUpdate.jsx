import React, {useState} from 'react';

import TableService from '../API/TableService';
import MySelect from './UI/select/MySelect';
import MyLabel from './UI/label/MyLabel';


const TableUpdate = ({modal, table_id}) => {
    const [free, setFree] = useState(false)

    const submit = async function (event) {
        event.preventDefault()
        try {
            const response = await TableService.updateTable(table_id, free)
            modal(false)
        } catch (error) {
            alert(error)
        }
        

             
        
    }

    return (
        <div className='table-update'>
            <MyLabel for="is_free">Is free</MyLabel>
            <MySelect
                onChange={e => setFree(e)}
                name='is_free'
                value={free}
                options={[
                    {value: false, name: 'Close'},
                    {value: true, name: 'Open'},
                ]}
            />
            <button onClick={submit}>Submit</button>
        </div>
    );
};

export default TableUpdate;