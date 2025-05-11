import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  ScrollView
} from 'react-native';
import { Calendar, Agenda } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import ProfileDetailSlider from '../components/ProfileDetailSlider';
import { RootStackNavigationProp } from '../../App';
import { constant } from '../utils/Constant';
import { colors } from '../utils/Colors';
import { Fonts } from '../utils/Fonts';


const BookingDetailScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp<'bookingDetail'>>();
  const [selectedDate, setSelectedDate] = useState<string>('2025-08-17');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<'month' | 'year' | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selected, setSelected] = useState('2025-08-17');

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

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + (direction === 'next' ? 1 : -1));
    setCurrentDate(newDate);
  };

  const navigateYear = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    newDate.setFullYear(currentDate.getFullYear() + (direction === 'next' ? 1 : -1));
    setCurrentDate(newDate);
  };

  const formatMonthYear = (date: Date) => {
    return {
      month: date.toLocaleString('default', { month: 'long' }),
      year: date.getFullYear(),
    };
  };

  const { month, year } = formatMonthYear(currentDate);

  // Generate month/year options
  const months = Array.from({ length: 12 }, (_, i) => ({
    name: new Date(currentDate.getFullYear(), i, 1).toLocaleString('default', { month: 'long' }),
    value: i
  }));
  
  const years = Array.from({ length: 11 }, (_, i) => currentDate.getFullYear() - 5 + i);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
      <ProfileDetailSlider />

      <View style={styles.calContainer}>
        <Text style={styles.title}>{constant.sheduledShoot}</Text>
        <Text style={styles.subtitle}>{new Date(selectedDate).toDateString()}</Text>

        <TouchableOpacity 
          style={styles.selector} 
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.selectorText}>Date</Text>
        </TouchableOpacity>

        {/* <Modal
          visible={modalVisible}
          transparent
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        > */}
          {/* <View style={styles.modalContainer}> */}
            {/* <View style={styles.bottomSheet}> */}
              {/* Header with month/year selectors */}
              {/* <View style={styles.headerRow}>
                <View style={styles.monthControl}>
                  <TouchableOpacity onPress={() => navigateMonth('prev')}>
                    <Text style={styles.arrow}>{'<'}</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity 
                    style={styles.selectorButton}
                    onPress={() => setActiveDropdown(activeDropdown === 'month' ? null : 'month')}
                  >
                    <Text style={styles.headerText}>{month} ▼</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity onPress={() => navigateMonth('next')}>
                    <Text style={styles.arrow}>{'>'}</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.yearControl}>
                  <TouchableOpacity onPress={() => navigateYear('prev')}>
                    <Text style={styles.arrow}>{'<'}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.selectorButton}
                    onPress={() => setActiveDropdown(activeDropdown === 'year' ? null : 'year')}
                  >
                    <Text style={styles.headerText}>{year} ▼</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity onPress={() => navigateYear('next')}>
                    <Text style={styles.arrow}>{'>'}</Text>
                  </TouchableOpacity>
                </View>
              </View> */}

              {/* Calendar with absolute positioned dropdowns */}
              <View style={styles.calendarWrapper}>
              <Calendar
                style={{
                  borderWidth: 1,
                  borderColor: '#D32F2F',
                  borderRadius: 5,
                  marginVertical: 10,
                  // height: 350
                }}
              
                  current={selected}
                  onDayPress={(day) => setSelected(day.dateString)}
                  markedDates={{
                    [selected]: { selected: true, selectedColor: '#D32F2F' },
                  }}
                  theme={{
                    backgroundColor: '#F8D0D0',
                    calendarBackground: '#F8D0D0',
                    textSectionTitleColor: '#333',
                    selectedDayBackgroundColor: '#D32F2F',
                    selectedDayTextColor: '#fff',
                    todayTextColor: '#D32F2F',
                    dayTextColor: '#000',
                    textDisabledColor: '#d9e1e8',
                    arrowColor: '#D32F2F',
                    monthTextColor: '#D32F2F',
                    indicatorColor: '#D32F2F',
                    textDayFontFamily: Fonts.bold,
                    textMonthFontFamily: Fonts.extraBold,
                    textDayHeaderFontFamily: Fonts.extraBold,
                    textDayFontSize: 12,
                    textMonthFontSize: 20,
                    textDayHeaderFontSize: 12,
                  }}
                />
                {/* <Calendar
                  key={currentDate.toISOString()}
                  current={currentDate.toISOString().split('T')[0]}
                  onDayPress={handleDayPress}
                  markedDates={{
                    [selectedDate]: {
                      selected: true,
                      selectedColor: colors.appColor,
                    },
                  }}
                  hideArrows
                  disableMonthChange
                  renderHeader={() => null}
                  theme={{
                    calendarBackground: colors.calendarBackground,
                    selectedDayBackgroundColor: colors.appColor,
                    selectedDayTextColor: colors.white,
                    todayTextColor: colors.appColor,
                    dayTextColor: colors.dayColor,
                    textDisabledColor: colors.textPrimary2,
                  }}
                  style={styles.calendarStyle}
                /> */}

                {/* Month Dropdown (overlapping) */}
                {/* {activeDropdown === 'month' && (
                  <View style={styles.overlayDropdown}>
                    <ScrollView 
                      style={styles.dropdownContainer}
                      contentContainerStyle={styles.dropdownContent}
                    >
                      {months.map((monthItem, index) => (
                        <TouchableOpacity
                          key={index}
                          style={[
                            styles.dropdownItem,
                            currentDate.getMonth() === monthItem.value && styles.selectedItem
                          ]}
                          onPress={() => changeMonth(monthItem.value)}
                        >
                          <Text style={styles.dropdownText}>{monthItem.name}</Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  </View>
                )} */}

                {/* Year Dropdown (overlapping) */}
                {/* {activeDropdown === 'year' && (
                  <View style={styles.overlayDropdown}>
                    <ScrollView 
                      style={styles.dropdownContainer}
                      contentContainerStyle={styles.dropdownContent}
                    >
                      {years.map((yearValue) => (
                        <TouchableOpacity
                          key={yearValue}
                          style={[
                            styles.dropdownItem,
                            currentDate.getFullYear() === yearValue && styles.selectedItem
                          ]}
                          onPress={() => changeYear(yearValue)}
                        >
                          <Text style={styles.dropdownText}>{yearValue}</Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  </View>
                )} */}
              </View>

              {/* Footer */}
              {/* <View style={styles.footer}>
                <TouchableOpacity onPress={() => setSelectedDate('')}>
                  <Text style={styles.clear}>{constant.clear}</Text>
                </TouchableOpacity>
                <View style={styles.rightButtons}>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Text style={styles.cancel}>{constant.cancel}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Text style={styles.ok}>{constant.ok}</Text>
                  </TouchableOpacity>
                </View>
              </View> */}
            </View>
          {/* </View> */}
        {/* </Modal> */}
      {/* </View> */}
      </ScrollView>
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
    shadowOffset: { width: 0, height: 2 },
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
});

export default BookingDetailScreen;