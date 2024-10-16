import { create } from "zustand"

interface IGroup {
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
            const groups: IGroup[] = JSON.parse(await response.json())
            set({ groups: groups })
        } catch (error) {
            console.error(error);
        } finally {
            set({ isLoading: false })
        }
    }
}));

export default useGroupsStore;