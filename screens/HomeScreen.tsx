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
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

const {width} = Dimensions.get('window');

const HomeScreen: React.FC = () => {
  const recommended = [
    {
      id: '1',
      title: 'Wedding Xperts',
      description: 'Capture.',
      price: '2,00,000/-',
      offerPrice: '1,80,000/-',
      image: require('../assets/images/wedding.jpg'),
      rating: 4.5,
      liked: false,
    },
    {
      id: '2',
      title: 'Maternity Shoot',
      description: 'Beautiful',
      price: '10,000/-',
      offerPrice: '8,000/-',
      image: require('../assets/images/maternity.jpeg'),
      rating: 4.7,
      liked: false,
    },
    {
      id: '3',
      title: 'Pre-Wedding Shoot',
      description: 'Romantic',
      price: '1,00,000/-',
      offerPrice: '90,000/-',
      image: require('../assets/images/preWedding.jpg'),
      rating: 4,
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
    const renderStars = (rating: number) => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        stars.push(
          <Image
            key={i}
            source={
              i <= rating
                ? require('../assets/images/filled_star.png')
                : require('../assets/images/empty_star.png')
            }
            style={styles.starIcon}
          />,
        );
      }
      return stars;
    };

    return (
      <View style={styles.recommendedCard}>
        {/* Top Section: Verify Icon and Like Button */}
        <View style={styles.topSection}>
          <View style={styles.verifyContainer}>
            <Image
              source={require('../assets/images/verify.png')}
              style={styles.verifyImage}
            />
          </View>

          <TouchableOpacity
            onPress={() => onLike(item.id)}
            style={styles.likeButton}>
            <Image
              source={
                item.liked
                  ? require('../assets/images/liked.png')
                  : require('../assets/images/heart.png')
              }
              style={styles.likeIcon}
            />
          </TouchableOpacity>
        </View>

        <Image source={item.image} style={styles.recommendedImage} />

        <View style={styles.bottomSection}>
          <View style={styles.leftSection}>
            <View style={styles.ratingContainer}>
              {renderStars(item.rating)}
              <Text style={styles.ratingText}>({item.rating})</Text>
            </View>
            <Text style={styles.recommendedTitle}>{item.title}</Text>
            <Text style={styles.recommendedDescription}>
              {item.description}
            </Text>
          </View>

          <View style={styles.rightSection}>
            <Text style={styles.originalPrice}>{item.price}</Text>
            <Text style={styles.offerPrice}>{item.offerPrice}</Text>
          </View>
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
      <ScrollView>
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

        <View>
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
      </ScrollView>
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
  starIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginHorizontal: 2,
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
  likeIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
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
    width: 200,
    height: 300,
    marginRight: 15,
    borderRadius: 10,
    backgroundColor: 'clear',
    overflow: 'hidden',
    position: 'relative',
  },
  recommendedImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  recommendedInfo: {
    padding: 10,
    flex: 1,
  },
  recommendedTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  recommendedDescription: {
    fontSize: 14,
    color: 'white',
    marginBottom: 10,
  },
  recommendedPrice: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    zIndex: 1,
  },
  bottomSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  leftSection: {
    flex: 1,
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  verifyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifyImage: {
    width: 20,
    height: 20,
    borderRadius: 15,
    marginRight: 10,
    tintColor: 'red',
  },
  likeButton: {
    padding: 5,
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
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  ratingText: {
    fontSize: 14,
    color: 'white',
    marginLeft: 5,
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  originalPrice: {
    fontSize: 14,
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  offerPrice: {
    fontSize: 16,
    color: 'yellow',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
