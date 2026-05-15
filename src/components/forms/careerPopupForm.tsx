'use client';
import Image from "next/image"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Data from "@/api/data.json"
import { useEffect } from "react";

// 1. Schema
const formSchema = z.object({
 fullName: z.string().min(2, "Full name is required"),
 email: z.string().email("Invalid email address"),
 phone: z.string().min(10, "Phone number must be at least 10 digits"),
 position: z.string().min(2, "Service is required"),
 experience: z.string().min(1, "Experience is required"),
})

type Props = {
 formTitle?: string,
 orangeText?: string,
 description?: string,
 position?: string,
}

type FormData = z.infer<typeof formSchema>
const CareerPopupForm = ({ formTitle, orangeText, description, position }: Props) => {
 const {
  register,
  handleSubmit,
  formState: { errors, isSubmitting },
  reset,
  setValue,
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
 useEffect(() => {
  if (position) {
   setValue("position", position)
  }
 }, [position, setValue])
 return (
  <div className="flex max-md:flex-col-reverse items-center flex-wrap gap-y-5 -mx-3 overflow-hidden relative before:absolute before:size-28 before:bg-primary/20 before:rounded-full before:-right-6 before:-bottom-8 py-4">
   <div className="form-img-wrapper w-full md:w-1/2 px-3">
    <Image
     src={'/images/form-bg-image.png'}
     width={400}
     height={500}
     alt="Form Image"
     className="w-full"
    />
   </div>
   <div className='w-full md:w-1/2 popup-form form-wrapper px-3'>
    {(formTitle || description) &&
     <div className="mb-6 max-w-83">
      <h2 className="h4 mb-0"><span className="text-primary">{orangeText}</span> {formTitle}</h2>
      {description && (
       <div
        className="text-sm"
        dangerouslySetInnerHTML={{ __html: description }}
       />
      )}
     </div>
    }
    <form onSubmit={handleSubmit(onSubmit)}>
     <div className="career-form">
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
      {/* Phone */}
      <div className="form-group">
       <input
        type="text"
        placeholder="How Many Experience You Have?"
        className="form-control"
        {...register("experience")}
       />
       {errors.experience && (
        <p className="text-red-500 text-sm">{errors.experience.message}</p>
       )}
      </div>
      {/* Phone */}
      <div className="form-group">
       <input
        type="text"
        className="form-control text-gray-400!"
        {...register("position")}
        readOnly
       />
      </div>
     </div>

     {/* Button */}
     <div className="mt-8 px-2">
      <button
       type="submit"
       disabled={isSubmitting}
       className="btn btn-primary icon before:content-['\e904'] rounded-md font-semibold"
      >
       {isSubmitting ? "Sending..." : "Apply Now"}
      </button>
     </div>
    </form>
   </div>
  </div>
 )
}

export default CareerPopupForm;