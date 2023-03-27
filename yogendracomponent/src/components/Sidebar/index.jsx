import React, {useEffect, useContext,useState} from 'react';
import { useLocation } from 'react-router-dom';
import UserIcon from '../../assets/icons/user.svg';
import { UserContext } from '../../contexts/Usercontext.context';
import SideBarItem from './sidebar-item';
import axios from "axios";
import { backendurl } from '../backendurl';
import './styles.css';
import logo from '../../assets/images/Medical-Care.png';
import LogoutIcon from '../../assets/icons/logout.svg';
import { Button } from '@chakra-ui/react';
let values=[
"patient",
"email",
"name",
"token",
"departmentid",
"lastname",
"orders"
]
const register =  {
    id: 5,
    icon: UserIcon,
    path: '/register',
    title: 'Register',
}
function SideBar ({ menu }) {
    const location = useLocation();

const {patientid,setPatientId,email,setemail,token,settoken}=useContext(UserContext)
console.log(patientid);
const [active, setActive] = useState(1);

useEffect(()=>{
function handlestorage(e){
    if(e.key==="patient"){
        setPatientId(e.newValue);
    }
    
}
window.addEventListener("storage",handlestorage);
return ()=>{
window.removeEventListener("storage",handlestorage);

}


},[])



useEffect(()=>{
getidwithemailifpossible(email)
}
,[])

function getidwithemailifpossible(email){
    console.log(token)
        axios.get(`${backendurl}/patient/${email}`,{
            headers:{
                "Authorization":`Bearer ${token}`  
            }
        }).then((res)=>{
            console.log(res);
            console.log(res.data.length);
            if(res.data[0]?.patientId&&res.data.length){
                localStorage.setItem("patient",res.data[0].patientId)
                setPatientId(res.data[0].patientId)
                update(res.data[0].patientId)
            }else{
                localStorage.removeItem("patient")
                setPatientId("")
            }
        }).catch((err)=>{console.log(err)})
    }

function update(arg){
    setPatientId(arg)

}
useEffect(() => {
        menu.forEach(element => {
            if (location.pathname === element.path) {
                setActive(element.id);
            }
        });
    }, [location.pathname])
const __navigate = (id) => {
        setActive(id);
}
function Logout(){
// localStorage.
for(let i=0;i<values.length;i++){
localStorage.removeItem(values[i]);
}
changeposition()
}
function changeposition(){
    window.location.href="https://hmsfrontend-eight.vercel.app/";
}
function redirect(){
localStorage.getItem("patient");
reloader()
}

function reloader(){
    
    window.location.href = "http://localhost:5173";
}

    return(
        <nav className='sidebar'>
            <div className='sidebar-container'>
                <div onClick={redirect} className='sidebar-logo-container'>
                <img
                src={logo}
                alt="logo" />
                   
                </div>

                <div className='sidebar-container'>
                    <div className='sidebar-items'>
                        {menu.map((item, index) => (
                            <div key={index} onClick={() => __navigate(item.id)}>
                                <SideBarItem
                                    active={item.id === active}
                                    item={item} />
                            </div>
                        ))}
{ patientid?<>
    
</>:<>
<div key={"dk;laskdl;askd"} onClick={() => __navigate(register.id)}>
                        <SideBarItem
                            active={register.id === active}
                            item={register} />
                    </div>
</>
}
                    </div>

                    <div className='sidebar-footer'>
<Button onClick={Logout}>
Logout
</Button>
                    <img 
                            src={LogoutIcon}
                            alt='icon-logout'
                            className='sidebar-item-icon' />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default SideBar;