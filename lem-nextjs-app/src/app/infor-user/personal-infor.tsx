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
export const formSchemaPersonal = z.object({
  username: z
    .string()
    .min(2, { message: "Ho va ten phai co it nhat 2 ki tu" })
    .regex(/^[A-Za-z\s]+$/, {
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
    .regex(/^[A-Za-z\s]+$/, {
      message: "Chỉ được chứa chữ cái, không có số hoặc ký tự đặc biệt",
    }),
  nationality: z.string().regex(/^[A-Za-z\s]+$/, {
    message: "Họ và tên chỉ được chứa chữ cái, không có số hoặc ký tự đặc biệt",
  }),
});
// Định nghĩa kiểu cho props
interface PersonalInforProps {
  isEditing: boolean;
  data: {
    username?: string;
    phonenumber?: string;
    birthday?: Date;
    sex?: "Nam" | "Nu";
    hometown?: string;
    nationality?: string;
  };
  onSave: (data: z.infer<typeof formSchemaPersonal>) => void;
}
const PersonalInfor = ({isEditing , data , onSave} : PersonalInforProps ) => {
  const form = useForm<z.infer<typeof formSchemaPersonal>>({
    resolver: zodResolver(formSchemaPersonal),
    mode: "onBlur",
    defaultValues: {
 username: data.username,
      phonenumber: data.phonenumber,
      birthday: data.birthday,
      sex: data.sex,
      hometown: data.hometown,
      nationality: data.nationality,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchemaPersonal>) {
    console.log(values);
        onSave(values);
  }
  return (
    <div className="flex justify-center items-center mt-6">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 w-full max-w-[850px]"
        >
          <h1 className="mb-4 text-lg font-semibold">Thông tin cá nhân</h1>
          <div className="flex gap-4">
            <div className="flex-col space-y-2">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ho va ten</FormLabel>
                    <FormControl>
                      <Input className=" max-w-[250px] "placeholder="Nhap ho va ten o day" {...field} disabled = {!isEditing} />
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
                      <select
                        {...field} disabled = {!isEditing}
                        className="border rounded-md p-2 w-full  max-w-[250px] "
                      >
                        <option disabled = {!isEditing} value={"Nam"}>Nam</option>
                        <option disabled = {!isEditing} value={"Nu"}>Nu</option>
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
                name="phonenumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>So dien thoai</FormLabel>
                    <FormControl>
                      <Input placeholder="Nhap ho va ten o day" {...field} disabled = {!isEditing} />
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
                      <Input placeholder="Nhap que quan" {...field} disabled = {!isEditing} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex-col space-y-2">
              <FormField
                control={form.control}
                name="birthday"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ngay thang nam sinh</FormLabel>
                    <FormControl>
                      <Input
                        type="date" disabled = {!isEditing}
                        value={
                          field.value
                            ? field.value.toISOString().split("T")[0]
                            : ""
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
              />{" "}
              <FormField
                control={form.control}
                name="nationality"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quoc tich</FormLabel>
                    <FormControl>
                      <Input placeholder="Quoc tich" {...field} disabled = {!isEditing} />
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
export default PersonalInfor;
