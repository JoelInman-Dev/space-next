"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import * as AuthService from "@/services/Auth-Service";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function ForgotPasswordForm() {
  const router = useRouter();

  // 1. Define your form schema.
  const formSchema = z.object({
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
  });

  // 2. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 3. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await AuthService.forgotPassword(values.email);

    if (response.status) {
      router.push("/");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="your email address"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Your Email Address should be entered here
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row justify-between py-4">
          <div>
            <Button type="submit">Submit</Button>
          </div>
          <div>
            <Button className="bg-secondary hover:bg-secondary/90">
              <Link href="/">Back to Login</Link>
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
