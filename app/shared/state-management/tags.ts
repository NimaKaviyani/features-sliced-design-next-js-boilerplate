import { create } from 'zustand';
interface Tags {
    tags: string[],
    pushTags: (value:string)=>void
}
const useTags = create<Tags>((set) => ({
    tags: [],
    pushTags: (payload:string)=>set((state)=>({tags:state.tags([...state.tags,payload])}))
  }))
