import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {icons} from '../utils/Icons';
import {images} from '../utils/Images';
import {Fonts} from '../utils/Fonts';
import {colors} from '../utils/Colors';
import ProfileDetailSlider from '../components/ProfileDetailSlider';
import {constant} from '../utils/Constant';
import {ReviewItems} from '../home/components/ReviewItems';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../App';
import RecommendedCard from '../components/RecommendedCard';
import { StudioFacilitiesItems } from './component/StudioFacilitiesItems';
import { ASButton } from '../components/ASButton';

const PackageDetails: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const navigation = useNavigation<RootStackNavigationProp<'bookingList'>>();

  const studioDetails = [
    {
      id: '1',
      title: constant.changingRoom,
      image: images.changingRoom,
      desc: constant.facilitiesInclude,
    },
    {
      id: '2',
      title: constant.washRoom,
      image: images.washroom,
      desc: constant.facilitiesInclude,
    },
    {
      id: '3',
      title: constant.airConditioning,
      image: images.airConditioning,
      desc: constant.facilitiesInclude,
    },
    {
      id: '4',
      title: constant.freeParking,
      image: images.freeParking,
      desc: constant.facilitiesInclude,
    },
    {
      id: '5',
      title: constant.makeupArtisit,
      image: images.makeupArtist,
      desc: constant.facilitiesInclude,
    },
    {
      id: '6',
      title: constant.backdrops,
      image: images.backDrops,
      desc: constant.facilitiesInclude,
    },
    {
      id: '7',
      title: constant.soundproofArea,
      image: images.soundproofArea,
      desc: constant.facilitiesInclude,
    },
    {
      id: '8',
      title: constant.props,
      image: images.props,
      desc: constant.facilitiesInclude,
    },
    {
      id: '9',
      title: constant.wardrobe,
      image: images.wardrobe,
      desc: constant.facilitiesInclude,
    },
  ];
  
  const reviews = [
    {
      id: '1',
      name: 'Mark Kenji',
      date: '12 Jun 2024',
      rating: 5,
      review:
        'The app offers a seamless and intuitive user experience with its clean design. Features are well-organized and cater to all needs effectively...',
      avatar: images.profileImage,
    },
    {
      id: '2',
      name: 'Mark Kenji',
      date: '12 Jun 2024',
      rating: 4,
      review:
        'The app offers a seamless and intuitive user experience with its clean design. Features are well-organized and cater to all needs effectively...',
      avatar: images.profileImage,
    },
  ];
  const IncludesInPackage = [
    {id: 1, image: images.details1, text: 'Raw Images\n1000'},
    {id: 2, image: images.details2, text: 'Edited Images\n250'},
    {id: 3, image: images.details3, text: 'Raw Videos\n2'},
  ];

  const ExtraPerks = [
    {id: 1, image: images.details1, text: 'Fast Past Production'},
    {id: 2, image: images.details2, text: 'Door Step Shoot'},
    {id: 3, image: images.details3, text: 'Easy Cancellation'},
  ];

  const recommended = [
    {
      id: '1',
      title: 'Wedding Xperts',
      description: 'Wedding Shoot:  5 Days',
      price: '2,00,000/-',
      offerPrice: '1,80,000/-',
      image: images.wedding,
      rating: 4.5,
      liked: false,
      offerText: 'Limited Offer',
    },
    {
      id: '2',
      title: 'Maternity Shoot',
      description: 'Wedding Shoot:  5 Days',
      price: '10,000/-',
      offerPrice: '8,000/-',
      image: images.baby1,
      rating: 4.7,
      liked: false,
      offerText: 'Limited Offer',
    },
    {
      id: '3',
      title: 'Pre-Wedding Shoot',
      description: 'Wedding Shoot:  5 Days',
      price: '1,00,000/-',
      offerPrice: '90,000/-',
      image: images.marragie1,
      rating: 4,
      liked: false,
      offerText: 'Limited Offer',
    },
  ];

  const gearList = [
    {id: 1, name: "Primary Camera", count : 5, image: images.camera},
    {id: 2, name: "Light Reflectors", count : 5, image: images.cameraFront},
    {id: 3, name: "Mobile Device", count : 5, image: images.mobile},
    {id: 4, name: "Primary Camera", count : 5, image: images.camera},
    {id: 5, name: "Primary Camera", count : 5, image: images.cameraFront},
  ]
  const moveToBookNow = () => {

  }

  const [recommendedList, setRecommendedList] = useState(recommended);
  const toggleLike = (id: string) => {
    const updatedList = recommendedList.map(item =>
      item.id === id ? {...item, liked: !item.liked} : item,
    );
    setRecommendedList(updatedList);
  };

  const moveToReviewAll = () => {
    navigation.navigate('reviewScreen');
  };

  const formatData = (data: any[], numColumns: number) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;

  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ id: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

  const renderIncludesInPackage = ({item}: {item: any}) => {
    return (
      <View key={item.id} style={styles.card}>
        <Image source={item.image} style={styles.cardImage} />
        <Text style={styles.cardText}>{item.text}</Text>
      </View>
    );
  };

  const renderExtraPerks = ({item}: {item: any}) => {
    return (
      <View key={item.id} style={styles.Extracard}>
        <Image source={item.image} style={styles.ExtracardImage} />
        <Text style={styles.cardText}>{item.text}</Text>
      </View>
    );
  };

  const renderGearItems = ({item}: {item: any}) => {
    return (
      <View key={item.id} style={styles.Gearcard}>
        <Image source={item.image} style={styles.GearcardImage} />
        <View  style={styles.cardText}>
        <Text style={styles.gearText}>{item.name}</Text>
        <Text style={styles.gearText}>{item.count}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <View>
        {/* Shoot Info */}
        <ProfileDetailSlider />
        <View style={styles.shootInfo}>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>{'Shoot Duration'}</Text>
            <View style={styles.infoOuterBox}>
              <Image source={icons.timerIcon} style={styles.icon} />
              <Text style={styles.infoText}>25 hours</Text>
            </View>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>{'Shoot Venue'}</Text>
            <View style={styles.infoOuterBox}>
              <Image source={icons.ovalLocationIcon} style={styles.icon} />
              <Text style={styles.infoText}>Your Location</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Includes in Package */}
      <Text style={styles.sectionTitle}>{constant.includeInPackage}</Text>
      <FlatList
        renderItem={renderIncludesInPackage}
        data={IncludesInPackage}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.imageRow}
        style={{marginTop: 10}}
      />

      {/* Tabs (only showing Package Details for now) */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={activeTabIndex == 0 ? styles.activeTab : styles.inactiveTab}
          onPress={() => setActiveTabIndex(0)}>
          <Text
            style={
              activeTabIndex == 0 ? styles.tabText : styles.tabTextInactive
            }>
            Package Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={activeTabIndex == 1 ? styles.activeTab : styles.inactiveTab}
          onPress={() => setActiveTabIndex(1)}>
          <Text
            style={
              activeTabIndex == 1 ? styles.tabText : styles.tabTextInactive
            }>
            Gears
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={activeTabIndex == 2 ? styles.activeTab : styles.inactiveTab}
          onPress={() => setActiveTabIndex(2)}>
          <Text
            style={
              activeTabIndex == 2 ? styles.tabText : styles.tabTextInactive
            }>
            Review
          </Text>
        </TouchableOpacity>
      </View>

      {/* Package Description */}
      {activeTabIndex == 0 && (
        <Text style={styles.packageDescription}>
          Our Wedding Photography Package captures your special day with
          elegance and artistry. From candid moments to posed portraits, our
          professional photographers ensure every significant moment is
          beautifully documented.
        </Text>
      )}

      {activeTabIndex == 1 && (
        <View>
           <FlatList
            renderItem={renderGearItems}
            data={gearList}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.imageRow}
            style={{marginVertical: 10, }}
          />
        </View>
        // <Text style={styles.packageDescription}>
        //   Our Wedding Photography Package captures your special day with
        //   elegance and artistry. From candid moments to posed portraits, our
        //   professional photographers ensure every significant moment is
        //   beautifully documented.
        // </Text>
      )}

      {activeTabIndex == 2 && (
        <View style={{marginHorizontal: 10}}>
          <TouchableOpacity
            onPress={() => {
              moveToReviewAll();
            }}>
            <Text style={styles.viewAll}>{constant.view_all}</Text>
          </TouchableOpacity>
          <FlatList
            data={reviews}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => <ReviewItems item={item} />}
            contentContainerStyle={{paddingBottom: 10}}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}

      {/* Image Slider */}
      {activeTabIndex == 0 ||
        (activeTabIndex == 1 && (
          <Image
            source={images.stylishMan}
            style={styles.sliderImage}
            resizeMode="cover"
          />
        ))}

      {/* Delivery Details */}
      <Text style={styles.sectionTitle}>{constant.deliveryDetails}</Text>
      <Text style={styles.subtitle}>{constant.whenYouWillGetDeliverables}</Text>

      {/* Delivery Table */}
      <View style={styles.table}>
        {/* Table Header */}
        <View style={styles.tableRowHeader}>
          <View style={[styles.tableHeaderCell]}></View>
          <Text style={[styles.tableHeaderCell]}>Item</Text>
          <Text style={styles.tableHeaderCell}>{constant.deliveryMode}</Text>
          <Text style={styles.tableHeaderCell}>{constant.timelineAftershoot}</Text>
        </View>

        {/* Row 1 */}
        <View style={styles.tableRow}>
          {/* <View
            style={[
              styles.tableCell,
              {flex: 2, flexDirection: 'row', alignItems: 'center'},
            ]}> */}
            <Image source={icons.rawDataIcon} style={styles.iconTable} />
            <View style={styles.line}></View>
            <Text style={styles.cellText}>{constant.rawData}</Text>
            <View style={styles.line}></View>
          {/* </View> */}
          <Text style={styles.tableCell}>{constant.offline}</Text>
          <View style={styles.line}></View>
          <Text style={styles.tableCell}>20 days</Text>
        </View>

        {/* Row 2 */}
        <View style={styles.tableRow}>
          {/* <View
            style={[
              styles.tableCell,
              {flex: 2, flexDirection: 'row', alignItems: 'center'},
            ]}> */}
            <Image source={icons.editRawDataIcon} style={styles.iconTable} />
            <View style={styles.line}></View>
            <Text style={styles.cellText}>{constant.editedData}</Text>
          {/* </View> */}
          <View style={styles.line}></View>
          <Text style={styles.tableCell}>{constant.cloudSharing}</Text>
          <View style={styles.line}></View>
          <Text style={styles.tableCell}>20 days</Text>
        </View>
      </View>
      <View>
      <Text style={styles.studioImages}>{constant.studioImages}</Text>
          <Text style={styles.studio}>{constant.facilitiesAvailable}</Text>
          <FlatList
            data={formatData(studioDetails,3)}
            renderItem={({item, index}) => <StudioFacilitiesItems item={item} />}
            keyExtractor={item => item.id}
            numColumns={3}
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.grid}
          />
        </View>
      <View>
      <Text style={styles.recommendedTitle}>{constant.extraPerks}</Text>
      <Text style={styles.subTitle}>{constant.extraPerksIncluded}</Text>
      <FlatList
        renderItem={renderExtraPerks}
        data={ExtraPerks}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.imageRow}
        style={{marginTop: 10}}
      />
      </View>

      <View style={styles.recommendedHeader}>
        <Text style={styles.recommendedTitle}>{constant.similarPackage}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('packageList', {
              title: 'Similar Packages',
              data: recommendedList,
            });
          }}>
          <Text style={styles.viewAll}>{constant.view_all}</Text>
        </TouchableOpacity>
      </View>

      <View style={{marginHorizontal: 5}}>
        <FlatList
          data={recommendedList}
          renderItem={({item}) => (
            <RecommendedCard item={item} onLike={toggleLike} cardSize={280} />
          )}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 15}}
        />
      </View>

      
        <Text style={styles.recommendedTitle}>{constant.bookingStats}</Text>
        <View style={styles.statsRow}>
        {/* Total Bookings Card */}
        <View style={styles.statscard}>
          <Text style={styles.cardTitle}>Total bookings</Text>
          <Text style={styles.bigNumber}>500</Text>
          <Text style={styles.subText}>+30 from last month</Text>
        </View>

        {/* Average Rating Card */}
        <View style={styles.statscard}>
          <Text style={styles.cardTitle}>Average Rating</Text>
          <View style={styles.ratingRow}>
            {/* <Icon name="star" size={20} color="#f5b50a" /> */}
            <Text style={styles.bigNumber}>4.2</Text>
          </View>
        </View>
      </View>
        <View style={{ height: 50}}></View>
       
    </ScrollView>
    <View style={styles.bottomBar}>
        <Text style={styles.priceText}>{constant.reviewPrice}</Text>
        <ASButton
          title={constant.bookNow}
          customStyle={styles.bookButton}
          textStyle={styles.bookButtonText}
          onPress={moveToBookNow}
        />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  shootInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  infoBox: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  infoText: {
    marginTop: 5,
    fontSize: 12,
    fontFamily: Fonts.regular,
    marginHorizontal: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: Fonts.medium,
    // fontWeight: 'bold',
    color: colors.appColor,
    marginHorizontal: 15,
    marginTop: 20,
  },
  imageRow: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  card: {
    width: 120,
    marginRight: 15,
    alignItems: 'center',
    position: 'relative',
  },
  Gearcard: {
    width: 120,
    height: 120,
    marginRight: 15,
    alignItems: 'center',
    position: 'relative',
    backgroundColor: colors.appColor30
  },
  Extracard: {
    width: 180,
    marginRight: 15,
    alignItems: 'center',
    position: 'relative',
  },
  line : {
    backgroundColor: '#ccc',
    height: '100%',
    width: 1
  }, 
  cardImage: {
    width: 120,
    height: 150,
    borderRadius: 10,
  },
  GearcardImage: {
    width: 70,
    height: 70,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10,
    marginTop: 5
  },
  ExtracardImage: {
    width: 180,
    height: 180,
    borderRadius: 10,
  },
  cardText: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 12,
    position: 'absolute',
    color: colors.white,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    padding: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    fontFamily: Fonts.regular,
  },
  gearText: {
    fontFamily: Fonts.regular,
    color: colors.white,
    fontSize: 12,
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center'

  },
  tabs: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 5,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  activeTab: {
    backgroundColor: colors.appColor,
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: 5,
    padding: 5,
  },
  inactiveTab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    padding: 15,
  },
  tabText: {
    color: '#fff',
    fontFamily: Fonts.semiBold,
  },
  tabTextInactive: {
    color: '#333',
    fontFamily: Fonts.semiBold,
  },
  packageDescription: {
    marginHorizontal: 20,
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 20,
    color: '#555',
  },
  sliderImage: {
    width: '95%',
    height: 200,
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  subtitle: {
    marginLeft: 20,
    fontSize: 16,
    color: '#888',
    fontFamily: Fonts.regular,
  },
  deliveryTable: {
    margin: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.textPrimary2,
  },
  deliveryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  deliveryText: {
    marginLeft: 10,
    fontSize: 16,
  },
  icon: {
    width: 18,
    height: 20,
  },
  infoOuterBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 1,
    padding: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderColor: '#ccc',
  },
  viewAll: {
    fontSize: 14,
    color: colors.appColor,
    fontWeight: 'regular',
    textAlign: 'right',
    marginVertical: 10,
    textDecorationLine: 'underline',
  },
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
  },
  tableRowHeader: {
    flexDirection: 'row',
    backgroundColor: '#ddd',
    paddingVertical: 10,
  },
  tableHeaderCell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
    fontFamily: Fonts.medium,
    color: colors.appColor,
  },
  tableRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  tableCell: {
    flex: 1,
    // padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    fontFamily: Fonts.regular,
    justifyContent: 'center',
    textAlign: 'center',
  },
  iconTable: {
    width: 20,
    height: 20,
    marginRight: 8,
    justifyContent: 'center',
    alignContent: 'center',
    resizeMode: 'contain',
    marginHorizontal: 10,
    marginVertical: 10

  },
  cellText: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    marginVertical: 10,
    marginHorizontal: 10,
    width: 110
  },
  recommendedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  recommendedTitle: {
    fontSize: 16,
    // fontWeight: '600',
    fontFamily: Fonts.medium,
    marginVertical: 5,
    marginLeft: 10,
    marginRight: 10,
    
    color: colors.appColor,
    marginTop: 15,
  },
  subTitle: {
    fontSize: 13,
    fontFamily: Fonts.regular,
    marginLeft: 10,
    color: colors.textPrimary2,
  },
  studioImages : {
    fontSize: 16,
    fontFamily: Fonts.medium,
    marginLeft: 16,
    color: colors.appColor,
    marginTop: 10,
  },
  studio: {
    fontSize: 15,
    fontFamily: Fonts.regular,
    color: colors.textPrimary2,
    marginLeft: 16,
    marginTop: 5,
  },
  grid: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: colors.borderColor,
  },
  priceText: {
    fontSize: 20,
    fontFamily: Fonts.semiBold,
    color: colors.appColor,
  },
  bookButton: {
    backgroundColor: colors.appColor,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  bookButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: Fonts.semiBold,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: colors.textPrimary2,
  },
  bigNumber: {
    fontSize: 24,
    fontFamily: Fonts.semiBold,
    marginTop: 4,
  },
  subText: {
    fontSize: 13,
    color: colors.textPrimary2,
    fontFamily: Fonts.regular,
    marginTop: 2,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    gap: 5,
  },
  statscard: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    marginRight: 8,
  },
});

export default PackageDetails;
