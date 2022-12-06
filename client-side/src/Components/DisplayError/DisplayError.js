import React from 'react';
import { Link } from 'react-router-dom';

const DisplayError = () => {
    return (
        <div>
            Please <span><Link to='/login'>Log in</Link></span>
            <br />
            and try again
        </div>
    );
};

export default DisplayError;