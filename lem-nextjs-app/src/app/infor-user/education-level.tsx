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
  educationlevel: z
    .string()
    .min(2, { message: "Ho va ten phai co it nhat 2 ki tu" })
    .regex(/^[A-Za-z\s]+$/, {
      message:
        "Họ và tên chỉ được chứa chữ cái, không có số hoặc ký tự đặc biệt",
    })
    .max(50, { message: "Ho va ten qua dai" }),
  degree: z
    .string()
    .regex(/^\d+$/, { message: "So dien thoai chỉ được chứa chữ số" })
    .min(10)
    .max(11),
  additionalCertificates: z
    .string()
    .min(2, { message: "Ho va ten phai co it nhat 2 ki tu" })
    .regex(/^[A-Za-z\s]+$/, {
      message:
        "Họ và tên chỉ được chứa chữ cái, không có số hoặc ký tự đặc biệt",
    })
    .max(50, { message: "Ho va ten qua dai" }),
  professionalskill: z.enum(["Nam", "Nu"]),
  keyAccompl: z
    .string()
    .min(4)
    .regex(/^[A-Za-z\s]+$/, {
      message: "Chỉ được chứa chữ cái, không có số hoặc ký tự đặc biệt",
    }),
  otherActions: z.string().regex(/^[A-Za-z\s]+$/, {
    message: "Họ và tên chỉ được chứa chữ cái, không có số hoặc ký tự đặc biệt",
  }),
});
const EducationLevel = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      educationlevel: undefined,
      degree: undefined,
      professionalskill: undefined,
      keyAccompl: undefined,
      otherActions: undefined,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="flex justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 w-full max-w-[850px] mt-4"
        >
          <h1 className="mb-4 text-lg font-semibold">Trinh do hoc van</h1>
          <div className="flex gap-4">
            <div className="flex-col space-y-2">
              <FormField
                control={form.control}
                name="educationlevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Trinh do hoc van</FormLabel>
                    <FormControl>
                      <Input
                        className=" max-w-[250px] "
                        placeholder="12/12"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="professionalskill"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ki nang ca nhan</FormLabel>
                    <FormControl>
                      <Input
                        className=" max-w-[250px] "
                        placeholder="front-end, back-end ..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex-col space-y-2">
              <FormField
                control={form.control}
                name="degree"
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
                name="keyAccompl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Thanh tich noi bat</FormLabel>
                    <FormControl>
                      <Input placeholder="Top 1 boi loi toan quoc" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex-col space-y-2">
              <FormField
                control={form.control}
                name="additionalCertificates"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Chung chi khac</FormLabel>
                    <FormControl>
                      <Input placeholder="SRF,IELTS,TOEIC..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="otherActions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hoat dong khac</FormLabel>
                    <FormControl>
                      <Input placeholder="tinh nguyen , hien mau ..." {...field} />
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
export default EducationLevel;
