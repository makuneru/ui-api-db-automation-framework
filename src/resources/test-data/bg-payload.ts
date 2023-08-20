export const securityTokenPayload = {
  getSecurityToken: {
    getSecurityTokenRequest: {
      version: '4.5',
      billingProgramId: 'SERVICEBENCH-LICENSE-AGENT-US',
      appAuthKey: '09cca05607d0338d6de58fd4dce1cd89',
      txnAmt: '0',
      currency: 'USD',
      captureDelayMinutes: 480,
      txnType: 'PCITOKEN',
      txnReference: 'SERVICEBENCH-LICENSE-AGENT-US',
      txnComment1: 'SERVICEBENCH-LICENSE-AGENT-US',
      txnComment2: 'PORTAL|WEB|en-US|Retail|Asurion Mobility',
      liveMinutes: 60,
      customerId: null,
      sourceReferenceNumber: null,
      rtnURL: ' '
    }
  }
};
const dateToday = new Date().toISOString().split('T')[0];
export const mdnPayload = {
  CreateEnrollmentParameters: {
    EnrollmentSeverity: 'none',
    TransactionDate: dateToday,
    ClientAccountType: 'INDVL',
    ClientAccountStatus: 'ACTV',
    ClientAccountStartDate: dateToday,
    ClientChannelId: '4ECA222A37B63627E0536138060AB356',
    AccountNumber: '',
    PaymentResp: 'IRU',
    AccountAttributes: {
      StagingPreference: 'XML And DB',
      Mdn: '',
      MdnDigits: '',
      IvrEligibleMdn: false,
      MultiDevicePlan: false,
      Pin: '1234',
      WarrantyDate: '',
      Ssn: '',
      TaxID: ''
    },
    AgreementList: [
      {
        Agreement: {
          AgreementStatus: 'ACTV',
          ClientProductSKUNumber: 'LP1BTIER1',
          SubscriptionNumber: '',
          ExternalReferenceId: '',
          AgreementPurchase: { RetailSKU: 'LP1BTIER1', PurchaseDate: '' },
          Address: {
            BusinessName: '',
            AddressLine1: '5970 Hicks Rd',
            AddressLine2: '',
            AddressLine3: '',
            Country: 'US',
            City: 'Naples',
            State: 'NY',
            PostalCode: '14512',
            AddressUsage: { UsageType: 'BLNG', StartDate: '' }
          },
          CustomerList: [
            {
              Customer: {
                FullName: 'Jessica ATT',
                LastName: 'ATT',
                FirstName: 'Jessica',
                PreferredLanguage: 'en-US',
                CustomerRoleList: [{ CustomerRole: { CustomerRoleType: 'PRMRY', StartDate: '' } }]
              }
            }
          ],
          AssetList: [
            {
              Asset: {
                AssetStatus: 'ACTV',
                AssetCondition: 'NEW',
                AssetStartDate: dateToday,
                PurchaseDate: dateToday,
                AssetSubscriptionNumber: '',
                MobileDeviceNumber: '',
                MobileEquipmentId: '',
                AssetInstance: 'ENROLLED',
                CountryCallingCode: '',
                AssetSKUNumber: '0209TEST_SKU',
                AssetPurchase: {
                  RetailSKU: 'LP1BTIER1',
                  RetailMake: 'Apple',
                  RetailModel: 'iPhone 11 128GB',
                  AssetColor: 'Black',
                  SalesPersonName: 'ASURION',
                  StoreCode: 'Z0066',
                  Region: '',
                  PurchaseDate: ''
                },
                AgreementAssetAssociation: { StartDate: dateToday },
                AssetAttributeList: [
                  {
                    AssetAttribute: {
                      AttributeStartDate: dateToday,
                      AttributeValueId: '',
                      AttributeId: '',
                      AttributeValue: ''
                    }
                  }
                ]
              }
            }
          ],
          ContactPointList: [
            {
              ContactPoint: {
                ContactPointType: 'EMAIL',
                EmailAddress: 'test@test.com',
                ContactPointStatus: 'ACTV',
                CountryCallingCode: '',
                PhoneNumber: '',
                ContactPointUsage: { ReferenceType: 'AGRMNT', UsageType: 'DFLT', IsPrimary: true }
              }
            },
            {
              ContactPoint: {
                ContactPointType: 'MOBILE',
                ContactPointStatus: 'ACTV',
                CountryCallingCode: '',
                PhoneNumber: '',
                ContactPointUsage: { ReferenceType: '', UsageType: '', IsPrimary: false }
              }
            }
          ]
        }
      }
    ]
  }
};
