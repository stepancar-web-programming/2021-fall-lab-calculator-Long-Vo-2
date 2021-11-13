import React from 'react';
import PropTypes from 'prop-types';

import { FunctionButton } from './Buttons';

export default function FunctionKey({ children, onClick }) {
    return (
        <FunctionButton variant="contained" fullWidth onClick={onClick}>
            {children}
        </FunctionButton>
    );
}

FunctionKey.propTypes = {
    children: PropTypes.any,
    onClick: PropTypes.func
};
