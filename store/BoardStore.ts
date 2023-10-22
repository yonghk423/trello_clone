import { create } from 'zustand'
import { getTodosGroupedByColumn } from '@/lib/getTodosGropedByColumn'; 
interface BoardState {
    board : Board;
    getBoard : () => void;
}

export const useBoardStore = create<BoardState>((set) => ({
  board : {
    columns: new Map<TypeedColumn, Column>() //new map?
  },
  getBoard : async() => {
    const board = await getTodosGroupedByColumn();
    set({board})
  }
 }))