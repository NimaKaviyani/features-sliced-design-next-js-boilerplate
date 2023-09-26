import { create } from "zustand";

interface Tags {
  tags: string[];
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
}

export const useTags = create<Tags>(set => ({
  tags: [],
  addTag: (tag): void => set(prevState => ({ tags: [...prevState.tags, tag] })),
  removeTag: (tag): void => set(prevState => ({ tags: prevState.tags.filter(item => item !== tag) }))
}));
