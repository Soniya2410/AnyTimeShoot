import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {colors} from '../utils/Colors';
import {Fonts} from '../utils/Fonts';
import {icons} from '../utils/Icons';
import {constant} from '../utils/Constant';
import {images} from '../utils/Images';
import ProfileDetailSlider from '../components/ProfileDetailSlider';
import { ASButton } from '../components/ASButton';

const ProfileDetailScreen = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const faqs = [
    {
      id: 1,
      question: 'How do I book a photographer on AnyTimeShoot?',
      answer:
        "To book a photographer, go to the 'Book Now' section, select your preferred photographer, choose a date and time, and complete the payment process.",
    },
    {
      id: 2,
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards, PayPal, and in some cases cash payments on location.',
    },
    {
      id: 3,
      question: "What's your cancellation policy?",
      answer:
        'You can cancel up to 24 hours before your scheduled shoot for a full refund.',
    },
    {
      id: 4,
      question: 'Can I reschedule my booking?',
      answer:
        'Yes, you can reschedule up to 48 hours before your appointment through the app.',
    },
  ];

  const toggleItem = (id: number) => {
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id],
    );
  };

  const moveToDetailPage = () => {
    // navigation.navigate('couponScreen');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ProfileDetailSlider />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{constant.aboutMe}</Text>
          <Text style={styles.sectionText}>
            {constant.profileDetailSubText}
          </Text>
          <View style={styles.infoRow}>
            <View style={styles.infoCard}>
              <Image source={images.location} style={styles.iconTop} />
              <Text style={styles.infoValue}>{constant.location_caps}</Text>
              <Text style={styles.infoLabel}>{constant.someRandomAddress}</Text>
            </View>
            <View style={styles.infoCard}>
              <Image source={images.compStartShoot} style={styles.icon} />
              <Text style={styles.infoValue}>{constant.otherPackages}</Text>
              <Text style={styles.infoLabel}>{constant.viewAllPackages}</Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{constant.packageRule}</Text>
            {[1, 2, 3, 4].map(item => (
              <View key={item} style={styles.listItemContainer}>
                <View style={styles.numberCircle}>
                  <Text style={styles.numberText}>{item}</Text>
                </View>
                <Text style={styles.listItemText}>
                  Shoot will be done in the mentioned hours only and extra hours
                  will charge extra.
                </Text>
              </View>
            ))}

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{constant.FAQ}</Text>
              {faqs.map((faq, index) => (
                <TouchableOpacity
                  key={faq.id}
                  style={[
                    styles.faqBox,
                    expandedItems.includes(faq.id) && styles.expandedFaqBox,
                  ]}
                  activeOpacity={0.8}
                  onPress={() => toggleItem(faq.id)}>
                  <View style={styles.questionBoxContainer}>
                    <View style={styles.numberCircle}>
                      <Text style={styles.numberText}>
                        {index < 9 ? `${index + 1}` : index + 1}
                      </Text>
                    </View>
                    <Text style={styles.questionText}>{faq.question}</Text>
                    <Image
                      source={images.rightAppNextArrow}
                      style={[
                        styles.arrowIcon,
                        {
                          transform: [
                            {
                              rotate: expandedItems.includes(faq.id)
                                ? '90deg'
                                : '0deg',
                            },
                          ],
                        },
                      ]}
                    />
                  </View>
                  {expandedItems.includes(faq.id) && (
                    <View style={styles.answerBox}>
                      <Text style={styles.answerText}>{faq.answer}</Text>
                    </View>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>
            <ASButton
              title={constant.continue}
              onPress={moveToDetailPage}
              />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 80,
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
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginTop: 22,
  },
  infoCard: {
    width: '48%',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.borderColor,
    backgroundColor: colors.white,
  },
  infoLabel: {
    fontSize: 10,
    color: colors.subTitleColor,
    fontFamily: Fonts.regular,
  },
  infoValue: {
    fontSize: 10,
    fontFamily: Fonts.semiBold,
    color: colors.black,
    marginTop: 8,
  },
  icon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  iconTop: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  section: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 15,
    fontFamily: Fonts.medium,
    color: colors.appColor,
    marginBottom: 12,
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  numberCircle: {
    backgroundColor: colors.appLightColor,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    marginTop: 6,
  },
  numberText: {
    color: colors.appColor,
    fontSize: 12,
    fontFamily: Fonts.semiBold,
  },
  listItemText: {
    flex: 1,
    fontSize: 14,
    color: colors.textPrimary2,
    fontFamily: Fonts.regular,
  },
  faqItem: {
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    paddingBottom: 12,
  },
  questionBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  faqBox: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  expandedFaqBox: {
    borderColor: colors.appColor,
  },
  questionText: {
    flex: 1,
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: colors.black,
    marginLeft: 8,
  },
  answerContainer: {
    marginTop: 8,
    marginLeft: 32,
    paddingRight: 16,
  },
  answerText: {
    fontSize: 13,
    fontFamily: Fonts.regular,
    color: colors.grey,
    lineHeight: 20,
  },
  arrowIcon: {
    width: 16,
    height: 16,
    tintColor: colors.grey,
    marginLeft: 8,
  },
  answerBox: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.lightGray,
  },
});

export default ProfileDetailScreen;
