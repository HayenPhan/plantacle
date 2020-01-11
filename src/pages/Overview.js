import React from 'react'
import Measurements from '../components/molecules/Measurements';
import CurrentDay from '../components/atoms/CurrentDay';
import CompostTransition from '../components/atoms/CompostTransition';
import OverviewButton from '../components/atoms/OverviewButton';
import styled from 'styled-components';

import {Bootstrap, Grid, Row, Col, Container} from 'react-bootstrap';

const StyledContainer = styled(Container)`
  && {
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 25px;
  }
`;

const FirstRow = styled(Row)`
  && {

  }
`;

const SecondRow = styled(Row)`
  && {
    justify-content: center;
    min-width: 400px;
    position: relative;
  }
`;

const ThirdRow = styled(Row)`
  && {
    justify-content: center;
  }
`;

const SecondCol = styled(Col)`
  && {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
`;

const CompostTransitionWrapper = styled.div`
  margin-bottom: 30px;
`;

class Overview extends React.Component {

  constructor(props) {
    super(props);


  }

  render() {

    return (

        <StyledContainer>
            <FirstRow>
                <Col xs={3}>
                    <Measurements />
                </Col>
                <SecondCol xs={6}>
                    <CurrentDay day={this.props.day} />
                </SecondCol>
                <Col xs={3}>
                </Col>
            </FirstRow>
          <SecondRow>
            <CompostTransitionWrapper>
              <CompostTransition currentPhase={this.props.currentPhase} status={this.props.status}/>
            </CompostTransitionWrapper>
          </SecondRow>

          <ThirdRow>
              <OverviewButton />
          </ThirdRow>
      </StyledContainer>
    )
  }
}


export default Overview;
