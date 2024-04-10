"use client";
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
import { Textarea } from "@/components/ui/textarea";
import slug from "slug";
import { useRouter } from "next/navigation";
import { NewCategorySchema } from "@/lib/schema";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ImageUpload from "../ImageUpload";
import { useUploadThing } from "@/lib/uploadthing";

/***
 * id(auto)
 * title
 * slug(auto)
 * description
 * image
 *
 */

const NewCategoryForm = () => {
  const { startUpload } = useUploadThing("imageUploader");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [files, setFiles] = useState<File[]>([]);
  const form = useForm<z.infer<typeof NewCategorySchema>>({
    resolver: zodResolver(NewCategorySchema),
    defaultValues: {
      title: "",
      description: "",
      image: "",
    },
    mode: "all",
  });

  const onSubmit = async (formData: z.infer<typeof NewCategorySchema>) => {
    let uploadedImageUrl = formData.image;
    const categorySlug = slug(formData.title);

    if (files.length > 0) {
      const uploadedImages = await startUpload(files);
      if (!uploadedImages) return;

      uploadedImageUrl = uploadedImages[0].url;
      formData.image = uploadedImageUrl;
    }

    console.log("formData", {
      slug: categorySlug,
      ...formData,
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 mt-10 w-[80%] rounded-md shadow-md p-8 dark:bg-slate-700"
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
                  className="focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-slate-700"
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
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  rows={6}
                  className="focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-slate-700"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* image */}
        <FormField
          disabled={isPending}
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <ImageUpload
                  value={field.value}
                  onChange={(url) => field.onChange(url)}
                  setFiles={setFiles}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-4 items-center mt-8">
          <Button type="submit" disabled={isPending || !form.formState.isValid}>
            Create Category
          </Button>

          <Button type="button" onClick={() => router.back()}>
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default NewCategoryForm;
