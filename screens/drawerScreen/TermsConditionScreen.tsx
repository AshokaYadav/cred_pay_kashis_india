import {View, Text, Pressable, Platform, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TermsConditionScreen = () => {
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
          Terms & Conditions
        </Text>
      </View>

      {/* Body */}
      <ScrollView className="flex-1 p-4" showsVerticalScrollIndicator={true}>
        <Text className="text-sm text-gray-800 leading-6">
          Terms and Conditions{'\n'}
          The electronic platforms, comprising the mobile application and/or
          website, known as "KredPay App", kredpay.in and referred to
          as the "Platform or KredPay Platform or KredPay," are owned and
          operated by KashishIndia Private Limited [CIN no.
          U74999RJ2022PTC081971], a company incorporated under the Companies
          Act, 2013. These Terms of Use apply to the access and use of the
          Platform. The registered office of KashishIndia Private Limited is
          situated at Plot No C-26(D), RIICO Industrial Area, Malviya Nagar,
          Jaipur-302017 (Rajasthan, India).{'\n\n'}
          By accessing or using the KredPay Platform, or utilizing any of the
          Services provided through the Platform, or clicking "I agree" to these
          Terms of Use, You are acknowledging and agreeing to abide by all the
          terms and conditions stated in this Terms of Use (the "Terms/Terms of
          Use"), in addition to our Privacy Policy available at
          kredpay.in/home/privacy, our Refund Policy available at
          kredpay.in/home/return_policy.{'\n\n'}
          The Company reserves the right to change, add, remove, or modify the
          KredPay Platform, the Service, these Terms, Privacy Policy, Refund
          policy or any content or part thereof, at any time, with or without
          notice, in its sole discretion. The Company may (but it doesn't assume
          any such obligation) provide you a notification of any such change,
          add, remove, or modify. You shall regularly and periodically check
          these Terms, Privacy Policy, Refund Policy before you make any
          transaction on the KredPay Platform. The Company shall have no
          liability or responsibility whatsoever due to any such changes,
          additions, removals, or modifications.{'\n\n'}
          In these Terms of Use:{'\n'}
          Agreement" shall mean and include terms of this Terms of Use, all its
          schedules, amendments thereto made from time to time and all related
          documents in connection with the transactions contemplated herein.
          {'\n\n'}
          "Applicable Law" includes all applicable Indian statutes, enactments,
          acts of the state legislature or parliament, laws, ordinances, rules,
          bye-laws, regulations, notifications, guidelines, directions,
          directives and orders of any governmental authority, statutory
          authority, board, recognized stock exchange, as may be applicable.
          {'\n\n'}
          "Users" or "Service Provider" shall mean individuals, including all
          bodies corporate, partnerships, limited liability partnerships, etc.,
          who are availing services, either as a consumer or service provider,
          through KredPay Platform.{'\n\n'}
          "Sub-Users" shall mean individuals and / or entities appointed /
          employed by the User who are either availing the service for
          consumption or on whose premises / outlets the services shall be
          disbursed to the Customers as the case may be, for and on behalf of
          the Service Providers, to facilitate completion of transactions
          initiated by such Customers, through the User and do not have existing
          direct relationship with the Company for the provision of any
          services.{'\n\n'}
          "Company", "KredPay", "KredPay Platform", "Ourselves", "Us", and
          "We" all refer to KashishIndia Private Limited, including its
          successors and assigns.{'\n\n'}
          "User", "You", and "Your" refer to any person who uses the Platform or
          Services, including successors, heirs, receivers, and permitted
          assigns.{'\n\n'}
          "Party" refers to either You or Us, and "Parties" refers to You and Us
          collectively, as required by the context.{'\n\n'}
          "Chargebacks" shall mean and include reversal of any transaction made
          by Service Provider's customer inter alia, on account of, including
          but not limited to{'\n'}
          any alleged forgery of his or her card or other details{'\n'}
          any charge/debit made on a card that has been listed as a hot listed
          card or otherwise listed on the card association warning bulletins
          {'\n'}
          duplicate processing of the transaction.{'\n'}
          (iv.)any amount required to be refunded due to, denial of transaction
          by the User/valid card holder as wrongly charged payment/ extra
          payments and/or due to the fraudulent use/misuse of the personal and
          financial information of the Service Provider's customer by any
          unauthorized person and/or any other reason as required/approved by
          the concerned banks, as the case may be.{'\n'}
          "Code of Conduct" shall mean and include the minimum requirements that
          need to be adhered by the User prior to undertaking any Services under
          this Agreement.{'\n\n'}
          "Confidential Information" means and includes the Intellectual
          Property and any and all business, technical and financial information
          of KredPay or of any of its affiliates that is related to any of
          the arrangements contemplated in this Agreement or any other agreement
          in which this Agreement is incorporated by reference or otherwise
          disclosed by KredPay to the User any information which relates to
          its financial and/or business operations, including but not limited
          to, specifications, models, merchant lists/information samples,
          reports, forecasts, current or historical data, computer programs or
          documentation and all other technical, financial or business data,
          information related to its internal management, customers, products,
          services, anticipated products/services, processes, financial
          condition, employees, merchants, Intellectual Property, marketing
          strategies, experimental work, trade secrets, business plans, business
          proposals, customer contract terms and conditions,
          compensation/commission/ service, charges payable to the User, and
          other valuable confidential information and materials that are
          customarily treated as confidential or proprietary, whether or not
          specifically identified as confidential or proprietary. "Customer(s)"
          shall mean individuals, including all body corporate, partnerships,
          limited liability partnerships, who are availing services, rendered by
          the User including banks through the User using KredPay Platform.
          {'\n\n'}
          "KredPay" shall mean and include, the platforms (website, mobile
          app, white label application as the case may be) of the KredPay
          that the User accesses for registration and further for transacting,
          including all contents, services and technology offered through the
          Platform. "Intellectual Property" shall mean all intellectual property
          used for the purpose of or in association with or in relation to the
          performance of this Agreement, and includes without limitation, (a)
          Software, operating manuals, software code, program, instructions,
          specifications, processes, input methods, data or information used in
          relation to, or in association with, or for the operation of the
          software installed by the Parties, (b) the trademarks, service marks,
          trade names, business names, logos, symbols, styles, colour
          combinations used by the Parties during the course of their business
          and all depictions, derivations and representations thereof, (c) all
          promotional material including without limitation, advertisements,
          literature, graphics, images, content and the 'look and feel' of all
          of the above, (d) all information, data or material in whatever form,
          whether tangible or not, provided by each party to the other party
          during the course of the Agreement; and (e) all techniques, formulae,
          patterns, compilations, processes, inventions, practices, methodology,
          techniques, improvement, utility model, procedures, designs, skills,
          technical information, notes, experimental results, service
          techniques, samples, specifications of the products or services,
          labeling specifications, rights on software, and any other knowledge
          or know-how of any nature whatsoever.{'\n\n'}
          "Service Charge" shall mean the charges paid by the Customer or User
          for the services rendered by the Company in terms of this Agreement.
          {'\n\n'}
          "Service Facilitator" shall mean any entity, including banks, banking
          business correspondents with which the Company has, directly or
          indirectly, executed an agreement for facilitating Transactions
          between KredPay and its customers/Users.{'\n\n'}
          "Software" shall include custom built software that is owned by the
          Company, or software that has been licensed from third party suppliers
          by the Company and in relation to which the Company has obtained the
          right to sub-license from such third party suppliers.{'\n\n'}
          "Transactions" shall mean and include transactions taking place
          between KredPay and User or User and its customers including, but
          not limited to, Domestic Money Transfer, utility bill payments, mobile
          & DTH recharge and other services of a like nature provided by the
          Service Provider through the KredPay's Platform.{'\n\n'}
          1.ABOUT THE PLATFORM:{'\n'}
          The KredPay Platform is an online platform that provides services
          to the Users. These services include for the purpose of receiving
          and/or delivering small value remittances through Aadhaar based
          payments or through any other payment instruments that may be mutually
          allowed from time to time as per applicable regulatory guidelines,
          utility payment services to the User or other service as may be
          allowed and subject to such conditions as may pe prescribed by the
          Platform. The User agrees to undertake and perform the roles,
          responsibilities, operations, duties and functions specified in
          respect of Services under this Agreement. The Company reserves the
          right to change / vary / the Services by advising the same to the User
          in writing and upon such advice, such amended Services shall become
          effective.{'\n\n'}
          2.CONDITIONS FOR USER PLATFORM ACCOUNT:{'\n'}
          2.1 Before using the KredPay Platform or Services and creating a
          User's Platform Account, you must meet certain Eligibility Criteria,
          including being at least 18 years old and legally competent to form a
          binding contract in India, having full legal capacity and authority to
          enter into these Terms, not having been suspended or removed from
          using the Services or Platform, being an Indian citizen and a resident
          of India as defined by the Citizenship Act, 1955 and the Foreign
          Exchange Management Act, 1999, and physically situated in India during
          your use of the Platform or Services. Failure to meet these criteria
          means you cannot use the Platform or Services.{'\n\n'}
          2.2 If you reside outside of India, or are physically situated in a
          restricted jurisdiction, you are not permitted to use the Platform or
          Services. Further, you also confirm that you are not prohibited to use
          the services of Platform as per the law in force in India.{'\n\n'}
          2.3 You / User affirms to comply with RBI Guidelines and other
          applicable regulations and basis these representations and the
          affirmations given by the User about it having the requisite
          capability to provide the services further and to carry out various
          other activities as mutually agreed to between the Parties, the User
          is desirous of availing and/or facilitating the sale of services of
          the Company.{'\n\n'}
          2.4 If you breach any of the above clauses, the Platform may restrict
          or terminate your access to the Platform or Services. You are
          responsible for ensuring compliance with these obligations and
          applicable laws. You may only have one User's Platform Account at a
          time and must provide current, truthful, authentic, complete, and
          accurate information to create your account. You may delete your
          account at any time, but the Platform may retain your information for
          compliance with applicable laws and law enforcement cooperation.
          {'\n\n'}
          2.5 You are responsible for maintaining the confidentiality and
          security of your User's Platform Account and password, and for
          restricting access to your account and device. The Platform is not
          liable for any unauthorized use of your account. Transactions
          initiated or authorized from your account are deemed to be authorized
          by you and the Platform is not liable for any such transactions.
          {'\n\n'}
          2.6 There may be different conditions and requirements for availing
          the services over the platform including but not limited to mandatory
          KYC for User/Sub-User and other documents and information to be
          collected from the Customers for enabling the services. You agree to
          provide the correct and accurate information for using the Platform.
          {'\n\n'}
          3.PAYMENT MECHANISM{'\n'}
          3.1 Parties hereby agree and acknowledge that all payments and
          settlements between the parties shall be made in accordance with the
          schedule of charges as agreed between both the parties.{'\n\n'}
          3.2 The User acknowledges that the structure of this schedule of
          charges fluctuate from time to time due to change in market
          conditions. The Platform will keep User informed of the change or
          amendment in the schedule of charges and may at its sole discretion,
          update this schedule from time to time after informing the User on the
          Platform account of the User{'\n\n'}
          3.3 If the User/Customer cancels or disputes or rejects a transaction
          processed on the Platform for which the Company has already paid the
          User a fee/commission/bonus/ discount based on the transaction, the
          Platform shall inform the User to provide supporting documents, if
          required. Thereafter the Company shall deduct the amount of the
          disputed fee/ commission/ bonus/ discount from the customer wallet
          balance or next payment due. In the event that there is no subsequent
          fee/commission/bonus/ discount due to the User, KredPays will send
          to the User, an invoice for the disputed amount with supporting
          documents and the User shall be liable to pay such fee in the
          subsequent calendar month or invoice whichever is applicable.{'\n\n'}
          4.SETTLEMENT{'\n'}
          The payment mechanism for settlement of the fee payable by the User or
          the Company as applicable shall be as follows:{'\n\n'}
          4.1 The Company shall make available to the User a report in
          electronic form setting forth the following information relating to
          each Transaction: The Transaction amount, date and time of the
          Transaction etc. The Report shall be made available to the User via an
          online portal or over the application. The format and controls on the
          portal and process will be as provided by the Company and as updated
          from time to time.{'\n\n'}
          4.2 The User shall maintain sufficient balance on Platform Wallet so
          as to enable each Transaction to be carried out smoothly. The Company
          reserves the right to decline any Transactions done over and above the
          balance of User available on the Platform.{'\n\n'}
          4.3 The account balance maintained by the Users on KredPay Platform
          shall be non-interest bearing and shall be forfeited by KredPay if
          found lying unused for more than 365 days.{'\n\n'}
          4.4 In case of any differences in relation to the settlement amount
          reflected in reports provided by the Company, the difference shall be
          settled through mutual investigation of the un-reconciled
          Transactions. Both Parties shall provide their best efforts to settle
          such disputed Transactions within 30 working days of the transaction.
          {'\n\n'}
          4.5 The Parties hereto agree that any payment instructions for
          Transactions accepted by the User as per the terms hereof which are
          subsequently disputed due to (a) the authorization by the User of any
          Transaction with an amount exceeding the User's account balance or
          credit limit, or (b) the authorization by the User of a fraudulent
          Transaction, shall always be the liability and responsibility of User.
          {'\n\n'}
          4.6 The User hereby acknowledges and agrees that KredPay is a
          facilitator for payment processing services which are requested and
          authorized by Users for itself or it's customers and KredPay shall
          not be responsible for any unauthorized transaction done by any person
          including third party and amounting to infringement of another's
          rights or any chargebacks claimed by the Customers. It will be the
          responsibility of Users to ensure due protection while transacting
          online or otherwise. KredPay will assist the Users in settling any
          queries related to the Services that arise between the Users, and its
          Customers. However, KredPay shall bear no responsibility with
          respect to the dispute or query related to payment made by the
          Customers to the Users.{'\n\n'}
          4.7 On the receipt of the Chargeback from the customer, User shall be
          notified by the Company. The User shall be entitled to furnish
          documents and information pertaining to the Transaction associated
          with the Chargeback within one (1) working day (or such other period
          as specified by the bank whichever is higher). The User agrees and
          acknowledges that (i) if the User is unable to furnish Chargeback
          Documents (ii) the bank is not satisfied with the Chargeback documents
          furnished by the User, then the bank shall be entitled to order the KredPay
          Payment to effect a reversal of the debit of the Chargeback Amount
          associated with the Chargeback such that the said chargeback amount is
          credited to the Customer's Payment Instrument.{'\n\n'}
          4.8 All incidental costs, taxes or levies related to the cashback, if
          any, shall be exclusively borne by the Customer(s), including but not
          limited to logistics, TDS, gift tax (if any), Insurance and any other
          taxes applicable by the Central, State or Municipal government.
          {'\n\n'}
          4.9 The User understands that the transactions are executed on third
          party platforms, and it is not possible to reverse the same. The user
          shall be responsible for all the transactions executed through its
          platform and all the details shall be verified before processing any
          transaction. No refund shall be made in any case whatsoever.{'\n\n'}
          4.10 The User agrees to pay the service charges, income tax (TDS) for
          the transactions on the platform as applicable.{'\n\n'}
          5.FRAUDULENT TRANSACTIONS{'\n'}
          5.1 If KredPay is intimated, by the bank, that a Customer has
          reported an unauthorised debit/chargeback of the Customer's Payment
          Instrument ("Fraudulent Transaction"), User shall be notified by the
          KredPay. The User shall be entitled to furnish documents and
          information pertaining to the Transaction associated with the
          Chargeback within five (5) days (or such other period specified by the
          bank). The User agrees and acknowledges that (i) if the User is unable
          to furnish Chargeback Documents (ii) the bank is not satisfied with
          the Chargeback documents furnished by the User, then the bank shall be
          entitled to order the KredPay to effect a reversal of the debit of
          the Chargeback Amount associated with the Chargeback such that the
          said chargeback amount is credited to the Customer's Payment
          Instrument. KredPay shall also be entitled to suspend the
          settlement of the amount under dispute or hold the value of
          transaction under dispute from the following settlement of the
          transaction during the pendency of inquiries, investigations and
          resolution thereof by the Service Providers to the User.{'\n\n'}
          5.2 Pursuant to clause above, if the amount in respect of the
          Fraudulent Transaction has already been settled to the User, any
          dispute arising in relation to the said Fraudulent Transaction, shall
          be resolved in accordance with the RBI's notifications, circulars and
          guidelines issued in this regard from time to time.{'\n\n'}
          5.3 The User also agrees and acknowledges that it is liable to pay
          fines, penalties and charges imposed by the Banks, Card Payment
          Networks or any regulatory authority on account of Transactions that
          are in violation of Applicable Law.{'\n\n'}
          5.4 The User further agrees and acknowledges that following KredPay
          incurring the charge stipulated in clause 5.1, if the available
          Transaction Amounts are insufficient for deduction of the Chargeback
          Amount, then KredPay is entitled to issue a debit note seeking
          reimbursement of the Chargeback Amount from the User. The User shall
          reimburse the Chargeback Amount within three (3) working days of
          receipt of the debit note.{'\n\n'}
          6.KredPay OBLIGATIONS{'\n'}
          6.1 The Company shall give all the support necessary for the delivery
          of Services and supply such information as requested by the User for
          carrying out the User's obligations under this Agreement.{'\n\n'}
          6.2 The Company if required shall provide the Company's Training
          Module, Company's Promotional Materials to the User.{'\n\n'}
          6.3 The Company shall attend to queries, grievances and disputes
          emanating from the User or its Customers in relation to the Services.
          {'\n\n'}
          6.4 The Company shall ensure compliance with RBI Regulations and other
          statutory and regulatory bodies.{'\n\n'}
          7.USER OBLIGATIONS AND DUTIES{'\n'}
          7.1The User shall undertake the activities as set out activities as
          authorized by the Platform.{'\n\n'}
          7.2 The User shall ensure that is will not appoint any sub-user or
          personnel, representatives unless expressly authorized by the Company
          in writing, and who should be selected through a process found
          suitable by the Company for providing the services in a timely and
          efficient manner. The User shall provide the details of the Sub-Users
          or personnel or representatives as and when requested by the Company.
          The User shall ensure that all the contracts entered between the User
          and Sub-User, if authorized by the Company to appoint, shall
          incorporate the terms and conditions contained herein and shall not
          have any clauses mentioned therein that are against the spirit of this
          Agreement and/or violative of the arrangement contained herein.
          {'\n\n'}
          7.3 The User may, if allowed, and subject to prior written approval
          from the Company, appoint independent Sub-Users. The User shall
          perform the required due diligence on the Sub-Users as may be
          requested or required by the Company. The User will provide the
          Company with a list of proposed new Sub-Users and an accompanying
          report with the result of the User's due diligence review conducted as
          well as its recommendation to approve or reject any such applicant as
          a Sub-User. The Company may perform an internal review of such
          proposed Sub-User at its sole cost and shall approve or disapprove any
          such Sub-User no later than 15 (fifteen) business days after receiving
          the application and due diligence report from the User. Any Sub-User
          appointed by the User to provide the Services shall: (a) execute an
          agreement with the User, which, among other things, shall require the
          Sub-User to adhere to all the relevant terms and conditions of this
          Agreement and Applicable Laws and regulations (b) be subject to the
          Company's prior written approval, and subject to any due diligence
          materials reasonably requested by the Company; (c) execute a third-
          party agency agreement with the Company, if required under Applicable
          Laws and regulations or otherwise requested by the Company; and (e)
          execute such other contracts, agreements, and documents and to take
          all actions necessary to comply with Applicable Laws and regulations
          to provide Services to the Sub-User.{'\n\n'}
          7.4 The User shall forthwith furnish to the Company, the list of
          Sub-Users along with their details taken at the time of their
          on-boarding and KYC documentation, upon such demand made by the
          Company to that effect.{'\n\n'}
          7.5 The User shall be solely liable for all the acts of the
          Sub-User(s) and any act done by the Sub-User shall be construed as the
          act of the User.{'\n\n'}
          7.6 The User undertakes to manage cash on the field, in transit and
          its outlets and ensure availability of sufficient cash at its outlets,
          to enable Customer transactions as per the mutually agreed Service
          program. The User hereby confirms that it assumes all the risks
          associated with the handling of cash at the ground level.{'\n\n'}
          7.7 The User shall act prudently in accordance with the terms of this
          Agreement and shall exercise all due diligence in carrying out its
          duties and obligations under this Agreement. The User agrees that they
          will preserve the data in accordance with the legal/regulatory
          obligations of the Company and as required under various circulars,
          guidelines, notifications etc. issued by the RBI and other regulatory
          authorities.{'\n\n'}
          7.8 The User shall be solely responsible for providing genuine notes
          of cash to the Customers towards the transactions, if applicable and
          the Company shall not assume any responsibility in this regard. It is
          also clarified that the User shall receive cash from the Customers
          towards the transactions from time to time and shall ensure utmost
          care and due diligence thereof. In the event of the User being in
          receipt of any counterfeit notes, the User shall impound the said
          notes in accordance with the applicable regulations and/or as per the
          processes of the Company so communicated to it in this regard.{'\n\n'}
          7.9 The User shall not exercise any lien or right of set off or
          appropriation on any of the assets, properties, documents, instruments
          or material belonging to the Company and / or the Customers and / or
          non-Customers in the custody of the User for any amount due or claimed
          to be due by the User from the Bank.{'\n\n'}
          7.10 The User shall promptly provide the details provided by the
          Company indicating the charges (if any) for the Services as and when
          requested by the Customer. The User shall ensure that the charges for
          offering Services are made available at the retail outlet.{'\n\n'}
          7.11 The User undertakes to perform the Services in accordance with
          the instructions provided by the Company from time to time.{'\n\n'}
          7.12 The User undertakes that any equipment or technology used by the
          User shall comply with the industry standards and updated regularly.
          {'\n\n'}
          7.13 The User shall not charge any fee from the Customer either
          directly or indirectly or on behalf of the Company over and above the
          fee specified by the Company from time to time (for the services
          rendered by the User).{'\n\n'}
          7.14 The User shall immediately notify the Company of any breach of
          security and leakage confidential information. In such eventualities,
          the User shall be liable for all the damages.{'\n\n'}
          7.15 The User shall ensure that any change in its constitution during
          the subsistence / validity of Agreement shall not impair or discharge
          the obligations of the User under this Agreement.{'\n\n'}
          7.16 The User shall familiarize itself with the grievance redressal
          policy of the Company relating to outsourcing services; the User shall
          communicate the grievance redressal policy of the Company to the
          Customers and shall notify the Company within the specified time
          period of any claims / complaints / grievances made by the Customers.
          {'\n\n'}
          7.17 The User undertakes that any Customer information taken shall be
          strictly as per the terms of this Agreement and the User would not
          source any other personal sensitive information from the Customers.
          {'\n\n'}
          7.18 The User shall treat all the Customers with dignity and respect
          and shall not resort to any kind of intimidation or harassment (either
          verbal or physical) against any person.{'\n\n'}
          7.19 If any legal proceeding is instituted by any Customer, the User
          shall immediately intimate the same to the Company and provide all
          documents and information to enable the Company to take appropriate
          action. The Company shall not be liable for any dispute arising
          between the User and any other entity / third party. The User shall
          not make any representation to the Customers or otherwise give any
          warranties other than those contained in the standard terms and
          conditions laid down by the Company.{'\n\n'}
          7.20 The User hereby agrees and undertakes that the User is legally
          entitled and eligible to enter into this e-Agreement and further
          agrees and undertakes to be bound by and abide by this Agreement and
          the person accepting this Agreement, by and on behalf of the User, is
          authorized signatory of the User and is entitled and legally
          authorized to bind such User on whose behalf this Agreement is being
          accepted. The User hereby expressly waives all its rights to dispute
          the legal validity/tenability of this e-Agreement.{'\n\n'}
          8.USER REPRESENTATION AND WARRANTIES{'\n'}
          8.1 The User represents and warrants that:{'\n\n'}
          (i.) it has had a full and adequate opportunity to read and review the
          Agreement and has had sufficient time to investigate and evaluate the
          provision of Services under the Agreement and the financial
          requirements and risk associated with the same,{'\n\n'}
          (ii.) it has the requisite capital to set up and maintain the
          infrastructure as required under the Agreement for the purpose of
          facilitating sale of services provided by the Company.{'\n\n'}
          (iii.) neither the execution/accepting the terms of the Agreement, nor
          the performance of the User's obligations under the Agreement will
          result in a violation or breach of any other agreement by which the
          User is bound,{'\n\n'}
          (iv.) neither the User nor any of the User's employees or agents is
          under any pre-existing obligation in conflict or in any way
          inconsistent with the provisions of the Agreement,{'\n\n'}
          (v.) it has the right to disclose or use all ideas, and other
          information, if any, which the User has gained from third parties, and
          which the User discloses to the Company in the course of performance
          of the Agreement, without liability to such third parties,{'\n\n'}
          (vi.) the Company has a right to inspect User's business premises that
          are related to the provision of services under the Agreement, and to
          monitor continued and ongoing compliance of the Agreement,{'\n\n'}
          (vii.) it shall immediately intimate the Company of any violation or
          potential violation of this Agreement by the User or any Sub-User, or
          of other circumstances that may cause damage to the goodwill and
          reputation of the Company,{'\n\n'}
          (viii.) it shall maintain accurate and proper accounts of all
          transactions between the Customer and itself in relation to discharge
          of duties under the Agreement,{'\n\n'}
          (ix.) it shall provide periodic reports of business transactions with
          respect to the services rendered under the Agreement to the Company,
          {'\n\n'}
          (x.) it shall observe proper ethics and transparency in all its
          actions in the course of discharge of duties under the Agreement and
          shall not, in any circumstances, take any action or make any statement
          that may mislead any Customer or prospective Customer of the Company,
          {'\n\n'}
          (xi.) it shall make all efforts to settle any disputes that may arise
          between the consumers and the company amicably and in the event any
          such dispute is referred to a consumer forum or other competent
          authority, shall provide all assistance in the settlement of the
          dispute,{'\n\n'}
          (xii.) it shall bear all costs and expenses for traveling, promotional
          activities and other similar out-of-pocket expenses incurred in the
          performance of its duties under the Agreement,{'\n\n'}
          (xiii.) it is a one-point contact for all its Customers and shall be
          solely responsible for any fraudulent acts of the Customers,{'\n\n'}
          (xiv.) it shall comply with all its obligations pursuant to the
          Agreement and ensure that all payments due from it to the Company are
          paid in a timely manner in accordance with the Agreement,{'\n\n'}
          (xvi.) it shall ensure regular and timely payment and deposit of all
          taxes, duties and other levies as applicable from time to time with
          the relevant authorities,{'\n\n'}
          (xvii.) all costs associated with purchasing of software licenses and
          hardware (if any) are to be absolutely and unconditionally borne by
          the User,{'\n\n'}
          (xviii.) it has full power and authority to enter into the Agreement
          and to take any action and execute any documents required by the terms
          hereof and this Agreement has been duly authorized, duly and validly
          executed and delivered, and constitutes a legal, valid, and binding
          obligation, enforceable in accordance with the terms hereof; and the
          persons executing the Agreement on its behalf are duly empowered and
          authorized to execute the Agreement and to perform all its obligations
          in accordance with the terms herein.{'\n\n'}
          (xix.) it acknowledges that the Company shall not be responsible for
          settling third-party disputes that arise out of the provision of
          services provided by the User under this Agreement including disputes
          between the User and its sub-user and Customers if applicable. The
          Company may assist in settling any disputes that arise between the
          User and any of its sub-users and Customers, on a commercially
          reasonable basis. The Company may, at its sole discretion, provide the
          User access to audit trail documentation from the Company's system and
          from the Service Provider's system, if so requested by the User in
          order to settle any Transaction disputes or disputes between the User
          and any of its Customers. Such an audit trail shall be provided to the
          User within 15 working days of a request, subject to the delivery by
          the concerned Service Provider to the Company of the required
          information in a timely manner. The audit trail information provided
          by the Service Provider, pursuant to all requests for information by
          the User, shall be final and binding in determining the outcome of
          Transactions that are disputed between the Company, the and the
          concerned User's Customers.{'\n\n'}
          (xx.) it shall promote the sale of the Company's services in
          accordance with the publicity and marketing guidelines issued by the
          Company from time to time. User shall maintain stock and prepare MIS
          of the promotional material dispatched from the Company and ensure
          that such material will be displayed at the outlets at prominent eye
          level locations to promote the business at that outlet.{'\n\n'}
          LIMITATION OF LIABILITY{'\n'}
          9.1 In no event will the Company or its directors, agents, officers,
          or employees be liable to a User or any third party for any special,
          indirect, incidental, consequential, punitive, or exemplary damages
          (including without limitation lost business opportunities, lost
          revenues, or loss of anticipated profits or any other pecuniary or
          non-pecuniary loss or damage of any nature whatsoever) of any kind
          arising out of or relating to:{'\n\n'}
          (i.) User's use or inability to use the Company's services, the Site
          or any Reference Sites, even if the Company or a Company authorized
          representative has advised of the possibility of such damages,{'\n\n'}
          (ii.) unauthorized access to or alterations of transmissions or data,
          any material or data sent or received or not sent or received,{'\n\n'}
          (iii.) any transactions entered into by any third person or conduct of
          any other third party or any infringement of another's rights,{'\n\n'}
          (iv.) the use of counterfeit or stolen devices, or{'\n\n'}
          (v.) fraudulent electronic transactions.{'\n\n'}
          (vi.) It shall be at the sole discretion of the Company to reverse any
          transaction with or without the approval of the concerned User.
          {'\n\n'}
          9.2 It shall be at the sole discretion of the Company to reverse any
          transaction subject to approval of the concerned Service
          Provider/User. Notwithstanding the above, if any court of law finds
          that the Company or its directors, officers, or employees, are liable
          to indemnify a concerned User despite the existence of this Clause 8,
          such liability shall not exceed the amount paid by the concerned User,
          if any, for using the portion of the Company's services or the Site
          giving rise to the cause of action. Users acknowledge and agree that
          the Company has offered its services, set its prices, and entered into
          this Agreement in reliance upon the warranty and the limitations of
          liability set forth herein. Users acknowledge that the warranty and
          the limitations of liability set forth herein reflect a reasonable and
          fair allocation of risk between Users and the Company, and that the
          warranty and the limitations of liability set forth herein form an
          essential basis of the bargain between Users and the Company. The
          Company would not be able to provide the services to Users on an
          economically reasonable basis without these limitations.{'\n\n'}
          10.INDEMNIFICATION{'\n'}
          10.1User agrees to indemnify, save, and hold the Company, its
          affiliates, contractors, employees, officers, directors, agents and
          its third party suppliers, licensors, and partners harmless from any
          and all claims, demands, actions, suits which may be threatened or
          brought against the Company, and also against all losses, damages,
          liabilities, costs, charges and expenses, including without
          limitation, legal fees and expenses arising out of or related to:
          {'\n\n'}
          (i.) User's use or misuse of the Company's services or of the
          Site/application,{'\n\n'}
          (ii.) any violation by the User of this Agreement,{'\n\n'}
          (iii.) any breach of representations, warranties and covenants made by
          the User in this Agreement,{'\n\n'}
          (iv.) any claim or legal notice or quasi-legal proceedings to which
          the Company may be required to become party or to which the Company
          may be subjected by any person including any governmental authority,
          by reason of breach of any Applicable Law,{'\n\n'}
          (v.) due to failure of a User to obtain any required statutory or
          regulatory approval necessary for the performance of its obligations
          in the Agreement with the Company,{'\n\n'}
          (vi.) all liability, claims, damages, costs, expenses suffered or
          incurred by the Company as a result of any act or violation of the
          User under any law or any statutes while acting as collection agent of
          the Company{'\n\n'}
          10.2 The Company reserves the right, at User's expense, to assume the
          exclusive defense and control of any matter, including rights to
          settle, for which concerned User is required to indemnify the Company.
          User agrees to cooperate with the Company's defense and settlement of
          these claims. The Company will use reasonable efforts to notify
          concerned User of any claim, action, or proceeding brought by a third
          party that is subject to the foregoing indemnification upon becoming
          aware of it.{'\n\n'}
          10.3 User agree fully and effectually to indemnify KredPay against
          all liability, claims, damages, costs and expenses suffered or
          incurred by KredPay as a result of breach of any terms and
          conditions or representations and warranties of this Agreement, which
          may be as a result of any act or omission of the User or its appointed
          Sub-User contained or referred to in this Agreement.{'\n\n'}
          11.DATA SECURITY AND STORAGE{'\n'}
          11.1The User shall comply with the provisions contained in the
          Information Technology Act, 2000 and the statutory rules framed there
          under, from time to time, in so far as the same has application to its
          operations in accordance with this Agreement, and also with all other
          Laws, rules and regulations, whether already in force or which may be
          enacted from time to time, pertaining to data security and management,
          data storage, sharing and data protection, and various rules,
          regulation and provisions as may be applicable, as and when the same
          is enacted into a law and comes into force, and shall ensure the same
          level of compliance by all its employees.{'\n\n'}
          The User confirms and certifies that it shall adhere to all applicable
          laws and regulations governing the use of Aadhaar enabled payment
          system (AePS) issued by UIDAI from time to time. It shall not engage
          in any acts that violate any laws and regulations. It shall also
          ensure that the financial data or any other information of the
          Customers received by the User. This User should ensure that the data
          collected from the Customer is only used for the purpose of the
          services provided by KredPay.{'\n\n'}
          12.INTELLECTUAL PROPERTY{'\n'}
          12.1The Company's services and the Site are owned and operated by the
          Company. The visual interfaces, graphics, design, compilation,
          information, computer code (including source code and object code),
          products, software, services, and all other elements of the Company's
          services and the Site provided by the Company (the "Materials") are
          protected by the Applicable Law. As between User and the Company, all
          Materials and the Company's Intellectual Property are the property of
          the Company. User agrees not to remove, obscure, or alter the Company
          or any third party's copyright, patent, trademark, or other
          proprietary rights notices affixed to or contained within or accessed
          in conjunction with or through the Company's services. Except as
          expressly authorized by the Company, the User agrees not to sell,
          license, distribute, copy, modify, publicly perform or display,
          transmit, publish, edit, adapt, create derivative works from, or
          otherwise make unauthorized use of the Materials or Company's
          Intellectual Property. Parties do not accrue any rights or interest in
          the other Party's Intellectual Property and use of any Intellectual
          Property by either User or the Company shall be strictly in for the
          fulfilment of and in compliance with the terms of the agreement
          between such User and the Company. Parties undertake that they shall
          not, nor will they allow others to, reverse engineer or disassemble
          any parts of the other's Intellectual Property.{'\n\n'}
          12.2 The Company shall seek prior written permission of the User for a
          non-exclusive license to use User's name, trademark and logo in any
          marketing or promotional activities undertaken by the Company.
          Notwithstanding anything contained herein, the Company shall be under
          no obligation to advertise, market, or promote User or User's
          Intellectual Property.{'\n\n'}
          12.3 The Parties undertake that:{'\n\n'}
          (i.) they shall use the Intellectual Property solely for discharge of
          their duties under the Agreement,{'\n\n'}
          (ii.) they shall use Intellectual Property of other party only in the
          form and manner stipulated by such other party,{'\n\n'}
          (iii.) they shall seek prior written consent from other party for use
          of such party's Intellectual Property which is not previously provided
          for by such Party,{'\n\n'}
          (iv.) they shall bring to other party's notice all cases concerning
          such party's Intellectual Property's (a) infringement, (b) passing
          off, (c) registration, or (d) attempted registration,{'\n\n'}
          (v.) they shall render to other party all assistance in connection
          with any matter pertaining to the protection of such party's
          Intellectual Property whether in courts, before administrative
          agencies, or otherwise,{'\n\n'}
          (vi.) they shall refrain from taking any action which shall or may
          impair other party's right, title or interest in the Intellectual
          Property, or create any right, title or interest therein or thereto,
          adverse to that of the other party,{'\n\n'}
          (vii.) they shall not use or permit to be used the Intellectual
          Property by any unauthorized person, and{'\n\n'}
          (viii.) they shall not misuse the Intellectual Property or use it
          together with any other mark or marks.{'\n\n'}
          13.CONFIDENTIALITY{'\n'}
          13.1The Parties shall keep Confidential Information as confidential.
          Each Party confirms that it shall protect Confidential Information
          with such security, confidentiality and degree of utmost care as it
          would prudently apply to its own confidential information and use it
          solely in connection with the transaction to which the Confidential
          Information relates. Both Parties acknowledge and agree that they are
          aware of the sensitivity & secrecy involved in keeping the customer
          data/information and transaction records and shall ensure that neither
          any of the parties nor their employees, directors etc. will do any act
          to violate the same. Notwithstanding anything contained in this
          Clause, Confidential Information shall exclude any information:
          {'\n\n'}
          (i.) which is already in the possession of the receiving Party and not
          subject to any other duty of confidentiality,{'\n\n'}
          (ii.) that is at the date hereof, or subsequently becomes, public
          otherwise than by reason of a breach by the receiving Party of the
          terms of this Agreement,{'\n\n'}
          (iii.) Information that becomes legally available to the receiving
          Party and/or its affiliates or professional advisors on a
          non-confidential basis from any third party, the disclosure of which
          does not, to the knowledge of that Party, violate any contractual or
          legal obligation which such third party has to the other Party with
          respect to such information, and Information that is independently
          acquired or developed by the receiving Party and/or its affiliates or
          professional advisors.{'\n\n'}
          (iv.) The User specifically agrees that the confidentiality
          obligations of the User in terms of this Agreement shall survive
          termination of this Agreement.{'\n\n'}
          13.2 Each Party hereby agrees that it shall not disclose any
          Confidential Information received by it without the prior written
          consent of the other Party to any third party at any time. Provided
          however, that either Party may make the following disclosures for
          which no consent shall be required from the other Party;{'\n\n'}
          (i.) Disclosures to its directors, officers, employees,
          affiliates/subsidiaries/group/holding companies, third party service
          providers and any employees thereof that it reasonable determines need
          to receive the Confidential Information;{'\n\n'}
          (ii.) Disclosures to its legal and other professional advisers,
          instructed by it that it reasonably determines need to receive the
          Confidential Information; or{'\n\n'}
          (iii.) Disclosures to any person to whom it is required by law or any
          applicable regulatory, supervisory, judicial or governmental order, to
          disclose such information, or at the request of any regulatory or
          supervisory or judicial or government authority.{'\n\n'}
          14.RELATIONSHIP BETWEEN THE PARTIES{'\n'}
          This Agreement is not intended by the Parties to constitute or create
          a joint venture, pooling arrangement, partnership, agency or formal
          business organization of any kind. The Company and the User shall be
          always independent contractors with each other for all purposes and
          neither Party shall act as or hold itself out as an agent or
          representative of the other Party nor shall create or attempt to
          create liabilities for the other Party by acting or holding itself out
          as such.{'\n\n'}
          15.NON-SOLICITATION OF CLIENTS{'\n'}
          During the term of this Agreement, the User shall not, either directly
          or indirectly, solicit, cause in any part of knowingly encourage any
          existing or potential clients or Customers of the Company to cease
          doing business or not to do business, in whole or in part with the
          Company, or solicit, cause in any part or knowingly encourage an
          existing or potential clients or Customers of the Company to do
          business with any person other than the Company, or associate with any
          prospective clients or Customers while they continue to be clients or
          Customers of the Company.{'\n\n'}
          TAXATION & RELATED LIABILITY{'\n'}
          16.1 As a user of the Platform and Service, you are responsible for
          determining, collecting, reporting, and submitting any applicable
          taxes related to the payments and transactions you make or receive in
          connection with the Platform to the relevant tax authority in India or
          under any other applicable laws. The Platform does not have any
          responsibility for identifying whether taxes are applicable to your
          transaction, or any money held by you on the Platform Wallet, or for
          collecting, reporting, or remitting any taxes resulting from any
          transaction carried out on the Platform or Services.{'\n\n'}
          16.2 The Platform reserves the right to deduct any applicable taxes on
          the executed transaction in compliance with the Income Tax Act 1961 or
          other applicable tax laws.{'\n\n'}
          16.3 In addition to the commission/fee charged by the Platform on
          executed transactions, users are required to pay any applicable
          indirect taxes on transactions carried out on the Platform.{'\n\n'}
          17.TERMINATION OF SERVICES{'\n'}
          17.1 This Agreement may be terminated by the Company in accordance
          with the clauses below:{'\n\n'}
          (i.) either User commits any breach of any of the provisions of this
          Terms of Use and, in the case of a breach capable of remedy, fails to
          remedy the same within thirty (30) days after receipt of a written
          notice giving full particulars of the breach and requiring it to be
          remedied{'\n\n'}
          (ii.) the User is not a fit person/entity to carry out the obligations
          imposed under these Terms of Use.{'\n\n'}
          (iii.) User or Company becoming subject of a voluntary petition in
          bankruptcy or any voluntary proceeding relating to insolvency,
          receivership, liquidation, or composition for the benefit of
          creditors.{'\n\n'}
          (iv.) if, by the acts or default of the other User, the Company
          suffers damage to its name and reputation; or (b) User commits any
          breach of Confidentiality; or (c) upon the occurrence of force majeure
          of this Terms of Use; or (d) there is a change in shareholding/control
          or management of User; or (e) any event that would affect the ability
          of User/Service Provider/Company to perform its obligations under the
          Agreement occurs; or (f) User or any of the
          directors/partners/proprietor of the User are convicted of any
          criminal charge.{'\n\n'}
          (v.) In the event that the Company gives notice that the User's
          software or hardware is technically inadequate to support the
          Connectivity at any stage of development, and the User fails to cure
          such deficiency within 15 days after receiving notice to such effect,
          then the Company shall be entitled to give notice of termination as
          provided,{'\n\n'}
          (vi.) In the event the Company is unable to get necessary permission /
          license from any Service Provider and any statutory authority and/or
          any of the Service Provider rescinds its contract with the Company
          and/or the sale of Services slips down due to any defective service,
          negligence or omission on part of the User, the Company shall have the
          right to rescind the Agreement without notice to the User and the
          rescission shall take effect immediately. Provided that unless
          otherwise specified by the Company in its notice, any termination of
          this Agreement, on account of rescission of an existing contract with
          any Service Provider, shall be effective only in relation to
          Transactions pertaining to such Service Provider and the Agreement
          shall continue to remain in force between the Parties in respect of
          other Service Providers.{'\n\n'}
          17.2 The Parties shall adhere to the following clauses immediately
          upon termination of this Agreement:{'\n\n'}
          (i.) Upon termination of the Agreement for any reason, the Company may
          immediately disconnect the availability of Services from its Platform,
          including related services provided by the platform, and no further
          Transactions may be affected through the Company.{'\n\n'}
          (ii.) Except as otherwise agreed upon between the Parties, any license
          to use Intellectual Property Services, of either Party which has been
          granted by such Party to the other, pursuant to this Agreement, shall
          stand automatically revoked with the termination of this Agreement by
          any Party.{'\n\n'}
          (iii.) User shall immediately discontinue and cease to use the
          trademark, logo and other Intellectual Property provided by the
          Company and shall immediately hand over any and all copies or
          documentation of such Intellectual Property.{'\n\n'}
          (iv.) Upon the termination of this Agreement, the concerned User shall
          return and surrender to the Company any Confidential Information that
          come into its possession during the course of its engagement by the
          Company and shall not retain a copy thereof in any form whatsoever.
          User shall, with the Company's prior written consent, promptly destroy
          the Confidential Information in its possession (and any copies,
          extracts and summaries thereof) and will provide the Company with
          written certification of destruction.{'\n\n'}
          (v.) immediately return to the Company originals and copies of any and
          all materials provided to the User pursuant to the Agreement,
          including publicity and marketing materials in its possession.{'\n\n'}
          (vi.) provide remote access to the Company to disable any software
          that the Company had installed.{'\n\n'}
          (vii.) remove all sign boards, banners, glow sign boards of the
          Company from its office and also all such material, which will
          indicate any association with the Company.{'\n\n'}
          (viii.) cease to promote, market or advertise the Company or its
          services.{'\n\n'}
          (ix.) the User shall grant the Company, its employees or agents,
          access to its information technology systems for a period of thirty
          (30) days after termination.{'\n\n'}
          (x.) Notwithstanding the above, the User shall not, if so directed by
          the Company discontinue discharging its duties under the Agreement
          during the notice period and shall continue discharging its duties as
          per the Agreement until indicated otherwise by the Company.{'\n\n'}
          (xi.) Upon notice of termination from either Party, the User shall
          ensure that during the notice period leading to the termination, all
          systems and procedures will be strictly adhered to and all Customers
          handled properly. All enquiries from Customers will be diverted to the
          Company by the User.{'\n\n'}
          (xii.) Subject as otherwise provided in this Agreement and to any
          rights or obligations that have accrued before termination, neither
          Party shall have any further obligation to the other under this
          Agreement.{'\n\n'}
          (xiii.) Any termination of this Agreement shall be without prejudice
          to the Company's rights under law and equity.{'\n\n'}
          18.ARBITRATION{'\n'}
          The parties agree to resolve amicability any dispute, claim, or
          controversy arising out of or relating to this agreement. Failure to
          resolve the same amicably within 30 days, the Parties may elect to
          resolve any dispute, controversy or claim arising out of or relating
          to the Agreement or Services by binding arbitration in accordance with
          the provisions of the Indian Arbitration & Conciliation Act, 1996. Any
          such dispute, controversy or claim shall be arbitrated on an
          individual basis and shall not be consolidated in any arbitration with
          any claim or controversy of any other party. The sole arbitrator shall
          be appointed by the director of the Company, who shall preside over
          the arbitration proceedings between KredPay and concerned User. The
          arbitration shall be conducted in Jaipur, Rajasthan (India) and
          judgment on the arbitration award may be entered in any court having
          jurisdiction thereof. Either KredPay or concerned User may seek any
          interim or preliminary relief from a court of competent jurisdiction
          in Jaipur, (Rajasthan) India, necessary to protect the rights or the
          property of concerned User or KredPay (or its agents, suppliers,
          and subcontractors), pending the completion of arbitration. Any
          arbitration shall be confidential, and concerned User, nor shall KredPay
          Payment disclose the existence, content or results of any arbitration,
          except as may be required by law or for purposes of the arbitration
          award. All administrative fees and expenses of an arbitration
          including the expense of its own lawyers and preparation shall be paid
          by the concerned User. The language of the arbitration shall be
          English.{'\n\n'}
          19.FORCE MAJEURE{'\n'}
          KredPay shall not be liable for failure to perform its obligations
          under this Agreement to the extent such failure is due to causes
          beyond its reasonable control. In the event of a force majeure event,
          if KredPay is unable to perform it shall notify the User events
          creating the force majeure and KredPay shall be discharged from
          such performance to the extent of and during the period of such force
          majeure event, and such non-performance shall, in no manner whosoever,
          amount to a breach by the KredPay of its obligations herein. For
          the purposes of this Agreement, force majeure events shall include,
          but not be limited to, acts of God, failures or disruptions, orders or
          restrictions, war or warlike conditions, pandemics, hostilities,
          sanctions, mobilizations, blockades, embargoes, detentions,
          revolutions, riots, looting, strikes, stoppages of labor, lockouts or
          other labor troubles, inducement of any virus, Trojan or other
          disruptive mechanisms, any event of hacking or illegal use of the
          platform, utility or communication failures, earthquakes, acts of
          terrorism, fires or accidents or failure on the part of third parties
          to provide its services, or any other technical or software failure
          etc.{'\n\n'}
          20.RECORDS AND AUDIT{'\n'}
          KredPay shall be entitled to access the User's records of
          transactions for the Financial Services, other necessary information
          given to, stored or processed by the User in connection with the
          Financial Services and its obligations hereunder; Following a
          reasonable notice period of 2 days, Company shall be entitled to
          conduct audits/inspection by its internal or external auditors, or by
          Agents appointed to act on its behalf and to obtain copies of any
          audit or review reports and findings made on the User in connections
          with the Services undertaken for / on behalf of Company. Any
          regulatory authority or persons authorised by it shall be entitled to
          access the documents, records of transactions, and other necessary
          information given to, stored or processed by the User within a
          reasonable time. Regulatory Authority shall be entitled to cause an
          inspection to be made on the User and its books and account by one or
          more of its officers or employees or other persons.{'\n\n'}
          21.PUBLIC RELATIONS{'\n'}
          Upon execution of the Agreement, Parties shall have the right to
          announce the cooperative arrangement as described in the Agreement,
          provided that all announcements must be approved in writing by both
          Parties and such approval shall not be unreasonably withheld.{'\n\n'}
          22.SEVERABILITY{'\n'}
          In the event that a court finds a particular word, phrase, sentence,
          clause, or provision of these Terms to be invalid or unenforceable in
          a given circumstance or with respect to a party, such a judgment will
          not affect the validity or enforceability of any other provision of
          these Terms in any other circumstance. If any provision or part
          thereof of these Terms is deemed unenforceable due to its duration or
          scope, the parties agree that the court with jurisdiction may modify
          the provision by reducing its duration and/or scope or by removing
          specific words or phrases. The provision, as modified, will be
          enforceable and will be enforced.{'\n\n'}
          23.ASSIGNMENT{'\n'}
          This Agreement, and any rights granted hereunder, may not be
          transferred or assigned by User without the Company's prior written
          consent, but may be assigned by the Company without restriction. Any
          assignment attempted to be made in violation of this provision shall
          be void and of no effect.{'\n\n'}
          24.SURVIVAL{'\n'}
          The clauses 8, 9, 10, 11, 12, 13, and 17 of this Agreement shall
          survive the termination or expiration as applied to transfers and
          relationship prior to such termination or expiration.{'\n\n'}
          25.NOTICE{'\n'}
          The Company may provide Users with notices and communications by
          email, regular mail, or posts on the website, kredpay.in or by
          any other reasonable means. Except as otherwise set forth herein,
          notice to the Company must be sent by courier or registered post to
          the registered address of the Company.{'\n\n'}
          26.WAIVER{'\n'}
          The failure of the Company to exercise or enforce any right or
          provision of this Agreement will not constitute a waiver of such right
          or provision. Any waiver of any provision of this Agreement will be
          effective only if in writing and signed by the Company.{'\n\n'}
          27.GOVERNING LAW{'\n'}
          This Agreement shall be governed by and construed in accordance with
          the laws of India, without regard to its conflict of law provisions
          and, subject to the arbitration provision, the exclusive jurisdiction
          of competent courts in Jaipur, India.{'\n\n'}
          If you have any questions regarding these Terms of Use, your rights
          and obligations arising from them, your use of the Platform and the
          Service, or any other related matter, please get in touch with our
          Support team at Support@kredpay.in{'\n\n'}
          28.Bharat Bill Payment{'\n'}
          Customer Convenience Fee (CCF):{'\n'}A Customer Convenience Fee (CCF)
          of ₹0 will be charged for services.{'\n'}
          Turnaround Time (TAT):{'\n'}
          The standard turnaround time for resolution of B Connect complaints is
          72 working hours from the time of registration.{'\n'}
          Account Deletion Policy:{'\n'}
          Upon receipt of a valid request from the customer for account
          deletion, the account will be deactivated in accordance with internal
          compliance procedures.{'\n'}
          If you have any questions regarding these Terms of Use, your rights
          and obligations arising from them, your use of the Platform and the
          Service, or any other related matter, please get in touch with our
          Support team at Support@kredpay.in or you can call us at
          +91-9797517555{'\n\n'}
        </Text>
      </ScrollView>
    </View>
  );
};

export default TermsConditionScreen;
