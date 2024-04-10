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
import { useRouter } from "next/navigation";
import { NewCouponSchema } from "@/lib/schema";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuidv4 } from "uuid";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import Loading from "../Loading";
import slug from "slug";

/***
 * id(auto)
 * title
 * code(auto)
 * expiryDate
 *
 */

const NewCouponForm = () => {
  const router = useRouter();
  const [mount, setMount] = useState(false);
  const [calOpen, setCalOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof NewCouponSchema>>({
    resolver: zodResolver(NewCouponSchema),
    defaultValues: {
      title: "",
      code: "",
      expiryDate: new Date(),
    },
    mode: "all",
  });

  const onSubmit = async (formData: z.infer<typeof NewCouponSchema>) => {
    console.log("formData", {
      ...formData,
    });
  };

  const generateCode = () => {
    const expiryDate = form.getValues().expiryDate;
    const fDate = format(new Date(expiryDate), "ddMMyyyy");
    const titleSlug = slug(form.getValues().title).toUpperCase();
    const couponCode = `${titleSlug}-${fDate}`;

    form.setValue("code", couponCode);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-full rounded-md shadow-md p-8 dark:bg-slate-700 mt-10"
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
                  className="focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-slate-700 uppercase"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* date */}
        <FormField
          disabled={isPending}
          control={form.control}
          name="expiryDate"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>ExpiryDate</FormLabel> */}
              <FormControl>
                <FormField
                  control={form.control}
                  name="expiryDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col mt-10">
                      <FormLabel>Expiry Date</FormLabel>
                      <Popover open={calOpen} onOpenChange={setCalOpen}>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[240px] pl-3 text-left font-normal dark:bg-slate-700",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={(value) => {
                              field.onChange(value);
                              setCalOpen(false);
                              generateCode();
                            }}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* code */}
        <FormField
          disabled={isPending}
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Code</FormLabel>
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

        <div className="flex gap-4 items-center mt-8">
          <Button type="submit" disabled={isPending || !form.formState.isValid}>
            Create Coupon
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default NewCouponForm;
