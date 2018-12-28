const FIELDS = [
    'id',
    'name',
    'class_id',
    'race_id',
    'level',
    'strength',
    'constitution',
    'dexterity',
    'wisdom',
    'intelligence',
    'charisma'
];

export class PlayerCharacter {
    id;
    name = "";
    class_id = 1;
    race_id = 1;
    level = 1;
    strength = 0;
    constitution = 0;
    dexterity = 0;
    wisdom = 0;
    intelligence = 0;
    charisma = 0;

    constructor(json) {
        this.fromJson(json);
    }

    fromJson = (json) => {
        if(json) {
            for(const field of FIELDS) {
                this[field] = json[field];
            }
        }
    }

    modifierString = (attribute) => {
        let modifier = this.calculateModifier(attribute);
        if(modifier > 0) {
            modifier = "+" + modifier.toString();
        } else if(modifier < 0) {
            modifier = modifier.toString();
        }
        return modifier;
    }

    calculateModifier = (attribute) => {
        let modifier = (this[attribute] - 10) / 2;
        modifier = Math.floor(modifier);
        return modifier;
    }
}