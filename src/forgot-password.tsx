import React,{ useState, useEffect } from 'react';
import ValidateEmail from './components/ValidateEmail';
import UseQuery from './hooks/UseQuery';
import { supabase } from './config/supabase';
import './index.css'
function ForgotPassword() {
    
    const [passwordState, setPasswordState] = useState({
        password: '',
        passwordVerify: '',
      })
      const query = UseQuery();
      const token = query.get('token');
      const type =  query.get('type');

      const updatePassword = async () => {
          
        const { error, data } = await supabase.auth.api
        .updateUser(token, { password :passwordState.passwordVerify})
      }
      const handleSubmit = async(event) => {
        event.preventDefault();
        if( passwordState.password !== passwordState.passwordVerify){ 
            alert('Password didnt match with confirm password')
            return};
           await updatePassword();
      }
  return (
    <div className='container'>
        {type === 'recovery' ? (
            <div className='formContainer'>
            <form onSubmit={handleSubmit} className='formTag'>
              <label className='TextInputs'>Enter New Password:
                <input name="password" className='TextInputs' type="text" value={passwordState.password} onChange={(val:any) => setPasswordState({ ...passwordState, password: val.target.value })} />
              </label>
              <label>Confirm Password:
                <input name="passwordVerify" className='TextInputs' type="text"  value={passwordState.passwordVerify}  onChange={(val: any) => setPasswordState({ ...passwordState, passwordVerify:  val.target.value })} />
              </label>
              <button type="submit">Reset password</button>
            </form>
            </div>
        ) : <ValidateEmail />}
    </div>
  );
}

export default ForgotPassword;

