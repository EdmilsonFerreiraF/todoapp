import { useState, useEffect } from "react";
import axios from "axios";

export function useRequestData(url, initialState) {
  // const [data, setData] = useState(initialState);

  // useEffect(() => {
    const token = localStorage.getItem("token")
    
    const data = axios.get(url, {
        headers: {
            Authorization: token
        }
    }).then((response) => {
        // setData(response.data);
        return response.data;
    }).catch((error) => {
        console.log(error.message);
    });

    return data;
  // }, [url]);

  // return data;
}
