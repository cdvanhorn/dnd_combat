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
    'charisma',
    'proficiencies',
    'proficiency_bonus',
    'actions'
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
    proficiencies = [];
    proficiency_bonus = 2;
    actions = [];

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

    proficient = (skill) => {
        return this.proficiencies.includes(skill);
    }

    skillString = (attribute, skill) => {
        let skill_value = this.calculateModifier(attribute);
        if(this.proficiencies.includes(skill)) {
            skill_value = skill_value + this.proficiency_bonus;
        }
        return this.signedNumberString(skill_value);
    }

    signedNumberString = (number) => {
        if(number > 0) {
            number = "+" + number.toString();
        } else if(number < 0) {
            number = number.toString();
        }
        return number;
    }

    modifierString = (attribute) => {
        let modifier = this.calculateModifier(attribute);
        return this.signedNumberString(modifier);
    }

    calculateModifier = (attribute) => {
        let modifier = (this[attribute] - 10) / 2;
        modifier = Math.floor(modifier);
        return modifier;
    }
}
