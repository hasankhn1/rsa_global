import { validatePayload } from "@/utils/utils";
import { baseFetch } from "./baseFetch";

export const Api = {
  client: {
    register: async (data) => {
      try {
        const response = await baseFetch(
          ({ globalBaseUrl }) => `${globalBaseUrl}/auth/register`,
          {
            method: "POST",
            body: validatePayload(data),
          }
        );
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    login: async (data) => {
      try {
        const response = await baseFetch(
          ({ globalBaseUrl }) => `${globalBaseUrl}/auth/login`,
          {
            method: "POST",
            body: validatePayload(data),
          }
        );
        return response;
      } catch (error) {
        throw new Error(error)
      }
    },
  },
};
