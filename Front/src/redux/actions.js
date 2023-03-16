
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

  export const filterCards = (gender) => {
    return {
      type: "FILTER",
      payload: gender
    }
  }
  
  // Action-creator orderCards
  export const orderCards = (id) => {
    return {
      type: "ORDER",
      payload: id
    }
  }