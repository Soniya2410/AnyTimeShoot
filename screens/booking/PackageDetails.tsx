import React, { useState } from "react"
import { Image, ScrollView, Text, TouchableOpacity, View, StyleSheet, FlatList } from "react-native"
import { icons } from "../utils/Icons";
import { images } from "../utils/Images";
import { Fonts } from "../utils/Fonts";
import { colors } from "../utils/Colors";
import ProfileDetailSlider from "../components/ProfileDetailSlider";
import { constant } from "../utils/Constant";
import { ReviewItems } from "../Home/components/ReviewItems";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "../../App";

const PackageDetails: React.FC = () => {
const [activeTabIndex, setActiveTabIndex] = useState(0);
 const navigation = useNavigation<RootStackNavigationProp<'bookingList'>>();
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
]
  const IncludesInPackage = [
    { id: 1, image: images.details1, text: 'Raw Images\n1000' },
    { id: 2, image: images.details2, text: 'Edited Images\n250' },
    { id: 3, image: images.details3, text: 'Raw Videos\n2' },
  ];

  const moveToReviewAll = () => {
    navigation.navigate('reviewScreen')
  }

  const renderIncludesInPackage = ({item} : {item: any}) => {
    return (
      <View key={item.id} style={styles.card}>
        <Image source={item.image} style={styles.cardImage} />
        <Text style={styles.cardText}>{item.text}</Text>
      </View>
    )
  }
  return (
    <ScrollView style={styles.container}>
      <View>
      {/* <BookingDetailSlider page={'detail'}/> */}
      {/* Shoot Info */}
      <ProfileDetailSlider />
      <View style={styles.shootInfo}>

        <View style={styles.infoBox}>
        <Text style={styles.infoText}>{'Shoot Duration'}</Text>
        <View style={styles.infoOuterBox}>
          <Image source={icons.timerIcon}  style={styles.icon}/>
          <Text style={styles.infoText}>25 hours</Text>
          </View>
        </View>
        <View style={styles.infoBox}>
        <Text style={styles.infoText}>{'Shoot Venue'}</Text>
        <View style={styles.infoOuterBox}>
          <Image source={icons.ovalLocationIcon} style={styles.icon}/>
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
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.imageRow}
        style={{marginTop: 10}}
        />

      {/* Tabs (only showing Package Details for now) */}
      <View style={styles.tabs}>
        <TouchableOpacity style={activeTabIndex == 0? styles.activeTab : styles.inactiveTab} onPress={() => setActiveTabIndex(0)}>
          <Text style={activeTabIndex == 0? styles.tabText : styles.tabTextInactive}>Package Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={activeTabIndex == 1?  styles.activeTab : styles.inactiveTab} onPress={() => setActiveTabIndex(1)}>
          <Text style={activeTabIndex == 1? styles.tabText : styles.tabTextInactive}>Gears</Text>
        </TouchableOpacity>
        <TouchableOpacity style={activeTabIndex == 2?  styles.activeTab : styles.inactiveTab} onPress={() => setActiveTabIndex(2)}>
          <Text style={activeTabIndex == 2? styles.tabText : styles.tabTextInactive}>Review</Text>
        </TouchableOpacity>
      </View>

      {/* Package Description */}
      {activeTabIndex == 0 && (
      <Text style={styles.packageDescription}>
        Our Wedding Photography Package captures your special day with elegance and artistry. From candid moments to posed portraits, our professional photographers ensure every significant moment is beautifully documented.
      </Text>
      )}

    {activeTabIndex == 1 && (
      <Text style={styles.packageDescription}>
        Our Wedding Photography Package captures your special day with elegance and artistry. From candid moments to posed portraits, our professional photographers ensure every significant moment is beautifully documented.
      </Text>
      )}

    {activeTabIndex == 2 && (
      <View style={{ marginHorizontal: 10}}>
        <TouchableOpacity onPress={()=> {moveToReviewAll()}}>
        <Text style={styles.viewAll}>{constant.view_all}</Text>
        </TouchableOpacity>
      <FlatList
        data={reviews}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => 
          <ReviewItems item={item} />
        }
        contentContainerStyle={{paddingBottom: 10}}
        showsVerticalScrollIndicator={false}
      />
      </View>
      )}


      {/* Image Slider */}
      {activeTabIndex == 0 || activeTabIndex == 1 && (
      <Image
        source={images.stylishMan}
        style={styles.sliderImage}
        resizeMode="cover"
      />
      )}

      {/* Delivery Details */}
      <Text style={styles.sectionTitle}>Delivery Details</Text>
      <Text style={styles.subtitle}>When you will get deliverables</Text>

      {/* Delivery Table */}
      <View style={styles.deliveryTable}>
        <View style={styles.deliveryRow}>
          <Image source={icons.rawDataIcon} />
          <Text style={styles.deliveryText}>Raw Data - Offline - 20 days</Text>
        </View>
        <View style={styles.deliveryRow}>
          <Image source={icons.editRawDataIcon} />
          <Text style={styles.deliveryText}>Edited Data - Cloud sharing - 20 days</Text>
        </View>
      </View>
    </ScrollView>
  )
}

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
    marginHorizontal: 20
  },
  infoText: {
    marginTop: 5,
    fontSize: 12,
    fontFamily : Fonts.regular,
    marginHorizontal: 5
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: Fonts.medium,
    // fontWeight: 'bold',
    color: '#e53935',
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
  cardImage: {
    width: 120,
    height: 150,
    borderRadius: 10,
  },
  cardText: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 12,
    position: 'absolute',
    color: colors.white,
    bottom:0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    padding: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    fontFamily: Fonts.regular,
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
    backgroundColor: '#e53935',
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
  },
  deliveryTable: {
    margin: 20,
  },
  deliveryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
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
    marginVertical:5,
    borderColor: '#ccc'
    },
    viewAll: {
      fontSize: 14,
      color: colors.appColor,
      fontWeight: 'regular',
      textAlign: 'right',
      marginVertical: 10,
      textDecorationLine: 'underline',
    },
});

export default PackageDetails;