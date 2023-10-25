import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './CSS/order.module.css';

function Ordercheck() {
    const { userid, cartid, from } = useParams();
    const [payment, setPayment ] = useState([]);
    const [decimals] = useState(2);
    const [userinfo, setUserinfo] = useState([]);
    const [choicepayment, setChoicepayment] = useState('');
    const [userfile, setUserfile] = useState(null);
    const [paymentchoices] = useState({
        qr: "/Image/image/qrcode-payment/QR-code-scan.jpeg", 
        prompt: "0966894337"
    });

    const handlePaymentChoiceChange = (event) => {
        const selectedValue = event.target.value;
        setChoicepayment(selectedValue);
    }

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
    // console.log(from)
    const splitFullname = userinfo.name ? userinfo.name.split(' ') : ['', ''];
    const splitAddress = userinfo.address ? userinfo.address.split('/') : ['', '', '', '', ''];
    const totalPayment = payment.reduce((total, ord) => total + ord.totalprice, 0);
    const totalQuantity = payment.reduce((total, ord) => total + ord.quantity, 0);
    const Total = totalPayment.toFixed(decimals);

    // console.log(totalQuantity);
    const confirmorder = async (cartid, total) => {
        // console.log(cartid)
        try{
            const responsecconfirm = await axios.post('http://localhost:3001/orderconfirm', 
            { cartid:cartid, total:total});
            // console.log(responsecconfirm.data.message);
            alert(responsecconfirm.data.message);
            window.location.href = "/";
        }
        catch(err){
            console.log(err);
        }
    }

    const paymentChange = (e) => {
        const selectedFile = e.target.files[0];
        setUserfile(selectedFile);
    }
    const uploadpayment = async (e) => {
        e.preventDefault();
        // console.log(userfile);
        if(userfile){
            const formData = new FormData();
            formData.append('file', userfile);
            formData.append('cartid', cartid);
            // console.log(formData);

            try{
                const uploadres = await axios.post('http://localhost:3001/userupload', formData);
                // console.log(uploadres);
                alert(uploadres.data.message);
                window.location.href = "/Status";
            }
            catch(err){
                console.log(err);
            }
            
        }
    };

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
            <div className={style.showpayment}>
                { choicepayment === "qr" ? (
                    <img src={paymentchoices.qr}/>
                ):(
                    <div>Promt Pay:{paymentchoices.prompt}</div>
                )}
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
                    Total_PRICE: {Total}
                </div>
                <div className={style.paymentchoices}>
                    <div className={style.title}>
                        <div>PAYMENT</div>
                        <hr/>
                    </div>                 
                    <form>
                        <div className={style.choice}>
                            <input
                                type='radio'
                                name='choice'
                                value='qr' // Set the value of the first radio button
                                checked={choicepayment === 'qr'} // Check if 'qr' is selected
                                onChange={handlePaymentChoiceChange} // Call the handler on change
                            />
                            <label>QR Code Scan</label>
                        </div>
                        <div className={style.choice}>
                            <input
                                type='radio'
                                name='choice'
                                value='prompt' // Set the value of the second radio button
                                checked={choicepayment === 'prompt'} // Check if 'prompt' is selected
                                onChange={handlePaymentChoiceChange} // Call the handler on change
                            />
                            <label>Promt pay</label>
                        </div>
                    </form>
                </div>
                { from === "cart" ? (
                    <button onClick={() => confirmorder(payment[0].cartid, totalQuantity)}>PLACE ORDER</button>
                ):(
                    <div>
                        <form encType="multipart/form-data">
                            <input
                                type='file'
                                name='file'
                                onChange={paymentChange}
                            />
                            <button onClick={uploadpayment}>Upload_Payment</button>
                        </form>
                    </div>
                )}
                
            </div>
            ) : (
                <div>Loading data...</div>
        )}
    </div>
  )
}

export default Ordercheck