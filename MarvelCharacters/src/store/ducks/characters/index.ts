import { Reducer } from 'redux';
import { CharactersState, CharactersTypes } from './types'

const INITIAL_STATE: CharactersState = {
  data: [],
  error: false,
  loading: false,
  favorite: false,
};

const reducer: Reducer<CharactersTypes> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CharactersTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case CharactersTypes.LOAD_SUCCCES:
      return {
        ...state, loading: false, error: false, data: action.payload.data,
      };
    case CharactersTypes.LOAD_FAILURE:
      return {
        ...state, loading: false, error: true, data: [],
      };
    case CharactersTypes.UPDATE_REQUEST:
      return {
        ...state, favorite: action.payload.data,
      };
    case CharactersTypes.FILTER:
      let name = action.payload.name.toLowerCase()
      let array = action.payload.data
      let filtro = array.filter(cha => cha.name.toLowerCase().includes(name))
      return {
        ...state, error: false , data: filtro
      };
    default:
      return state;
  }
};

export default reducer;
