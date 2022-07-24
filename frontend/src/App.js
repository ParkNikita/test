import { useState, useEffect } from "react"
import TableService from "./API/TableService"

import TableList from "./components/TableList"
import TableFilter from "./components/TableFilter"
import MyModal from "./components/UI/modal/MyModal"


function App() {

  const [filterModal, setFilterModal] = useState('')
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
      <h1>Tables</h1>
      <button onClick={() => {setFilterModal(true)}}>Filter</button>
      <MyModal visible={filterModal} setVisible={setFilterModal}>
        <TableFilter setTables={setTables}/>
      </MyModal>
      
      <TableList tables={tables}/>
    </div>
  );
}

export default App;
