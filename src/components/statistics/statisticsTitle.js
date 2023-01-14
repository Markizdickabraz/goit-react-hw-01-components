import PropTypes from 'prop-types';

export default function StatisticsTitle({ title }) {
    return (
        title && <h2>{title}</h2>)
}

StatisticsTitle.prototype = {
    title:PropTypes.string,
}