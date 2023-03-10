import { userRegister } from "../services/api/userAuth";
import { useMutation } from "@tanstack/react-query";
import {
  TOKEN_LOCAL_STORAGE,
  USER_DATA_LOCAL_STORAGE,
} from "../contexts/UserDataContext";
export const useUserRegister = () => {
  return useMutation({
    mutationFn: userRegister,
    onSuccess: (data) => {
      localStorage.setItem(USER_DATA_LOCAL_STORAGE, JSON.stringify(data));
      localStorage.setItem(TOKEN_LOCAL_STORAGE, data.access_token);
    },
  });
};
