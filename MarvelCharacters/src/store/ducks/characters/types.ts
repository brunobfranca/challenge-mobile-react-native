/**
 * Action types
 */
export enum CharactersTypes {
  LOAD_REQUEST = '@characters/LOAD_REQUEST',
  LOAD_SUCCCES = '@characters/LOAD_SUCCCES',
  LOAD_FAILURE = '@characters/LOAD_FAILURE',
  UPDATE_REQUEST = '@characters/UPDATE_REQUEST',
  FILTER = '@characters/FILTER'
}

/**
 * Data types
 */
export interface Character {
  id: number
  name: string
  thumbnail: string
  favorite: boolean
}

/**
 * State type
 */
export interface CharactersState {
  readonly data: Character[]
  readonly loading: boolean
  readonly error: boolean
  readonly favorite: boolean
}
