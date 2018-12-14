
export function rdmCap(text) {
    return text.split('').map( (char) => {
        let chance = Math.round(Math.random());
        return chance ? char.toUpperCase() : char.toLowerCase();
    }).join('');
}