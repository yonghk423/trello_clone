import { create } from 'zustand'

interface BoardState {
    board : Board;
    getBoard : () => void;
}

const useBearStore = create((set) => ({
  bears: 0,
  getBoard : () => {
    
  }
 }))