import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Table, TableBody, TableRow, TableCell, Button, styled } from '@mui/material';

import { countAppear, fillBracket, fillTag, isPreviousNumber, lastNumber } from '../../core/utils/parseUtils';
import { randomGenerate } from '../../core/utils/formatNumber';
import { calculate } from '../reducers/expressionReducer';
import { setCurrentExpression, setError } from '../reducers/screenReducer';
import { FunctionButton, RagDegKey } from '../components';

const CustomCell = styled(TableCell)(({ theme }) => ({
    padding: theme.spacing(1),
    border: 'none'
}));

const CustomSup = styled('sup')({
    position: 'relative',
    bottom: '4px'
});

export default function Keyboard() {
    const dispatch = useDispatch();
    const { currentExpression } = useSelector((state) => state?.calculator?.screen);

    const [isDeg, setIsDeg] = useState(false);
    const [isInv, setIsInv] = useState(false);

    const switchIsDeg = () => setIsDeg(!isDeg);
    const switchIsInv = () => setIsInv(!isInv);

    const addExpression = (newValue) => {
        dispatch(
            setCurrentExpression([...currentExpression, fillTag(currentExpression.join(''), newValue) + newValue])
        );
    };

    const clearEntryExpression = () => {
        dispatch(setCurrentExpression(currentExpression.slice(0, -1)));
    };

    const allClearExpression = () => {
        dispatch(setCurrentExpression([]));
    };

    const handleSubmit = () => {
        dispatch(
            calculate({
                expression: fillBracket(currentExpression.join(''))
            })
        );
    };

    return (
        <Table>
            <TableBody>
                <TableRow>
                    <CustomCell colSpan={2}>
                        <RagDegKey onClick={switchIsDeg} isDeg={isDeg} />
                    </CustomCell>
                    <CustomCell>
                        <FunctionButton variant="contained" fullWidth onClick={() => addExpression('!')}>
                            x!
                        </FunctionButton>
                    </CustomCell>
                    <CustomCell>
                        <FunctionButton variant="contained" fullWidth onClick={() => addExpression('(')}>
                            (
                        </FunctionButton>
                    </CustomCell>
                    <CustomCell>
                        <FunctionButton
                            variant="contained"
                            fullWidth
                            onClick={() => {
                                if (
                                    countAppear(currentExpression.join(''), '(') >
                                    countAppear(currentExpression.join(''), ')')
                                )
                                    addExpression(')');
                                else
                                    dispatch(
                                        setError(
                                            'Количество открытых скобок должно быть больше количества закрывающих скобок'
                                        )
                                    );
                            }}
                        >
                            )
                        </FunctionButton>
                    </CustomCell>
                    <CustomCell>
                        <FunctionButton variant="contained" fullWidth onClick={() => addExpression('%')}>
                            %
                        </FunctionButton>
                    </CustomCell>
                    <CustomCell>
                        {currentExpression.length > 1 ? (
                            <Button variant="contained" fullWidth color="warning" onClick={clearEntryExpression}>
                                CE
                            </Button>
                        ) : (
                            <Button variant="contained" fullWidth color="error" onClick={allClearExpression}>
                                AC
                            </Button>
                        )}
                    </CustomCell>
                </TableRow>
                <TableRow>
                    <CustomCell>
                        <FunctionButton
                            variant="contained"
                            fullWidth
                            sx={{ bgcolor: (theme) => theme.palette.primary[isInv ? 'dark' : 'light'] }}
                            onClick={switchIsInv}
                        >
                            Inv
                        </FunctionButton>
                    </CustomCell>
                    <CustomCell>
                        {isInv ? (
                            <FunctionButton
                                variant="contained"
                                fullWidth
                                onClick={() => addExpression('sin<sup>-1</sup>(')}
                            >
                                sin<CustomSup>-1</CustomSup>
                            </FunctionButton>
                        ) : (
                            <FunctionButton variant="contained" fullWidth onClick={() => addExpression('sin(')}>
                                sin
                            </FunctionButton>
                        )}
                    </CustomCell>
                    <CustomCell>
                        {isInv ? (
                            <FunctionButton variant="contained" fullWidth onClick={() => addExpression('e<sup>')}>
                                e<CustomSup>x</CustomSup>
                            </FunctionButton>
                        ) : (
                            <FunctionButton variant="contained" fullWidth onClick={() => addExpression('ln(')}>
                                ln
                            </FunctionButton>
                        )}
                    </CustomCell>
                    <CustomCell>
                        <Button variant="outlined" fullWidth onClick={() => addExpression('7')}>
                            7
                        </Button>
                    </CustomCell>
                    <CustomCell>
                        <Button variant="outlined" fullWidth onClick={() => addExpression('8')}>
                            8
                        </Button>
                    </CustomCell>
                    <CustomCell>
                        <Button variant="outlined" fullWidth onClick={() => addExpression('9')}>
                            9
                        </Button>
                    </CustomCell>
                    <CustomCell>
                        <Button variant="contained" fullWidth onClick={() => addExpression('÷')}>
                            ÷
                        </Button>
                    </CustomCell>
                </TableRow>
                <TableRow>
                    <CustomCell>
                        <FunctionButton variant="contained" fullWidth onClick={() => addExpression('π ')}>
                            π
                        </FunctionButton>
                    </CustomCell>
                    <CustomCell>
                        {isInv ? (
                            <FunctionButton
                                variant="contained"
                                fullWidth
                                onClick={() => addExpression('cos<sup>-1</sup>(')}
                            >
                                cos<CustomSup>-1</CustomSup>
                            </FunctionButton>
                        ) : (
                            <FunctionButton variant="contained" fullWidth onClick={() => addExpression('cos(')}>
                                cos
                            </FunctionButton>
                        )}
                    </CustomCell>
                    <CustomCell>
                        {isInv ? (
                            <FunctionButton
                                variant="contained"
                                fullWidth
                                onClick={() => addExpression('10<sup>x</sup>')}
                            >
                                10<CustomSup>x</CustomSup>
                            </FunctionButton>
                        ) : (
                            <FunctionButton variant="contained" fullWidth onClick={() => addExpression('log(')}>
                                log
                            </FunctionButton>
                        )}
                    </CustomCell>
                    <CustomCell>
                        {' '}
                        <Button variant="outlined" fullWidth onClick={() => addExpression('4')}>
                            4
                        </Button>
                    </CustomCell>
                    <CustomCell>
                        {' '}
                        <Button variant="outlined" fullWidth onClick={() => addExpression('5')}>
                            5
                        </Button>
                    </CustomCell>
                    <CustomCell>
                        {' '}
                        <Button variant="outlined" fullWidth onClick={() => addExpression('6')}>
                            6
                        </Button>
                    </CustomCell>
                    <CustomCell>
                        <Button variant="contained" fullWidth onClick={() => addExpression('×')}>
                            ×
                        </Button>
                    </CustomCell>
                </TableRow>
                <TableRow>
                    <CustomCell>
                        <FunctionButton variant="contained" fullWidth onClick={() => addExpression('e ')}>
                            e
                        </FunctionButton>
                    </CustomCell>
                    <CustomCell>
                        {isInv ? (
                            <FunctionButton
                                variant="contained"
                                fullWidth
                                onClick={() => addExpression('tan<sup>-1</sup>(')}
                            >
                                tan<CustomSup>-1</CustomSup>
                            </FunctionButton>
                        ) : (
                            <FunctionButton variant="contained" fullWidth onClick={() => addExpression('tan(')}>
                                tan
                            </FunctionButton>
                        )}
                    </CustomCell>
                    <CustomCell>
                        {isInv ? (
                            <FunctionButton variant="contained" fullWidth onClick={() => addExpression('<sup>2</sup>')}>
                                x<CustomSup>2</CustomSup>
                            </FunctionButton>
                        ) : (
                            <FunctionButton variant="contained" fullWidth onClick={() => addExpression('√(')}>
                                √
                            </FunctionButton>
                        )}
                    </CustomCell>
                    <CustomCell>
                        <Button variant="outlined" fullWidth onClick={() => addExpression('1')}>
                            1
                        </Button>
                    </CustomCell>
                    <CustomCell>
                        <Button variant="outlined" fullWidth onClick={() => addExpression('2')}>
                            2
                        </Button>
                    </CustomCell>
                    <CustomCell>
                        <Button variant="outlined" fullWidth onClick={() => addExpression('3')}>
                            3
                        </Button>
                    </CustomCell>
                    <CustomCell>
                        <Button variant="contained" fullWidth onClick={() => addExpression('-')}>
                            -
                        </Button>
                    </CustomCell>
                </TableRow>
                <TableRow>
                    <CustomCell>
                        {isInv ? (
                            <FunctionButton
                                variant="contained"
                                fullWidth
                                onClick={() => addExpression(randomGenerate())}
                            >
                                Rnd
                            </FunctionButton>
                        ) : (
                            <FunctionButton variant="contained" fullWidth onClick={() => addExpression('Ans')}>
                                Ans
                            </FunctionButton>
                        )}
                    </CustomCell>
                    <CustomCell>
                        <FunctionButton
                            variant="contained"
                            fullWidth
                            onClick={() => {
                                if (isPreviousNumber(currentExpression.join(''))) addExpression('E');
                                else dispatch(setError('E должно стоять после числа'));
                            }}
                        >
                            EXP
                        </FunctionButton>
                    </CustomCell>
                    <CustomCell>
                        <FunctionButton
                            variant="contained"
                            fullWidth
                            onClick={() => {
                                if (isPreviousNumber(currentExpression.join(''))) addExpression('<sup>');
                                else dispatch(setError('Функция степени должна стоять после числа'));
                            }}
                        >
                            x<CustomSup>y</CustomSup>
                        </FunctionButton>
                    </CustomCell>
                    <CustomCell>
                        <Button variant="outlined" fullWidth onClick={() => addExpression('0')}>
                            0
                        </Button>
                    </CustomCell>
                    <CustomCell>
                        <Button
                            variant="outlined"
                            fullWidth
                            onClick={() => {
                                if (lastNumber(currentExpression.join('')).indexOf('.') === -1) addExpression('.');
                                else dispatch(setError('В числе может быть только 1 точка'));
                            }}
                        >
                            .
                        </Button>
                    </CustomCell>
                    <CustomCell>
                        <Button variant="contained" fullWidth color="success" onClick={handleSubmit}>
                            =
                        </Button>
                    </CustomCell>
                    <CustomCell>
                        <Button variant="contained" fullWidth onClick={() => addExpression('+')}>
                            +
                        </Button>
                    </CustomCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}
