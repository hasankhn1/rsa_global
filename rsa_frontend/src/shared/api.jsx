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
    application: async (data) => {
      try {
        const response = await baseFetch(
          ({ globalBaseUrl }) => `${globalBaseUrl}/api/application`,
          {
            method: "POST",
            body: validatePayload(data),
            headers: {
              "Authorization": localStorage.getItem('auth_id')
            }
          }
        );
        return response;
      } catch (error) {
        throw new Error(error)
      }
    },
    get_applications: async () => {
      try {
        const response = await baseFetch(
          ({ globalBaseUrl }) => `${globalBaseUrl}/api/application`,
          {
            method: "GET",
            headers: {
              "Authorization": localStorage.getItem('auth_id')
            }
          }
        );
        return response;
      } catch (error) {
        throw new Error(error)
      }
    },
    get_application: async (id) => {
      try {
        const response = await baseFetch(
          ({ globalBaseUrl }) => `${globalBaseUrl}/api/application/${id}`,
          {
            method: "GET",
            headers: {
              "Authorization": localStorage.getItem('auth_id')
            }
          }
        );
        return response;
      } catch (error) {
        throw new Error(error)
      }
    },
    update_application: async ({id, status}) => {
      try {
        console.log(id, status, '********');
        const response = await baseFetch(
          ({ globalBaseUrl }) => `${globalBaseUrl}/api/application/${id}`,
          {
            body: validatePayload({status}),
            method: "PUT",
            headers: {
              "Authorization": localStorage.getItem('auth_id')
            }
          }
        );
        return response;
      } catch (error) {
        throw new Error(error)
      }
    },
  },
};
