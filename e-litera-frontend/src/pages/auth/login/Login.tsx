import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import React from 'react'
import { Link, useNavigate } from 'react-router'
import { z } from 'zod'
import Loading from '@/components/loading/loading'
import { PasswordInput } from '@/components/ui/password-input'
import { MdOutlineEmail } from "react-icons/md";
import { useLoginMutation,useUserQuery  } from '@/store/slice/auth.service'
import { loginSchema } from '@/lib/schema'
import NavAuth from '@/components/ui/auth/nav-auth'

const Login = () => {

  const [login] = useLoginMutation()
  const { data: user, refetch } = useUserQuery()

    const form = useForm<z.infer<typeof loginSchema>>({
      resolver: zodResolver(loginSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    })

     async function onSubmit(values: z.infer<typeof loginSchema>) {
        try {
          await login(values).unwrap()
          console.log("login sukses")
          const response = await refetch()
          console.log("User Data:", response.data)
        } catch (error) {
          console.error("Registration failed:", error)
        }
      }
  
  return (
    <div className='min-h-screen'>
      <NavAuth />
      <div className='flex flex-col justify-center items-center min-h-screen'>
              <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input suffix={<MdOutlineEmail className='text-purple-600'/>} type='email' placeholder="Email" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <PasswordInput placeholder="Password" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className='flex items-center gap-16'>
                  <Button type="submit" className='bg-purple-500 hover:bg-purple-700'>Submit</Button>
                  <Link to={'/register'}>
                      <span className='font-semibold'>Dont Have an Account?</span>
                  </Link>
                </div>
              </form>
            </Form>
        </div>
    </div>
  )
}

export default Login

