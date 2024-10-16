import { create } from "zustand"

interface IGroup {
    id: string,
    created_at: string,
    updated_at: string,
    group_name: string
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
            const groups: IGroup[] = await response.json()
            set({ groups: groups })
        } catch (error) {
            console.error(error);
        } finally {
            set({ isLoading: false })
        }
    }
}));

export default useGroupsStore;