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
  salary: z
    .string()
    .min(2, { message: "Ho va ten phai co it nhat 2 ki tu" })
    .regex(/^[A-Za-z\s]+$/, {
      message:
        "Họ và tên chỉ được chứa chữ cái, không có số hoặc ký tự đặc biệt",
    })
    .max(50, { message: "Ho va ten qua dai" }),
  workplace: z
    .string()
    .regex(/^\d+$/, { message: "So dien thoai chỉ được chứa chữ số" })
    .min(10)
    .max(11),
  occupation: z.string().regex(/^[A-Za-z\s]+$/, {
    message: "Họ và tên chỉ được chứa chữ cái, không có số hoặc ký tự đặc biệt",
  }),

  format: z.enum(["Online", "Offline"]),
  experience: z
    .string()
    .min(4)
    .regex(/^[A-Za-z\s]+$/, {
      message: "Chỉ được chứa chữ cái, không có số hoặc ký tự đặc biệt",
    }),
  level: z.string().regex(/^[A-Za-z\s]+$/, {
    message: "Họ và tên chỉ được chứa chữ cái, không có số hoặc ký tự đặc biệt",
  }),
});
const CarrerInfor = () =>{
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      salary: undefined,
      workplace: undefined,
      occupation: undefined,
      format: undefined,
      experience: undefined,
      level: undefined,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="flex justify-center items-center mt-6">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 w-full max-w-[850px]"
        >
          <h1 className="mb-4 text-lg font-semibold">Thông tin nghe nghiep</h1>
          <div className="flex gap-4">
            <div className="flex-col space-y-2">
              <FormField
                control={form.control}
                name="salary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Muc luong</FormLabel>
                    <FormControl>
                      <Input className=" max-w-[250px] "placeholder="VND" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="format"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hinh thuc</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="border rounded-md p-2 w-full  max-w-[250px] "
                      >
                        <option value={"Online"}>Online</option>
                        <option value={"Offline"}>Offline</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex-col space-y-2">
              <FormField
                control={form.control}
                name="workplace"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Noi lam viec</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kinh nghiem </FormLabel>
                    <FormControl>
                      <Input placeholder="So nam lam viec" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex-col space-y-2">
              <FormField
                control={form.control}
                name="occupation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nganh nghe</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="" {...field}
                     />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />{" "}
              <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cap bac hien tai</FormLabel>
                    <FormControl>
                      <Input placeholder="nhan vien , quan li ...." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default CarrerInfor;
