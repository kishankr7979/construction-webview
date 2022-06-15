import React from 'react';
import {
    Routes,
    Route
} from "react-router-dom";
import ValidateEmail from '../components/ValidateEmail';
import UserDetailsForm from '../components/UserDetailsForm';
import ForgotPassword from '../components/ForgotPassword';
import CreatePackage from '../components/CreatePackage';
const RouterConfig = () => {
    return (
        <Routes>
            <Route path='/confirm-email' element={<ValidateEmail />} />
            <Route path='/update-profile' element={<UserDetailsForm />} />
            <Route path='/update-password' element={<ForgotPassword/>} />
            <Route path='/create-package' element={<CreatePackage />} />
        </Routes>
    )
}

export default RouterConfig;
