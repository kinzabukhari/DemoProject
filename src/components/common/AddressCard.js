import React, {useState} from 'react';
import {StyleSheet, Modal, Dimensions, View, Pressable} from 'react-native';
import {Icon} from 'react-native-elements';
import AppText from './AppText';
import {ListItem} from 'react-native-elements';

const ScreenWidth = Dimensions.get('window').width;
const AddressCard = ({item, index}) => {
  const [show, setShow] = useState(false);
  const [indexCheck, setIndexCheck] = useState(0);
  const [visible, setVisible] = useState(false);

  const RenderAlert = () => {
    return (
      <View style={styles.alertBackground}>
        <View style={styles.alert}>
          <AppText>Would you like to set the default address?</AppText>
          <Pressable
            onPress={() => {
              setVisible(false);
              setShow(true);
            }}>
            <AppText style={{color: 'red', marginTop: 10}}>
              Set as Default
            </AppText>
          </Pressable>
        </View>
        <View style={styles.alert}>
          <Pressable
            onPress={() => {
              setVisible(false);
            }}>
            <AppText>Cancel</AppText>
          </Pressable>
        </View>
      </View>
    );
  };

  const RenderRightIcons = () => {
    return (
      <View style={styles.swipeableIcons}>
        <Pressable
          onPress={() => {
            setIndexCheck(index);
            setVisible(true);
          }}>
          <Icon
            name="thumb-up"
            type="material"
            color={'#0178ff'}
            size={25}
            style={styles.icon}
          />
        </Pressable>
        <Icon
          name="delete"
          type="material"
          color={'#ff0000'}
          size={25}
          style={{...styles.icon, backgroundColor: '#feb9b9'}}
        />
      </View>
    );
  };

  return (
    <ListItem.Swipeable
      containerStyle={{padding: 0}}
      rightStyle={{}}
      rightContent={RenderRightIcons()}>
      <View style={styles.container}>
        <View style={styles.topHeading}>
          <View style={styles.defaultHeader}>
            <AppText style={styles.heading}>{item.place}</AppText>
            {show ? (
              <View style={styles.defaultButton}>
                <AppText style={styles.defaultText}>Default</AppText>
              </View>
            ) : (
              <View></View>
            )}
          </View>
          <Icon name="edit" type="material" color={'#86939e'} size={25} />
        </View>
        <AppText>{item.address}</AppText>
        <AppText>{item.country}</AppText>
        <AppText>{item.zipCode}</AppText>
        <Modal
          visible={visible}
          transparent
          onRequestClose={() => {
            setVisible(false);
          }}>
          {RenderAlert()}
        </Modal>
      </View>
    </ListItem.Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e8ee',
    padding: 10,
  },
  topHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  heading: {
    color: '#86939e',
    fontSize: 16,
  },
  defaultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  defaultButton: {
    backgroundColor: '#b9dafe',
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginLeft: 10,
    borderRadius: 5,
  },
  icon: {
    backgroundColor: '#b9dafe',
    padding: 5,
    width: 50,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
  },
  defaultText: {
    color: '#0178ff',
  },
  swipeableIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  alert: {
    width: ScreenWidth * 0.95,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  alertBackground: {
    flex: 1,
    width: ScreenWidth,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#00000066',
    paddingBottom: 20,
  },
});

export default AddressCard;
