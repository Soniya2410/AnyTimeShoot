import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../utils/Colors";
import { Fonts } from "../../utils/Fonts";

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
  status?: 'completed' | 'inProgress' | 'start' | 'workDeliverd';
}) => {
  const getBorderColor = () => {
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

  const getTitleColor = () => {
    switch (status) {
      case 'completed':
        return colors.completedColor;
      case 'inProgress':
        return colors.inprogressColor;
      case 'start':
        return colors.appColor;
      case 'workDeliverd':
        return colors.black;
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
        <Text style={[styles.stepTitle, {color: getTitleColor()}]}>
          {title}
        </Text>
        <Text style={styles.stepSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
 verticalLine: {
     width: 2,
     height: 50,
     backgroundColor: colors.appColor,
     marginTop: -2,
     zIndex: 1,
   },
   icon: {
    width: 18,
    height: 18,
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
})

export {TimelineStep}