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
import { IAuthResetPasswordCredentials } from "@/interfaces/IAuth";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import P from "../typography/p";

export default function ProfileForm({ user }: { user: IUser }) {
  const { showToast } = useShadcnToast();
  const router = useRouter();
  const updated = user.updated;
  console.log("updated: ", updated);

  // Define your form schema.
  const formSchema = z
    .object({
      username: z.string().min(4, {
        message: "Username must be at least 4 characters.",
      }),
      fullName: z.string().min(4, {
        message: "Please enter your Full Name.",
      }),
      newPassword: z.string().min(8, {
        message: "Password must be at least 6 characters.",
      }),
      confirmPassword: z.string(),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
      message: "Passwords do not match.",
      path: ["confirmPassword"],
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
    const payload: IAuthResetPasswordCredentials = {
      encryptedEmail: user.email,
      newPassword: values.newPassword,
    };

    // post the reset password payload to the api
    const res = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const response = await res.json();
    console.log("response onSubmit: ", response);

    if (response.message) {
      showToast({
        title: "Updating Profile: Success",
        description: "Thanks for updating your profile",
      });
      router.push("/admin");
    } else {
      showToast({
        title: "Updating Profile: Error",
        description: "There was an error updating your profile",
      });
    }
    return response;
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
          <P>Last Updated:</P>
        </div>
      </form>
    </Form>
  );
}
