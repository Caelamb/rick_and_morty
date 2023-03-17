import axios from 'axios';

export const addToFavorites = (character) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3001/rickandmorty/fav', character);
    dispatch({
      type: 'ADD_TO_FAVORITES',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'ERROR',
      payload: error,
    });
  }
};

export const removeFromFavorites = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
    dispatch({
      type: 'REMOVE_FROM_FAVORITES',
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getFavorites = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3001/rickandmorty/fav');
    const data = response.data;
    dispatch({
      type: 'GET_FAVORITES',
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const filterCards = (gender) => ({
  type: 'FILTER',
  payload: gender,
});

export const orderCards = (id) => ({
  type: 'ORDER',
  payload: id,
});
