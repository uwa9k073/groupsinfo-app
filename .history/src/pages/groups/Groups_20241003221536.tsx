import useGroupsStore from '../../stores/groups'
import { Button, Col, Container, Row } from '@gravity-ui/uikit';

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
            <Container>
                {
                    groups.map(group => <Row space={{
                        s: 1,
                        m: '5'
                    }} spaceRow={{
                        s: 5,
                        m: '1'
                    }}>
                        <Col>{group.id}</Col>
                        <Col>{group.createdAt}</Col>
                        <Col>{group.updatedAt}</Col>
                        <Col>{group.groupName}</Col>
                    </Row>)
                }</Container>
        </>
    );
}

export default Groups;