
export function rdmCap(text) {
    return text.split('').map( (char) => {
        let chance = Math.round(Math.random());
        return chance ? char.toUpperCase() : char.toLowerCase();
    }).join('');
}

export function capFirst(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
