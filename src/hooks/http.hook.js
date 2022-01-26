// import { useCallback } from "react";

export const useHttp = () => {

// Эта функция не будет работать в creatAsyncThunk здесь нужно удалить хук useCallback
/* 
    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {

        try {
            const response = await fetch(url, {method, body, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();

            return data;
        } catch(e) {
            throw e;
        }
    }, []);

    return {request} */

	 //Удаляем хук useCallback для работы creatAsyncThunk
    const request = async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {

		try {
			 const response = await fetch(url, {method, body, headers});

			 if (!response.ok) {
				  throw new Error(`Could not fetch ${url}, status: ${response.status}`);
			 }

			 const data = await response.json();

			 return data;
		} catch(e) {
			 throw e;
		}
  };

  return {request}
}