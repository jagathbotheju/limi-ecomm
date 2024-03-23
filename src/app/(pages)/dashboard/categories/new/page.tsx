"use client";
import { NewCategorySchema } from "@/lib/schema";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Heading from "@/components/dashboard/Heading";
import { Textarea } from "@/components/ui/textarea";
import slug from "slug";

/***
 * id
 * title
 * slug
 * description
 * image
 *
 */

const NewCategoryPage = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof NewCategorySchema>>({
    resolver: zodResolver(NewCategorySchema),
    defaultValues: {
      title: "",
      description: "",
    },
    mode: "all",
  });

  const onSubmit = (formData: z.infer<typeof NewCategorySchema>) => {
    const categorySlug = slug(formData.title);
    console.log("formData", {
      slug: categorySlug,
      ...formData,
    });
  };

  return (
    <div className="flex flex-col container">
      <Heading title="New Category" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 mt-10 w-[40%] rounded-md shadow-md p-8"
          noValidate
        >
          {/* title */}
          <FormField
            disabled={isPending}
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    className="focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-slate-900"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* description */}
          <FormField
            disabled={isPending}
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Textarea
                    className="focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-slate-900"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="mt-8"
            type="submit"
            disabled={isPending || !form.formState.isValid}
          >
            Save
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default NewCategoryPage;
