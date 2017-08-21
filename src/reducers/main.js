import {combineReducers} from 'redux';

function showChangeLogModal(state=false, action){
    switch (action.type) {
        case 'change':
            console.log(action.value)
            return action.value;
        default:
            return state;
    }
}

const main = combineReducers({
    showChangeLogModal
});


export default main;