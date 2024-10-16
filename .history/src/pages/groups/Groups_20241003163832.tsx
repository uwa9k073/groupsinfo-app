import useGroupsStore from '@/stores/groups'
import { Col, Row } from '@gravity-ui/uikit';
import { Grid } from 'ui'

const Groups = () => {
    const { groups } = useGroupsStore();

    return (
        <>
            {groups.map(group => <Row>
                <Col>{group.id}</Col>
                <Col>{group.created_at}</Col>
                <Col>{group.updated_at}</Col>
                <Col>{group.group_name}</Col>
            </Row>)}
        </>
    );
}