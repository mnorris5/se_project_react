const baseUrl = "http://localhost:3001";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

export const getItems = async () => {
  const res = await fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return checkResponse(res);
};

export const addItem = async ({ name, imageUrl, weather }) => {
  const res = await fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, imageUrl, weather }),
  });
  return checkResponse(res);
};

export const deleteItem = async (selectedCard) => {
  const res = await fetch(`${baseUrl}/items/${selectedCard._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return checkResponse(res);
};
