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
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        try {
            set({ isLoading: true });
            fetch("localhost:8080/v1/groupsinfo/", {
                method: 'GET',
                mode: 'no-cors',
                headers: myHeaders,
                redirect: 'follow'
            })
                .then((response) => response.text())
                .then((result) => console.log(result))
                .catch((error) => console.error(error));
        } catch (error) {
            console.error(error);
            set({ isLoading: false });
        }
    }
}));

export default useGroupsStore;