import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {addToCart} from '../redux/slices/CartSlices';
import {useDispatch, useSelector} from 'react-redux';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  console.log('cart: ', cart);

  const Items = [
    {
      id: 1,
      name: 'Better Call Saul (Season 6)',
      img: 'https://catimages.org/images/2024/06/10/Better-Call-Saul-Season-6-Hindi-Dubbed-KatMovieHD.jpg',
      likes: '2k',
    },
    {
      id: 2,
      name: 'DOM (Season 3)',
      img: 'https://catimages.org/images/2024/05/24/dom-season-3-Hindi-Dubbed.jpg',
      likes: '4k',
    },
    {
      id: 3,
      name: 'Dead Boy Detectives (Season 1)',
      img: 'https://catimages.org/images/2024/04/25/Deadboy-Detective-2024-Netflix-Series-Hindi-Dubbed.jpg',
      likes: '4M',
    },
    {
      id: 4,
      name: 'Parasyte: The Grey',
      img: 'https://catimages.org/images/2024/04/05/PARASYTE-THE-GREY-2024-Korean-Series-Hindi-Dubbed.jpg',
      likes: '8M',
    },
    {
      id: 5,
      name: 'Avatar: The Last Airbender',
      img: 'https://catimages.org/images/2024/02/22/Avatar-The-Last-Airbender-2024-Season-1-Hindi-Dubbed-Netflix-TV-Series.jpg',
      likes: '1B',
    },
  ];

  return (
    <View style={{flex: 1, backgroundColor: '#F3F3F3'}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('cart')}
        style={{
          position: 'absolute',
          zIndex: 99,
          width: 60,
          height: 60,
          backgroundColor: 'dodgerblue',
          borderRadius: 50,
          right: 10,
          bottom: 22,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            position: 'absolute',
            zIndex: 999,
            backgroundColor: 'green',
            borderWidth: 1,
            borderColor: '#fff',
            width: 20,
            height: 20,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            top: -1,
            right: 0,
          }}>
          <Text style={{color: '#fff', fontSize: 10}}>{cart.length}</Text>
        </View>
        <Icon name="cart-outline" size={25} color="#fff" />
      </TouchableOpacity>
      <FlatList
        data={Items}
        numColumns={2}
        contentContainerStyle={{paddingVertical: 10}}
        renderItem={({item}) => {
          return (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '50%',
              }}>
              <TouchableOpacity
                onPress={() => dispatch(addToCart(item))}
                style={{
                  flex: 1,
                  width: '90%',
                  paddingHorizontal: 10,
                  marginHorizontal: 20,
                  marginVertical: 10,
                  paddingVertical: 10,
                  borderRadius: 10,
                  backgroundColor: '#fff',
                  elevation: 3,
                }}>
                <View style={{width: '100%', height: 200}}>
                  <Image
                    source={{
                      uri: item.img,
                    }}
                    resizeMode="contain"
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#000',
                      borderRadius: 10,
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'left',
                    marginTop: 5,
                  }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    color: 'grey',
                    textAlign: 'left',
                    width: '100%',
                    fontSize: 10,
                  }}>
                  Likes: {item.likes}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;
