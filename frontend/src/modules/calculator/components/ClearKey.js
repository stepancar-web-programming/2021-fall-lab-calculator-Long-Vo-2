import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@mui/material';

export default function ClearKey({ onClick, isCE }) {
    return (
        <Button variant="contained" fullWidth color={isCE ? 'warning' : 'error'} onClick={onClick}>
            {isCE ? 'CE' : 'AC'}
        </Button>
    );
}

ClearKey.propTypes = {
    onClick: PropTypes.func,
    isCE: PropTypes.bool
};
