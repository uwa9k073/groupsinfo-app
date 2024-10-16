import { create } from "zustand"

export interface IGroup {
    id: string,
    createdAt: string,
    updatedAt: string,
    groupName: string
}

interface GroupsState {
    groups: IGroup[],
    isLoading: boolean,
    fetchGroups: () => void
}

const ENDPOINT = "http://localhost:8080/v1/groupsinfo/"

const useGroupsStore = create<GroupsState>()((set) => ({
    groups: [],
    isLoading: false,
    fetchGroups: async () => {
        set({ isLoading: true });
        try {
            const response = await fetch(ENDPOINT)
            const json: IGroup[] = await response.json()
            console.log
            set({groups: json})
        } catch (error) {
            console.error(error);
        } finally {
            set({ isLoading: false })
        }
    }
}));

export default useGroupsStore;