
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

    fromJson = (json) => {
        if(json) {
            this.id = json.id;
            this.name = json.name;
            this.class_id = json.class_id;
            this.race_id = json.race_id;
            this.level = json.level;
            this.strength = json.strength;
            this.constitution = json.constitution;
            this.dexterity = json.dexterity;
            this.wisdom = json.wisdom;
            this.intelligence = json.intelligence;
            this.charisma = json.charisma;
        }
    }
}