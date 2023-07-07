import { rerenderEntireTree } from "./../../render";
let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi,how are you?", likesCount: "15" },
      { id: 2, message: "it is my first post", likesCount: "20" },
    ],
  },
  messagePage: {
    dialogs: [
      { id: 1, name: "Olga" },
      { id: 2, name: "Dasha" },
      { id: 3, name: "Andrue" },
      { id: 4, name: "DRomchik" },
    ],
    messages: [
      { id: 1, message: "Hello" },
      { id: 2, message: "How are you" },
      { id: 3, message: "Yo-yo" },
      { id: 4, message: "Yo-yo" },
    ],
  },
  sidebar: {
    friends: [
      { id: 1, name: "Olga" },
      { id: 2, name: "Dasha" },
      { id: 3, name: "Andrue" },
      { id: 4, name: "DRomchik" },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 3,
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state, addPost);
};
export default state;
