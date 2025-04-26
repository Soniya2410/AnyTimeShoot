import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {images} from '../utils/Images';
import {constant} from '../utils/Constant';
import {ASButton} from './components/ASButton';
import {RootStackNavigationProp} from '../../App';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../utils/Colors';
import {Fonts} from '../utils/Fonts';
import BookingDetailSlider from './components/BookingDetailSlider';
import { icons } from '../utils/Icons';
import RateAndReviewComponent from './components/RateAndReviewComponents';

const {width, height} = Dimensions.get('screen');

const TimelineStep = ({
  icon,
  title,
  subtitle,
  isLast,
  status,
}: {
  icon: any;
  title: string;
  subtitle: string;
  isLast: boolean;
  status: 'completed' | 'inProgress' | 'start' | 'workDeliverd';
}) => {
  const getBorderColor = () => {
    switch (status) {
      case 'completed':
        return colors.completedColor; 
      case 'inProgress':
        return colors.inprogressColor; 
      case 'start':
        return colors.appColor
        case 'workDeliverd':
          return colors.appColor
      default:
        return colors.appColor;
    }
  };

  const getTitleColor = () => {
    switch (status) {
      case 'completed':
        return colors.completedColor; 
      case 'inProgress':
        return colors.inprogressColor; 
      case 'start':
        return colors.appColor;
      case 'workDeliverd':
        return colors.appColor;
      default:
        return colors.appColor;
    }
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{alignItems: 'center', width: 40}}>
        <View style={[styles.circle, {borderColor: getBorderColor()}]}>
          <Image source={icon} style={styles.icon} />
        </View>
        {!isLast && <View style={styles.verticalLine} />}
      </View>

      <View style={{flex: 1, paddingLeft: 8}}>
        <Text style={[styles.stepTitle, {color: getTitleColor()}]}>{title}</Text>
        <Text style={styles.stepSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const CompletedBookingDetailScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp<'upcomingbookingDetails'>>();

  const moveToSuccessPopUp = () => {};

  const moveToInvoice = () => {
  navigation.navigate('completedPopup');
  };

  const moveToCancelScree = () => {
   navigation.navigate('cancelledScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[]}
        renderItem={null}
        ListHeaderComponent={
          <>
            <BookingDetailSlider />
            <View style={styles.content}>
              <View style={styles.infoRow}>
                <View style={styles.infoCard}>
                  <Image source={icons.datePicker} style={styles.iconTop}/>
                  <Text style={styles.infoLabel}>
                    {constant.bookingDetails}
                  </Text>
                  <Text style={styles.infoValue}>{constant.date}</Text>
                </View>
                <View style={styles.infoCard}>
                <Image source={icons.priceIcone} style={styles.icon}/>
                  <Text style={styles.infoLabel}>
                    {constant.totalBookingPrice}
                  </Text>
                  <Text style={styles.infoValue}>{constant.count}</Text>
                </View>
              </View>
              <Text style={styles.sectionTitle}>{constant.yourBooking}</Text>
              <View style={styles.timeline}>
                <TimelineStep
                  icon={images.compStartShoot}
                  title={constant.startShoot}
                  subtitle={constant.otpVerification}
                  isLast={false}
                  status='start'
                />
                <TimelineStep
                  icon={images.compShootCompleted}
                  title={constant.shootCompleted}
                  subtitle={constant.photographerWillUploadPhotos}
                  isLast={false}
                  status='completed'
                />
                <TimelineStep
                  icon={images.compInprogress}
                  title={constant.endingInProgress}
                  subtitle={constant.willStartEditingSoon}
                  isLast={false}
                  status='inProgress'
                />
                <TimelineStep
                  icon={images.compWorkDelivered}
                  title={constant.workDelivered}
                  subtitle={constant.photosAreReady}
                  isLast={true}
                  status='workDeliverd'
                />
              </View>

             <RateAndReviewComponent/>
              
            </View>
          </>
        }
        ListFooterComponent={
          <ASButton
            title={constant.generateInvoice}
            customStyle={styles.startShootButton}
            onPress={moveToInvoice}
          />
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  content: {
    paddingHorizontal: 16,
    marginTop: 5,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginTop: 0,
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
  sectionTitle: {
    fontSize: 16,
    fontFamily: Fonts.semiBold,
    color: colors.appColor,
    marginBottom: 10,
  },
  timeline: {
    paddingLeft: 8,
    marginBottom: 20,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    borderColor: colors.appColor,
    borderWidth: 1,
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
  verticalLine: {
    width: 2,
    height: 50,
    backgroundColor: colors.appColor,
    marginTop: -2,
    zIndex: 1,
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

  invoiceButton: {
    borderWidth: 1,
    borderColor: colors.appColor,
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  invoiceButtonText: {
    color: colors.appColor,
    fontSize: 14,
    fontFamily: Fonts.semiBold,
  },
  cancelButton: {
    alignItems: 'center',
    marginBottom: 40,
  },
  cancelButtonText: {
    color: colors.appColor,
    fontSize: 14,
    textDecorationLine: 'underline',
    fontFamily: Fonts.regular,
  },
  startShootButton: {
    backgroundColor: colors.appColor,
    paddingVertical: 14,
    marginHorizontal: 16,
    borderRadius: 25,
    marginBottom: 20,

  },
  startShootButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: Fonts.semiBold,
  },
});

export default CompletedBookingDetailScreen;
