import React,{ useState, useEffect } from 'react';
import './index.css'
function ForgotPassword() {
    
    const [passwordState, setPasswordState] = useState({
        password: '',
        passwordVerify: '',
      })

      const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The password you entered was: ${passwordState.password}`)
      }

  return (
    <div className='container'>
        <div className='formContainer'>
      <form onSubmit={handleSubmit} className='formTag'>
        <label>Enter New Password:
          <input name="password" type="text" value={passwordState.password} onChange={(val:any) => setPasswordState({ ...passwordState, password: val.target.value })} />
        </label>
        <label>Confirm Password:
          <input name="passwordVerify" type="text"  value={passwordState.passwordVerify}  onChange={(val: any) => setPasswordState({ ...passwordState, passwordVerify:  val.target.value })} />
        </label>
        <button type="submit">Reset password</button>
      </form>
      </div>
    </div>
  );
}

export default ForgotPassword;

