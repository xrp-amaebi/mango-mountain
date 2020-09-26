export const selectController = ({ platform } = {}) => ({
    type: 'SELECT_CONTROLLER',
    platform
});

export const selectKharacter = ({ KHARACTER } = {}) => ({
    type: 'SELECT_KHARACTER',
    KHARACTER
});

export const addTier = ({ index }) => ({
    type: 'ADD_TIER',
    fill: " ",
    index
});

export const editTier = ({ not } = {}) => ({
    type: 'EDIT_TIER',
    not
});

export const editFilter = ({ target, index }) => ({
    type: "SET_EDIT_TIER",
    index,
    target: target.value
});

export const removeTier = ({ index }) => ({
    type: 'REMOVE_TIER',
    index
});


