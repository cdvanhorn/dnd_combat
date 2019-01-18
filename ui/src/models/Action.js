const FIELDS = [
    'id',
    'name',
    'source_effects',
    'target_effects',
    'fail_source_effects',
    'fail_target_effects',
    'succeed_roll',
    'succeed_compare',
    'succeed_dc'
];

export default class Action {
    id;
    name = "";
    source_effects = [];
    target_effects = [];
    fail_source_effects = [];
    fail_target_effects = [];
    succeed_roll = '';
    succeed_compare = '';
    succeed_dc = 0;

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