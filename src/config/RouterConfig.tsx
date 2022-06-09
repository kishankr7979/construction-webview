import React from 'react';
import {
    Routes,
    Route
} from "react-router-dom";
import ValidateEmail from '../components/ValidateEmail';
import UserDetailsForm from '../components/UserDetailsForm';
import ForgotPassword from '../forgot-password';
const RouterConfig = () => {
    return (
        <Routes>
            <Route path='/confirm-email' element={<ValidateEmail />} />
            <Route path='/update-form' element={<UserDetailsForm />} />
            <Route path='/update-password' element={<ForgotPassword/>} />

        </Routes>
    )
}

export default RouterConfig;
