import React, { useContext,useState, useEffect } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import axios from "axios";
import all_orders from "../../constants/orders";
import { calculateRange, sliceData } from "../../utils/table-pagination";
import {UserContext} from "../../contexts/Usercontext.context";
import "../styles.css";
import DoneIcon from "../../assets/icons/done.svg";
import CancelIcon from "../../assets/icons/cancel.svg";
import RefundedIcon from "../../assets/icons/refunded.svg";
import {backendurl} from "../../components/backendurl"
// import axios from "axios"

function Orders() {
  const [search, setSearch] = useState("");
  const [orders, setOrders] = useState(()=>{
    let data = JSON.parse(localStorage.getItem("orders"));
    if(data){
      return data
    }
    return all_orders
  });
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);
 
const {patientid,setPatientId,token,settoken} = useContext(UserContext)

useEffect(()=>{
getallorders(patientid);
},[])

function getallorders(patientid){
console.log(patientid,"patientid hai")
axios.get(`${backendurl}/Appointment/patient/${patientid}`,{
  headers:{
    "Authorization":`Bearer ${token}`  }
}).then(response =>{ 
  console.log(response.data[0].doctor.img)
  console.log(response.data[0].Patient)
  localStorage.setItem("orders",JSON.stringify(response.data))
setOrders(response.data)
}).catch((err)=>console.log(err))
}
  useEffect(() => {
    console.log(orders,"inside")
    setPagination(calculateRange(orders,1 ));
    setOrders(sliceData(orders, page, 1));
  }, [page]);

  const __handleSearch = (event) => {
    setSearch(event.target.value);
    if (event.target.value !== "") {
      let search_results = orders.filter(
        (item) =>
        item?.doctor?.name.toLowerCase().includes(search.toLowerCase()) ||
        item.note.toLowerCase().includes(search.toLowerCase())
      );
      setOrders(search_results);
    } else {
      __handleChangePage(1);
    }
  };

  const __handleChangePage = (new_page) => {
    setPage(new_page);
    setOrders(sliceData(orders, new_page, 5));
  };

  return (
    <div className="dashboard-content">
      <DashboardHeader btnText="Book Appointment" />

      <div className="dashboard-content-container">
        <div className="dashboard-content-header">
          <h2>All Appointments List</h2>
          <div className="dashboard-content-search">
            <input
              type="text"
              value={search}
              placeholder="Search.."
              className="dashboard-content-input"
              onChange={(e) => __handleSearch(e)}
            />
          </div>
        </div>

        <table>
          <thead>
            <th>Patient-ID</th>
            <th>DATE</th>
            <th>STATUS</th>
            <th>DOCTOR</th>
            <th>DESCRIPTION</th>
            <th>FESS</th>
          </thead>
          {orders.length !== 0 ? (
  
            <tbody>
              {orders.map((order, index) => (
                
                <tr key={index}>
                  <td>
                    <span>{order.patientId}</span>
                  </td>
                  <td>
                    <span>{order.dateTime}</span>
                  </td>
                  <td>
                    <div>
                      {order.PaymentStatus === "paid" ? (
                        <img
                          src={DoneIcon}
                          alt="paid-icon"
                          className="dashboard-content-icon"
                        />
                      ) : order.status === "Canceled" ? (
                        <img
                          src={CancelIcon}
                          alt="canceled-icon"
                          className="dashboard-content-icon"
                        />
                      ) : order.status === "Pending" ? (
                        <img
                          src={RefundedIcon}
                          alt="refunded-icon"
                          className="dashboard-content-icon"
                        />
                      ) : null}
                      <span>{order.status}</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <img
                        src={order?.doctor?.img}
                        className="dashboard-content-avatar"
                        alt={order.first_name + " " + order.last_name}
                      />
                      <span>
                        {order?.doctor?.name}
                      </span>
                    </div>
                  </td>
                  <td>
                    <span>{order.note}</span>
                  </td>
                  <td>
                    <span>${order?.doctor?.fees}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : null}
        </table>
        {orders.length !== 0 ? (
          <div className="dashboard-content-footer">
            {pagination.map((item, index) => (
              <span
                key={index}
                className={item === page ? "active-pagination" : "pagination"}
                onClick={() => __handleChangePage(item)}
              >
                {item}
              </span>
            ))}
          </div>
        ) : (
          <div className="dashboard-content-footer">
            <span className="empty-table">No data</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
