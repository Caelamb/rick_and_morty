// actions.js

export const addToFavorites = character => {
    return {
      type: 'ADD_TO_FAVORITES',
      payload: character
    };
  };
  
  export const removeFromFavorites = id => {
    return {
      type: 'REMOVE_FROM_FAVORITES',
      payload: id
    };
  };
