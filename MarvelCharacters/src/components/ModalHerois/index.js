import React, { useEffect, useState } from "react";
import { ModalView, CenteredView, ModalText, ButtonText, Modal, Button } from './styles'
import api from '../../services/api'
import { TitleText } from "../../pages/Home/styles";
import ModalItem from './ModalItem'


export default function App(props) {


    const id = props.characterId
    const ts = '1621638622'
    const apikey = '9b649aafe889d471445768d2ba66d9f6'
    const hash = '177cef614173a5bb6c660ae07e7a55a7'

    const [character, setCharacter] = useState(undefined)

    useEffect(async () => {
        try {
            const response = await api.get(`characters/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=100&orderBy=name`)
            setCharacter(response.data.data.results[0])
        } catch (error) {
            console.log(error)
        }
    }, [id])

    return (
        <CenteredView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.isVisible}>
                <CenteredView>
                    {character && <ModalView>
                        <Button
                            onPress={() => props.fechaModal()} >
                            <ButtonText>X</ButtonText>
                        </Button>
                        <TitleText>{character.name}</TitleText>
                        <ModalItem label='Comics' dataArray={character.comics.items} />
                        <ModalItem label='Events' dataArray={character.events.items} />
                        <ModalItem label='Series' dataArray={character.series.items} />
                        <ModalItem label='Stories' dataArray={character.stories.items} />
                    </ModalView>}
                </CenteredView>
            </Modal>
        </CenteredView>
    );
};

