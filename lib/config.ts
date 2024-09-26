import { z } from "zod";

export const BASE_URL = "https://employee-management-api-xj3a.onrender.com"

export const formSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    gender: z.string(),
    emailAddress: z.string().email(),
    physicalAddress: z.string(),
    phoneNumber: z.string(),
    emergencyPhoneNumber: z.string(),
    bankName: z.string(),
    bankAccountNumber: z.coerce.number(),
    accountName: z.string(),
    nextOfKinFullName: z.string(),
    nextOfKinPhoneNumber: z.string(),
    nextOfKinRelationship: z.string(),
    employmentRole: z.string(),
    employmentStartDate: z.string(),
    dateOfBirth: z.string(),
    educationalLevel: z.string(),
  });