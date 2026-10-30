import { useGetProfileQuery } from "@/pages/Profile/api/profileApi.ts";

export default function ProfilePage() {
  const { data: profileData } = useGetProfileQuery();
  console.log(profileData);

  return (
    <div className="mainWrapper">
      <div className="mainContent">
        <div>Никнейм: {profileData?.username}</div>
        <div>Email: {profileData?.email}</div>
        <div>Верификация: {profileData?.isVerified ? "Есть" : "Нет"}</div>
      </div>
    </div>
  );
}
