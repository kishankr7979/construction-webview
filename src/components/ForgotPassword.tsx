import React,{ useState, useEffect } from 'react';
import ValidateEmail from './ValidateEmail';
import UseQuery from '../hooks/UseQuery';
import { supabase } from '../config/supabase';
function ForgotPassword() {
    
    const [passwordState, setPasswordState] = useState({
        password: '',
        confirmPassword: '',
      })
      const query = UseQuery();
      // const token = query.get('token');
      const type =  query.get('type');
      const email = query.get('email')
      function getParameterByName(name: string, url?: string) {
        if (!url) url = window?.location?.href || ''
        // eslint-disable-next-line no-useless-escape
        name = name.replace(/[\[\]]/g, '\\$&')
        const regex = new RegExp('[?&#]' + name + '(=([^&#]*)|&|#|$)'),
          results = regex.exec(url)
        if (!results) return null
        if (!results[2]) return ''
        return decodeURIComponent(results[2].replace(/\+/g, ' '))
      }
      const token = getParameterByName('token');
      alert(token);
      const updatePassword = async () => {
          alert(email);
          // const { error } = await supabase.resetPassword('user@example.com')
        // const { error, data } = await supabase.auth.api
        // .updateUser(token, { password :passwordState.confirmPassword})
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
        {type === 'recovery' ? (
           <div>
             <h2>
               Reset Password
             </h2>
             <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', border: '1px solid black', width: '80vw', height: '5  00px', borderRadius: '20px', gap: '2rem', position: 'relative',}}>
              <input type='password' value={passwordState.password} onChange={(e) => setPasswordState({...passwordState, password: e.target.value})} placeholder='Password' style={{height: '80px', width: '80%', borderRadius: '10px', textAlign: 'center', fontSize: '25px'}}/>
              <input type='password' value={passwordState.confirmPassword} onChange={(e) => setPasswordState({...passwordState, confirmPassword: e.target.value})} placeholder='confirm password'  style={{height: '80px', width: '80%', borderRadius: '10px', textAlign: 'center', fontSize: '25px'}}/>
              <button onClick={handleSubmit} style={{padding: '1rem', borderRadius: '5px', textAlign: 'center', fontSize: '25px', position: 'absolute', right: '1rem', bottom: '1rem'}}>Reset</button>
               </div>
             </div>
        ) : <ValidateEmail />}
    </div>
  );
}

export default ForgotPassword;

