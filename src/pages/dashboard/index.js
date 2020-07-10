import React, { Component } from 'react';
import { Row, Col} from 'reactstrap';
import { Target, User } from 'react-feather';
import { getLoggedInUser } from '../../helpers/authUtils';
import Loader from '../../components/Loader';
import OverviewWidget from '../../components/OverviewWidget';
import Graphs from './graphs.js';
import Graphs2 from './graph2';


class Dashboard extends Component {

    constructor(props) {
        super(props);
        var oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 15);

        this.state = {
            user: getLoggedInUser(),
            filterDate: [oneWeekAgo, new Date()]
        };
    }
    
    render() {
        
        return (
            <React.Fragment>
                <div className="">
                    { /* preloader */}
                    {this.props.loading && <Loader />}

                    <Row className="page-title align-items-center">
                        <Col sm={4} xl={6}>
                            <h4 className="mb-1 mt-0">Dashboard</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <OverviewWidget items={[
                                { title: '21,000', description: 'Total Users Applied', icon: User }
                            ]}></OverviewWidget>
                        </Col>
                        <Col >
                            <OverviewWidget items={[
                                { title: '2100', description: 'Total Job Opportunities', icon: User }
                            ]}></OverviewWidget>
                        </Col>
                        <Col >
                            <OverviewWidget items={[
                                { title: '5705', description: 'Total User Selected', icon: Target }
                            ]}></OverviewWidget>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Graphs2 />
                        </Col>
                        <Col>
                            <Graphs />
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        )
    }
}


export default Dashboard;