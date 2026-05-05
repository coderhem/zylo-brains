'use client';
import Image from "next/image"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

// 1. Schema
const formSchema = z.object({
 fullName: z.string().min(2, "Full name is required"),
 email: z.string().email("Invalid email address"),
 phone: z.string().min(10, "Phone number must be at least 10 digits"),
})

type FormData = z.infer<typeof formSchema>
const PopupForm = (props: any) => {
 const {
  register,
  handleSubmit,
  formState: { errors, isSubmitting },
  reset,
 } = useForm<FormData>({
  resolver: zodResolver(formSchema),
 })

 const onSubmit = async (data: FormData) => {
  console.log("Form Data:", data)

  // simulate API call
  await new Promise((res) => setTimeout(res, 1000))

  reset()
  alert("Form submitted successfully!")
 }

 return (
  <div className="flex max-md:flex-col-reverse items-center flex-wrap gap-y-5 -mx-3 overflow-hidden relative before:absolute before:size-28 before:bg-primary/20 before:rounded-full before:-right-6 before:-bottom-8 py-10">
   <div className="w-full md:w-1/2 px-3">
    {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, distinctio. Deleniti eius odio ipsam quos minus corporis voluptate facilis, enim eveniet ipsa doloremque nostrum corrupti eaque! Numquam in eum laboriosam.</p> */}
    <Image
     src={'/images/form-bg-image.png'}
     width={400}
     height={500}
     alt="Form Image"
     className="w-full"
    />
   </div>
   <div className='w-full md:w-1/2 popup-form form-wrapper px-3'>
    <div className="mb-6 max-w-80">
     <h2 className="h4 mb-0"><span className="text-primary">Join & Book</span> Your Seat Now</h2>
     <p>Take the first step toward your success. Reserve your seat and start your journey with us.</p>
    </div>
    {/* <form action="">
     <div className="form-group">
      <input type="text" placeholder='Full Name' name='fullName' className='form-control' />
     </div>
     <div className="form-group">
      <input type="email" placeholder='Email Address' name='email' className='form-control' />
     </div>
     <div className="form-group">
      <input type="text" placeholder='Phone Number' name='phone' className='form-control' />
     </div>
     <div className="mt-8 px-2">
      <button className="btn btn-primary icon before:content-['\e904'] rounded-md">Submit</button>
     </div>
    </form> */}
    <form onSubmit={handleSubmit(onSubmit)}>
     {/* Full Name */}
     <div className="form-group">
      <input
       type="text"
       placeholder="Full Name"
       className="form-control"
       {...register("fullName")}
      />
      {errors.fullName && (
       <p className="text-red-500 text-sm">{errors.fullName.message}</p>
      )}
     </div>

     {/* Email */}
     <div className="form-group">
      <input
       type="email"
       placeholder="Email Address"
       className="form-control"
       {...register("email")}
      />
      {errors.email && (
       <p className="text-red-500 text-sm">{errors.email.message}</p>
      )}
     </div>

     {/* Phone */}
     <div className="form-group">
      <input
       type="text"
       placeholder="Phone Number"
       className="form-control"
       {...register("phone")}
      />
      {errors.phone && (
       <p className="text-red-500 text-sm">{errors.phone.message}</p>
      )}
     </div>

     {/* Button */}
     <div className="mt-8 px-2">
      <button
       type="submit"
       disabled={isSubmitting}
       className="btn btn-primary icon before:content-['\e904'] rounded-md font-semibold"
      >
       {isSubmitting ? "Sending..." : "Send Inquery"}
      </button>
     </div>
    </form>
   </div>
  </div>
 )
}

export default PopupForm