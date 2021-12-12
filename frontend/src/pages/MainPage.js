import React, { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';

import Page from '../modules/core/components/Page';
import { Calculator } from '../modules/calculator';
import Logo from '../modules/core/components/Logo';

export default function MainPage() {
    const theme = useTheme();

    useEffect(() => {
        document.body.style.background = `radial-gradient(circle, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`;
    });

    return (
        <>
            <Logo type="text-logo-white" />
            <Page title="Калькулятор - thienlongtpct">
                <Calculator />
            </Page>
        </>
    );
}
