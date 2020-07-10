import React, { Component } from 'react';
import { Row, Col, Card, CardBody} from 'reactstrap';
import firebase from '../tables/Firebase.js';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import * as wjGrid from '@grapecity/wijmo.react.grid';
import * as wjFilter from "@grapecity/wijmo.react.grid.filter";
import '@grapecity/wijmo.styles/wijmo.css';
import './data.css';


class Tables extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('System');
        this.unsubscribe = null;
        this.state = {
          emp: [],
          isCheckedEmail: false,
          isCheckedPhone: false
        };
      }
      toggleChange = () => {
        this.setState({
          isCheckedEmail: !this.state.isCheckedEmail,
        });
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
      }
      toggleChangePhone = () => {
        this.setState({
          isCheckedPhone: !this.state.isCheckedPhone,
        });
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
      }
    onCollectionUpdate = (querySnapshot) => {
        const emp = [];
        querySnapshot.forEach((doc) => {
          const { Name, Desired_Location,Role,Language_1,Language_1_level ,Language_2,Language_2_level ,Language_3,Language_3_level,Score,Github ,Email,Phone_Number, Role_1 , Expected_Salary} = doc.data();
          const role=Role+' , '+Role_1;
         const skills=Language_1+':'+Language_1_level+' , '+Language_2+':'+Language_2_level+' , '+Language_3+':'+Language_3_level;
         if(this.state.isCheckedEmail && this.state.isCheckedPhone)
         {
            emp.push({
                doc, // DocumentSnapshot
                Name,
                Desired_Location,
                Skills:skills,
                Previous_Roles:role,
                Score,
                Expected_Salary,
                Phone_Number,
                Email,
                Github,
              });
         } 
         else if(!this.state.isCheckedEmail && this.state.isCheckedPhone)
         {
            emp.push({
                doc, // DocumentSnapshot
                Name,
                Desired_Location,
                Skills:skills,
                Previous_Roles:role,
                Score,
                Expected_Salary,
                Phone_Number,
                Github,
              });
         } 
         else if(this.state.isCheckedEmail && !this.state.isCheckedPhone)
         {
            emp.push({
                doc, // DocumentSnapshot
                Name,
                Desired_Location,
                Skills:skills,
                Previous_Roles:role,
                Score,
                Expected_Salary,
                Email,
                Github,
              });
         } 
         else
         {
            emp.push({
                doc, // DocumentSnapshot
                Name,
                Desired_Location,
                Skills:skills,
                Previous_Roles:role,
                Score,
                Expected_Salary,
                //Phone_Number,
                //Email,
                Github,
              });   
         }
         
        });
        this.setState({
          emp
       });
      }
    
      componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
      }
      initialized(filter) {
        this.filter = filter;;
    };
    render() { 
    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <h1>JOB SEARCH</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                <Card>
            <CardBody>
                <h2>Search Table</h2>
                <React.Fragment>
                    <Row>
                        <Col>
                        <h4>Select Rows to show other than basics:</h4>
                        <label>
                            <input type="checkbox"
                            checked={this.state.isCheckedEmail}
                            onChange={this.toggleChange}
                            />
                            Email
                        </label>
                        <div>
                        <label>
                            <input type="checkbox"
                            checked={this.state.isCheckedPhone}
                            onChange={this.toggleChangePhone}
                            />
                            Phone Number
                        </label>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="container-fluid">
                                        <wjGrid.FlexGrid itemsSource={this.state.emp} >
                                            <wjFilter.FlexGridFilter initialized={this.initialized.bind(this)}/>
                                        </wjGrid.FlexGrid>
                                    </div>
                        </Col>
                    </Row>
                    
                </React.Fragment>
            </CardBody>
        </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
    }
};

export default Tables;
