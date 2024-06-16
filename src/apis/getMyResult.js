import axios from "axios";

export const getMyResult = async ({ text, task }) => {
  const url = document.location.origin + "/api/getRating";
  const config = {
    headers: {
      "content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post(url, { text, task }, config);
    return {
      data: response.data?.data?.content,
      status: response?.data?.status,
    };
  } catch (err) {
    console.log(err);
    return { stauts: false };
  }
};
