import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Fonts } from "../../utils/Fonts"
import { images } from "../../utils/Images"
import { colors } from "../../utils/Colors"

const CouponOffersItem = ({item}: any) => {
  return (
     <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image source={{ uri: item.image }} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.role}>{item.role}</Text>
        </View>
      </View>

      <View style={styles.dateRow}>
        <Text style={styles.date}>{item.startDate}</Text>
        <Image source={images.appIcon} />
        <Text style={styles.date}>{item.endDate}</Text>
      </View>

      <Text style={styles.offerText}>{item.offer}</Text>

      <TouchableOpacity style={styles.redeemBtn}>
        <Text style={styles.redeemText}>Redeem Now</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  redeemBtn: {
    backgroundColor: colors.appColor,
    paddingVertical: 8,
    borderRadius: 6,
  },
  redeemText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: Fonts.medium
  },
  card: {
    width: 180,
    backgroundColor: colors.appColor30,
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 10,
  },
  name: {
    fontFamily: Fonts.regular,
    fontSize: 14,
  },
  role: {
    fontSize: 12,
    color: colors.textPrimary2,
  },
   dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    alignItems: 'center',
  },
  date: {
    fontSize: 13,
    fontFamily: Fonts.regular
  },
  icon: {
    fontSize: 18,
  },
  offerText: {
    fontSize: 13,
    textAlign: 'center',
    color: colors.appColor,
    marginVertical: 10,
    fontFamily: Fonts.regular
  },
})

export {CouponOffersItem}