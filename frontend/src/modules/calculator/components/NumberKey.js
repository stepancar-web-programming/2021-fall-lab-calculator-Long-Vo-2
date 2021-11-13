import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@mui/material';

export default function NumberKey({ children, onClick }) {
    return (
        <Button variant="outlined" fullWidth onClick={onClick}>
            {children}
        </Button>
    );
}

NumberKey.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func
};
