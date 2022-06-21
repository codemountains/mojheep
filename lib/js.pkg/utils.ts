export const getStrLen = (text: string): number => {
    return text.length;
}

export const getSpaceLen = (text: string): number => {
    const spaceList = text.match(/[( |　)+]/g);
    return spaceList == null ? 0 : spaceList.length;
}

export const getNewLineLen = (text: string): number => {
    if (text.length == 0) {
        return 0;
    }

    const newLineList = text.match(/\r\n|\n/g);
    return newLineList == null ? 1 : newLineList.length + 1;
}
