import { create } from 'zustand';

export const useMemoStore = create((set) => ({
  memoList: [],
  setMemoList: (content) => set((state) => {
    console.log('111');
    return ({
      memoList: [...state.memoList, { content, id: state.memoList.length, date: new Date().getMilliseconds() }]
    })
  }
  ),
}));