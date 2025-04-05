import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {images} from '../utils/Images';
import {constant} from '../utils/Constant';
import {colors} from '../utils/Colors';
import {Fonts} from '../utils/Fonts';
import { SafeAreaView } from 'react-native-safe-area-context';

const MessageScreen: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white }}>
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
        <View style={styles.titleRow}>
          <View style={styles.statusIndicator} />
          <Text style={styles.title}>
            {constant.anyTime}
            <Text style={styles.highlight}>{constant.shoot}</Text>{' '}
            {constant.support}
          </Text>
        </View>
      </View>
      </View>

      <View style={styles.emptyChat}>
        <Image source={images.messageCenterImage} style={styles.illustration} />
      </View>

      <View style={styles.inputWrapper}>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={images.addIcon} style={styles.icon} />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder={constant.typeMessageHere}
          placeholderTextColor={colors.textPrimary2}
        />

        <TouchableOpacity style={styles.iconButton}>
          <Image source={images.sendIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: colors.lineColor,
    justifyContent : 'center',
  },
  titleRow: {
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusIndicator: {
    width: 6,
    height: 6,
    backgroundColor: colors.appliedColor,
    borderRadius: 5,
    marginRight:8,
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: colors.textPrimary2,
  },
  highlight: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    color: colors.appColor,
  },
  emptyChat: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustration: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    borderWidth: 1,
    borderColor: colors.lineColor,
    borderRadius: 25,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    height: 45,
  },

  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
    paddingHorizontal: 10,
    fontFamily: Fonts.regular,
    color: colors.textPrimary2,
  },

  iconButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    width: 16,
    height: 16,
    tintColor: 'white',
    resizeMode: 'contain',
  },
});

export default MessageScreen;
