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

const {width, height} = Dimensions.get('screen');

const TimelineStep = ({
  icon,
  title,
  subtitle,
  isLast,
}: {
  icon: any;
  title: string;
  subtitle: string;
  isLast: boolean;
}) => {
  return (
    <View style={{flexDirection: 'row', marginBottom: 20}}>
      <View style={{alignItems: 'center', width: 40}}>
        <View style={styles.circle}>
          <Image source={icon} style={styles.icon} />
        </View>
        {!isLast && <View style={styles.verticalLine} />}
      </View>

      <View style={{flex: 1, paddingLeft: 8}}>
        <Text style={styles.stepTitle}>{title}</Text>
        <Text style={styles.stepSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const BookingDetailScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp<'bookingDetails'>>();

  const moveToSuccessPopUp = () => {};

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
                  <Text style={styles.infoLabel}>
                    {constant.bookingDetails}
                  </Text>
                  <Text style={styles.infoValue}>{constant.date}</Text>
                </View>
                <View style={styles.infoCard}>
                  <Text style={styles.infoLabel}>
                    {constant.totalBookingPrice}
                  </Text>
                  <Text style={styles.infoValue}>{constant.count}</Text>
                </View>
              </View>

              <Text style={styles.sectionTitle}>{constant.yourBooking}</Text>

              <View style={styles.timeline}>
                <TimelineStep
                  icon={images.startShoot}
                  title={constant.startShoot}
                  subtitle={constant.otpVerification}
                  isLast={false}
                />
                <TimelineStep
                  icon={images.shootCompleted}
                  title={constant.shootCompleted}
                  subtitle={constant.photographerWillUploadPhotos}
                  isLast={false}
                />
                <TimelineStep
                  icon={images.editInProgress}
                  title={constant.endingInProgress}
                  subtitle={constant.willStartEditingSoon}
                  isLast={false}
                />
                <TimelineStep
                  icon={images.workDelivered}
                  title={constant.workDelivered}
                  subtitle={constant.photosAreReady}
                  isLast={true}
                />
              </View>

              <TouchableOpacity style={styles.invoiceButton}>
                <Text style={styles.invoiceButtonText}>
                  {constant.getInvoice}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cancelButton}>
                <Text style={styles.cancelButtonText}>
                  {constant.requestCancellation}
                </Text>
              </TouchableOpacity>
            </View>
          </>
        }
        ListFooterComponent={
          <ASButton
            title={constant.startShoot}
            customStyle={styles.startShootButton}
            onPress={moveToSuccessPopUp}
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
    borderColor: colors.borderColor,
    borderWidth: 1,
  },
  icon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  verticalLine: {
    width: 2,
    height: 40,
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

export default BookingDetailScreen;
