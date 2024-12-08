import Endpoints from "../../constants/endpoints";
import { dataServer } from "../axiosConfig";

const usePutApi = () => {
  const { postCurd } = Endpoints();
  const updatdePostApi = async (data: any) => {
    console.log(data);
    try {
      const response = await dataServer.put(postCurd.update_post(data.id), {
        title: data.title,
        body: data.description,
      });
      return response;
    } catch (err: any) {
      console.log("error", err.data.error);
    }
  };
  return { updatdePostApi };
};
export default usePutApi;
