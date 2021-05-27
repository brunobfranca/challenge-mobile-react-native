import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import firebase from './src/config/FirebaseDb'

// import { Container } from './styles';

const dbRef = firebase.default.firestore().collection('characters')
const App = () => {

    const [dado, setDado] = useState([])

    let cont = 0

    useEffect(async () => {
        let resultado = []
        await axios.get('https://gateway.marvel.com/v1/public/characters?ts=1621638622&apikey=9b649aafe889d471445768d2ba66d9f6&hash=177cef614173a5bb6c660ae07e7a55a7&limit=100&orderBy=name&offset=600').then(
            res => {
                resultado = res.data.data.results
            }
        )
        resultado.map(item => {
            let thumbnail = item.thumbnail.path.replace('http', 'https') + '.' + item.thumbnail.extension
            editUser(item.id, item, thumbnail)
        })
        dbRef.onSnapshot(getCollection);
    }, [])
    function gravar() {
        cont = Math.random(100, 200)
        console.log(cont)

    }
    const getCollection = (querySnapshot) => {
        const userArr = [];
        querySnapshot.forEach((res) => {
            const { id, name, thumbnail, favorite } = res.data();
            userArr.push({
                key: res.id,
                res,
                name,
                thumbnail,
                favorite
            });
        });
        setDado(userArr)
    }
    function deleteUser(doc) {
        dbRef.doc(doc).delete().then(res => {
            console.log('deletado')
        })
        return 0
    }
    function editUser(teste, doc, thumbnail) {
        console.log('passei')
        const updateDBRef = firebase.default.firestore().collection('characters').doc(teste.toString());
        updateDBRef.set({
            id: doc.id,
            name: doc.name,
            thumbnail: thumbnail,
            favorite: false
        })
            .then(res => console.log(doc.name))
            .catch(err => console.log(err))
        return 0
    }

    return <View style={{ margin: 50 }}>
        <TouchableOpacity
            onPress={() => gravar()}
        >
            <Text>Gravar</Text>
        </TouchableOpacity>
        <ScrollView>

            {dado.map(d => {
                return (
                    <ScrollView>
                        <TouchableOpacity
                            onPress={() => deleteUser(d.key)}
                        >
                            <Text>{d.name}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => editUser(d)}
                        >
                            <Text>editar</Text>
                        </TouchableOpacity>
                    </ScrollView>
                )
            })}
        </ScrollView>
    </View>;
}

export default App;