import axios from "axios";
import { toast } from 'react-toastify';

function errorResponseHandler(error) {
  if (error.response) {
    toast.error(`${error.response.data.error ?? ''} | ${error.response.data.message ?? ''}` ?? 'Erro ao processar transação.');
  }
}

const api = axios.create({
  baseURL: "http://localhost:3333"
});

api.interceptors.response.use(response => response, errorResponseHandler);

export default api;
