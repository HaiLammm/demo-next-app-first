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
  username: z
    .string()
    .min(2, { message: "Ho va ten phai co it nhat 2 ki tu" })
    .regex(/^[A-Za-z]+$/, {
      message:
        "Họ và tên chỉ được chứa chữ cái, không có số hoặc ký tự đặc biệt",
    })
    .max(50, { message: "Ho va ten qua dai" }),
  phonenumber: z
    .string()
    .regex(/^\d+$/, { message: "So dien thoai chỉ được chứa chữ số" })
    .min(10)
    .max(11),
  birthday: z
    .date()
    .max(new Date(), { message: "Ngày sinh không được là ngày tương lai" })
    .refine(
      (date) => {
        const today = new Date();
        const birthDate = new Date(date);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (
          monthDiff < 0 ||
          (monthDiff === 0 && today.getDate() < birthDate.getDate())
        ) {
          age--;
        }
        return age >= 18;
      },
      { message: "Bạn phải từ 18 tuổi trở lên" },
    ),
  sex: z.enum(["Nam", "Nu"]),
  hometown: z
    .string()
    .min(4)
    .regex(/^[A-Za-z]+$/, {
      message: "Chỉ được chứa chữ cái, không có số hoặc ký tự đặc biệt",
    }),
  nationality: z
    .string()
    .regex(/^[A-Za-z]+$/, {
      message:
        "Họ và tên chỉ được chứa chữ cái, không có số hoặc ký tự đặc biệt",
    })
    .regex(/^[A-Za-z]+$/, {
      message:
        "Họ và tên chỉ được chứa chữ cái, không có số hoặc ký tự đặc biệt",
    })
    .regex(/^[A-Za-z]+$/, {
      message:
        "Họ và tên chỉ được chứa chữ cái, không có số hoặc ký tự đặc biệt",
    }),
});
const UserInfor = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      username: "",
      phonenumber: "0835495889",
      birthday: undefined,
      sex: "Nam",
      hometown: "Buon Ma Thuot",
      nationality: "Viet Nam",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ho va ten</FormLabel>
                <FormControl>
                  <Input placeholder="Nhap ho va ten o day" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phonenumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>So dien thoai</FormLabel>
                <FormControl>
                  <Input placeholder="Nhap ho va ten o day" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="birthday"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ngay thang nam sinh</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    value={
                      field.value ? field.value.toISOString().split("T")[0] : ""
                    }
                    onChange={(e) => {
                      const value = e.target.value
                        ? new Date(e.target.value)
                        : undefined;
                      field.onChange(value);
                    }}
                    onBlur={field.onBlur}
                    name={field.name}
                    ref={field.ref}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sex"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gioi tinh</FormLabel>
                <FormControl>
                  <select {...field} className="border rounded-md p-2 w-full">
                    <option value={"Nam"}>Nam</option>
                    <option value={"Nu"}>Nu</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hometown"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Que Quan</FormLabel>
                <FormControl>
                  <Input placeholder="Nhap que quan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nationality"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quoc tich</FormLabel>
                <FormControl>
                  <Input placeholder="Quoc tich" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>

      <Button type="submit">Submit</Button>
    </div>
  );
};
export default UserInfor;
