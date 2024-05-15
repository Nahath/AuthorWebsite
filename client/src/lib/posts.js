import newsData from "../../data/NewsData";

export function GetAllPostIds() {
  // This will be replaced with getting posts from the Database.
  return [
    {
      params: {
        id: "Book2Status",
      },
    },
    {
      params: {
        id: "WeAreLive",
      },
    },
  ];
}

export function GetPostData(id) {
  // This will be replaced with data from DB, but it will follow the same format.
  return newsData.items.filter((item) => {
    return item.id === id;
  })[0];
}
