export const isNumber = (string) =>
    string === '.' || string === '<sup>' || string === 'E' || string === '!' || !Number.isNaN(parseInt(string));

export const countAppear = (string, target) => string.split(target).length - 1;

export const lastNumber = (string) => {
    let number = '';
    for (let i = string.length - 1; i >= 0; i -= 1) {
        if (string[i] === '.' || !Number.isNaN(parseInt(string[i]))) number = string[i] + number;
        else break;
    }
    return number;
};

export const isPreviousNumber = (string) => lastNumber(string) !== '';

export const fillTag = (expression, newValue) => {
    const requiredCloseTag = countAppear(expression, '<sup>') - countAppear(expression, '</sup>');
    return isNumber(newValue) ? '' : '</sup>'.repeat(requiredCloseTag);
};

export const fillBracket = (string) => {
    if (string === '') string = '0';
    const requiredCloseBracket = countAppear(string, '(') - countAppear(string, ')');
    return `${string}<span style="color: #C4CDD5">${')'.repeat(requiredCloseBracket)}</span>`;
};
