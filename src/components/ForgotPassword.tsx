import React,{ useState, useEffect } from 'react';
import ValidateEmail from './ValidateEmail';
import UseQuery from '../hooks/UseQuery';
import { supabase } from '../config/supabase';
import { useResetPassword } from 'react-supabase'
function ForgotPassword() {
    const [passwordState, setPasswordState] = useState({
        password: '',
        confirmPassword: '',
      })
      // const query = UseQuery();
      // // const token = query.get('token');
      // const type =  query.get('type');
      // const email = query.get('email')
      const [hash, setHash] = useState(null);
      const [token, setToken] = useState<any>();
      useEffect(() => {
        setHash(window.location.hash);
      },[])

      const updatePassword = async () => {
          try{
            if(!hash){
              console.log('no hash');
            }
            else if(hash){
              const hashArr = hash.substring(1).split('&').map((param) => param.split("-"));
              setToken(hash[0]);
              console.log(hashArr[0]);
            }
          }
          catch(e){
            console.log(e);
          }
        const { error, data } = await supabase.auth.api
        .updateUser(token, { password :passwordState.confirmPassword})
        if(data){
          console.log(data);
          alert('password successfully updated!!');

        }
        else if(error){
          console.log(error);
          alert('Sorry for this time, please try after some time');
        }
      }
      const handleSubmit = async() => {
        if(passwordState.password === '' || passwordState.confirmPassword === ''){
          alert('Please enter the password');
          return;
        }
        if( passwordState.password !== passwordState.confirmPassword){ 
            alert('Password didnt match with confirm password')
            return};
            if(passwordState.password.length < 4 || passwordState.confirmPassword.length < 4){
              alert('Password length should be greater than 4');
              return;
            }
           await updatePassword();
      }
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw'}}>
           <div>
             <h2>
               Reset Password
             </h2>
             <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', border: '1px solid black', width: '80vw', height: '500px', borderRadius: '20px', gap: '2rem', position: 'relative',}}>
              <input type='password' value={passwordState.password} onChange={(e) => setPasswordState({...passwordState, password: e.target.value})} placeholder='Password' style={{height: '80px', width: '80%', borderRadius: '10px', textAlign: 'center', fontSize: '25px'}}/>
              <input type='password' value={passwordState.confirmPassword} onChange={(e) => setPasswordState({...passwordState, confirmPassword: e.target.value})} placeholder='confirm password'  style={{height: '80px', width: '80%', borderRadius: '10px', textAlign: 'center', fontSize: '25px'}}/>
              <button onClick={handleSubmit} style={{padding: '1rem', borderRadius: '5px', textAlign: 'center', fontSize: '25px', position: 'absolute', right: '1rem', bottom: '1rem'}}>Reset</button>
               </div>
             </div>
    </div>
  );
}

export default ForgotPassword;

