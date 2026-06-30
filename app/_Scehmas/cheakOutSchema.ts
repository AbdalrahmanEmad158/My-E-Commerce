import z from "zod";

 export const cheakOutSchema = z.object({
         shippingAddress: z.object({
          details:z.string().min(10,'Address details must be at least 10 characters')
          .max(200,'Address details must be less than 200 characters'),
         phone : z.string().regex(/^(\+20)?01[0125][0-9]{8}$/gm,'Please enter a valid Egyptian phone number'),
         city:z.string().min(2,'City name must be at least 2 characters')
         .max(50,'City name must be less than 50 characters')
  })})