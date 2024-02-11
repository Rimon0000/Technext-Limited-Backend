import { z } from "zod";

const createUserValidationSchema = z.object({
    body: z.object({
        id: z.number().optional(),
        firstName: z.string(),
        lastName: z.string(),
        maidenName: z.string().optional(),
        age: z.number().optional(),
        gender: z.string().optional(),
        email: z.string().email(),
        phone: z.string().optional(),
        username: z.string().optional(),
        password: z.string().optional(),
        birthDate: z.string().optional(), 
        image: z.string().url(),
        bloodGroup: z.string().optional(),
        height: z.number().optional(),
        weight: z.number().optional(),
        eyeColor: z.string().optional(),
        hair: z.object({
          color: z.string(),
          type: z.string(),
        }).optional(),
        domain: z.string().optional(),
        ip: z.string().optional(),
        address: z.object({
          address: z.string(),
          city: z.string(),
          coordinates: z.object({
            lat: z.number(),
            lng: z.number(),
          }).optional(),
          postalCode: z.string().optional(),
          state: z.string(),
        }),
        macAddress: z.string().optional(),
        university: z.string().optional(),
        bank: z.object({
          cardExpire: z.string(),
          cardNumber: z.string(),
          cardType: z.string(),
          currency: z.string(),
          iban: z.string(),
        }).optional(),
        company: z.object({
          address: z.object({
            address: z.string(),
            city: z.string(),
            coordinates: z.object({
              lat: z.number(),
              lng: z.number(),
            }),
            postalCode: z.string(),
            state: z.string(),
          }).optional(),
          department: z.string().optional(),
          name: z.string(),
          title: z.string().optional(),
        }),
        ein: z.string().optional(),
        ssn: z.string().optional(),
        userAgent: z.string().optional(),
        crypto: z.object({
          coin: z.string(),
          wallet: z.string(),
          network: z.string(),
        }).optional(),
      })
})


export const userValidations = {
    createUserValidationSchema,
}