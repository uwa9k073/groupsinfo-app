import useGroupsStore from '@/stores/groups'
import { Col, Row } from '@gravity-ui/uikit';
import {Grid} from 'ui'

const Groups = ()=> {
    const {groups} = useGroupsStore();

    return (
        <>
        {groups.map(group=><Row>
            <Col>{group.id}</Col>
            <Col>{group.}</Col>
        </Row>}
        </>
    );
}