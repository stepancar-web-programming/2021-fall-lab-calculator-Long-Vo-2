import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Table, TableBody, TableRow, TableCell, styled } from '@mui/material';

import { ClearKey, EqualKey, FunctionKey, InvKey, NumberKey, OperationKey, RagDegKey } from '../components';
import { countAppear, fillBracket, fillTag, isPreviousNumber, lastNumber } from '../../core/utils/parseUtils';
import { randomGenerate } from '../../core/utils/formatNumber';
import { calculate } from '../reducers/expressionReducer';
import { setCurrentExpression, setError } from '../reducers/screenReducer';

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
                        <FunctionKey onClick={() => addExpression('!')}>x!</FunctionKey>
                    </CustomCell>
                    <CustomCell>
                        <FunctionKey onClick={() => addExpression('(')}>(</FunctionKey>
                    </CustomCell>
                    <CustomCell>
                        <FunctionKey
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
                        </FunctionKey>
                    </CustomCell>
                    <CustomCell>
                        <FunctionKey onClick={() => addExpression('%')}>%</FunctionKey>
                    </CustomCell>
                    <CustomCell>
                        {currentExpression.length > 1 ? (
                            <ClearKey onClick={clearEntryExpression} isCE />
                        ) : (
                            <ClearKey onClick={allClearExpression} />
                        )}
                    </CustomCell>
                </TableRow>
                <TableRow>
                    <CustomCell>
                        <InvKey onClick={switchIsInv} isInv={isInv}>
                            Inv
                        </InvKey>
                    </CustomCell>
                    <CustomCell>
                        {isInv ? (
                            <FunctionKey onClick={() => addExpression('sin<sup>-1</sup>(')}>
                                sin<CustomSup>-1</CustomSup>
                            </FunctionKey>
                        ) : (
                            <FunctionKey onClick={() => addExpression('sin(')}>sin</FunctionKey>
                        )}
                    </CustomCell>
                    <CustomCell>
                        {isInv ? (
                            <FunctionKey onClick={() => addExpression('e<sup>')}>
                                e<CustomSup>x</CustomSup>
                            </FunctionKey>
                        ) : (
                            <FunctionKey onClick={() => addExpression('ln(')}>ln</FunctionKey>
                        )}
                    </CustomCell>
                    <CustomCell>
                        <NumberKey onClick={() => addExpression('7')}>7</NumberKey>
                    </CustomCell>
                    <CustomCell>
                        <NumberKey onClick={() => addExpression('8')}>8</NumberKey>
                    </CustomCell>
                    <CustomCell>
                        <NumberKey onClick={() => addExpression('9')}>9</NumberKey>
                    </CustomCell>
                    <CustomCell>
                        <OperationKey onClick={() => addExpression('÷')}>÷</OperationKey>
                    </CustomCell>
                </TableRow>
                <TableRow>
                    <CustomCell>
                        <FunctionKey onClick={() => addExpression('π ')}>π</FunctionKey>
                    </CustomCell>
                    <CustomCell>
                        {isInv ? (
                            <FunctionKey onClick={() => addExpression('cos<sup>-1</sup>(')}>
                                cos<CustomSup>-1</CustomSup>
                            </FunctionKey>
                        ) : (
                            <FunctionKey onClick={() => addExpression('cos(')}>cos</FunctionKey>
                        )}
                    </CustomCell>
                    <CustomCell>
                        {isInv ? (
                            <FunctionKey onClick={() => addExpression('10<sup>x</sup>')}>
                                10<CustomSup>x</CustomSup>
                            </FunctionKey>
                        ) : (
                            <FunctionKey onClick={() => addExpression('log(')}>log</FunctionKey>
                        )}
                    </CustomCell>
                    <CustomCell>
                        <NumberKey onClick={() => addExpression('4')}>4</NumberKey>
                    </CustomCell>
                    <CustomCell>
                        <NumberKey onClick={() => addExpression('5')}>5</NumberKey>
                    </CustomCell>
                    <CustomCell>
                        <NumberKey onClick={() => addExpression('6')}>6</NumberKey>
                    </CustomCell>
                    <CustomCell>
                        <OperationKey onClick={() => addExpression('×')}>×</OperationKey>
                    </CustomCell>
                </TableRow>
                <TableRow>
                    <CustomCell>
                        <FunctionKey onClick={() => addExpression('e ')}>e</FunctionKey>
                    </CustomCell>
                    <CustomCell>
                        {isInv ? (
                            <FunctionKey onClick={() => addExpression('tan<sup>-1</sup>(')}>
                                tan<CustomSup>-1</CustomSup>
                            </FunctionKey>
                        ) : (
                            <FunctionKey onClick={() => addExpression('tan(')}>tan</FunctionKey>
                        )}
                    </CustomCell>
                    <CustomCell>
                        {isInv ? (
                            <FunctionKey onClick={() => addExpression('<sup>2</sup>')}>
                                x<CustomSup>2</CustomSup>
                            </FunctionKey>
                        ) : (
                            <FunctionKey onClick={() => addExpression('√(')}>√</FunctionKey>
                        )}
                    </CustomCell>
                    <CustomCell>
                        <NumberKey onClick={() => addExpression('1')}>1</NumberKey>
                    </CustomCell>
                    <CustomCell>
                        <NumberKey onClick={() => addExpression('2')}>2</NumberKey>
                    </CustomCell>
                    <CustomCell>
                        <NumberKey onClick={() => addExpression('3')}>3</NumberKey>
                    </CustomCell>
                    <CustomCell>
                        <OperationKey onClick={() => addExpression('-')}>-</OperationKey>
                    </CustomCell>
                </TableRow>
                <TableRow>
                    <CustomCell>
                        {isInv ? (
                            <FunctionKey onClick={() => addExpression(randomGenerate())}>Rnd</FunctionKey>
                        ) : (
                            <FunctionKey onClick={() => addExpression('Ans')}>Ans</FunctionKey>
                        )}
                    </CustomCell>
                    <CustomCell>
                        <FunctionKey
                            onClick={() => {
                                if (isPreviousNumber(currentExpression.join(''))) addExpression('E');
                                else dispatch(setError('E должно стоять после числа'));
                            }}
                        >
                            EXP
                        </FunctionKey>
                    </CustomCell>
                    <CustomCell>
                        {/* {isInv ? ( */}
                        {/*    <FunctionKey */}
                        {/*        onClick={() => { */}
                        {/*            setExpression([...currentExpression].splice(-1)); */}
                        {/*            addExpression(`<sup>${lastNumber(currentExpression.join(''))}</sup>√`); */}
                        {/*        }} */}
                        {/*    > */}
                        {/*        <CustomSup>y</CustomSup>√x */}
                        {/*    </FunctionKey> */}
                        {/* ) : ( */}
                        <FunctionKey
                            onClick={() => {
                                if (isPreviousNumber(currentExpression.join(''))) addExpression('<sup>');
                                else dispatch(setError('Функция степени должна стоять после числа'));
                            }}
                        >
                            x<CustomSup>y</CustomSup>
                        </FunctionKey>
                        {/* )} */}
                    </CustomCell>
                    <CustomCell>
                        <NumberKey onClick={() => addExpression('0')}>0</NumberKey>
                    </CustomCell>
                    <CustomCell>
                        <NumberKey
                            onClick={() => {
                                if (lastNumber(currentExpression.join('')).indexOf('.') === -1) addExpression('.');
                                else dispatch(setError('В числе может быть только 1 точка'));
                            }}
                        >
                            .
                        </NumberKey>
                    </CustomCell>
                    <CustomCell>
                        <EqualKey onClick={handleSubmit} />
                    </CustomCell>
                    <CustomCell>
                        <OperationKey onClick={() => addExpression('+')}>+</OperationKey>
                    </CustomCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}
