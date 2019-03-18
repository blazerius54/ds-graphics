import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendCardRequest } from './actions';
import CardChart from '../../components/CardChart';
import GlobalLoader from '../../components/GlobalLoader';

class CardReport extends React.PureComponent {
  componentDidMount() {
    this.props.sendCardRequest();
  }

  render() {
    const { cardData, cardTime, loading } = this.props;
    let pieChartCardData = [];
    const isCardData = cardData.length > 0;
    if (isCardData) {
      pieChartCardData = cardData.map(item => ({
        name: item.name,
        value: Number((Math.random() * 1000).toFixed(0)),
      }));
    }

    return (
      <React.Fragment>
        {isCardData && (
          <CardChart cardTime={cardTime} pieChartCardData={pieChartCardData} />
        )}
        {loading && <GlobalLoader />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.globalReducer.loading,
  cardData: state.cardPageReducer.cardData,
  cardTime: state.cardPageReducer.cardTime,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ sendCardRequest }, dispatch);

CardReport.propTypes = {
  sendCardRequest: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  cardData: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardReport);
