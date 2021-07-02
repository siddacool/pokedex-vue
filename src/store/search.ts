import { defineStore } from 'pinia';

interface IsState {
  term: string;
}

export const useSearch = defineStore({
  id: 'search',
  state(): IsState {
    return {
      term: '',
    };
  },
  actions: {
    fireSearch: function (payload: string) {
      this.term = payload;
    },
  },
});
