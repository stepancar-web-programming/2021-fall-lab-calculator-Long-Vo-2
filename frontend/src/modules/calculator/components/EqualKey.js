import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@mui/material';

export default function EqualKey({ onClick }) {
    return (
        <Button variant="contained" fullWidth color="secondary" onClick={onClick}>
            =
        </Button>
    );
}

EqualKey.propTypes = {
    onClick: PropTypes.func
};
