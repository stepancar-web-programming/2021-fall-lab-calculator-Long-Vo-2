import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import { styled } from '@mui/material/styles';
import { Container, Box, Paper, Alert } from '@mui/material';

import { clearError, updateResult } from '../reducers/screenReducer';
import { CustomParticles } from '../../core/components';
import { MotionContainer, varBounceIn } from '../../core/animate';
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

    console.log(error);
    return (
        <>
            <CustomParticles />
            <MainContainer maxWidth="md">
                <Box>
                    <JoinPaper>
                        {error && (
                            <MotionContainer initial="initial" open onClick={() => dispatch(clearError())}>
                                <motion.div variants={varBounceIn}>
                                    <Alert severity="error" color="error" sx={{ mb: 2 }}>
                                        {errorMessage}
                                    </Alert>
                                </motion.div>
                            </MotionContainer>
                        )}
                        <Screen />
                        <Keyboard />
                    </JoinPaper>
                </Box>
            </MainContainer>
        </>
    );
}
