import { ArrowRotateLeft } from '@gravity-ui/icons';
import useGroupsStore from '../../stores/groups'
import { Button, Col, Container, Icon, Row } from '@gravity-ui/uikit';

const Groups = () => {
    const { groups, fetchGroups } = useGroupsStore();

    const handleClick = () => {
        fetchGroups()
    }

    console.log(groups)

    return (
        <>
            <Container spaceRow={{
                "m": "3"
            }}>
                {
                    groups.map(group => <Row space="2" spaceRow={{
                        s: 5,
                        m: '1'
                    }}>
                        <Col>{group.id}</Col>
                        <Col>{group.createdAt}</Col>
                        <Col>{group.updatedAt}</Col>
                        <Col>{group.groupName}</Col>
                    </Row>)
                }
                <Row space="1">
                    <Button onClick={() => handleClick()} size='xl'>
                        <Icon data={ArrowRotateLeft}></Icon>
                    </Button></Row>
            </Container >
        </>
    );
}

export default Groups;