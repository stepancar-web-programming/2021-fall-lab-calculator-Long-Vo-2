import React from 'react';
import PropTypes from 'prop-types';

import { FunctionButton } from './Buttons';

export default function InvKey({ onClick, isInv }) {
    return (
        <FunctionButton
            variant="contained"
            fullWidth
            onClick={onClick}
            sx={{ bgcolor: (theme) => theme.palette.primary[isInv ? 'dark' : 'light'] }}
        >
            Inv
        </FunctionButton>
    );
}

InvKey.propTypes = {
    onClick: PropTypes.func,
    isInv: PropTypes.bool
};
