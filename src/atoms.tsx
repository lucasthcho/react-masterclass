import { atom, selector } from "recoil";
//import { recoilPersist } from 'recoil-persist';
//import { localStorageEffect } from "../localStorage";


export enum Categories {
  "TO_DO",
  "DOING",
  "DONE",
}
export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});


export const toDoState = atom<IToDo[]>({
	key: "toDo",
	default: JSON.parse(localStorage.getItem('TODOS_KEY') || '[]'),
  //default: [],
	//effects: [localStorageEffect("toDos")],
});

/*
const { persistAtom } = recoilPersist({
  key: 'todoLocal',
  storage: localStorage,
  });
  
  
  export const toDoState = atom({
  key: 'todos',
  default: [],
  effects_UNSTABLE: [persistAtom],
  });
  */

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos?.filter((toDo) => toDo.category === category);
  },
});


