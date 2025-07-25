import CarrerGoals from "./carrer-goals";
import CarrerInfor from "./carrer-infor";
import EducationLevel from "./education-level";
import MoreInfor from "./more-infore";
import PersonalInfor from "./personal-infor";

const InforUser = () => {
    return (
        <div className=" bg-center justify-center flex-col-reverse">
                <div className="flex-1">
                    <PersonalInfor />
                </div>
                       <h1>Muc tieu nghe nghiep</h1>
            <CarrerGoals />
            <h1>Thong tin nghe nghiep</h1>
            <CarrerInfor />
            <h1>Trinh do hoc van</h1>
            <EducationLevel />
            <h1>Thong tin khac</h1>
            <MoreInfor />
        </div>
    );
};
export default InforUser;
