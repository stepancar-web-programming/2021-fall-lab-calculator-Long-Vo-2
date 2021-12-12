import { Button, styled } from '@mui/material';

export const FunctionButton = styled(Button)(({ theme }) => ({
    fontWeight: 'normal',
    textTransform: 'none',
    background: theme.palette.primary.light
}));

export { default as RagDegKey } from './RagDegKey';
