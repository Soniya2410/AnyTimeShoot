import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {images} from '../utils/Images';
import {constant} from '../utils/Constant';
import {ASButton} from '../components/ASButton';
import {RootStackNavigationProp} from '../../App';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../utils/Colors';
import {Fonts} from '../utils/Fonts';
import BookingDetailSlider from '../components/ProfileDetailSlider';
import {icons} from '../utils/Icons';
import { TimelineStep } from './component/TimelineStep';

const {width} = Dimensions.get('screen');



const UpcomingEditingInprogressScreen: React.FC = () => {
  const navigation =
    useNavigation<RootStackNavigationProp<'upcomingEditingInprogress'>>();

  const moveToInvoice = () => {
    navigation.navigate('successCreation');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      {/* <FlatList
        data={[]}
        renderItem={null}
        contentContainerStyle={styles.flatListContainer}
        ListHeaderComponent={
          <> */}
            <BookingDetailSlider />
            <View style={styles.content}>
              <View style={styles.infoRow}>
                <View style={styles.infoCard}>
                  <Image source={icons.datePicker} style={styles.iconTop} />
                  <Text style={styles.infoLabel}>
                    {constant.bookingDetails}
                  </Text>
                  <Text style={styles.infoValue}>{constant.date}</Text>
                </View>
                <View style={styles.infoCard}>
                  <Image source={icons.priceIcone} style={styles.icon} />
                  <Text style={styles.infoLabel}>
                    {constant.totalBookingPrice}
                  </Text>
                  <Text style={styles.infoValue}>{constant.count}</Text>
                </View>
              </View>
               <View style={{position:'relative'}}>
                  <Image
                    source={images.bgInprogress}
                    resizeMode="contain"
                    style={{
                      width: '100%',
                      height: 200,
                      justifyContent:'center',
                      marginTop: 50,
                      alignSelf: 'center',
                      position:'absolute'
                    }}
                  />

              {/* <ImageBackground
                source={images.bgInprogress}
                resizeMode="contain"
                style={styles.imageBackground}> */}
                <View style={styles.timelineContent}>
                  <Text style={styles.sectionTitle}>
                    {constant.yourBooking}
                  </Text>
                  <View style={styles.timeline}>
                    <TimelineStep
                      icon={images.compStartShoot}
                      title={constant.startShoot}
                      subtitle={constant.otpVerification}
                      isLast={false}
                      status="start"
                    />
                    <TimelineStep
                      icon={images.compShootCompleted}
                      title={constant.shootCompleted}
                      subtitle={constant.photographerWillUploadPhotos}
                      isLast={false}
                      status="completed"
                    />
                    <TimelineStep
                      icon={images.compInprogress}
                      title={constant.endingInProgress}
                      subtitle={constant.willStartEditingSoon}
                      isLast={false}
                      status="inProgress"
                    />
                    <TimelineStep
                      icon={images.workDelivered}
                      title={constant.workDelivered}
                      subtitle={constant.photosAreReady}
                      isLast={true}
                      status="workDeliverd"
                    />
                  </View>
                </View>
                </View>
              {/* </ImageBackground> */}
            </View>
          {/* </>
        }
        ListFooterComponent={ */}
          {/* <ASButton
            title={constant.generateInvoice}
            customStyle={styles.startShootButton}
            onPress={moveToInvoice}
            textStyle={styles.startShootButtonText}
          /> */}
        {/* }
      /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  flatListContainer: {
    flexGrow: 1,
  },
  content: {
    paddingHorizontal: 0,
    marginTop: 5,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginTop: 0,
    paddingHorizontal: 16,
  },
  infoCard: {
    width: '48%',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.borderColor,
    backgroundColor: colors.white,
  },
  infoLabel: {
    fontSize: 10,
    color: colors.black,
    fontFamily: Fonts.semiBold,
  },
  infoValue: {
    fontSize: 20,
    fontFamily: Fonts.medium,
    color: colors.appColor,
    marginTop: 4,
  },
  imageBackground: {
    width: '100%',
    marginBottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  timelineContent: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: Fonts.semiBold,
    color: colors.appColor,
    marginBottom: 10,
  },
  timeline: {
    paddingLeft: 8,
  },
  
  icon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  iconTop: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  stepTitle: {
    fontSize: 14,
    fontFamily: Fonts.semiBold,
    color: colors.black,
  },
  stepSubtitle: {
    fontSize: 12,
    fontFamily: Fonts.regular,
    color: colors.placeHolderColor,
  },
  startShootButton: {
    marginTop: 20,
    backgroundColor: colors.white,
    paddingVertical: 14,
    marginHorizontal: 16,
    borderRadius: 10,
    marginBottom: 20,
    borderColor: colors.appColor,
    borderWidth: 2,
  },
  startShootButtonText: {
    color: colors.appColor,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: Fonts.semiBold,
  },
});

export default UpcomingEditingInprogressScreen;
