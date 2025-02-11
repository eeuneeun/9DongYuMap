import { User } from "next-auth";
import { boolean } from "zod";

function getUserFromDb(email: any, pwHash: any): User {
  //DB에서 유저정보 가져오는 로직
  const user = {
    id: "woneunjae",
    name: "euneun",
    email: "sacroo@naver.com",
    image: null,
  };

  return user;
}

export default getUserFromDb;
