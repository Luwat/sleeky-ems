export interface EmployeesData {
  _id: string;
  firstName: string;
  lastName: string;
  gender: string;
  emailAddress: string;
  physicalAddress: string;
  phoneNumber: string;
  emergencyPhoneNumber: string;
  bankName: string;
  bankAccountNumber: number;
  accountName: string;
  nextOfKinFullName: string;
  nextOfKinPhoneNumber: string;
  nextOfKinRelationship: string;
  employmentRole: string;
  employmentStartDate: string;
  dateOfBirth: string;
  educationalLevel: string;
}

export enum Gender {
  Male = "MALE",
  Female = "FEMALE",
}

export interface AuthData {
  email: string;
  password: string;
}