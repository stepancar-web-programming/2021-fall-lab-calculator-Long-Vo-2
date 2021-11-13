import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '@mui/material';

export default function Logo({ type = 'logo', sx }) {
    return (
        <Box
            component="img"
            src={`/static/logos/${type}.png`}
            sx={{ height: 80, ...(type === 'logo' && { width: 80 }), ...sx }}
        />
    );
}

Logo.propTypes = {
    type: PropTypes.oneOf(['text-logo', 'text-logo-white']),
    sx: PropTypes.object
};
