import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {images} from '../../utils/Images';
import {constant} from '../../utils/Constant';

const SearchComponents = () => {
  return (
    <View style={styles.searchLocationContainer}>
      <View style={styles.searchInputWrapper}>
        <Image source={images.search} style={styles.searchIcon} />
        <TextInput
          placeholder={constant.search_hint}
          style={styles.searchInput}
        />
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.yourLocation}>{constant.your_location}</Text>
        <View style={styles.locationContainer}>
          <Image source={images.location} style={styles.locationIcon} />
          <Text style={styles.locationText}>{constant.location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'flex-start',
    marginRight: 10,
  },
  yourLocation: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 2,
  },
  searchLocationContainer: {
    flexDirection: 'row',
    // marginHorizontal: 5,
    marginLeft: 16,
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  searchInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingLeft: 16,
    width: '70%',
  },
  searchInput: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    // width: '100%',
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
    width: 16,
    height: 16,
  },
  locationText: {
    fontSize: 16,
    marginLeft: 2,
    // color: 'red',
  },
});

export default SearchComponents;