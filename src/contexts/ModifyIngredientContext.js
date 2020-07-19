import React from 'react';

const ModifyIngredientContext = React.createContext({
    addIngredient: () => { },
    subtractIngredient: () => { },
    availableInfo: {}
});

export default ModifyIngredientContext;