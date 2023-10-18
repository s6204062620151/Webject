import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './CSS/order.module.css';

function Ordercheck() {
    const { userid, cartid } = useParams();
    const [payment, setPayment ] = useState([]);
    const [decimals] = useState(2);
    const [userinfo, setUserinfo] = useState([]);
    const getData = async() => {
        try{
            const response = await axios.get(`http://localhost:3001/ordercheck/${userid}/${cartid}`)
            const userresponse = await axios.get('http://localhost:3001/getUser', {withCredentials: true});
            // console.log(response.data);
            // console.log(userresponse.data.user);
            setUserinfo(userresponse.data.user);
            setPayment(response.data);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getData();
    }, []);
    // console.log(userinfo.name)
    const splitFullname = userinfo.name ? userinfo.name.split(' ') : ['', ''];
    const splitAddress = userinfo.address ? userinfo.address.split('/') : ['', '', '', '', ''];
    const totalPayment = payment.reduce((total, ord) => total + ord.totalprice, 0);
    const Total = totalPayment.toFixed(decimals)

  return (
    <div className={style.container}>

        <div className={style.usercontent}>
            <div>USER {userinfo.userid}</div>
            <div className={style.userdetailed}>
                <div className={style.detailedLeft}>
                    <div className={style.detailed}>
                        <label>FIRST NAME</label><br/>
                        <input
                            value={splitFullname[0] || ''}
                            readOnly
                        />
                    </div>
                    <div className={style.detailed}>
                        <label>EMAIL</label><br/>
                        <input
                            value={userinfo.email}
                            readOnly
                        />
                    </div>
                </div>
                <div className={style.detailedRight}>
                    <div className={style.detailed}>
                        <label>LAST NAME</label><br/>
                        <input
                            value={splitFullname[1] || ''}
                            readOnly
                        />
                    </div>
                    <div className={style.detailed}>
                        <label>LAST NAME</label><br/>
                        <input
                            value={userinfo.phone_number}
                            readOnly
                        />
                    </div>
                </div>
            </div>
            <div className={style.fulladdress}>
                    <div className={style.detailed}>
                        <label>ADDRESS</label><br/>
                        <input
                            value={userinfo.address}
                            readOnly
                        />
                    </div>
            </div>
            <div className={style.addressdetailed}>
                <div className={style.detailedLeft}>
                    <div className={style.detailed}>
                        <label>COUNTRY</label><br/>
                        <input
                            value={splitAddress[1] || '/'}
                            readOnly
                        />
                    </div>
                    <div className={style.detailed}>
                        <label>STATE</label><br/>
                        <input
                            value={splitAddress[3] || '/'}
                            readOnly
                        />
                    </div>
                </div>
                <div className={style.detailedRight}>
                    <div className={style.detailed}>
                        <label>CITY</label><br/>
                        <input
                            value={splitAddress[2] || '/'}
                            readOnly
                        />
                    </div>
                    <div className={style.detailed}>
                        <label>ZIP CODE</label><br/>
                        <input
                            value={splitAddress[4] || '/'}
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </div>

        {payment.length > 0 ? (
            <div>
                <div className={style.header}>CART: {payment[0].cartid}<hr/></div>
                {payment.map((list, index) => (
                    <div key={index} className={style.paymentdetailed}>
                        <div>PRODUCT ID: {list.productid}</div>
                        <div>NAME: {list.name}</div>
                        <div>QUANTITY: {list.quantity}</div>
                        <div>PRICE: {list.price}</div>
                        <div>SUMPRICE: {list.totalprice}</div>
                        <hr className={style.breaklist}/>
                    </div>
                ))}
                <div>
                    <hr/>
                    Total_PRICE: {Total}
                </div>
                <div>
                    <button>PLACE ORDER</button>
                </div>
            </div>
            ) : (
                <div>Loading data...</div>
        )}
    </div>
  )
}

export default Ordercheck