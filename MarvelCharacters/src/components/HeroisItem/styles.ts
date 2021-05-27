import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;
export const ThumbNail = styled.Image`
    height: 300px; 
    width: 90%;
    resizeMode: contain;
`;
export const ButtonView = styled.View`
    flex-direction: row
`;
export const Card = styled.View`
    border-Width: 9px;
    border-radius: 5px;
    margin: 10px;
    border-Color: #000
    align-Items: center  
`;
export const TitleView = styled.View`
    height: 50px;
    width: 90%;
    margin: 10px;
    justify-content: center; 
    border-width: 0.3px;
`;
export const Title = styled.Text`
    font-size : 20px;
    margin-left: 20px
`;
export const ButtonCard = styled.TouchableOpacity`
    justify-content: center; 
    align-items: center;
    margin: 10px;
    border-width: 0.3px;
    width: 40%;
    height: 50px;
`;
export const TitleText = styled.Text`
    text-align: center;
    font-size: 30px;
    font-weight: bold;
`;
export const SearchInput = styled.TextInput`
    padding: 10px;
    margin: 10px;
    border-width: 1px;
    border-radius: 5px;
`;