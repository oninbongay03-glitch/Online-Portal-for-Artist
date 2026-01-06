import {LOGGED_IN_USER_ID} from "@/lib/auth"
import user_profile from "@/data/user_profile.json"
import gmail from "@/data/credentials.json"

type UserProfile = {
    id: string;
    account_id: string;
    first_name: string;
    last_name: string;
    profile_picture: string;
    username: string;
};
  

type GmailResult = {
  ownerGmail?: string;
  userGmail?: string;
};


const getOwnerProfile = (): UserProfile | undefined => {
    if (!LOGGED_IN_USER_ID) {
      throw new Error("LOGGED_IN_USER_ID is missing");
    }
  
    return user_profile.find(
      (user) => user.id === LOGGED_IN_USER_ID
    );
  };
  

const getUserProfile = (id: string): UserProfile | undefined => {
    if (!id) {
      throw new Error("User ID is missing");
    }
  
    return user_profile.find(
      (user) => user.id === id
    );
  };


const checkIfOwner = (id: string): boolean => {
    if (!LOGGED_IN_USER_ID || !id) return false;
    return LOGGED_IN_USER_ID === id;
};

const getGmail = (userId: string) => {
  const userGmaild = getUserProfile(userId);

  const owner = gmail.find(i => i.account_id === getOwnerProfile()?.account_id);
  const user = gmail.find(i => i.account_id === userGmaild?.account_id);

  return {
    ownerGmail: owner?.gmail,
    userGmail: user?.gmail,
  };
};

export default getGmail;
export {getOwnerProfile, getUserProfile, checkIfOwner, getGmail};
    
    
    