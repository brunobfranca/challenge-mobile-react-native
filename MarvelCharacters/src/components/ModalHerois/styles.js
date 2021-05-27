import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1
`;
export const TitleText = styled.Text`
    text-align: center;
    font-size: 25px;
    font-weight: bold;
`;
export const ModalView = styled.ScrollView`
    margin: 20px;
    margin-top: 15%;
    width: 95%;
    border-radius: 20px;
    background-color: #fff;
    height: 100%;
    box-shadow: 0 0 80px #000;
`;
export const CenteredView = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 22px;
    margin-bottom: 10px
`;
export const ModalText = styled.Text`
    margin-bottom: 15px;
    text-align: center;
`;
export const ButtonText = styled.Text`
    color: #000;
    font-weight: bold;
    text-align: center
`;
export const Button = styled.TouchableOpacity`
    justify-content: center
    align-items: center
    border-radius: 50px;
    height: 50px;
    width: 50px;
    padding: 10px;
`;
export const Modal = styled.Modal``

export const ContainerModalItem = styled.View`
    margin: 10px;
    background-color: #dcdcdc;
    border-radius: 5px;
`;

export const ButtonModalDetails = styled.TouchableOpacity`
    flex-direction: row;
    margin: 10px;
    justify-content: space-between;

`;