import { useState, useEffect } from "react"
import TableService from "../API/TableService"

import TableList from "../components/TableList"


const Tables = () => {
    const [tables, setTables] = useState([])

    const fetchTables = async() => {
        const response = await TableService.getAllTables()
        setTables([...tables, ...response.data])
    }

    useEffect( () => {
        fetchTables()

    }, [])

    return (
        <div>
            <TableList tables={tables}/>
        </div>
    )

}