import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { TitleText, ModalText, ButtonModalDetails, ContainerModalItem } from '../styles'
import Icon from 'react-native-vector-icons/Entypo'


const ModalItem = (props) => {

    const [openDetails, setOpenDetails] = useState(false)

    return <ContainerModalItem>
        <ButtonModalDetails
            onPress={() => setOpenDetails(!openDetails)}
        >
            <TitleText>
                {props.label}
            </TitleText>
            {openDetails ?
                <Icon name='chevron-small-up' size={30} /> :
                <Icon name='chevron-small-down' size={30} />
            }
        </ButtonModalDetails>
        {openDetails &&
            <ScrollView>
                {props.dataArray.map((data, i) => {
                    return (
                        <ModalText key={i}>
                            {data.name}
                        </ModalText>
                    )
                })
                }
            </ScrollView>
        }
    </ContainerModalItem>;
}

export default ModalItem;