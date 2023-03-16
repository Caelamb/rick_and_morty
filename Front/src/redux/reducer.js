const initialState = {
    myFavorites: [],
    allCharacters: []
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_FAVORITES':
        return {
          ...state,
          myFavorites: [...state.myFavorites, action.payload],
          allCharacters: [...state.allCharacters, action.payload]
        };
      case 'REMOVE_FROM_FAVORITES':
        return {
          ...state,
          myFavorites: state.myFavorites.filter(
            character => character.id !== action.payload
          )
        };
        case 'FILTER':
          const { allCharacters } = state;
          const filteredFavorites = allCharacters.filter(
            character => character.gender === action.payload
          );
          return {
            ...state,
            myFavorites: filteredFavorites
          };
          case 'ORDER':
            const { payload } = action;
            const orderedFavorites = [...state.myFavorites].sort((a, b) => {
              if (payload === 'Ascendente') {
                return a.id - b.id;
              } else if (payload === 'Descendente') {
                return b.id - a.id;
              } else {
                return 0;
              }
            });
            return {
              ...state,
              myFavorites: orderedFavorites
            };
      default:
        return state;
    }
  };
  
  export default reducer;
  