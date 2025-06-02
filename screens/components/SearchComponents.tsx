import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {images} from '../utils/Images';
import {constant} from '../utils/Constant';
import { icons } from '../utils/Icons';
import { colors } from '../utils/Colors';
import { Fonts } from '../utils/Fonts';
import { useState } from 'react';
import { FilterBottomSheet } from '../partners/creations/FilterBottomSheet';

const SearchComponents = (props : any) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const notificationPage = () => {
    props.navigation.navigate('notificationList')
  }

  const wishListPage = () => {
    props.navigation.navigate('wishlist')
  }

  const openFilterModal = () => {
    setIsFilterVisible(true);
  };

  const applyFilters = () => {
    setIsFilterVisible(false);
  };

  return (
    <View>
    <View style={styles.searchLocationContainer}>
      <View style={styles.searchInputWrapper}>
        <Image source={images.search} style={styles.searchIcon} />
        <TextInput
          placeholder={constant.search_hint}
          style={styles.searchInput}
        />
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => notificationPage()}>
          <Image source={icons.bellIcon} style={styles.icon}/>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.iconContainer} onPress={()=> wishListPage()}> */}
        <TouchableOpacity style={styles.iconContainer} onPress={openFilterModal}>
          <Image source={icons.heartIcon}  style={styles.heartIcon}/>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.iconContainer}>
          <Image source={icons.cartIcon} style={styles.icon}/>
        </TouchableOpacity> */}
      </View>
    </View>
     <View style={styles.wrapper}>
        <View style={styles.locationContainer}>
          <Image source={images.location} style={styles.locationIcon} />
          <Text style={styles.locationText}>{constant.location}
          </Text>
          <TouchableOpacity style={styles.changeTextView}><Text style={styles.changeText}> Change</Text>
          </TouchableOpacity>
        </View>
      </View>
    <FilterBottomSheet  
       visible={isFilterVisible}
        onClose={() => setIsFilterVisible(false)}
        onApply={applyFilters}/>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'flex-start',
    marginHorizontal: 16,
    marginBottom: 10,
  },
  yourLocation: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 2,
  },
  searchLocationContainer: {
    flexDirection: 'row',
    marginLeft: 16,
    marginBottom: 5,
    justifyContent: 'space-between',
  },
  searchInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#f2f2f2',
    borderRadius: 8,
    borderColor: '#f2f2f2',
    borderWidth: 1,
    paddingLeft: 10,
    width: '80%',
  },
  searchInput: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: colors.black,
    fontFamily: Fonts.medium
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: 'gray',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
  locationIcon: {
    width: 15,
    height: 15,
  },
  locationText: {
    fontSize: 12,
    marginLeft: 2,
  },
  iconsContainer: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginRight: 5
    // gap: 15,
  },
  icon: {
    width: 25,
    height: 25,
  },
  heartIcon: {
    width: 20,
    height: 18,
  },
  iconContainer: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2
  },
  changeText: {
    fontSize: 12,
    color: colors.appColor,
    marginHorizontal: 5,
    textAlign: 'center',
    fontFamily: Fonts.regular,
  },
  changeTextView: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default SearchComponents;