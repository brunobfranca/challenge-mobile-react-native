import React, { useEffect, useState } from 'react';
import firebase from '../../config/FirebaseDb'
import HeroisItem from '../../components/HeroisItem'
import { Container, TitleText } from './styles';
import {  getFavorites } from '../../config/ActionsDb'

import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Character } from '../../store/ducks/characters/types';
import { ApplicationState } from '../../store';
import * as CharactersActions from '../../store/ducks/characters/actions';

interface StateProps {
  characters: Character[],
  loading: boolean
}

interface DispatchProps {
  loadRequest(): void,
  update(data: boolean): void
}

type Props = StateProps & DispatchProps

const Favorites = ({  loading } : Props) => {


  const [favorites,setFavorites] = useState([])

  useEffect(async () => {
      const response = await getFavorites()
      setFavorites(response)
  }, [loading])
  return <Container>
    <TitleText>Heróis Favoritos</TitleText>
    <HeroisItem characters={favorites} />
  </Container>;
}

const mapStateToProps = (state: ApplicationState) => ({
  characters: state.characters.data,
  error: state.characters.error
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(CharactersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);