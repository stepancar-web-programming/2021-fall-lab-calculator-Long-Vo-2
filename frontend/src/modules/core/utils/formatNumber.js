import { replace } from 'lodash';
import numeral from 'numeral';

export function randomGenerate() {
    return replace(numeral(Math.random()).format('0.00a'), '.00', '');
}
