const url = new URL("https://api.sender.net/v2/subscribers");

let headers = {
  Authorization: `${process.env.SENDER_API_TOKEN}`,
  "Content-Type": "application/json",
  Accept: "application/json",
};

export async function AddSubscriber(email) {
  let data = {
    email: email,
    groups: ["e9L92Z"], // id refers to group "WritingFans"
  };

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });

  const result = await response.json();
  return result;
}
