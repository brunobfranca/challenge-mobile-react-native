import { action } from 'typesafe-actions';
import { CharactersTypes, Character } from './types';

export const loadRequest = () => action(CharactersTypes.LOAD_REQUEST);

export const loadSuccess = (data: Character[]) => action(CharactersTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(CharactersTypes.LOAD_FAILURE);

export const update = (data: boolean) => action(CharactersTypes.UPDATE_REQUEST , {data});

export const filter = (name: string , data : Character[] ) => action(CharactersTypes.FILTER , {name , data});




