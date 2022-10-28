import React from 'react';
import '../components/stylesheetscss/readdata.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { delItem } from '../actions/ItemsActions';
import { connect } from 'react-redux';
import PropTypes, { func } from 'prop-types'

function DelData(props) {
    let children = props.prod
    let newItem = { "product": children }
    function deleteItem() {
        props.delItem(newItem);
    }
    return (
        <Button className='remove-item' color='danger' size='sm' onClick={deleteItem}>&times;</Button>
    );
}
DelData.propTypes = {
    children: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    delItem: PropTypes.func.isRequired
}
const mapDispatchToProps = {
    delItem
}

function mapStateToProps(state) {
    return {
        item: state.item
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DelData);