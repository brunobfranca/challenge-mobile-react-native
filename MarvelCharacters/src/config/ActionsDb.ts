
import firebase from './FirebaseDb'
import { Character } from '../store/ducks/characters/types'

const dbRef = firebase.default.firestore().collection('characters')

export const getFavorites = async () => {
    let listaFavoritos : Character [] = []
    try {
        const snapshot = await dbRef.where('favorite', '==', true).get();
        if (snapshot.empty) {
            console.log('No matching documents.');
            return;
        }
        snapshot.forEach(doc => {
            listaFavoritos.push(doc.data())
        });
        return listaFavoritos
    } catch (error) {
        console.log(error)
    }
}
export const getCharacters = async () => {
    let listaCharacters : Character [] = []
    try {
        const snapshot = await dbRef.orderBy('name').get();
        if (snapshot.empty) {
            console.log('No found results!!');
            return;
        }
        snapshot.forEach(doc => {
            listaCharacters.push(doc.data())
        });
        return listaCharacters;
    } catch (error) {
        console.log(error)
    }
}
export const editCharacter = async (thumbnail: string, character : Character) => {
    try {
       await dbRef.doc(character.id.toString()).set({
            id: character.id,
            name: character.name,
            thumbnail: thumbnail,
            favorite: character.favorite
    
        })
        return character.favorite
    } catch (error) {
        return error
    }

}