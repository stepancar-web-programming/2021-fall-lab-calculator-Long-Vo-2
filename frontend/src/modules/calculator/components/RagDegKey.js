import React from 'react';
import PropTypes from 'prop-types';

import { Button, Typography, Box } from '@mui/material';

export default function RagDegKey({ onClick, isDeg }) {
    return (
        <Button variant="contained" fullWidth onClick={onClick}>
            <Box display="flex" justifyContent="space-evenly" sx={{ width: '100%' }}>
                <Typography color={isDeg ? 'primary.light' : 'default'}>Rag</Typography>
                <Typography color="primary.light">|</Typography>
                <Typography color={isDeg ? 'default' : 'primary.light'}>Deg</Typography>
            </Box>
        </Button>
    );
}

RagDegKey.propTypes = {
    onClick: PropTypes.func,
    isDeg: PropTypes.bool
};
