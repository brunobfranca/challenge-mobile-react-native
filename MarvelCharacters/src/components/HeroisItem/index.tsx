import React, { useState } from 'react';
import { Alert, ScrollView, Text } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import { Container, Card, ThumbNail, TitleView, ButtonView, Title, ButtonCard, } from './styles';
import Modal from '../../components/ModalHerois'
import { editCharacter } from '../../config/ActionsDb'
import firebase from '../../config/FirebaseDb'
import { Button } from 'native-base'


import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Character } from '../../store/ducks/characters/types';
import { ApplicationState } from '../../store';
import * as CharactersActions from '../../store/ducks/characters/actions';

interface StateProps {
    characters: Character[],
    favorite: boolean
}

interface DispatchProps {
    loadRequest(): void,
    update(data: boolean): void
}

type Props = StateProps & DispatchProps

const HeroisItem = ({ characters, update, favorite }: Props) => {

    const [modalShow, setModalShow] = useState(false)
    const [characterSelected, setCharacterSelected] = useState(0)


    function openModal(id: number) {
        setCharacterSelected(id)
        setModalShow(true)

    }
    return <Container>
        <Modal
            isVisible={modalShow}
            characterId={characterSelected}
            fechaModal={() => setModalShow(false)} />
        <ScrollView>
            {characters.map(character => {
                return (
                    <Card key={character.id}>
                        <TitleView>
                            <Title>{character.name}</Title>
                        </TitleView>
                        <ThumbNail
                            source={{
                                uri: `${character.thumbnail}`
                            }}
                        />
                        <ButtonView>
                            <ButtonCard
                                onPress={() => (
                                    character.favorite = !character.favorite,
                                    editCharacter(character.thumbnail, character).then(res => {
                                        update(res)
                                        console.log(favorite)
                                    }).catch(err => {
                                        Alert.alert(err)
                                    })
                                )
                                }
                            >
                                {character.favorite ?
                                    <AntDesignIcon name='heart' size={25} /> :
                                    <AntDesignIcon name='hearto' size={25} />}
                            </ButtonCard>
                            <ButtonCard
                                onPress={() => openModal(character.id)}
                            >
                                <Text>Detalhes</Text>
                            </ButtonCard>
                        </ButtonView>
                    </Card>
                )
            })}
        </ScrollView>

    </Container >;
}
const mapStateToProps = (state: ApplicationState) => ({
    favorite: state.characters.favorite
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(CharactersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HeroisItem);
