import {create} from "zustand"

interface IGroup{
    id: string,
    created_at: string,
    updated_at: string,
    group_name: string
}

interface GroupsState