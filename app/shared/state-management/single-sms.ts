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

interface useGetInformation {
  phoneNumber: string;
  id: string;

  getUser: (tag: string, id: string) => void;
}

export const useGetInformation = create<useGetInformation>(set => ({
  phoneNumber: "",
  id: "",
  getUser: (number: string, id: string): void => set({ phoneNumber: number, id: id })
}));

interface UseTextSMS {
  textSMS: { value?: string; error?: boolean; message?: string };
  setTextSMS: ({ value, error, message }: { value?: string; error?: boolean; message?: string }) => void;
}

export const useTextSMS = create<UseTextSMS>(set => ({
  textSMS: { value: "", error: false, message: "" },
  setTextSMS: ({ value, error, message }): void =>
    set({
      textSMS: {
        ...(value && { value }),
        ...(error && { error }),
        ...(message && { message })
      }
    })
}));
