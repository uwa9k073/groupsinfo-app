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
        try {
            set({ isLoading: true });
            await fetch(ENDPOINT, {
                mode: 'no-cors',
            }).then();
            console.log(response.status)
        } catch (error) {
            console.error(error);
            set({ isLoading: false });
        }
    }
}));

export default useGroupsStore;