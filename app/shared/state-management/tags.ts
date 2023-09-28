// import { create } from "zustand";

// interface Tags {
//   tags: string[];
//   addTag: (tag: string) => void;
//   removeTag: (tag: string) => void;
// }

// export const useTags = create<Tags>(set => ({
//   tags: [],
//   addTag: (tag): void => set(prevState => ({ tags: [...prevState.tags, tag] })),
//   removeTag: (tag): void => set(prevState => ({ tags: prevState.tags.filter(item => item !== tag) }))
// }));

import { create } from "zustand";

interface Tags {
  singleSMS: {
    id: string;
    number: string;
    reciver: {};
    label: string;
    tags: string[];
    text: string;
  };
  addTag: (tag: string) => void;
}
export const useSingleSMS = create<Tags>(set => ({
  singleSMS: {
    id: "",
    number: "",
    reciver: {},
    label: "",
    tags: [],
    text: ""
  },
  addTag: (tag: string):void => set(prevState => {  
    if (!prevState.singleSMS.tags.includes(tag)) {
      return {
        ...prevState,
        tags: prevState.singleSMS.tags.push(tag)
      };
    }
    return prevState;
    })
  }));
