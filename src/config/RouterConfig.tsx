import React from 'react';
import {
    Routes,
    Route
} from "react-router-dom";
import ValidateEmail from '../components/ValidateEmail';

const RouterConfig = () => {
    return (
        <Routes>
            <Route path='/validate-email' element={<ValidateEmail />} />
        </Routes>
    )
}

export default RouterConfig;
