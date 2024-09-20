export type EmployeesData = {
    _id?: string;
    firstName: string;
    lastName: string;
    gender: Gender;
    emailAddress: string;
    physicalAddress: string;
    phoneNumber: string;
    emergencyPhoneNumber: string;
    bankName: string;
    bankAccountNumber: string;
    accountName: string;
    nextOfKinFullName: string;
    nextOfKinPhoneNumber: string;
    nextOfKinRelationship: string;
    employmentRole: string;
    employmentStartDate: string;
    dateOfBirth: string;
    educationalLevel: string;
  };

  export const enum Gender  {
    MALE = "MALE",
    FEMALE =  "FEMALE",
  }