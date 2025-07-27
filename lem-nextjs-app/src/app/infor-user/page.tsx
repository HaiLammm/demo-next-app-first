import CarrerGoals from "./carrer-goals";
import CarrerInfor from "./carrer-infor";
import EducationLevel from "./education-level";
import MoreInfor from "./more-infore";
import PersonalInfor from "./personal-infor";

const InforUser = () => {
    return (
        <div className=" bg-center justify-center flex-col-reverse space-y-3">
            <div className="flex-1">
                <PersonalInfor />
            </div>
            <div className="flex-1 ">
                <CarrerGoals />
            </div>
            <div className="flex-1">
                <CarrerInfor />
            </div>

            <div className="flex-1">
                <EducationLevel />
            </div>
<div className="flex-1"><MoreInfor /></div>
            
        </div>
    );
};
export default InforUser;
