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
myHeaders.append("Cookie", "zitadel.useragent=MTcyNTU0MzgxNHwxVkFRQ2NJeDJGM3h3b3h2UUNHVFRlQzZfVEE4bXo4czByREVOcnNMY2tnRE5MY3lNeVIxd2QySjg2UC0ybUpLdnBHVWZ6R1pnVnUyOGc3MkhXWVRPZnpoZmpiZEJnPT18acUgp6uD2CSnc-e1LpOf-9qB6R_4AwUMrJ9Ypoq745A=");
        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
          };
        try {
            set({ isLoading: true });
            const response: Response = await fetch(ENDPOINT, {
                mode: 'no-cors',
            });
            const json: IGroup = await response.json()
            console.log(json)
        } catch (error) {
            console.error(error);
            set({ isLoading: false });
        }
    }
}));

export default useGroupsStore;