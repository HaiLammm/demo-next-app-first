"use client";
import CarrerGoals from "./carrer-goals";
import CarrerInfor from "./carrer-infor";
import EducationLevel from "./education-level";
import PersonalInfor from "./personal-infor";
import { useState } from "react";
import { formSchemaPersonal } from "./personal-infor";
import z from "zod";
import  Image  from "next/image";
import { Button } from "@/components/ui/button";
const InforUser = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        username: "Lương Hải Lâm",
        phonenumber: "0987654321",
        birthday: new Date("2001-12-07"),
        sex: "Nam",
        hometown: "Hà Nội",
        nationality: "Việt Nam",
    });
    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };
    const handleSave = (updatedData: z.infer<typeof formSchemaPersonal>) => {
        setFormData((prevData) => ({ ...prevData, ...updatedData }));
        setIsEditing(false);
    };
    return (
        
      <div className="border-gray-50 justify-center items-center min-h-screen max-w-[1520px] ml-72 " > 
<div style={{marginLeft: '320px'}} className="  p-4 flex items-center justify-between max-w-[650px]">
      <div className="flex items-center space-x-4">
        <div className="w-20 h-20">
          <Image
            src="/lem.jpg" 
            alt="User avatar"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
        <span className="text-lg font-medium">Luong Hai Lam</span>
      </div>
      <button  onClick={handleEditToggle} className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-100 w-30 ">
        {isEditing ? "Lưu" : "Chỉnh sửa"}
      </button>
    </div>
            
            <PersonalInfor
                isEditing={isEditing}
                data={formData}
                onSave={handleSave}
            />

            <CarrerGoals />
            <CarrerInfor />

            <EducationLevel />
            <button onClick={handleEditToggle}>
                          </button>
        </div>
    );
};
export default InforUser;
