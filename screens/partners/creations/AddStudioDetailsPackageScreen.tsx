import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {constant} from '../../utils/Constant';
import {Fonts} from '../../utils/Fonts';
import {ASButton} from '../../components/ASButton';
import {colors} from '../../utils/Colors';
import {images} from '../../utils/Images';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../../App';
import {FlatList} from 'react-native-gesture-handler';
import { StudioFacilitiesItems } from '../../booking/component/StudioFacilitiesItems';

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

const AddStudioDetailsPackageScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp<'addStudioDetailsPackage'>>();
  const moveToAddStudioDetails = () => {
    navigation.navigate('addSamplePackage');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>{constant.addStudioDetails}</Text>
        <Text style={styles.subTitle}>{constant.giveSomeDetail}</Text>
        <View style={styles.paddingView}>
          <Text style={styles.studioAddress}>{constant.studioAddress}</Text>
          <TextInput
            style={styles.input}
            placeholder={constant.enterAddress}
            placeholderTextColor={colors.lineColor}
          />
          <TouchableOpacity style={styles.locationView}>
            <Image
              source={images.currentLocationIcon}
              style={styles.locationImage}></Image>
            <Text style={styles.locationText}>
              {constant.useMyCurrentLocation}
            </Text>
          </TouchableOpacity>
        </View>

        {/* studio Images */}
        <View style={styles.paddingView}>
          <Text style={styles.studioAddress}>{constant.studioImages}</Text>
          <TouchableOpacity style={styles.fileContainer}>
            <Image source={images.file} style={styles.fileImages} />
            <Text style={styles.fileText}>{constant.chooseAfile}</Text>
            <Text style={styles.fileSubText}>{constant.jpegOrPngFormats}</Text>
          </TouchableOpacity>
        </View>

         {/* Grid list */}
        <View>
          <Text style={styles.studio}>{constant.facilitiesAvailable}</Text>
          <FlatList
            data={studioDetails}
            renderItem={({item, index}) => <StudioFacilitiesItems item={item} />}
            keyExtractor={item => item.id}
            numColumns={3}
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.grid}
          />
        </View>
        </ScrollView>
        <View style={styles.bottomContainer}>
          <ASButton
            customStyle={styles.continueButton}
            title={constant.continue}
            onPress={moveToAddStudioDetails} />
        </View>
      </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: colors.appColor,
    marginRight: 16,
    marginLeft: 16,
    top: 10,
  },
  subTitle: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: colors.textPrimary2,
    marginRight: 16,
    marginLeft: 16,
    top: 10,
  },
  paddingView: {
    marginHorizontal: 16,
  },
  grid: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  locationImage: {
    width: 20,
    height: 20,
  },
  locationView: {
    flexDirection: 'row',
    marginTop: 10,
  },
  locationText: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: colors.appColor,
  },
  studioAddress: {
    fontSize: 15,
    fontFamily: Fonts.medium,
    color: colors.textPrimary2,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.lineColor,
    padding: 10,
    borderRadius: 8,
    height: 45,
    color: colors.appColor,
    fontFamily: Fonts.medium,
    fontSize: 14,
    marginTop: 5,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  fileContainer: {
    borderWidth: 1,
    borderColor: colors.lineColor,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: 10,
  },
  fileImages: {
    width: 34,
    height: 34,
  },
  fileText: {
    fontSize: 14,
    fontFamily: Fonts.medium,
    color: colors.appColor,
    marginTop: 5,
  },
  fileSubText: {
    fontSize: 12,
    fontFamily: Fonts.medium,
    color: colors.lineColor,
  },
  studio: {
    fontSize: 15,
    fontFamily: Fonts.medium,
    color: colors.textPrimary2,
    marginLeft: 16,
    marginTop: 25,
  },
  bottomContainer: {
    paddingBottom: 20
  },
  continueButton: {
  
  },
  label: {
    fontSize: 13,
    color: colors.white,
    fontFamily: Fonts.medium,
    marginTop: 6,
    textAlign: 'left',
  },
 
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 10,
    width: '100%',
  },
  textContainer: {
    flex: 1,
    marginLeft: 8,
  },

  
});

export default AddStudioDetailsPackageScreen;
