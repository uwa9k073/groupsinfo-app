import useGroupsStore from '../../stores/groups'
import { Button, Col, Row } from '@gravity-ui/uikit';

const Groups = () => {
    const { groups, fetchGroups } = useGroupsStore();

    const handleClick = () => {
        fetchGroups()
    }

    console.log(groups)

    return (
        <>
            <Button onClick={() => handleClick()}>
                heelo
            </Button>
            {
                groups.map(group => <Row space={{
                    s: 1,
                    m: '5'
                }}>
                    <Col>{group.id}</Col>
                    <Col>{group.createdAt}</Col>
                    <Col>{group.updated_at}</Col>
                    <Col>{group.group_name}</Col>
                </Row>)
            }
        </>
    );
}

export default Groups;