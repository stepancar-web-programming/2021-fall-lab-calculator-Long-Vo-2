import React from 'react';
import DOMPurify from 'dompurify';

import { styled, Container, Box, Typography } from '@mui/material';

import { useSelector } from 'react-redux';
import { fillBracket } from '../../core/utils/parseUtils';

const ScreenContainer = styled(Container)(({ theme }) => ({
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: theme.palette.primary.light,
    borderRadius: theme.spacing(1),
    textAlign: 'right',
    padding: theme.spacing(1),
    ':hover': {
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.lighter
    }
}));

const ResultTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.disabled,
    fontSize: '13px',
    margin: 0,
    padding: 0
}));

const ExpressionTypography = styled(Typography)({
    fontSize: '30px',
    margin: 0,
    padding: 0
});

export default function Screen() {
    const { currentExpression, previousExpression, isChanged } = useSelector((state) => state?.calculator?.screen);
    const { result } = useSelector((state) => state?.calculator?.expression);

    return (
        <Box padding={1}>
            <ScreenContainer disableGutters>
                <ResultTypography
                    component="p"
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                            !isChanged ? `${fillBracket(previousExpression.join(''))}=` : `Ans=${result}`
                        )
                    }}
                />
                <ExpressionTypography
                    component="p"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(fillBracket(currentExpression.join(''))) }}
                />
            </ScreenContainer>
            <div
                id="result"
                style={{
                    display: 'none'
                }}
            >
                {result}
            </div>
        </Box>
    );
}
