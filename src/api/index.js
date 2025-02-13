import axios from 'axios';
import { Storage } from "../storage/index";

const baseUrl = `https://40d8a55a-1f87-4968-91b4-daf28153cb73.mock.pstmn.io/`;

export const Instance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

Instance.interceptors.request.use(
  (config) => {
     // ���ý��丮���� access_token�̶�� �̸����� ����Ǿ��ִ� �� ��������
    const accessToken = Storage.getItem('access_token');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// �������� ��ū�� ���� �� ���Ƽ� interceptors �ۼ� ���ص�.. ���߿� �ʿ��ϸ� �ҰԿ�