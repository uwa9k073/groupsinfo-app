import {create} from "zustand"

interface IGroup{
    id: string,
    created_at: string,
    updated_at: string,
    group_name: string
}

interface GroupsState{
    groups: IGroup[],
    isLoading: boolean,
    createNew: (name: string) => void
}

const useGroupsStore = create<GroupsState>()((set,get)=>({
    groups: [],
    createNew: (name: string) =
}))