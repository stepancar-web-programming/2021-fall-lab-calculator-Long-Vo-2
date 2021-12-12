import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import { styled } from '@mui/material/styles';
import { Container, Box, Paper, Alert } from '@mui/material';

import { clearError, updateResult } from '../reducers/screenReducer';
import { CustomParticles } from '../../core/components';
import { Screen, Keyboard } from '.';

const MainContainer = styled(Container)(() => ({
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
}));

const JoinPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    margin: theme.spacing(2, 0)
}));

export default function Calculator() {
    const dispatch = useDispatch();
    const { loading, result } = useSelector((state) => state?.calculator?.expression);
    const { error, errorMessage } = useSelector((state) => state?.calculator?.screen);

    useEffect(() => {
        if (!loading && result) dispatch(updateResult([result]));
    }, [loading, result, dispatch]);

    return (
        <>
            <CustomParticles />
            <MainContainer maxWidth="md">
                <Box>
                    <JoinPaper>
                        {error && errorMessage && (
                            <Alert
                                severity="error"
                                color="error"
                                sx={{ mb: 2, m: 1 }}
                                onClose={() => dispatch(clearError())}
                            >
                                {errorMessage}
                            </Alert>
                        )}
                        <Screen />
                        <Keyboard />
                    </JoinPaper>
                </Box>
            </MainContainer>
        </>
    );
}
