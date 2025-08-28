import { Card } from "../../components/Card";
import userImg from "../../assets/img/marry-img.png";
export function AcountSettings() {
  const bio =
    "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam";
  return (
    <div className="h-full flex flex-col">
      <h6 className="text-[18px] bg-white shadow-[0_3px_6px_#00000007] h-[68px] px-[15px] pt-[27px] pb-[19px]">
        Account Settings
      </h6>
      <Card
        picture={userImg}
        name="Marry Doe"
        email="Marry@Gmail.Com"
        bio={bio}
      />
    </div>
  );
}
