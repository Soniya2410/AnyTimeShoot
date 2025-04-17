import React, {useMemo, useState} from 'react';
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
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {images} from '../utils/Images';
import {constant} from '../utils/Constant';
import {colors} from '../utils/Colors';
import AppHeaders from './components/AppHeaders';
import SearchComponents from './components/SearchComponents';
import RecommendedCard from './components/RecommendedCard';
import CustomSlider from './components/CustomSlider';
import InstantBookingCard from './components/InstantBookingsCard';
import InstantBooking from './components/InstantBooking';
import PreweddingCard from './components/PreweddingCard';
import { Fonts } from '../utils/Fonts';
import YourLocationPopupScreen from './modals/YourLocationPopupScreen';
import { icons } from '../utils/Icons';

const {width} = Dimensions.get('window');

const HomeScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const recommended = [
    {
      id: '1',
      title: 'Wedding Xperts',
      description: 'Capture.',
      price: '2,00,000/-',
      offerPrice: '1,80,000/-',
      image: images.wedding,
      rating: 4.5,
      liked: false,
    },
    {
      id: '2',
      title: 'Maternity Shoot',
      description: 'Beautiful',
      price: '10,000/-',
      offerPrice: '8,000/-',
      image: images.maternity,
      rating: 4.7,
      liked: false,
    },
    {
      id: '3',
      title: 'Pre-Wedding Shoot',
      description: 'Romantic',
      price: '1,00,000/-',
      offerPrice: '90,000/-',
      image: images.preWedding,
      rating: 4,
      liked: false,
    },
  ];

  const prewedding = [
    {
      id: '1',
      title: 'Wedding Xperts',
      description: 'Capture.',
      price: '2,00,000/-',
      offerPrice: '1,80,000/-',
      image: images.wedding,
      rating: 4.5,
      liked: false,
    },
    {
      id: '2',
      title: 'Maternity Shoot',
      description: 'Beautiful',
      price: '10,000/-',
      offerPrice: '8,000/-',
      image: images.maternity,
      rating: 4.7,
      liked: false,
    },
    {
      id: '3',
      title: 'Pre-Wedding Shoot',
      description: 'Romantic',
      price: '1,00,000/-',
      offerPrice: '90,000/-',
      image: images.preWedding,
      rating: 4,
      liked: false,
    },
    {
      id: '4',
      title: 'Pre-Wedding Shoot',
      description: 'Romantic',
      price: '1,00,000/-',
      offerPrice: '90,000/-',
      image: images.preWedding,
      rating: 4,
      liked: false,
    },
    {
      id: '5',
      title: 'Pre-Wedding Shoot',
      description: 'Romantic',
      price: '1,00,000/-',
      offerPrice: '90,000/-',
      image: images.preWedding,
      rating: 4,
      liked: false,
    },
    {
      id: '6',
      title: 'Pre-Wedding Shoot',
      description: 'Romantic',
      price: '1,00,000/-',
      offerPrice: '90,000/-',
      image: images.preWedding,
      rating: 4,
      liked: false,
    },
  ];

  const bestSeller = [
    {
      id: '1',
      title: 'Wedding Xperts',
      description: 'Capture.',
      price: '2,00,000/-',
      offerPrice: '1,80,000/-',
      image: images.wedding,
      rating: 4.5,
      liked: false,
    },
    {
      id: '2',
      title: 'Maternity Shoot',
      description: 'Beautiful',
      price: '10,000/-',
      offerPrice: '8,000/-',
      image: images.maternity,
      rating: 4.7,
      liked: false,
    },
    {
      id: '3',
      title: 'Pre-Wedding Shoot',
      description: 'Romantic',
      price: '1,00,000/-',
      offerPrice: '90,000/-',
      image: images.preWedding,
      rating: 4,
      liked: false,
    },
    {
      id: '4',
      title: 'Pre-Wedding Shoot',
      description: 'Romantic',
      price: '1,00,000/-',
      offerPrice: '90,000/-',
      image: images.wedding,
      rating: 4,
      liked: false,
    },
    {
      id: '5',
      title: 'Pre-Wedding Shoot',
      description: 'Romantic',
      price: '1,00,000/-',
      offerPrice: '90,000/-',
      image: images.wedding,
      rating: 4,
      liked: false,
    },
    {
      id: '6',
      title: 'Pre-Wedding Shoot',
      description: 'Romantic',
      price: '1,00,000/-',
      offerPrice: '90,000/-',
      image: images.wedding,
      rating: 4,
      liked: false,
    },
  ];

  const instantBooking = [
    {
      id: '1',
      service: 'Wedding Photography',
      image: images.coupleMaternity,
      rating: 4.5,
      price: '$2,00,000/-',
      available: 'Madurai',
    },
    {
      id: '2',
      service: 'Maternity Shoot',
      image: images.familyMaternity,
      rating: 4.7,
      price: '10,000/-',
      available: 'Delhi',
    },
    {
      id: '3',
      service: 'Pre-Wedding Shoot',
      image: images.camProduct,
      rating: 4.2,
      price: '1,00,000/-',
      available: 'Trichy',
    },
    {
      id: '4',
      service: 'Pre-Wedding Shoot',
      image: images.stylishMan,
      rating: 4.2,
      price: '1,00,000/-',
      available: 'Coimbatore',
    },
    {
      id: '5',
      service: 'Pre-Wedding Shoot',
      image: images.lawer,
      rating: 4.2,
      price: '1,00,000/-',
      available: 'Chennai',
    },
    {
      id: '6',
      service: '',
      image: icons.nextArrowIcon,
      rating: 4.2,
      price: '',
      location: 'View All',
    },
  ];

  const [recommendedList, setRecommendedList] = useState(recommended);
  const [preweddingList, setPreweddingList] = useState(prewedding);
  const [bestSellerPackageList, setBestSellerPackageList] = useState(bestSeller);
  const [offerPackageList, setOfferSellerPackageList] = useState(bestSeller);
  const categories = [
    {
      id: '1',
      title: 'Wedding',
      image: images.wedding,
    },
    {
      id: '2',
      title: 'Pre-wedding',
      image: images.preWedding,
    },
    {
      id: '3',
      title: 'Maternity',
      image: images.maternity,
    },
    {
      id: '4',
      title: 'Product',
      image: images.product,
    },
    {
      id: '5',
      title: 'New Born',
      image: images.newBorn,
    },
    {
      id: '6',
      title: 'View All',
      image: icons.nextArrowIcon,
    },
  ];

  const toggleLike = (id: string) => {
    const updatedList = recommendedList.map(item =>
      item.id === id ? {...item, liked: !item.liked} : item,
    );
    setRecommendedList(updatedList);
  };

  const toggleWeddingLike = (id: string) => {
    const updatedList = preweddingList.map(item =>
      item.id === id ? {...item, liked: !item.liked} : item,
    );
    setPreweddingList(updatedList);
  };

  const toggleBestSellerLike = (id: string) => {
    const updatedList = bestSeller.map(item =>
      item.id === id ? {...item, liked: !item.liked} : item,
    );
    setBestSellerPackageList(updatedList);
  };

  const toggleOfferLike = (id: string) => {
    const updatedList = offerPackageList.map(item =>
      item.id === id ? {...item, liked: !item.liked} : item,
    );
    setOfferSellerPackageList(updatedList);
  };

  const   renderCategory = ({item}: any) => {
    const isViewAll = item.title === 'View All';
    if(isViewAll) {
      return (
        <View style={styles.categoryCard}>
          <View style={styles.greyImage}>
          <Image source={item.image}  style={styles.arrowIcon}/>
          </View>
          <YourLocationPopupScreen
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
          />
          <Text style={styles.viewAllTitle}>{item.title}</Text>
        </View>
      );
    }
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppHeaders />
        <SearchComponents />
        <CustomSlider />
        <View style={{marginHorizontal: 5}}>
        <Text style={styles.sectionTitle}>{constant.top_booked_services}</Text>
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 15}}
        />
        </View>
        <View style={styles.recommendedHeader}>
          <Text style={styles.recommendedTitle}>{constant.recommended_for_you}</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>{constant.view_all}</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginHorizontal: 5}}>
          <FlatList
            data={recommendedList}
            renderItem={({item}) => (
              <RecommendedCard item={item} onLike={toggleLike} cardSize={280}/>
            )}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 15}}
          />
        </View>

        <View style={styles.recommendedHeader}>
          <Text style={styles.recommendedTitle}>{constant.instant_bookings}</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>{constant.view_all}</Text>
          </TouchableOpacity>
        </View>
          <InstantBooking instantBooking={instantBooking} />

          {/* Wedding Package  */}
          <View style={styles.weddingPackage}>
          <Text style={styles.recommendedTitle}>{constant.wedding_packages_near_you}</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>{constant.view_all}</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginHorizontal: 5}}>
          <FlatList
            data={preweddingList}
            renderItem={({item}) => (
              <RecommendedCard item={item} onLike={toggleWeddingLike} cardSize={200}/>
            )}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 15}}
          />
        </View>
        {/* Offer Packages  */}
        <View style={styles.weddingPackage}>
          <Text style={styles.recommendedTitle}>{constant.upto_to}</Text>
        </View>
        <FlatList
          data={offerPackageList}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
            <PreweddingCard item={item} onLike={toggleOfferLike} cardSize={120}/>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3} 
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        />
         <View style={{marginHorizontal: 15}}>
          <Text style={styles.viewMore}>{constant.view_more}</Text>
        </View>

        <View style={styles.weddingPackage}>
          <Text style={styles.recommendedTitle}>{constant.bestSeller_package}</Text>
        </View>
        <FlatList
          data={bestSellerPackageList}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
            <PreweddingCard item={item} onLike={toggleBestSellerLike} cardSize={120}/>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3} 
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    flex: 1, 
    margin: 5, 
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spacing: {
    height: 10,
  },
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
    tintColor: colors.appColor,
  },
  logoText: {
    fontSize: 18,
    fontFamily: Fonts.bold,
    marginLeft: 10,
    color: colors.appColor,
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: colors.appColor,
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
    marginRight: 5,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 10,
  },
  greyImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 10,
    backgroundColor: colors.appColor30,
    justifyContent: 'center',
    alignItems:'center'
  },
  categoryTitle: {
    fontSize: 12,
    fontFamily: Fonts.regular,
    // color: colors.appColor,
    textAlign: 'center',
    marginTop: 5,
  },
  viewAllTitle: {
    fontSize: 12,
    fontWeight: 'regular',
    color: colors.appColor,
    textAlign: 'center',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 16,
    // fontWeight: '600',
    fontFamily: Fonts.medium,
    marginVertical: 20,
    marginLeft: 16,
    color: colors.appColor,
    marginTop: 40,
  },
  recommendedTitle: {
    fontSize: 16,
    // fontWeight: '600',
    fontFamily: Fonts.medium,
    marginVertical: 10,
    marginLeft: 10,
    color: colors.appColor,
    marginTop: 10,
  },
  recommendedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  weddingPackage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    // marginVertical: 5,
  },
  viewAll: {
    fontSize: 14,
    color: colors.grey,
    fontWeight: 'regular',
    textAlign: 'center',
    marginTop: 5,
  },
  viewMore: {
    fontSize: 12,
    color: colors.appColor,
    fontWeight: 'regular',
    marginTop: 5,
    marginLeft: 5
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
  priceContainer: {
    alignItems: 'flex-end',
  },
  arrowIcon: {
    width: 18,
    height: 29,
  }
});

export default HomeScreen;
