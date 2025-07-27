"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  carrergoals: z
    .string()
    .min(2, { message: "Ho va ten phai co it nhat 2 ki tu" })
    .regex(/^[A-Za-z\s]+$/, {
      message:
        "Họ và tên chỉ được chứa chữ cái, không có số hoặc ký tự đặc biệt",
    })
    .max(50, { message: "Ho va ten qua dai" }),})
const CarrerGoals = () =>{
    const form = useForm<z.infer<typeof formSchema>>({
resolver: zodResolver(formSchema),
        mode: "onBlur",
        defaultValues:{
carrergoals: undefined,
        },
    });
      function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
return ( <div className="flex justify-center items-center">
 <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full max-w-[850px]"
        >
          <h1 className="mb-4 text-lg font-semibold">Muc tieu nghe nghiep</h1>
                <div className="overflow-hidden">
              <FormField
                control={form.control}
                name="carrergoals"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input className="max-w-[628px]" placeholder="Hay nhap muc tieu nghe nghiep" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}/>
                </div>
              </form>
              </Form>
    </div>)
};
export default CarrerGoals;
