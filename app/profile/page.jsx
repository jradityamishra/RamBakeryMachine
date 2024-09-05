"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ReviewForm from "@components/ReviewForm"
import Profile from "@components/Profile";

const MyProfile = () => {
 

  return (
   <>
     <Profile
      name='My'
      desc='Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination'

    />
    <ReviewForm/>
   </>
    
  );
};

export default MyProfile;
