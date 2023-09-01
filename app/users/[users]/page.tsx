import getUser from "@/lib/getUser";
import getUserPost from "@/lib/getUserPost";
import React from "react";
import UserPost from "./components/UserPost";

type Params = {
  params: {
    userId: string;
  };
};

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const postData: Promise<Post[]> = getUserPost(userId);  

  //const [user, userPosts] = await Promise.all([userData, postData]);
  const user = await userData
  
  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <UserPost promise = {postData}/>
    </>
  );
}

