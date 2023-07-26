"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { signIn } from "next-auth/react";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import Link from "next/link";

export default function SignInForm() {
  const router = useRouter();

  // 1. Define your form schema.
  const formSchema = z.object({
    username: z.string().min(4, {
      message: "Username must be at least 4 characters.",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
  });

  // 2. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // 3. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    await signIn("login", {
      username: values.username,
      password: values.password,
      redirect: false,
    })
      .then((response) => {
        if (response?.error) {
          alert(response.error);
        } else {
          // successfully logged in so now redirect to the /admin area
          router.push("/admin");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row justify-between py-4">
          <div>
            <Button type="submit">Submit</Button>
          </div>
          <div>
            <Link href="/forgot-password">Forgot Your Password?</Link>
          </div>
        </div>
      </form>
    </Form>
  );
}
