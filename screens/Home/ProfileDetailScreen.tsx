import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../utils/Colors';
import {Fonts} from '../utils/Fonts';
import BookingDetailSlider from './components/BookingDetailSlider';

const ProfileDetailScreen = () => {
  return (
    <View style={styles.container}>
 
    </View>
    // <View style={styles.container}>
    //   <ScrollView contentContainerStyle={styles.scrollContainer}>
    //     {/* Header Section */}
    //     <View style={styles.header}>
    //       <Text style={styles.headerTitle}>Profile</Text>
    //       <Text style={styles.packageName}>Package name (type)</Text>
    //     </View>

    //     {/* About Me Section */}
    //     <View style={styles.section}>
    //       <Text style={styles.sectionTitle}>About Me</Text>
    //       <Text style={styles.sectionText}>
    //         An experienced photographer with a passion for capturing life's most memorable moments. 
    //         Skilled in various photography styles, from portraits to events, ensuring each shot tells 
    //         a unique story.
    //       </Text>
    //     </View>

    //     {/* Package Rules Section */}
    //     <View style={styles.section}>
    //       <Text style={styles.sectionTitle}>Package Rules</Text>
    //       {[1, 2, 3, 4].map((item) => (
    //         <Text key={item} style={styles.listItem}>
    //           {item}. Shoot will be done in the mentioned hours only and extra hours will charge extra.
    //         </Text>
    //       ))}
    //     </View>

    //     {/* FAQ Section */}
    //     <View style={styles.section}>
    //       <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
    //       {[1, 2, 3, 4].map((item) => (
    //         <Text key={item} style={styles.listItem}>
    //           • How do I book a photographer on AnyTimeshoot?
    //         </Text>
    //       ))}
    //     </View>

    //     {/* Divider */}
    //     <View style={styles.divider} />

    //     {/* Book Now Button */}
    //     <TouchableOpacity style={styles.bookNowButton}>
    //       <Text style={styles.bookNowText}>Book Now</Text>
    //     </TouchableOpacity>
    //   </ScrollView>

    //   {/* Slider at bottom */}
    //   <BookingDetailSlider />
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 80, // Space for slider
  },
  header: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: Fonts.bold,
    color: colors.black,
    marginBottom: 4,
  },
  packageName: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: colors.grey,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: Fonts.semiBold,
    color: colors.black,
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: colors.grey,
    lineHeight: 20,
  },
  listItem: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: colors.grey,
    marginBottom: 4,
    marginLeft: 4,
  },
  divider: {
    height: 1,
    backgroundColor: colors.lightGray,
    marginVertical: 16,
  },
  bookNowButton: {
    backgroundColor: colors.appColor,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  bookNowText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: Fonts.semiBold,
  },
});

export default ProfileDetailScreen;