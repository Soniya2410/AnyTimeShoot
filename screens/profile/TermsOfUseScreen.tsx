import {SafeAreaView, ScrollView, StyleSheet, Linking} from 'react-native';
import {Text, View} from 'react-native';
import {colors} from '../utils/Colors';
import {Fonts} from '../utils/Fonts';

const TermsOfUseScreen: React.FC = () => {
  const handlePress = () => {
    Linking.openURL('https://anytimeshoot.com/cancellation-policy');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{marginHorizontal: 16}}>
          <Text style={styles.title}>Terms and Conditions</Text>
          <Text style={styles.subTitle}>
            Its a long established fact that a reader will be distracted by the
            readable .
          </Text>
          <View>
            <Text style={styles.otherTitle}>1. Introduction</Text>
            <Text style={styles.content}>
              These Terms and Conditions ("Terms") govern the use of the
              AnyTimeShoot App and Website ("Platform"). By using this Platform,
              all users ("you," "your") agree to comply with and be bound by
              these Terms. If you disagree with any part of the Terms, you must
              not use the Platform.
            </Text>
          </View>
          <View>
            <Text style={styles.otherTitle}>2. User Classification</Text>
            <Text style={styles.subotherTitle}>2.1 Customers</Text>
            <Text style={styles.content}>
              Individuals or businesses booking photo or video services.
            </Text>
            <Text style={styles.subotherTitle}>2.2 Partners</Text>
            <Text style={styles.content}>
              Photographers, videographers, cinematographers, and studio owners
              registered to provide services via the Platform.{' '}
            </Text>
            <Text style={styles.subotherTitle}>2.3 Admins</Text>
            <Text style={styles.content}>
              Internal team members responsible for managing operations and
              platform activities.
            </Text>
          </View>
          <View>
            <Text style={styles.otherTitle}>3. Services </Text>
            <Text style={styles.subotherTitle}>AnyTimeShoot facilitates:</Text>
            <Text style={styles.content}>
              * Discovery and booking of photo/video services.
            </Text>
            <Text style={styles.content}>* Payment processing </Text>
            <Text style={styles.content}>* File delivery and access. </Text>
            <Text style={styles.content}>
              * Customer support and dispute resolution The Platform itself does
              not offer photography/videography services but acts as an
              intermediary.{' '}
            </Text>
          </View>
          <View>
            <Text style={styles.otherTitle}>4. Account Obligations </Text>
            <Text style={styles.subotherTitle}>All users must:</Text>
            <Text style={styles.content}>
              * Provide accurate, complete, and updated information
            </Text>
            <Text style={styles.content}>
              * Use the Platform lawfully and ethically
            </Text>
            <Text style={styles.subotherTitle}>
              We reserve the right to suspend or terminate accounts in the case
              of:
            </Text>
            <Text style={styles.content}>* Misuse or abusive language </Text>
            <Text style={styles.content}>* Fraudulent activity </Text>
            <Text style={styles.content}>* Fake details or spam </Text>
            <Text style={styles.content}>
              * Multiple last-minute cancellations (3+){' '}
            </Text>
            <Text style={styles.content}>
              * No-shows or poor-quality service by Partners{' '}
            </Text>
          </View>

          <View>
            <Text style={styles.otherTitle}>
              5. Bookings, Payments & Refunds
            </Text>
            <Text style={styles.content}>
              * Full payment is required to confirm a booking.
            </Text>
            <Text style={styles.content}>
              * Payments are securely processed via Razorpay.{' '}
            </Text>
            <Text style={styles.content}>
              * Refunds (if eligible) will exclude AnyTimeShoot service fees.{' '}
            </Text>
            <Text style={styles.content}>
              * Partners are paid per shoot after successful job completion and
              quality checks.
            </Text>
            <Text style={styles.content}>
              Refer to our{' '}
              <Text style={styles.link} onPress={handlePress}>
                Cancellation and Rescheduling Policy
              </Text>{' '}
              for full details.
            </Text>
          </View>

          <View>
            <Text style={styles.otherTitle}>
              6. Cancellation and Rescheduling
            </Text>
            <Text style={styles.subotherTitle}>
              Policies vary based on Partner-selected options:
            </Text>
            <Text style={styles.content}>
              * <Text>Flexible:</Text> Cancel up to 24 hours prior.
            </Text>
            <Text style={styles.content}>
              * <Text>Moderate:</Text> Cancel up to 5 days prior.
            </Text>
            <Text style={styles.content}>
              * <Text>Strict:</Text> Cancel at least 10 days prior.
            </Text>
            <Text style={styles.content}>
              Wedding shoot cancellations are reviewed on a case-by-case basis.
              Partners may only cancel for emergencies with documentation.
            </Text>
            <Text style={styles.content}>
              Rescheduling is encouraged over cancellations and should be done
              at least 24 hours in advance.
            </Text>
          </View>

          <View>
            <Text style={styles.otherTitle}>
              7. Content Ownership and Usage
            </Text>
            <Text style={styles.content}>
              * Customers retain ownership of the final deliverables.
            </Text>
            <Text style={styles.content}>
              * AnyTimeShoot retains the right to use shoot media for marketing
              purposes unless customers opt out via official email.
            </Text>
            <Text style={styles.subotherTitle}>Partners must ensure:</Text>
            <Text style={styles.content}>* Delivery of original work.</Text>
            <Text style={styles.content}>
              * No plagiarism or unauthorized use of third-party content.
            </Text>
          </View>

          <View>
            <Text style={styles.otherTitle}>8. Dispute Resolution</Text>
            <Text style={styles.content}>
              Disputes are reviewed case-by-case by the AnyTimeShoot Admin Team.
              Resolution is based on evidence, including communications and
              content delivered.
            </Text>
            <Text style={styles.subotherTitle}>
              AnyTimeShoot reserves the right to:
            </Text>
            <Text style={styles.content}>* Issue partial or full refunds.</Text>
            <Text style={styles.content}>
              * Penalize or remove Partners for repeated poor experiences.
            </Text>
            <Text style={styles.content}>
              * Moderate customer feedback based on factual review.
            </Text>
          </View>

          <View>
            <Text style={styles.otherTitle}>9. Platform Limitations</Text>
            <Text style={styles.content}>
              AnyTimeShoot acts as a marketplace and not the service provider. 
            </Text>
            <Text style={styles.content}>* We are not liable for personal disputes, missed deadlines, or dissatisfaction unless due to platform error.</Text>

            <Text style={styles.content}>
              * We do not guarantee uninterrupted access or server uptime.
            </Text>
            <Text style={styles.content}>
              * Partner listings, availability, and pricing are determined by the Partners.
            </Text>
          </View>

           <View>
            <Text style={styles.otherTitle}>10. Legal Liability</Text>
            <Text style={styles.content}>
             * AnyTimeShoot is not liable for any loss, injury, or damages resulting from your use of the platform.
            </Text>
            <Text style={styles.content}>
              * Our liability is strictly limited to the amount paid for the booking. </Text>
            <Text style={styles.content}>
              * Users agree to indemnify AnyTimeShoot from any third-party claims arising from their activity on the platform. 
            </Text>
          </View>

           <View>
            <Text style={styles.otherTitle}>11. Data Collection and Privacy</Text>
            <Text style={styles.content}>
             * We collect data like name, email, location, and mobile number.
            </Text>
            <Text style={styles.content}>
              * Data is used to improve service delivery and internal analytics. </Text>
            <Text style={styles.content}>
              * By using the platform, you consent to our integrated privacy and data usage practices.
            </Text>
          </View>

          <View>
            <Text style={styles.otherTitle}>12. Termination of Access</Text>
            <Text style={styles.subotherTitle}>
              We may suspend or permanently ban accounts for: 
            </Text>
            <Text style={styles.content}>
             * Abuse or harassment.
            </Text>
            <Text style={styles.content}>
              * Fake profiles. </Text>
            <Text style={styles.content}>
              * Poor Partner performance.
            </Text>
            <Text style={styles.content}>
              * Fraudulent bookings or chargebacks.
            </Text>
            </View>

             <View>
            <Text style={styles.otherTitle}>13. Intellectual Property</Text>
            <Text style={styles.content}>
             All website and app content (logos, brand assets, templates) belong to Indishoot Vertex Dynamics Private Limited.
            </Text>
            <Text style={styles.content}> No user may copy, sell, or exploit any content without permission. </Text>
            </View>
            <View>
              <Text style={styles.otherTitle}>14. Governing Law</Text>
            <Text style={styles.content}>
             These Terms are governed by Indian law. Disputes shall be resolved in the courts of 
Gurugram, Haryana.
            </Text>
            </View>

            <View>
              <Text style={styles.otherTitle}>15. Amendments</Text>
            <Text style={styles.content}>
            We may update these Terms periodically. You will be notified of major updates via app 
notification or email. Continued use of the Platform implies your acceptance of revised 
Terms.
            </Text>
            </View>

            <View>
              <Text style={styles.otherTitle}>16. Contact Us</Text>
            <Text style={styles.subotherTitle}>
            For any queries, support, cancellations, or opt-out requests:
            </Text>
            <Text style={styles.content}>
              ●  Email: support@anytimeshoot.com 
              </Text>
 <Text style={styles.content}>
              ●  Phone: +91-9266749639 
              </Text>
  <Text style={styles.content}>
              ●  Support Hours: Mon-Sat, 10:00 AM to 7:00 PM IST 
 
            </Text>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    color: colors.appColor,
    fontFamily: Fonts.medium,
    fontSize: 16,
  },
  subTitle: {
    fontFamily: Fonts.regular,
  },
  otherTitle: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    marginVertical: 10,
  },
  subotherTitle: {
    fontFamily: Fonts.medium,
    fontSize: 13,
    marginVertical: 10,
  },
  content: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: colors.textPrimary2,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
export default TermsOfUseScreen;
