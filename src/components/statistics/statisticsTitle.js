import PropTypes from 'prop-types';
import data from '../../data.json';


export default function StatisticsTitle({title}) {
    return (
        data.title && <h2>{title}</h2>)
}

StatisticsTitle.prototype = {
    title:PropTypes.string,
}