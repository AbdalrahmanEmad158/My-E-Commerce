import z from "zod";

 export  const RegistritionScehma = z.object({
            name:z.string().min(3,"Name must be at least 3 characters").max(15,'Name must be less than 15 characters'),
              email:z.string().min(1,'Email is required').email("email is Not Valid"),
              password:z.string().min(1,'password is required').regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                'Password must contain at least one letter small ,one letter capital, one number and one special character'),
              rePassword:z.string().min(1,'rePassword is required'),
            phone : z.string().regex(/^(\+20)?01[0125][0-9]{8}$/gm)
        }).refine((values)=> values.password===values.rePassword,
      {
        message :'Passwords do not match',
        path : ["rePassword"]
      })



       export  const LoginScehma = z.object({
           
            email:z.string().min(1,'Email is required').email("email is Not Valid"),
              password:z.string().min(1,'password is required').regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                'Password must contain at least one letter small ,one letter capital, one number and one special character'),
           
        })


        export  const ChangePasswordScehma =  z.object({
           
              currentPassword:z.string().min(1,'password is required').regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                'Password must contain at least one letter small ,one letter capital, one number and one special character'),

                password:z.string().min(1,'password is required').regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                'Password must contain at least one letter small ,one letter capital, one number and one special character'),

              rePassword:z.string().min(1,'rePassword is required'),
          
        }).refine((values)=> values.password===values.rePassword,
      {
        message :'Passwords do not match',
        path : ["rePassword"]
      })
      
      