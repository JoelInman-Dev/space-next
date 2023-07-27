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
import { IAuthRegisterCredentials } from "@/interfaces/IAuth";
import { SHA1 } from "crypto-js";
import Link from "next/link";
import useShadcnToast from "@/hooks/UseShadcnToast";

export default function RegisterForm() {
  const router = useRouter();
  const { showToast } = useShadcnToast();

  // Define your form schema.
  const formSchema = z.object({
    username: z.string().min(4, {
      message: "Username must be at least 4 characters.",
    }),
    fullName: z.string().min(4, {
      message: "Please enter your Full Name.",
    }),
    email: z.string().email({
      message: "Please enter a valid email.",
    }),

    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
  });

  // Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      fullName: "",
      email: "",
      password: "",
    },
  });

  // Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const payload: IAuthRegisterCredentials = {
      username: values.username,
      name: values.fullName,
      email: SHA1(values.email).toString(),
      password: SHA1(values.password).toString(),
    };
    // post register details to the api
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    // get the response
    const response = await res.json();
    showToast({
      title: "New User: " + values.username,
      description: "New User Created, logging you in...",
    });
    // if the response is true then sign in and redirect to the admin area
    if (response) {
      await signIn("login", {
        username: values.username,
        password: values.password,
        redirect: false,
      });
      router.push("/admin");
    } else {
      // if the response is false then display the error message
      showToast({
        title: "Registration Error",
        description: response.message,
      });
    }
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
                <Input type="text" placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Your Full Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Full Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Email Address</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Email@Address.com"
                  {...field}
                />
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
            <Button variant={"secondary"} type="button" asChild>
              <Link href="/">Back to Login</Link>
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
