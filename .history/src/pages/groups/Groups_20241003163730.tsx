import useGroupsStore from '@/stores/groups'
import {Grid} from 'ui'

const layout = LayoutPresen
const Groups = ()=> {
    const {groups} = useGroupsStore();

    return (
        <>
        {groups.map(group=>}
        </>
    );
}