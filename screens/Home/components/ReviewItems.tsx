import { Image, StyleSheet, Text, View } from "react-native";
import { constant } from "../../utils/Constant";
import { colors } from "../../utils/Colors";
import { Fonts } from "../../utils/Fonts";
import { images } from "../../utils/Images";

type ReviewItemProps = {
  id: string;
  name: string;
  date: string;
  rating: number;
  review: string;
  avatar: number;
};

const ReviewItems = ({item}: {item: ReviewItemProps}) => {
  return(
      <View style={styles.reviewCard}>
        <View style={styles.reviewHeader}>
        <Image source={item.avatar} style={styles.avatar} />
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.starContainer}>
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  source={
                    i < item.rating
                      ? images.filledStar
                      : images.emptyStar
                  }
                  style={styles.star}
                />
              ))}
            </View>
          </View>
          <Text style={styles.date}>{item.date}</Text>
        </View>
        <Text style={styles.reviewText}>
          {item.review} <Text style={styles.readMore}>{constant.readMore}</Text>
        </Text>
      </View>
    );
}

const styles = StyleSheet.create({
  reviewCard: {
    backgroundColor: colors.appLightColor,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  date: {
    fontSize: 12,
    color: colors.subTitleColor,
  },
  reviewText: {
    fontSize: 14,
    color: colors.black,
    marginTop: 4,
  },
  readMore: {
    color: colors.appColor,
  },
  reviewHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    name: {
      fontSize: 14,
      fontFamily: Fonts.semiBold,
      color: colors.black,
    },
    starContainer: {
      flexDirection: 'row',
      marginTop: 4,
    },
    star: {
      width: 14,
      height: 14,
      marginRight: 2,
    },
})

export {ReviewItems}