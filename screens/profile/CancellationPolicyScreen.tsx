import React from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {Fonts} from '../utils/Fonts';
import {colors} from '../utils/Colors';

const CancellationPolicyScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{marginHorizontal: 16}}>
          <Text style={styles.title}>Cancellation Policy</Text>
          <Text style={styles.date}>Last updated: May 16th 2025</Text>
          <Text style={styles.subTitle}>
            This policy outlines the terms and conditions for cancellations and
            rescheduling of bookings made through the AnyTimeShoot App. It is
            applicable to both Customers (Users) and Partners (Photographers,
            Videographers, Cinematographers).
          </Text>
          <View>
            <Text style={styles.otherTitle}>
              1. Customer Cancellation Policy
            </Text>
            <Text style={styles.content}>
              Welcome to PhotoMaster! By downloading or using our app, you agree
              to comply with and be bound by the following terms and conditions.
              Please read them carefully.
            </Text>
            <Text style={styles.subotherTitle}>1.1 Flexible Cancellation</Text>
            <Text style={styles.content}>
              ● Cancellation allowed up to 24 hours before the scheduled shoot
              time.{' '}
            </Text>
            <Text style={styles.content}>
              ● Eligible for a full refund, excluding AnyTimeShoot’s service
              fee.{' '}
            </Text>

            <Text style={styles.subotherTitle}>1.2 Moderate Cancellation</Text>
            <Text style={styles.content}>
              ● Cancellation allowed up to 5 days before the scheduled shoot
              time.{' '}
            </Text>
            <Text style={styles.content}>
              ● Eligible for a full refund, excluding AnyTimeShoot’s service
              fee.{' '}
            </Text>

            <Text style={styles.subotherTitle}>1.3 Strict Cancellation</Text>
            <Text style={styles.content}>
              ● Cancellation must be made at least 10 days in advance of the
              shoot.{' '}
            </Text>
            <Text style={styles.content}>
              ● Eligible for a full refund, excluding AnyTimeShoot’s service
              fee.{' '}
            </Text>
            <Text style={styles.content}>
              ❗Note: If the cancellation occurs after the eligible time window,
              no refund will be issued.
            </Text>
          </View>
          <View>
            <Text style={styles.otherTitle}>
              2. Wedding Shoot Cancellation Policy
            </Text>
            <Text style={styles.content}>
              ● Wedding bookings can only be cancelled via the AnyTimeShoot
              Customer Support Team.
            </Text>
            <Text style={styles.content}>
              ● Allowed only in rare and unavoidable situations such as:{' '}
            </Text>
            <Text style={styles.subcontent}>○ Medical emergencies </Text>
            <Text style={styles.subcontent}>○ Death of a family member </Text>
            <Text style={styles.subcontent}>○ Natural calamities </Text>
            <Text style={styles.content}>
              ● Customers must submit valid documentation or proof.{' '}
            </Text>
            <Text style={styles.content}>
              ● AnyTimeShoot reserves the right to approve or deny such
              requests.{' '}
            </Text>
            <Text style={styles.content}>
              ● A service fee will still be deducted from any approved refund.
            </Text>
            <Text style={styles.content}>
              * "User" refers to anyone who downloads, installs, or uses the
              App.
            </Text>
            <Text style={styles.content}>
              * "Content" refers to any text, graphics, images, photographs, or
              other material provided through the App.
            </Text>
          </View>
          <View>
            <Text style={styles.otherTitle}>
              3. Partner Cancellation Policy{' '}
            </Text>
            <Text style={styles.content}>
              ● Partners cannot cancel bookings under normal circumstances.
            </Text>
            <Text style={styles.content}>
              ● In extreme cases (e.g., serious illness, COVID-19, natural
              disaster, death), a Partner may request a cancellation or
              rescheduling.
            </Text>
            <Text style={styles.content}>
              ● Requests must be submitted to the AnyTimeShoot Support Team with
              proper reasoning and documentation.
            </Text>
            <Text style={styles.content}>
              ● Rescheduling will be prioritized over cancellation.
            </Text>
            <Text style={styles.content}>
              ● Repeated or unjustified cancellation requests by Partners may
              result in temporary suspension or removal from the platform.{' '}
            </Text>
          </View>
          <View>
            <Text style={styles.otherTitle}>4. Rescheduling Policy </Text>
            <Text style={styles.content}>
              We strongly encourage rescheduling over cancellation where
              possible.
            </Text>
            <Text style={styles.subotherTitle}>
              4.1 Customer-Initiated Rescheduling
            </Text>
            <Text style={styles.content}>
              ● Customers can request rescheduling by contacting the Partner
              directly before the scheduled shoot.{' '}
            </Text>
            <Text style={styles.content}>
              ● If the Partner agrees, a new mutually convenient date can be
              set.{' '}
            </Text>
            <Text style={styles.content}>
              ● No additional charges apply for rescheduling within reason
              (subject to Partner’s approval).{' '}
            </Text>
            <Text style={styles.content}>
              ● Rescheduling must be finalized at least 24 hours in advance.
            </Text>
            <Text style={styles.subotherTitle}>
              4.2 Partner-Initiated Rescheduling
            </Text>
            <Text style={styles.content}>
              ● In exceptional cases, a Partner may request a reschedule due to
              emergencies.{' '}
            </Text>
            <Text style={styles.content}>
              ● Partner must inform the Customer and the AnyTimeShoot Support
              Team promptly.{' '}
            </Text>
            <Text style={styles.content}>
              ● If the Customer agrees, a new date will be fixed. If not, the
              case will be escalated for cancellation review.{' '}
            </Text>
            <Text style={styles.content}>
              💬 In both cases, rescheduling will not incur any service fee
              deduction if done within the platform guidelines.{' '}
            </Text>
          </View>

          <View>
            <Text style={styles.otherTitle}>
              5. Service Fee Deduction on Refunds
            </Text>
            <Text style={styles.content}>
              ● In case of an approved cancellation, a full refund of the
              booking amount will be processed excluding the AnyTimeShoot
              service fee.
            </Text>
            <Text style={styles.content}>
              ● The service fee covers platform usage, payment gateway charges,
              and operational handling.
            </Text>
          </View>

          <View>
            <Text style={styles.otherTitle}>
              6. Contact for Cancellations or Rescheduling
            </Text>
            <Text style={styles.content}>
              📧 Email: support@anytimeshoot.com
            </Text>
            <Text style={styles.content}>📞 Phone: +91- 9266749639</Text>
            <Text style={styles.content}>
              🕐 Hours: 10:00 AM – 7:00 PM IST (Monday to Saturday){' '}
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
  content: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: colors.textPrimary2,
  },
  subcontent: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    marginLeft: 20,
    color: colors.textPrimary2,
  },
  date: {
    fontFamily: Fonts.regular,
    fontSize: 11,
    color: colors.textPrimary2,
  },
  subotherTitle: {
    fontFamily: Fonts.medium,
    fontSize: 13,
    marginVertical: 10,
  },
});
export default CancellationPolicyScreen;
