/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";
import { IAPICallConfig } from "./types";
import { API_ROUTE } from "../../utils/constants";

const apiCall = async (config: IAPICallConfig) => {
  try {
    const fullURL = `${API_ROUTE}${config.route}`;

    const response: AxiosResponse = await axios({
      method: config.method,
      params: {
        ...config.query,
        page: config.page,
        pageSize: config.pageSize,
        genre: config.genre,
      },
      data: config.body,
      url: fullURL,
      responseType: config.responseType || "json",
    });

    if (response.statusText === "OK") {
      return response.data;
    } else {
      throw new Error(response.data?.message);
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

export default apiCall;
