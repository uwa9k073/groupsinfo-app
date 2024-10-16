import useGroupsStore from '@/stores/groups'
import { Row } from '@gravity-ui/uikit';
import {Grid} from 'ui'

const Groups = ()=> {
    const {groups} = useGroupsStore();

    return (
        <>
        {groups.map(group=>Row}
        </>
    );
}