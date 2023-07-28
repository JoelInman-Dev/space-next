"use client";
import useShadcnToast from "@/hooks/UseShadcnToast";
import { IUser } from "@/nextauth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { IAuthProfileCredentials } from "@/interfaces/IAuth";
import { SHA1 } from "crypto-js";
import { Button } from "../ui/button";

export default function ProfileForm({ user }: { user: IUser }) {
  const { showToast } = useShadcnToast();

  // Define your form schema.
  const formSchema = z.object({
    username: z.string().min(4, {
      message: "Username must be at least 4 characters.",
    }),
    fullName: z.string().min(4, {
      message: "Please enter your Full Name.",
    }),
    newPassword: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
    confirmPassword: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
  });

  // Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: user?.username || "",
      fullName: user?.name || "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  // Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const payload: IAuthProfileCredentials = {
      username: values.username,
      name: values.fullName,
      email: user?.email || "",
      password: SHA1(values.newPassword).toString(),
    };
    console.log(payload);

    // // post profile update details to the api
    // const res = await fetch("/api/auth/updateProfile", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(payload),
    // });
    // // get the response
    // const response = await res.json();
    showToast({
      title: "Updating Profile: Success",
      description: "Thanks for updating your profile",
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
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">New Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="type a new Password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="confirm your new Password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row justify-between py-4">
          <div>
            <Button type="submit">Update</Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
