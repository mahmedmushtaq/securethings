export const shuffleString = (str)=> {
    return str.split('').sort(function() {
        return 0.5 - Math.random();
    }).join('');
}
