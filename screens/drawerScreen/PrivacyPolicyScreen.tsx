import {View, Text, Pressable, Platform, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PrivacyPolicyScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View
        className="bg-white px-4 pb-4 flex-row items-center shadow-md rounded-b-2xl"
        style={{paddingTop: Platform.OS === 'ios' ? 15 : 15}}>
        <Pressable onPress={() => navigation.goBack()} className="mr-3">
          <Ionicons name="arrow-back" size={32} color="#16a34a" />
        </Pressable>

        <Text className="text-xl font-semibold text-gray-800">
          Privacy Policy
        </Text>
      </View>

      {/* Body */}
      <ScrollView className="flex-1 p-4" showsVerticalScrollIndicator={true}>
        <Text className="text-sm text-gray-800 leading-6">
          Privacy Policy for KredPay{'\n'}
          KredPay, referred to as "we", "us", or "our", acknowledges and
          respects the right to privacy of every individual and is committed to
          safeguarding their personal and sensitive personal data or information
          (defined below). This Privacy Policy is applicable to all users,
          including visitors and those who hold an account with KredPay,
          collectively referred to as "User", who share their personal and
          sensitive personal data with us while accessing and using our website
          and mobile application, collectively referred to as the "Platform".
          The main objective of this Policy is to inform Users about the
          collection, use, storage, transfer, and disclosure of their data.
          Before submitting any information to us, it is important to carefully
          read this Policy to understand how we will handle your information.
          The electronic platforms, comprising the mobile application are owned
          and operated by KashishIndia Private Limited [CIN no.
          U74999RJ2022PTC081971].{'\n\n'}
          By accessing, browsing, and using the Platform continuously, the User
          acknowledges that this Policy forms part of KredPay's Terms &
          Conditions, available at kredpay.in/home/terms, and all the
          terms defined in the Terms of Use have the same meaning as in this
          Policy. If the User does not agree with the terms of this Policy, we
          advise them not to use or visit our Platform. This Policy is easily
          accessible in various places on our Platform, including when Users
          create an account with us. KredPay reserves the right to modify,
          alter, and update this Policy at any time, with or without prior
          notice. We will notify Users of any material changes through their
          registered email address or any other mode of communication available
          with us. We advise Users to review this Policy regularly to keep
          themselves informed about the changes. By continuing to use or avail
          the services of the Platform after any modification, amendment,
          alteration, or change of this Policy, regardless of whether notice was
          sent to the User or published on the Platform, the User is deemed to
          have given their consent to this Policy and KredPay's other
          policies and practices existing at the time of visiting, accessing,
          and/or using the Platform.{'\n\n'}
          This Policy is published in compliance with the Information Technology
          Act, 2000 and Rules made thereunder.{'\n\n'}
          Definitions:{'\n\n'}
          "Personal Information"{'\n'}
          According to the SPI Rules, Personal Information refers to any
          information related to a natural person that can directly or
          indirectly, in combination with other available information, identify
          that person. This includes details such as name, address, mobile
          number, and other similar details.{'\n\n'}
          "Sensitive Personal Data or Information"{'\n'}
          Sensitive Personal Data or Information refers to personal information
          that is considered sensitive and includes details related to
          passwords, financial information such as bank accounts, credit cards,
          or other payment instruments, physical, physiological and mental
          health condition, sexual orientation, medical records and history,
          biometric information, and any other information received under lawful
          contract or otherwise. Information that is publicly available or
          provided under the Right to Information Act, 2005 or any other law is
          not considered sensitive personal data or information.{'\n\n'}
          "Payment Data"{'\n'}
          Payment Data includes end-to-end transaction details and information
          related to payment or settlement transaction that is gathered,
          transmitted, or processed as part of a payment message or instruction.
          This includes customer data such as name, mobile number, email,
          Aadhaar number, PAN number, payment sensitive data such as customer
          and beneficiary account details, payment credentials such as OTP, PIN,
          passwords, and transaction data such as originating and destination
          system information, transaction reference, timestamp, and amount.
          {'\n\n'}
          "Personal Information"{'\n'}
          According to the SPI Rules, "Personal Information" refers to any
          information related to a natural person that could potentially
          identify that person directly or indirectly, especially when combined
          with other available data held by a corporate entity. Examples of
          Personal Information include name, address, mobile number, and more.
          {'\n\n'}
          Sensitive Personal Data or Information includes personal data that
          pertains to a person's:{'\n'}
          passwords;{'\n'}
          financial information such as bank account details, credit card or
          debit card details, or any other payment instrument details;{'\n'}
          physical, physiological, and mental health condition;{'\n'}
          sexual orientation;{'\n'}
          medical records and history;{'\n'}
          biometric information;{'\n'}
          any of the above-mentioned data received by a body corporate for
          processing or storage under lawful contract or otherwise.{'\n\n'}
          Information that is freely available in the public domain or furnished
          under the Right to Information Act, 2005, or any other law shall not
          be regarded as sensitive personal data or information.{'\n\n'}
          "Payment Data"{'\n'}
          Payment Data refers to all transaction-related data and information
          that is collected, transmitted, or processed as part of a payment
          message or instruction. This includes customer data (such as name,
          mobile number, email, Aadhaar Number, PAN number, etc.),
          payment-sensitive data (customer and beneficiary account details),
          payment credentials (OTP, PIN, Passwords, etc.), and transaction data
          (originating & destination system information, transaction reference,
          timestamp, amount, etc.).{'\n\n'}
          User Consent, Information Collected and Purpose:{'\n\n'}
          When accessing, browsing, or using services on the Platform, users
          provide their consent for the collection, use, disclosure, storage,
          possession, receiving, dealing or handling of their Personal
          Information. In compliance with Rule 5 of SPI Rules, users
          specifically consent to the collection and handling of their Sensitive
          personal data or information for lawful purposes as stated in this
          policy by checking a box that affirms their consent during the
          creation of their Account on the Platform.{'\n\n'}
          If a user under the age of 18 shares their Personal Information or
          Sensitive personal data or information, KredPay assumes that there
          is adequate and lawful parental consent. To create an account, perform
          transactions, and receive customer support services, Users accessing
          and using our Platform must provide certain Personal Information and
          Sensitive personal data or information. The information that may be
          collected by us includes the following:{'\n\n'}
          Full name and age{'\n'}
          Username and password{'\n'}
          PAN{'\n'}
          Password for the User's account registered with us{'\n'}
          Postal address{'\n'}
          Email address{'\n'}
          Mobile number{'\n'}
          Internet protocol (IP) addresses (through cookies){'\n'}
          URL of the Platform accessed before and after the Users' access to our
          Platform{'\n'}
          Credit/debit card number, credit/debit card expiration date, and/or
          other payment instrument details{'\n'}
          User feedback, queries, emails, letters, and suggestions provided to
          us{'\n'}
          Third-party information about the concerned User's activities or
          postings on the Platform{'\n'}
          Information about the mobile/tab device the App is installed on or
          mobile device identifier{'\n'}
          Any other information required by us that is relevant for accessing
          and using our Platform.{'\n\n'}
          Our collection of Personal Information or Sensitive personal data or
          information is limited to specific, clear and lawful purposes. We use
          this information to provide Users with a safe, efficient, smooth and
          personalised experience while using our Platform. We may also collect
          information to improve our services and products, respond to queries
          or complaints related to our services, send promotional emails,
          conduct market research, and create new products and services.
          Additionally, we use this information to provide customer support
          services, detect and prevent error, fraud, criminal activity, abuse of
          our services, and technical issues. We also enforce our Terms of
          Conditions, provide co-branded services in affiliation with more than
          one corporate entity, and for other lawful purposes as described at
          the time of collection of Personal Information or Sensitive personal
          data or information.{'\n\n'}
          Manner of Information Collection:{'\n\n'}
          When Users visit and use our Platform, social media profiles, and
          customer support service, we collect information they provide
          voluntarily. This includes data that is automatically collected by
          analyzing their online behavior through cookies. We understand that
          Users may choose not to provide certain information or may withdraw
          their consent to provide information at any time as per the terms of
          this Policy. If consent is withdrawn, we will retain the Personal
          Information or Sensitive personal data or information for a period
          determined by us or as required by law. In such a case, we reserve the
          right to limit access to various features and services on the
          Platform.{'\n\n'}
          Disclosure of information:{'\n\n'}
          You provide your explicit consent and authorization for us to share
          your Personal Information and Sensitive personal data or information
          with our trusted affiliates and other third parties, as necessary and
          for the lawful purposes stated in this Policy. However, we will not
          disclose any Personal Information or Sensitive personal data or
          information to any government institution or authority, except under
          specific circumstances such as when required by law, requested by a
          lawfully authorized government authority, pursuant to a judicial
          decree, for enforcing and protecting KredPay's or others' legal
          rights, for seeking any relief, for defending any charge, for opposing
          any claim, for enforcing this Policy or our Terms of Use, or for
          obtaining any legal advice. In addition, we reserve the right to
          disclose, share or transfer your Personal Information or Sensitive
          personal data or information to a third party if there is a change in
          ownership, merger, restructuring, or sale of our business assets.
          {'\n\n'}
          Use of cookies and other technologies:{'\n\n'}
          In order to enhance the functionality and user experience of our
          Platform, we utilize technology such as "cookies" to collect
          information from visitors and assign them a unique identification
          number known as a User ID. This enables us to better understand the
          interests of each individual user. Additionally, our web servers
          automatically gather limited information about a user's computer
          connection to the internet, such as their IP address, when they access
          our Platform. This information helps us to send data, such as web
          pages viewed by the user, to the appropriate computer.{'\n\n'}
          Occasionally, users may come across "cookies" or similar technologies
          on certain pages of the Platform that are placed by third parties. It
          is important to note that we do not have control over how these third
          parties utilize cookies, and we accept no responsibility or liability
          for any associated issues.{'\n\n'}
          Links to third party websites:{'\n\n'}
          The Platform contains links to other Platforms, and it is possible
          that these other sites may collect information about the User. Please
          note that this Policy does not apply to the collection and use of
          information by such linked Platforms, and we cannot be held
          responsible for their privacy policies, practices or content. It is
          the responsibility of the User to review the privacy policies of any
          linked Platforms they visit.{'\n\n'}
          Correction and updating of information:{'\n\n'}
          If the Personal Information or Sensitive personal data or information
          provided by the User is found to be inaccurate, misleading or
          incomplete, the User must inform us promptly. The User can review,
          update or modify the information on their Account by logging into the
          Platform. However, we will not be responsible for verifying the
          authenticity of Personal Information or Sensitive personal data or
          information provided by the User.{'\n\n'}
          Retention of information:{'\n\n'}
          We will retain and use your Personal Information and Sensitive
          personal data or information until the purposes for which we collected
          your information are no longer applicable, and we are no longer
          required by applicable law, regulations, contractual obligations, or
          legitimate business purposes to keep your information. Furthermore, we
          will delete your information if its retention is not required for the
          establishment, exercise, or defense of any legal claim.{'\n\n'}
          Mailers:{'\n\n'}
          KredPay may send direct mailers to the User's email address
          provided by the User. If the User wishes to opt-out of these direct
          mailers, they can use the links provided at the bottom of each mailer
          or any other means as determined by KredPay. We value User privacy,
          and in the event that the User chooses to not receive such mailers, we
          will remove them from the mailing list. If a User wants to remove
          their contact information from all mailing lists and newsletters, they
          can do so through the "Profile" page of their account with KredPay.
          {'\n\n'}
          Advertising:{'\n\n'}
          We use third-party advertising companies to display ads when you visit
          our Platform. These companies may use anonymized information (i.e.,
          information that does not include your name, address, email address,
          or mobile number) to provide advertisements about goods and services
          of interest to you. This anonymized information is usually in the form
          of aggregated statistics on traffic to various pages within our
          Platform.{'\n\n'}
          Accuracy of Information:{'\n\n'}
          If you believe that any Personal Information or Sensitive personal
          data or information maintained in our records is inaccurate,
          misleading, or incomplete, please inform us promptly. Users may also
          review, update, or modify their information by logging into their
          Account on the Platform. We are not responsible for the authenticity
          of Personal Information or Sensitive personal data or information
          supplied by a User.{'\n\n'}
          Data Protection & Security:{'\n\n'}
          The Platform has implemented strict security measures to prevent any
          misuse, unauthorized access, modification, disclosure, or destruction
          of your Personal Information and Sensitive personal data or
          information under our control. All data collected is stored on servers
          that are secured behind firewalls and password-protected, with access
          restricted on a need-to-know basis. We may conduct regular reviews of
          our security safeguards and Policy to incorporate any future changes
          deemed necessary to ensure the integrity of your Personal Information
          and Sensitive personal data or information remains intact. If there is
          any security breach that could potentially harm you, we will notify
          you as soon as possible and take the necessary measures to remedy the
          breach or mitigate any immediate harm.{'\n\n'}
          If you require clarification regarding this Policy or have any
          concerns about the illegal access, use, or disclosure of your Personal
          Information, please contact us at Support@kredpay.in{'\n\n'}
        </Text>
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicyScreen;
