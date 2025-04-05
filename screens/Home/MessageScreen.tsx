import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
} from 'react-native';
import { images } from '../utils/Images';
import { constant } from '../utils/Constant';
import { colors } from '../utils/Colors';
import { Fonts } from '../utils/Fonts';

const MessageScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.titleRow}>
            <View style={styles.statusIndicator} />
            <Text style={styles.title}>
              {constant.anyTime}
              <Text style={styles.highlight}>{constant.shoot}</Text>{' '}
              {constant.support}
            </Text>
          </View>
        </View>

        {/* Empty Chat Illustration */}
        <View style={styles.emptyChat}>
          <Image 
            source={images.messageCenterImage} 
            style={styles.illustration}
            resizeMode="contain"
          />
        </View>

        {/* Message Input */}
        <View style={styles.inputWrapper}>
          <AttachmentButton />
          
          <TextInput
            style={styles.input}
            placeholder={constant.typeMessageHere}
            placeholderTextColor={colors.textPrimary2}
          />
          
          <SendButton />
        </View>
      </View>
    </SafeAreaView>
  );
};

// Reusable Button Components
const AttachmentButton = () => (
  <IconButton source={images.addIcon} />
);

const SendButton = () => (
  <IconButton source={images.sendIcon} />
);

const IconButton: React.FC<{ source: any }> = ({ source }) => (
  <TouchableOpacity style={styles.iconButton}>
    <Image 
      source={source} 
      style={styles.icon}
      resizeMode="contain"
    />
  </TouchableOpacity>
);

// Styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: colors.lineColor,
    justifyContent: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusIndicator: {
    width: 6,
    height: 6,
    backgroundColor: colors.appliedColor,
    borderRadius: 5,
    marginRight: 8,
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: colors.textPrimary2,
  },
  highlight: {
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
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
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
    padding: 8,
    borderRadius: 20,
    backgroundColor: colors.appColor, // Changed from 'red' to use your color system
  },
  icon: {
    width: 16,
    height: 16,
    tintColor: colors.white,
  },
});

export default MessageScreen;