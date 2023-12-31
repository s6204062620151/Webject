import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import style from './CSS/account.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

function Account() {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/getUser', {withCredentials: true});
      setAuth(true);
      setName(response.data.user.name);
      setIsLoading(false);
    }catch (error) {
      console.error(error);
      setAuth(false);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
    setIsLoading(false);
  }, []);

  const signOut = () => {
    Cookies.remove('token');
    window.location.href = '/';
  }  
  
  return (
    <div className={style.container}>
       {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className={style.content}>
          {auth ? (
            <div className={style.info}>
                <div className={style.name}> {name} </div>

                <div className={style.signout}> 
                  <button onClick={signOut}>
                    <label>Sign Out</label>
                    <f><FontAwesomeIcon icon={faArrowRightFromBracket} /></f>
                  </button>
                </div>

            </div>
          ) : (
            <div className={style.signout}>
              <button onClick={signOut}>
                <label>Sign Out!</label>
                <f><FontAwesomeIcon icon={faArrowRightFromBracket} /></f>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Account