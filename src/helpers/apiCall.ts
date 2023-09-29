//? for the rest having content-type application/json
export const makeApiCall = async (
  endpoint: string,
  id?: string,
  method?: string,
  body?: any
) => {
  if (id) {
    body = { ...body, id };
  }
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVERURL}${endpoint}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(body),
      method: method || "GET",
    }
  );
  return response.json();
};

//? only for nft minting
export const nftMintApiCall = async (
  endpoint: string,
  body: FormData,
  id: string
) => {
  body.append("id", id);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVERURL}${endpoint}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: body,
      method: "POST",
    }
  );
  return response.json();
};
