const FIELDS = [
    'id',
    'name',
    'damage_type',
    'damage_amount',
    'damage_attribute',
];

export default class Effect {
    id;
    name = "";
    damage_type = "";
    damage_amount = "";
    damage_attribute = "";

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
}