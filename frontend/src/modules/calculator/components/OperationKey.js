import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

export default function OperationKey({ children, onClick }) {
    return (
        <Button variant="contained" fullWidth onClick={onClick}>
            {children}
        </Button>
    );
}

OperationKey.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func
};
