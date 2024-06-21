import axios, { AxiosResponse } from "axios";

const submitForm = async (url: string, data: any): Promise<AxiosResponse | undefined> => {
  try {
    const response: AxiosResponse = await axios.post(url, data);
    console.log('response axios post =>', response);
    return response;
  } catch (error) {
    console.log("error submit form =>", error);
  }
};

export default submitForm;
