import React, { useEffect } from 'react'
import { Textarea } from '../../../components/ui/textarea'
import { Button } from '../../../components/ui/button'
import { usePostForumRepliesMutation } from '@/store/slice/reply.service'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { replySchema } from '@/lib/schema'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'


const ForumReply = ({ post_id } : { post_id:number }) => {

    const [postReply, { error }] = usePostForumRepliesMutation()

    const form = useForm<z.infer<typeof replySchema>>({
        resolver: zodResolver(replySchema),
        defaultValues: {
            content: "",
        },
    })

    async function onSubmit(values: z.infer<typeof replySchema>) {
        try {
            const response = await postReply({
                post_id: post_id,
                content: values.content,
            }).unwrap()
            form.reset()
        }
        catch (error) {
            console.log("Error Login : " + error)
        }
    }

    useEffect(() => {
        if (error) {
            console.error("API Error:", error);
        }
    }, [error])

    return (
        <div>
            <h1>Beri Komentar :</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4 items-start '>
                    <FormField
                        control={form.control}
                        name="content"  
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea placeholder="Write your comment here..." className="h-32 min-w-[100vh]" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type='submit'>
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default ForumReply