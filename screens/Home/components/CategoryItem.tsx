import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native"
import { icons } from "../../utils/Icons"
import { colors } from "../../utils/Colors";
import { Fonts } from "../../utils/Fonts";
import { images } from "../../utils/Images";

type CategoryItemProps = {
  item: any; 
  onPress: (item: any) => void; 
  // isWishList?: boolean;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ item, onPress}) => {
  return(
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image source={item.image} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardSubtitle}>{item.des}</Text>
        </View>
      </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
      flexDirection: 'row',
      backgroundColor: colors.white,
      borderRadius: 10,
      marginHorizontal: 10,
      // padding: 10,
      marginBottom: 12,
      borderColor: colors.borderColor,
      borderWidth: 1,
      // height: 120,
    },
    cardImage: {
      width: 100,
      height: 100,
      marginHorizontal: 10,
      marginVertical: 10,
      borderRadius: 50,
    },
    cardContent: {
      flex: 1,
      marginLeft: 12,
      marginTop: 5,
      justifyContent: 'space-between',
      paddingVertical: 8,
      width: '58%',
    },
    cardTitle: {
      fontFamily: Fonts.semiBold,
      fontSize: 16,
      color: colors.appColor,
      marginTop: 0,
      marginBottom: 0,
    },
    cardSubtitle: {
      fontFamily: Fonts.regular,
      fontSize: 14,
      color: colors.textPrimary2,
      marginVertical: 4,
      marginBottom: 10,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
      justifyContent: 'space-between',
    },
    star: {
      color: colors.starColor,
      fontSize: 14,
      textAlign: 'center',
    },
    ratingText: {
      marginLeft: 4,
      color: colors.textPrimary2,
    },
    rightArrow: {
      width: 8,
      height: 15,
      marginRight: 10,
      position: 'absolute',
      bottom: 5,
      right: 10
    },
    starsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    likeIcon: {
      width: 24,
      height: 24,
      resizeMode: 'contain',
    },
});

export {CategoryItem}