"use client";
import CarrerGoals from "./carrer-goals";
import CarrerInfor from "./carrer-infor";
import EducationLevel from "./education-level";
import PersonalInfor from "./personal-infor";
import { useState } from "react";
const InforUser = () => {
    const [isEditing, setIsEditing] = useState(false);
const [formData, setFormData] = useState({
    username: "Lương Hải Lâm",
    phonenumber: "0987654321",
    birthday: new Date("1988-04-05"),
    sex: "Nam",
    hometown: "Hà Nội",
    nationality: "Việt Nam",
    // Thêm các trường khác từ các component con nếu cần
  });
    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };
    const handleSave = (updatedData) => {
    setFormData((prevData) => ({ ...prevData, ...updatedData }));
    setIsEditing(false); // Tắt chế độ chỉnh sửa sau khi lưu
  };
    return (
        <div className=" bg-center justify-center flex-col-reverse space-y-3">
            <PersonalInfor 
isEditing={isEditing}
        data={formData} // Đảm bảo formData luôn có giá trị
        onSave={handleSave}
            />

            <CarrerGoals />
            <CarrerInfor />

            <EducationLevel />
            <button onClick={handleEditToggle}>
                {isEditing ? "Lưu" : "Chỉnh sửa"}
            </button>
        </div>
    );
};
export default InforUser;
