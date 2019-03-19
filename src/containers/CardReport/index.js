import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendCardRequest } from './actions';
import CardChart from '../../components/CardChart';
import GlobalLoader from '../../components/GlobalLoader';
import PieTable from '../../components/PieTable';

class CardReport extends React.PureComponent {
  componentDidMount() {
    const { cardData, sendCardRequest } = this.props;

    // Send request if there is no data in reducer

    if (cardData.length === 0) {
      sendCardRequest();
    }
  }

  render() {
    const { cardData, cardTime, loading } = this.props;
    const isCardData = cardData.length > 0;
    let pieChartCardData = [];

    if (isCardData) {
      pieChartCardData = cardData.map(item => ({
        name: item.name,
        value: Number((Math.random() * 1000).toFixed(0)),
      }));
    }

    return (
      <React.Fragment>
        {!loading &&
          isCardData && (
          <React.Fragment>
            <CardChart
              cardTime={cardTime}
              pieChartCardData={pieChartCardData}
            />
            <PieTable pieChartCardData={pieChartCardData} />
          </React.Fragment>
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
  cardTime: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardReport);
