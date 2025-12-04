const express = require("express");
const router = express.Router();
const prisma = require("../prisma");
const z = require('zod');


const FormSchema = z.object({
    name: z
        .string()
        .min(3, { message: "Name must be at least 3 characters long." }),
    
    email: z
        .string()
        .email({ message: "Please provide a valid email address." }),
    
    phone: 
     z
        .preprocess(
            (a) => String(a).replace(/\D/g, ''),
            z.string()
             .length(10, { message: "Phone number must be exactly 10 digits." }) // Checks for exactly 10 characters
             .regex(/^\d+$/, { message: "Phone number must contain only digits." }) // Checks that all 10 characters are digits
        ),
});


router.post("/", async(req,res)=>{
    try{
   const validatedData = FormSchema.parse(req.body);

    const { course } = req.body;

    const newForm = await prisma.form.create({
        data:{
            ...validatedData,
            course,
        }
    })
    
    res.status(201).json({
        success: true,
        message: "Form submitted Successfully",
        data: newForm
    })


    }catch (error) {

      if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        errors: error.errors,
      });
    }

    console.error("Form not submitted:", error);
    res.status(500).json({
      success: false,
      message: "Server error while submitting form",
    });
  }
})

router.get("/", async(req,res)=>{
    try{
    const forms =  await prisma.form.findMany({
        orderBy: {
            submittedAt: "desc",
        }
    })
    res.json({
        success: true,
        data: forms, 
    })
    } catch(error){
     console.log("Error in getting enquires", error)
    }
})

module.exports = router; 