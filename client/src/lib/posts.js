export function GetAllPostIds() {
  // This will be replaced with getting posts from the Database.
  return [
    {
      params: {
        id: "firstPost",
      },
    },
    {
      params: {
        id: "secondPost",
      },
    },
  ];
}

export function GetPostData({ id }) {
  // This will be replaced with data from DB, but it will follow the same format.
  return {
    id: "dummyId",
    title: "dummyTitle",
    details: "dummyDetails",
    date: "dummyDate",
  };
}
