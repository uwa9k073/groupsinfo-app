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

const useGroupsStore = create<GroupsState>()((set, get) => ({
    groups: [],
    isLoading: false,
    createNew: async (name: string) => { 
        set({isLoading: false});
        const response = await fetch("localhost:8080/v1/groupsinfo/", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'group_name': name})
        })
    },
    fetchGroups: async ()=>{}
}))