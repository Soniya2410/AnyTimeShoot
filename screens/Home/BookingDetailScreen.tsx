import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  ScrollView,
  FlatList,
  Image
} from 'react-native';
import {Calendar, Agenda} from 'react-native-calendars';
import {useNavigation} from '@react-navigation/native';
import ProfileDetailSlider from '../components/ProfileDetailSlider';
import {RootStackNavigationProp} from '../../App';
import {constant} from '../utils/Constant';
import {colors} from '../utils/Colors';
import {Fonts} from '../utils/Fonts';
import {ASButton} from '../components/ASButton';
import { CouponOffersItem } from './components/CouponOffersItem';
import { images } from '../utils/Images';
import { icons } from '../utils/Icons';

const BookingDetailScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp<'bookingDetail'>>();
  const [selectedDate, setSelectedDate] = useState<string>('2025-08-17');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<'month' | 'year' | null>(
    null,
  );
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selected, setSelected] = useState('2025-08-17');
  const [showCalendar, setShowCalendar] = useState(true);

  const couponData = [
  {
    id: '1',
    name: 'Robert Nelson',
    role: 'Photographer',
    offer: 'Get 20% off on booking photographers for a minimum purchase of ₹2,45,000/-',
    startDate: 'Mon 20',
    endDate: 'Sun 29',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: '2',
    name: 'Robert Nelson',
    role: 'Photographer',
    offer: 'Get 20% off on booking photographers for a minimum purchase of ₹2,45,000/-',
    startDate: 'Mon 20',
    endDate: 'Sun 29',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: '3',
    name: 'Robert Nelson',
    role: 'Photographer',
    offer: 'Get 20% off on booking photographers for a minimum purchase of ₹2,45,000/-',
    startDate: 'Mon 20',
    endDate: 'Sun 29',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
];
const ratingData = [
    { stars: 5, width: '85%' },
    { stars: 4, width: '60%' },
    { stars: 3, width: '45%' },
    { stars: 2, width: '25%' },
    { stars: 1, width: '10%' },
  ];
  const handleDayPress = (day: any) => {
    setSelectedDate(day.dateString);
    setActiveDropdown(null);
  };

  const changeMonth = (monthIndex: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(monthIndex);
    setCurrentDate(newDate);
    setActiveDropdown(null);
  };

  const changeYear = (year: number) => {
    const newDate = new Date(currentDate);
    newDate.setFullYear(year);
    setCurrentDate(newDate);
    setActiveDropdown(null);
  };

  const changeViewBasedOnSelection = useCallback(() => {
    setShowCalendar(false);
  }, []);

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + (direction === 'next' ? 1 : -1));
    setCurrentDate(newDate);
  };

  const navigateYear = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    newDate.setFullYear(
      currentDate.getFullYear() + (direction === 'next' ? 1 : -1),
    );
    setCurrentDate(newDate);
  };

  const callScreen = useCallback((screenName : any) => {
    navigation.navigate(screenName)
  },[])

  const formatMonthYear = (date: Date) => {
    return {
      month: date.toLocaleString('default', {month: 'long'}),
      year: date.getFullYear(),
    };
  };

  const {month, year} = formatMonthYear(currentDate);

  // Generate month/year options
  const months = Array.from({length: 12}, (_, i) => ({
    name: new Date(currentDate.getFullYear(), i, 1).toLocaleString('default', {
      month: 'long',
    }),
    value: i,
  }));

  const PricingView = () => {
    return(
      <View>
      <Text style={styles.sectionTitle}>Pricing breakdown</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Package Price</Text>
        <Text style={styles.value}>₹1,50,000</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Platform Fee</Text>
        <Text style={styles.value}>₹1500</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>GST(18%)</Text>
        <Text style={styles.value}>₹2700</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Coupon</Text>
        <Text style={styles.value}>₹1500</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Grand Total</Text>
        <Text style={styles.value}>₹19200</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.label, { fontWeight: 'bold' }]}>Total Price(After Discount)</Text>
        <Text style={[styles.value, styles.total]}>₹2,45,000</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      <Text style={styles.sectionTitle}>Coupons and Offers</Text>
     <TouchableOpacity onPress={() => {navigation.navigate('couponScreen')}}>
      <Text style={{ color: colors.appColor, textDecorationLine: 'underline', fontFamily: Fonts.regular}}>5 offers</Text>
      </TouchableOpacity>
      </View>
      <FlatList
          data={couponData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CouponOffersItem item={item} />
          )}
        />
{/* Reviews Section */}
        <Text style={styles.reviewsTitle}>Reviews</Text>
        <View style={styles.reviewsContainer}>
          <View style={styles.reviewBars}>
            {ratingData.map((item, index) => (
              <View key={index} style={styles.starRow}>
                <Text>{item.stars} ⭐</Text>
                <View style={styles.barBackground}>
                  <View style={[styles.barFill ]} />
                </View>
              </View>
            ))}
          </View>
          <View style={styles.reviewScoreContainer}>
            <Text style={styles.reviewScore}>4.8</Text>
            <Text style={styles.viewAll}>View all reviews</Text>
          </View>
        </View>

        {/* Policy Cards */}
        <TouchableOpacity style={styles.card} onPress={() => callScreen("cancellationPolicy")}>
          <Image source={images.cancellationBooking} style={styles.icon} />
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>Cancellation policy</Text>
            <Text style={styles.cardSubtitle}>By proceeding, you agree to our policy</Text>
          </View>
          <Image source={icons.nextArrowIcon} style={styles.arrowIcon}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => callScreen('couponScreen')}>
          <Image source={images.coupounsBooking} style={styles.icon} />
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>Coupon applied</Text>
            <Text style={styles.cardSubtitle}>You’re saving ₹1500</Text>
          </View>
          <Image source={icons.nextArrowIcon} style={styles.arrowIcon}/>
        </TouchableOpacity>

        <View style={styles.card}>
          <Image source={images.special} style={styles.icon} />
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>Special Instructions</Text>
            <Text style={styles.cardSubtitle}>Add a note for photographer</Text>
          </View>
          <Image source={icons.nextArrowIcon} style={styles.arrowIcon}/>
        </View>
     

      {/* Bottom Booking Bar */}
     
      </View>
    )
  }
  const CalendarView = React.memo(({ selected, setSelected }: any) => {
  return (
    <View style={styles.calendarWrapper}>
      <Calendar
        style={{
          borderWidth: 1,
          borderColor: colors.appColor,
          borderRadius: 5,
          marginVertical: 10,
        }}
        current={selected}
        onDayPress={day => setSelected(day.dateString)}
        markedDates={{
          [selected]: { selected: true, selectedColor: colors.appColor },
        }}
        theme={{
          backgroundColor: '#F8D0D0',
          calendarBackground: '#F8D0D0',
          textSectionTitleColor: '#333',
          selectedDayBackgroundColor: colors.appColor,
          selectedDayTextColor: '#fff',
          todayTextColor: colors.appColor,
          dayTextColor: '#000',
          textDisabledColor: '#d9e1e8',
          arrowColor: colors.appColor,
          monthTextColor: colors.appColor,
          indicatorColor: colors.appColor,
          textDayFontFamily: Fonts.bold,
          textMonthFontFamily: Fonts.medium,
          textDayHeaderFontFamily: Fonts.semiBold,
          textDayFontWeight: '600',
          textDayFontSize: 12,
          textMonthFontSize: 20,
          textDayHeaderFontSize: 12,
        }}
      />
      <ASButton title="Apply" onPress={changeViewBasedOnSelection} />
    </View>
  );
});

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ marginBottom: 80}}>
        <ProfileDetailSlider />
        <View style={styles.calContainer}>
          <Text style={styles.title}>{constant.sheduledShoot}</Text>
          <Text style={styles.subtitle}>
            {new Date(selectedDate).toDateString()}
          </Text>
          <TouchableOpacity
            style={styles.selector}
            onPress={changeViewBasedOnSelection}>
            <Text style={styles.selectorText}>Date</Text>
          </TouchableOpacity>
         {showCalendar ? (
          <CalendarView selected={selected} setSelected={setSelected} />
      ) : null}
  {!showCalendar ? <PricingView /> : null}
        </View>
       
      </ScrollView>
        <View style={styles.bottomBar}>
        <Text style={styles.price}>₹ 2,45,000</Text>
        <TouchableOpacity style={styles.bookNowBtn}>
        <Text style={styles.bookNowText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  calContainer: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 15,
    fontFamily: Fonts.medium,
    color: colors.appColor,
  },
  subtitle: {
    marginTop: 5,
    fontSize: 16,
  },
  selector: {
    marginTop: 20,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: colors.appColor,
  },
  selectorText: {
    color: colors.white,
    fontSize: 16,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  bottomSheet: {
    height: 500,
    backgroundColor: colors.calendarBackground,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 15,
    elevation: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  monthControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  yearControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectorButton: {
    paddingHorizontal: 8,
  },
  arrow: {
    fontSize: 18,
    color: colors.appColor,
    marginHorizontal: 5,
  },
  headerText: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    color: colors.appColor,
  },
  calendarWrapper: {
    position: 'relative',
    flex: 1,
  },
  overlayDropdown: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: 'clear',
    borderRadius: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  dropdownContainer: {
    maxHeight: 300,
  },
  dropdownContent: {
    padding: 8,
  },
  dropdownItem: {
    padding: 12,
    borderRadius: 6,
    marginVertical: 2,
  },
  selectedItem: {
    backgroundColor: colors.appColor + '20',
  },
  dropdownText: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.appColor,
    fontFamily: Fonts.regular,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  clear: {
    color: colors.appColor,
    fontFamily: Fonts.medium,
  },
  cancel: {
    color: colors.appColor,
    fontFamily: Fonts.medium,
    marginRight: 20,
  },
  ok: {
    color: colors.appColor,
    fontFamily: Fonts.medium,
  },
  rightButtons: {
    flexDirection: 'row',
  },
  calendarStyle: {
    height: 300,
  },
  sectionTitle: {
    fontSize: 18,
    marginVertical: 5,
    fontFamily: Fonts.medium,
    color: colors.appColor,
    marginBottom: 10,
    textTransform: 'capitalize',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  label: {
    fontSize: 15,
    color: colors.textPrimary2,
    marginVertical: 3,
    fontFamily: Fonts.medium,
  },
  value: {
    fontSize: 15,
    color: colors.black,
    fontFamily: Fonts.medium,
  },
  total: {
    color: colors.appColor,
    fontSize: 17,
    fontFamily: Fonts.bold
  },
  offerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 10,
  },
  offerLink: {
    color: colors.appColor,
    fontWeight: '500',
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: '#fff',
    borderTopColor: '#eee',
    borderTopWidth: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  price: {
    fontSize: 20,
    fontFamily: Fonts.semiBold,
    color: colors.appColor,
  },
  bookNowBtn: {
    backgroundColor: colors.appColor,
    borderRadius: 25,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  bookNowText: {
    color: '#fff',
    fontFamily: Fonts.medium,
    fontSize: 16,
  },
reviewsTitle: {
    fontSize: 18,
    color: colors.appColor,
    fontFamily: Fonts.medium,
    marginVertical: 10,
  },
  reviewsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reviewBars: {
    flex: 1,
  },
  starRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  barBackground: {
    height: 8,
    backgroundColor: '#f5c6cd',
    borderRadius: 4,
    marginLeft: 6,
    flex: 1,
  },
  barFill: {
    height: 8,
    backgroundColor: '#f58ca2',
    borderRadius: 4,
  },
  reviewScoreContainer: {
    alignItems: 'flex-end',
    marginLeft: 10,
  },
  reviewScore: {
    fontSize: 32,
    fontFamily: Fonts.medium,
    color: colors.appColor
  },
  viewAll: {
    fontSize: 12,
    color: colors.black,
    fontFamily: Fonts.regular,
    textDecorationLine: 'underline',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    marginTop: 16,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  arrowIcon: {
    width: 13,
    height: 18
  },
  cardText: {
    flex: 1,
  },
  cardTitle: {
    fontFamily: Fonts.medium,
    fontSize: 16,
  },
  cardSubtitle: {
    fontSize: 13,
    fontFamily: Fonts.regular,
    color: colors.textPrimary2
  },

  addIcon: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.appColor
  },
});

export default BookingDetailScreen;
