import { Method, ResponseType } from "axios";

export interface IAPICallConfig {
  route: string;
  method: Method;
  body?: object | FormData;
  query?: object;
  page?: number;
  pageSize?: number;
  genre?: string;
  responseType?: ResponseType;
}
