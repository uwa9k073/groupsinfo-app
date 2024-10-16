import useGroupsStore from '../../stores/groups'
import { Button, Col, Row } from '@gravity-ui/uikit';

const Groups = () => {
    const { fetchGroups } = useGroupsStore();
    const { groups } = useGroupsStore();

    return (
        <>
        <Button>heelo
        </Button>
            {
                groups.map(group => <Row space={{
                    s: 1,
                    m: '5'
                }}>
                    <Col>{group.id}</Col>
                    <Col>{group.created_at}</Col>
                    <Col>{group.updated_at}</Col>
                    <Col>{group.group_name}</Col>
                </Row>)
            }
        </>
    );
}

export default Groups;