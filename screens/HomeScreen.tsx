import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  StatusBar,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width} = Dimensions.get('window');

const HomeScreen: React.FC = () => {
  const recommended = [
    {
      id: '1',
      title: 'Wedding Xperts',
      price: '2,00,000/-',
      image: require('../assets/images/wedding.jpg'),
      liked: false,
    },
    {
      id: '2',
      title: 'Wedding Xperts',
      price: '10,000/-',
      image: require('../assets/images/maternity.jpeg'),
      liked: false,
    },
    {
      id: '3',
      title: 'Shoot Xperts',
      price: '1,00,000/-',
      image: require('../assets/images/preWedding.jpg'),
      liked: false,
    },
  ];

  const [recommendedList, setRecommendedList] = useState(recommended);

  const categories = [
    {id: '1', title: 'Wedding', image: require('../assets/images/wedding.jpg')},
    {
      id: '2',
      title: 'Pre-wedding',
      image: require('../assets/images/preWedding.jpg'),
    },
    {
      id: '3',
      title: 'Maternity',
      image: require('../assets/images/maternity.jpeg'),
    },
    {
      id: '4',
      title: 'Product',
      image: require('../assets/images/product.jpeg'),
    },
    {
      id: '5',
      title: 'New Born',
      image: require('../assets/images/newBorn.jpeg'),
    },
    {
      id: '6',
      title: 'View All',
      image: require('../assets/images/right-arrow.png'),
    },
  ];

  const RecommendedCard = ({item, onLike}: any) => {
    return (
      <View style={styles.recommendedCard}>
        <Image source={item.image} style={styles.recommendedImage} />
        <View style={styles.recommendedInfo}>
          <Text style={styles.recommendedTitle}>{item.title}</Text>
          <Text style={styles.recommendedPrice}>{item.price}</Text>
          <TouchableOpacity onPress={() => onLike(item.id)}>
            <Text style={styles.likeIcon}>{item.liked ? '❤️' : '🤍'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const toggleLike = (id: string) => {
    const updatedList = recommendedList.map(item =>
      item.id === id ? {...item, liked: !item.liked} : item,
    );
    setRecommendedList(updatedList);
  };

  const renderCategory = ({item}: any) => {
    const isViewAll = item.title === 'View All';
    return (
      <View
        style={[
          styles.categoryCard,
          // {backgroundColor: isViewAll ? 'grey' : 'transparent', borderRadius: 50,},
        ]}>
        <Image
          source={item.image}
          style={[styles.categoryImage, {borderRadius: 50}]}
        />
        <Text style={styles.categoryTitle}>{item.title}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.logoText}>Any Time Shoot</Text>
        </View>

        <View style={styles.iconsContainer}>
          <Image
            source={require('../assets/images/notification.png')}
            style={styles.icon}
          />
          <Image
            source={require('../assets/images/heart.png')}
            style={styles.icon}
          />
          <Image
            source={require('../assets/images/message.png')}
            style={styles.icon}
          />
        </View>
      </View>

      <View style={styles.searchLocationContainer}>
        <View style={styles.searchInputWrapper}>
          <Image
            source={require('../assets/images/search.png')}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search for salons, services..."
            style={styles.searchInput}
          />
        </View>

        <View style={styles.wrapper}>
          <Text style={styles.yourLocation}>Your Location</Text>
          <View style={styles.locationContainer}>
            <Image
              source={require('../assets/images/location.png')}
              style={styles.locationIcon}
            />
            <Text style={styles.locationText}>Gurugram</Text>
          </View>
        </View>
      </View>

      <Image
        source={require('../assets/images/banner.jpg')}
        style={styles.banner}
      />

      <Text style={styles.sectionTitle}>Top Booked Categories</Text>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}
      />
      <View style={styles.recommendedHeader}>
        <Text style={styles.sectionTitle}>Recommended for You</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={{height: 250}}>
        <FlatList
          data={recommendedList}
          renderItem={({item}) => (
            <RecommendedCard item={item} onLike={toggleLike} />
          )}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 15}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    tintColor: 'red',
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'red',
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: 'red',
  },
  searchLocationContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  searchInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingLeft: 10,
    width: '70%',
  },
  searchInput: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    width: '100%',
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: 'gray',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    width: 18,
    height: 18,
  },
  locationText: {
    fontSize: 14,
    marginLeft: 10,
    color: 'red',
  },
  banner: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    marginBottom: 5,
  },
  categoryCard: {
    alignItems: 'center',
    marginRight: 15,
  },
  categoryImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: 'regular',
    color: 'red',
    textAlign: 'center',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 15,
    color: 'red',
    marginTop: 5,
  },
  recommendedCard: {
    width: 120,
    height: 250,
    marginRight: 15,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  },
  recommendedImage: {
    width: '100%',
    height: 150,
  },
  recommendedInfo: {
    padding: 10,
  },
  recommendedTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  recommendedPrice: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  likeIcon: {
    fontSize: 20,
    position: 'absolute',
    top: 5,
    right: 5,
  },
  recommendedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  viewAll: {
    fontSize: 16,
    color: 'grey',
    fontWeight: 'regular',
  },
  wrapper: {
    alignItems: 'flex-end',
    marginLeft: 20,
  },
  yourLocation: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 2,
  },
});

export default HomeScreen;
