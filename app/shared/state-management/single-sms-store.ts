import { create } from "zustand";
interface Tags {
  tags: string[];
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
}
export const useTag = create<Tags>(set => ({
  tags: [],
  addTag: (tag: string): void =>
    set(prevState => {
      if (!prevState.tags.includes(tag)) {
        return {
          ...prevState,
          tags: [...prevState.tags, tag]
        };
      }
      return prevState;
    }),
  removeTag: (tag): void => set(prevState => ({ tags: prevState.tags.filter(item => item !== tag) }))
}));
interface userInfo {
  phoneNumber: string,
  id: string,
  
  getUser: (tag: string , id: string ) => void;
}
export const useGetInformation = create<userInfo>(set => ({
  phoneNumber: "",
  id:"",
  getUser: (number: string , id: string ): void => set({phoneNumber:number,id:id}),
}));