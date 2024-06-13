import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {removeFromCart} from '../redux/slices/CartSlices';

const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  return (
    <View style={{flex: 1}}>
      {cart.length > 0 ? (
        <FlatList
          data={cart}
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
                <View
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
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'flex-end',
                    }}>
                    <TouchableOpacity
                      onPress={() => dispatch(removeFromCart(item))}
                      style={{
                        backgroundColor: '#FF9292',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 4,
                        marginTop: 8,
                        paddingVertical: 5,
                      }}>
                      <Text style={{color: '#fff'}}>Remove Item</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
        />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18, color: '#000'}}>Cart Empty!</Text>
        </View>
      )}
    </View>
  );
};

export default CartScreen;
