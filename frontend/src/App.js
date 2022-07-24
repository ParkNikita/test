import { useState, useEffect } from "react"
import TableService from "./API/TableService"

import TableList from "./components/TableList"
import TableFilter from "./components/TableFilter"
import MyModal from "./components/UI/modal/MyModal"
import Login from "./pages/Login"
import TableCreate from "./components/TableCreate"
import OrderList from "./components/OrderList"
import OrderService from "./API/OrderService"


function App() {
  const [loginModal, setLoginModal] = useState('')
  const [filterModal, setFilterModal] = useState('')
  const [createModal, setCreateModal] = useState('')
  const [tables, setTables] = useState([])
  const [orders, setOrders] = useState([])

  const fetchOrders = async() => {
      const response = await OrderService.getAllOrders()
      setOrders([...response.data])
  }

  const fetchTables = async() => {
      const response = await TableService.getAllTables()
      setTables([...response.data])
  }

  useEffect( () => {
      fetchTables()
      fetchOrders()
      
  }, [])


  return (
    <div className="App">
      <h1>Order Table Service</h1>



      {localStorage.getItem('isAuth') === 'true'
      ?<div>
        <button onClick={fetchTables}>All tables</button>
        <button onClick={() => {setFilterModal(true)}}>Filter</button>  
        <button onClick={() => {setLoginModal(true)}}>Logout</button>
        <button onClick={() => {setCreateModal(true)}}>Create Table</button>
        <button onClick={fetchOrders}>get Orders</button>
      </div>
      
      :
      <div>
        <button onClick={fetchTables}>All tables</button>
        <button onClick={() => {setFilterModal(true)}}>Filter</button>  
        <button onClick={() => {setLoginModal(true)}}>Admin</button>
        
      </div>
      }
        
        <MyModal visible={filterModal} setVisible={setFilterModal}>
          <TableFilter setTables={setTables}/>
        </MyModal>

        <MyModal visible={loginModal} setVisible={setLoginModal}>
          <Login loadorders={fetchOrders} setLoginModal={setLoginModal}/>
        </MyModal>
      
        <MyModal visible={createModal} setVisible={setCreateModal}>
          <TableCreate tables={tables} setTables={setTables}/>
        </MyModal>

        <TableList tables={tables}/>
        {localStorage.getItem('isAuth') === 'true' &&
          <OrderList orders={orders}/>     
        }
        
    </div>
  );
}

export default App;
