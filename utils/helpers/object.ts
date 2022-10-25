export const compare = (obj1: any, obj2: any) => {
    for (const index in obj1) {
        if (obj1.hasOwnProperty(index) && obj2.hasOwnProperty(index)) {
            if (obj1[index] !== obj2[index]) {
                return false;
            }
        }
    }
    return true;
};
