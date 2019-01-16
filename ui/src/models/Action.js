const FIELDS = [
    'id',
    'name',
    'source_effects',
    'target_effects',
    'succeed_roll',
    'succeed_compare'
];

export default class Action {
    id;
    name = "";
    source_effects = [];
    target_effects = [];
    succeed_roll = '';
    succeed_compare = '';

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