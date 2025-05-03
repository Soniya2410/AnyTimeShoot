import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../utils/Colors';
import {Fonts} from '../../utils/Fonts';

type MyBookingListItemProps = {
  item: any; 
  onPress: (item: any) => void; 
};

const MyBookingListItem : React.FC<MyBookingListItemProps>= ({onPress, item}) => {
  return (
    <TouchableOpacity style={styles.bookingCard}  onPress={onPress}>
      <View style={styles.topLine}>
        <Image source={item.icon} style={styles.icon} />
        <View style={styles.spacer} />
        <TouchableOpacity>
          <Text style={styles.viewAllText}>{item.action}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.descText}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bookingCard: {
    backgroundColor: colors.white,
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.lineColor,
  },
  topLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  spacer: {
    flex: 1,
  },
  viewAllText: {
    fontFamily: Fonts.regular,
    fontSize: 10,
    color: colors.appColor,
    textDecorationLine: 'underline',
  },
  textContainer: {},
  titleText: {
    fontFamily: Fonts.semiBold,
    fontSize: 16,
    color: colors.appColor,
    marginBottom: 4,
  },
  descText: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: colors.textPrimary2,
  },
});
export default MyBookingListItem;
