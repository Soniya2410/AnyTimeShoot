import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import { BookingListItem } from '../booking/component/BookingListItem';
import { colors } from '../utils/Colors';
import { images } from '../utils/Images';

const WishlistScreen = () => {

  const bookingDetails = [
    {
      id: '1',
      image: images.wedding,
      title: 'Studio Experts',
      description: 'Maternity Shoot',
      rating: 4,
    },
    {
      id: '2',
      image: images.baby1,
      title: 'Baby Experts',
      description: 'Maternity Shoot',
      rating: 4,
    },
    {
      id: '3',
      image: images.marragie1,
      title: 'Studio Experts',
      description: 'Maternity Shoot',
      rating: 4,
    },
    {
      id: '4',
      image: images.baby1,
      title: 'Baby Experts',
      description: 'Maternity Shoot',
      rating: 4,
    },
    {
      id: '5',
      image: images.marragie1,
      title: 'Studio Experts',
      description: 'Maternity Shoot',
      rating: 4,
    },
    {
      id: '6',
      image: images.marragie1,
      title: 'Studio Experts',
      description: 'Maternity Shoot',
      rating: 4,
    },
  ];

  const moveToDetailPage = () => {
   
  }

return (
 <SafeAreaView style={styles.container}>
      <FlatList
        data={bookingDetails}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({item}) => <BookingListItem isWishList={true} onPress={moveToDetailPage} item={item} />}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
    marginTop: 22,
  },
   container: {
      flex: 1,
      backgroundColor: colors.white,
      padding: 10
    },
})

export default WishlistScreen;