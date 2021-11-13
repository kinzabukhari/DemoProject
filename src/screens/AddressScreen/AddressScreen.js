import React from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
// import {Icon} from 'react-native-elements/dist/icons/Icon';
import {AddressCard, AppText, Screen} from '../../components/common';
import {AddressData} from '../../mockData/AddressData';
import styles from './styles';

const AddressScreen = props => {
  return (
    <Screen>
      <View style={styles.container}>
        <Pressable onPress={() => props.navigation.goBack()}>
          <Icon
            name="arrow-back"
            style={{alignSelf: 'flex-start',marginBottom:20}}
            type="material"
            color={'black'}
          />
        </Pressable>
        <View style={styles.header}>
          <AppText style={{fontSize: 24, fontWeight: 'bold'}}>Address</AppText>
          <View style={styles.heading}>
            <AppText style={{color: 'white'}}>Add Address</AppText>
            <Icon name="add" type="material" color={'white'} />
          </View>
        </View>
      </View>
      <FlatList
        data={AddressData}
        ItemSeparatorComponent={() => <View style={{height: 10}}></View>}
        contentContainerStyle={{paddingHorizontal: 10}}
        renderItem={({item, index}) => (
          <AddressCard item={item} index={index} />
        )}
      />
    </Screen>
  );
};

export default AddressScreen;
