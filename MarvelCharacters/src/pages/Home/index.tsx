import React, { Component } from 'react';
import {View , ActivityIndicator } from 'react-native'
import { Container, TitleText, SearchInput ,ContainerSpin ,SpinnerText } from './styles';
import HeroisItem from '../../components/HeroisItem'

import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Character } from '../../store/ducks/characters/types';
import { ApplicationState } from '../../store';
import * as CharactersActions from '../../store/ducks/characters/actions';



interface StateProps {
    characters: Character[],
    error: boolean,
    loading: boolean
}

interface DispatchProps {
    loadRequest(): void,
    update(data: boolean): void
    filter(text: string): void
}

type Props = StateProps & DispatchProps

class CharacterList extends Component<Props> {

    async componentDidMount() {
        this.props.loadRequest()
    }
    render() {
        const { error, loading, characters, filter, loadRequest } = this.props;
        return (
            <Container>
                {loading &&
                    <ContainerSpin>
                        <ActivityIndicator
                            size="large"
                            color="#0000ff"
                        />
                        <SpinnerText>
                            Carregando...
                        </SpinnerText>
                    </ContainerSpin>}
                    <SearchInput placeholder='Search for name' onChangeText={(text) => {
                        text.length > 0 ? filter(text, characters) : loadRequest()
                    }} />
                {characters.length === 0 && <TitleText>Ops... No founds results!</TitleText>}
                {!error ? <HeroisItem
                    characters={characters}
                /> : <Container>
                    <TitleText>Erro ao buscar dados!!</TitleText>
                </Container>}
            </Container>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    characters: state.characters.data,
    error: state.characters.error,
    loading: state.characters.loading
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(CharactersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
