import CarrerGoals from "./carrer-goals";
import CarrerInfor from "./carrer-infor";
import EducationLevel from "./education-level";
import MoreInfor from "./more-infore";
import PersonalInfor from "./personal-infor";

const InforUser = () => {
    return (
        <div className=" bg-center justify-center flex-col-reverse space-y-3">
                <PersonalInfor />
                <CarrerGoals />
                <CarrerInfor />

                <EducationLevel />
        </div>
    );
};
export default InforUser;
