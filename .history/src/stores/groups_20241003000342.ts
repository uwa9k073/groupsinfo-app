import { create } from "zustand"
import { v4 } from "uuid"

interface IGroup {
    id: string,
    created_at: string,
    updated_at: string,
    group_name: string
}

interface GroupsState {
    groups: IGroup[],
    isLoading: boolean,
    createNew: (name: string) => void,
    fetchGroups: () => void
}

const ENDPOINT = "localhost:8080/v1/groupsinfo/"
const useGroupsStore = create<GroupsState>()((set) => ({
    groups: [],
    isLoading: false,
    createNew: async (name: string) => { 
        set({isLoading: false});
        const response = await fetch(ENDPOINT, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'group_name': name})
        })
        const newGroup: IGroup = await response.json();
        set((state)=> ({groups: [...state.groups, newGroup], isLoading: false}))
    },
    fetchGroups: async ()=>{
        try {
          set({ isLoading: true });
          const response = await fetch(ENDPOINT);
          const groups: IGroup[] = await response.json();
          set({ groups, isLoading: false });
        } catch (error) {
          console.error(error);
          set({ isLoading: false });
        }
    }
}))