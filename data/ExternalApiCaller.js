const url = new URL("https://api.sender.net/v2/subscribers");

let headers = {
  Authorization:
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNjVlYThkODNlN2QzNTlhNjdhM2FlNTIxNDYxNDBiN2MyZmNiZTQ1Nzg2MmNiNzU0M2Q5YmUwNzc4ZGJjMjcyZTQyZTEwMDdmYzQzMGNjZTkiLCJpYXQiOiIxNzE5MDk3NzYxLjU2NjU0MCIsIm5iZiI6IjE3MTkwOTc3NjEuNTY2NTQ1IiwiZXhwIjoiNDg3MjY5Nzc2MS41NjMxMDMiLCJzdWIiOiI4ODgxNzEiLCJzY29wZXMiOltdfQ.wN-GI_yxCodlFDaWUOJYjgQwPwni41grpqMqNUWB4tQkqfKaxkbkpBWHz91g-W864VgqsfBYDOD50qFiNAK_Iw",
  "Content-Type": "application/json",
  Accept: "application/json",
};

// let data = {
//   "email": "support@sender.net",
//   "groups": ["eZVD4w", "b2vAR1"]
// };

// fetch(url, {
//     method: "POST",
//     headers,body: JSON.stringify(data)
// }).then(response => response.json());

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
