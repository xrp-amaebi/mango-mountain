import kharacters from '../fixtures/characterArray';


const platformDefaultState = {
    platform: 'default',
    not: ['Z', 'S+', 'S', 'A'],
    kharacters
};

export default (state = platformDefaultState, action) => {
    switch(action.type) {
        case "SELECT_CONTROLLER":
            return {
                ...state,
                platform: action.platform
            };
   
        case "ADD_TIER":
            return {
                ...state,
                ...state.not.splice(action.index + 1, 0, action.fill),
                ...state.not
            };

        case "SET_EDIT_TIER":
            return {
                ...state,
               ...state.not.splice(action.index, 1, action.target),
               ...state.not
            };

        case "REMOVE_TIER":
            return {
                ...state,
                ...state.not.splice(action.index, 1),
                ...state.not
            };

        default: 
            return state;
    };
};
