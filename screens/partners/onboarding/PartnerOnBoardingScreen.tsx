import React, {useState, useCallback, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import Slider from '@react-native-community/slider';
import {images} from '../../utils/Images';
import {colors} from '../../utils/Colors';
import {Fonts} from '../../utils/Fonts';
import { constant } from '../../utils/Constant';
import { ASButton } from '../../components/ASButton';
import { RootStackNavigationProp } from '../../../App';
import { useNavigation } from '@react-navigation/native';
const data = [
  { id: '1', title: 'Wedding Shoot', image: images.wedding },
  { id: '2', title: 'Pre-Wedding Shoot', image: images.preWedding },
  { id: '3', title: 'New Born Shoot', image: images.newBorn },
  { id: '4', title: 'Maternity Shoot', image: images.maternity },
  { id: '5', title: 'Anniversaries Shoot', image: images.baby1 },
  { id: '6', title: 'Small Events Shoot', image: images.banner2 },
  { id: '7', title: 'Portfolio Shoot', image: images.wedding },
  { id: '8', title: 'Product Shoot', image: images.preWedding },
  { id: '9', title: 'Product Shoot', image: images.preWedding },
];

const partners = [
  { id: '1', image: images.partner_1 },
  { id: '2', image: images.partner_2 },
  { id: '3', image: images.partner_3 }, // Last one has a button overlay
];

const offerCards = [
  {
    title: 'Get Paid Faster',
    text: 'Receive your earnings quicker with efficient payout system.',
    icon: images.offerIcon,
  },
  {
    title: 'More Visibility',
    text: 'Get featured on our homepage and increase your bookings.',
    icon: images.offerIcon,
  },
  {
    title: 'Free Equipment',
    text: 'Access to premium camera gear for shoots when needed.',
    icon: images.offerIcon,
  },
];

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 3 - 20;

const PartnerOnboardingScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp<'partnersOnboarding'>>();
  const [price, setPrice] = useState(5000);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  const moveToNextScreen = ()=> {
    navigation.navigate('partnerRegister');
  }

  const PackageCard = ({ title, image }: { title: string; image: any }) => (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
  );

    const moveToSkip = useCallback(() => {
      // navigation.navigate('login');
    }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
        <TouchableOpacity style={styles.skipButton} onPress={moveToSkip}>
          <Text style={styles.skipText}>Skip</Text>
          <Image source={images.skipArrow} style={styles.arrowImage} />
        </TouchableOpacity>
        <Image source={images.partnerOnboarding} style={styles.centerImage} />
        <Text style={styles.title}>
            {constant.youCanEarnWith}</Text>
        <Text style={styles.anyTimeLabel}>{constant.anyTime}<Text style={styles.shootLabel}>{constant.shoot}</Text>
        </Text>
        {/* Estimation Box */}
        <View style={styles.estimateBox}>
          <Text style={styles.estimateTitle}>
            {constant.estimateTime}
          </Text>
          <Slider
            style={{width: '100%', height: 30}}
            minimumValue={1000}
            maximumValue={10000}
            step={500}
            value={price}
            minimumTrackTintColor={colors.appColor}
            maximumTrackTintColor="#ccc"
            thumbTintColor={colors.appColor}
            onValueChange={setPrice}
          />
          <Text style={styles.estimateText}>
            shoots at an estimated <Text style={styles.amount}>Rs. 5000</Text>{' '}
            per package
          </Text>
        </View>
        {/* Search Box */}

        <View style={styles.box}>
          <Image source={images.search} style={styles.searchStyle}/>
          <View style={{ marginHorizontal : 10}}>
            <Text style={styles.searchText}>{constant.searchText}</Text>
            <Text style={styles.searchCategory}>{constant.searchCategory}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.locationRow}>
          <Text style={styles.exploreText}>Why?</Text>
        </TouchableOpacity>

      <View style={styles.packagesView}>
        <Text style={styles.header}>Types of packages</Text>
      <Text style={styles.subHeader}>Packages available on AnyTimeShoot</Text>

      {/* Grid */}
      <FlatList
        data={data}
        numColumns={3}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <PackageCard title={item.title} image={item.image} />}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={styles.gridContainer}
      />

      {/* Footer */}
      <Text style={styles.footer}>+Many more packages available on the app</Text>
        </View>
        {/* Our Partners */}
        <View style={{ marginHorizontal: 16}}>
        <Text style={styles.sectionTitle}>Our current partners</Text>
        <FlatList
        data={partners}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.partnerCard}>
            <Image source={item.image} style={styles.partnerImage} />
            {index === partners.length - 1 && (
              <View style={styles.arrowOverlay}>
                <Image source={images.skipArrow} style={styles.nextArrow}/>
              </View>
            )}
          </View>
        )}
      />
      </View>
       {/* Explore Section */}
       <Text style={styles.OffersectionTitle}>Explore what We Offer</Text>
    
        {/* Offer Card */}
        <View style={styles.offerCard}>
          <Image
            source={images.offerIcon}
            style={styles.offerIcon}
          />
          <Text style={styles.offerTitle}>Get Paid Faster</Text>
          <Text style={styles.offerText}>
            Receive your earnings quicker with efficient payout system.
          </Text>
        </View>
          {/* Pagination Dots */}
          <View style={styles.dotsContainer}>
            {[0, 1, 2, 3, 4].map((i) => (
              <View key={i} style={[styles.dot, i === 0 && styles.activeDot]} />
            ))}
            </View>
            <View style={styles.buttonRow}>
              <ASButton
                title='Join as Partner'
                onPress={moveToNextScreen}
                customStyle={styles.joinButton}
              />
               <TouchableOpacity
                  onPress={() => {}}
                  style={styles.help}>
                  <Image
                    source={images.helpIcon}
                    style={{
                      width: 18,
                      height: 20,
                      marginRight: 10,
                    }}
                  />
                <Text style={{color: colors.black}}>{constant.help}</Text>
              </TouchableOpacity>
              </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  estimateBox: {
    padding: 15,
    borderRadius: 10,
    marginVertical: 15,
    marginHorizontal: 10,
    width: '95%',
  },
  card: {
    width: ITEM_WIDTH,
    // height: 150,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.appColor,
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
  },
  estimateTitle: {
    fontSize: 16,
    marginBottom: 10,
    textAlign:'center',
    fontFamily: Fonts.regular,
  },
  title: {
    fontSize: 24,
    textAlign:'center',
    fontFamily: Fonts.medium,
  },
  slider: {
    width: '100%',
    height: '40%',
  },
  estimateText: {
    fontSize: 15,
    marginVertical: 8,
    textAlign: 'center',
    color: colors.textPrimary2
  },
  amount: {
    fontSize: 18,
    color: colors.appColor,
    fontWeight: 'bold',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  centerImage: {
    height: 400,
    width: '98%',
    marginTop: 50,
  },
  skipText: {
    fontSize: 16,
    color: colors.appColor,
    marginRight: 5,
    fontFamily: Fonts.regular,
  },
  skipButton: {
    position: 'absolute',
    top: 20,
    right: 24,
    zIndex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowImage: {
    width: 6,
    height: 10,
    tintColor: colors.appColor,
  },
  anyTimeLabel: {
    fontFamily: Fonts.semiBold,
    fontSize: 32,
    marginHorizontal: 5,
    textAlign: 'center'
  },
  shootLabel: {
    fontFamily: Fonts.semiBold,
    fontSize: 32,
    color: colors.appColor
  },
  header: {
    fontSize: 24,
    color: colors.appColor,
    fontFamily: Fonts.medium,
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 15,
    marginBottom: 20,
    fontFamily: Fonts.light
  },
  gridContainer: {
    gap: 15,
    paddingBottom: 20,
  },
  cardTitle: {
    fontSize: 13,
    fontFamily: Fonts.medium,
    textAlign: 'center',
    marginVertical: 5
  },
  footer: {
    fontFamily: Fonts.regular,
    marginTop: 5,
  },
  box: {
    borderRadius: 5,
    borderColor: colors.lineColor,
    borderWidth: 1,
    marginHorizontal: 50,
    flexDirection: 'row',
    padding: 8
  },
  searchStyle: {
    width: 24,
    height: 24,
    tintColor: colors.appColor
  },
  searchText: {
    fontFamily: Fonts.medium,
    fontSize: 13
  }, 
  searchCategory: {
    fontFamily: Fonts.medium,
    fontSize: 10,
    color: colors.grey
  },
  packagesView:{
    marginHorizontal: 16,
    marginVertical: 10
  },
  sectionTitle: {
    fontSize: 22,
    color: colors.appColor,
    fontFamily: Fonts.medium,
    marginVertical: 10,
  },
  OffersectionTitle: {
    fontSize: 22,
    color: colors.appColor,
    fontFamily: Fonts.medium,
    marginVertical: 10,
    marginHorizontal: 16,
  },
  partnerCard: {
    marginRight: 15,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  partnerImage: {
    width: 120,
    height: 160,
    borderRadius: 10,
  },
  arrowOverlay: {
    position: 'absolute',
    right: 10,
    top: '40%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
    width: 40,
    height: 40,
    elevation: 2,
    justifyContent: 'center',
    alignItems:'center'
  },
  nextArrow: {
    width: 15,
    height: 18
  },
  offerCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
    padding: 20,
    alignItems: 'center',
    marginVertical: 10,
    elevation: 2,
    marginHorizontal: 26,
  },
  offerIcon: {
    width: 100,
    height: 50,
    marginBottom: 10,
    tintColor: colors.appColor,
  },
  offerTitle: {
    fontSize: 18,
    color: colors.appColor,
    fontFamily: Fonts.medium,
    marginBottom: 5,
  },
  offerText: {
    fontSize: 14,
    color: colors.textPrimary2,
    textAlign: 'center',
    fontFamily: Fonts.light
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: colors.appColor,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  joinButton: {
    height: 54,
    backgroundColor: colors.appColor,
    borderRadius: 50,
    marginTop: 24,
    paddingHorizontal: 16,
    width: '65%'
  },
  help: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.black,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginRight: 10,
    height: 54,
    marginTop: 24,
    width: '25%'
  
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    marginVertical: 10
  },
  exploreText: {
    marginLeft: 6,
    color: colors.appColor,
    fontFamily: Fonts.regular,
    fontSize: 15,
    textDecorationLine: 'underline',
    textAlign: 'center'
  },
});

export default PartnerOnboardingScreen;
