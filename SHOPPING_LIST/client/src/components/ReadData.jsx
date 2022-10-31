import React, { useEffect } from 'react';
import '../components/stylesheetscss/readdata.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import DelData from './DelData';
import UpdateData from './UpdateData';
import { connect } from 'react-redux'
import { getItems } from '../actions/ItemsActions';
import PropTypes from 'prop-types'
import { loadUser } from '../actions/authActions';

function ReadData(props) {
    const arr = props.item.items
    const ItemsList = arr.map(item => <CSSTransition key={item._id} timeout={500} classNames="fade">
        <ListGroupItem key={item._id} style={{ backgroundColor: "#28282B", color: "white", boxShadow: "0px 0px 1px 0px white" }}>
            {props.token ? <DelData prod={item.product}></DelData> : null}
            {item.product}
            {props.token ? <UpdateData oldprod={item.product}></UpdateData> : null}
        </ListGroupItem>
    </CSSTransition>)

    useEffect(() => {
        props.getItems();
        props.loadUser();
    }, []);
    return (
        <Container>
            <ListGroup >
                <TransitionGroup className="shopping-list">
                    {ItemsList}
                </TransitionGroup>
            </ListGroup>
        </Container>
    );
}
ReadData.propTypes = {
    getItems: PropTypes.func.isRequired,
    loadUser: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
    token: PropTypes.string.isRequired
}
const mapDispatchToProps = {
    getItems,
    loadUser
}
function mapStateToProps(state) {
    return {
        //state.item bcz we name ItemReducer item in index.js
        item: state.item,
        isAuthenticated: state.isAuthenticated,
        token: state.auth.token
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReadData);