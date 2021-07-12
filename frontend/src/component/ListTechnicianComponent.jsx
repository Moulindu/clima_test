import React, { Component } from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBDataTable } from "mdbreact";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';



//const arr = [];
class ListTechnicianComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // step 2
            //id: this.props.match.params.id,
            service_id: '',
            customerName: '',
            customerAddress: '',
            description: '',
            priority: 0 ,
            resultForRandom:0,
            techList:[],
            suggestList:[],
            listTech:[]
            //,
            //emailId: ''
        }
        this.changeCustomerNameHandler = this.changeCustomerNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
        this.cleanEmployee = this.cleanEmployee(this);

    }


    // step 3
    componentDidMount(){

        fetch("http://127.0.0.1:5000/techs").then((response)=> {
            console.log(response);
            response.json().then(data => {
                console.log(data.techList);
                this.setState({techList : data.techList})
            })
        })


    }

    cleanEmployee = (e) =>{
        this.props.history.push('/');
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        var custInfo = {
            "customer_id":this.state.service_id,
            "service_desc": this.state.description
        }

        const reqOpts = {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(custInfo)
        }

        fetch("http://127.0.0.1:5000/ticket_details",reqOpts).then((response)=> {
            console.log(response);
            response.json().then(data => {
                console.log(data.suggestions);
                this.setState({priority: data.priority, customerName: data.customerName,customerAddress: data.customerAddress,description: data.description, suggestList: data.suggestions});
            })
        })
    }
    
    changeCustomerNameHandler= (event) => {
        this.setState({customerName: event.target.value});
    }

    changeserviceidHandler= (event) => {
        this.setState({service_id: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    cancel(){
        this.props.history.push('/');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }

    render() {
        return (
            <div className="container">
                 <h1 className="text-center">Clima Tech</h1>
                 <h3 className="text-center">Control Center</h3>
                 <br></br>
                 <div className = "row">
                    <div className = "col-sm-12" >
                        {/* <MDBTable className = "table table-striped table-bordered">

                            <MDBTableHead>
                                <tr>
                                     */}{/* <th><b>NO.</b></th> */}{/*
                                    <th><b>TECHNICIAN</b></th>
                                     */}{/* <th><b>TOTAL CLOSED TICKETS IN 2 YEARS</b></th> */}{/*
                                     */}{/* <th><b>TOTAL COMPLETED TICKETS</b></th> */}{/*
                                     */}{/* <th><b>TOTAL OPEN TICKETS</b></th> */}{/*
                                     */}{/* <th><b>PERCENTAGE OF TICKET COMPLETION</b></th> */}{/*
                                     */}{/* <th><b>MONTHS OF EXPERIENCE</b></th> */}{/*
                                    <th><b>CURRENT LATITUDE</b></th>
                                    <th><b>CURRENT LONGITUDE</b></th>
                                    <th><b>LOCATION ADDRESS</b></th>
                                    <th><b>HEADING TOWARDS</b></th>


                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {
                                    this.state.techList && this.state.techList.map(
                                        technician => 
                                        <tr key = {technician.key}>
                                             */}{/* <td> { technician.key} </td>   */}{/*
                                             <td> { technician.technician} </td>
                                              */}{/* <td> {technician.Closed}</td>
                                             <td> {technician.Complete}</td>
                                             <td> { technician.Open} </td>
                                             <td> {technician.completion_rate}</td>
                                             <td> {technician.experience_in_months}</td> */}{/*
                                             <td> {technician.latitude}</td>
                                             <td> {technician.longitude}</td>
                                             <td> {technician.location_address}</td>
                                             <td> {technician.heading_towards}</td>

                                        </tr>
                                    )
                                }
                            </MDBTableBody>
                        </MDBTable> */}
                    </div>
                 </div>
                 <div className = "row" style={{marginTop:'50px'}}>
                    <div className = "col-sm-12" >
                        <form>
                             <div className = "row" style={{marginTop:'50px'}}>
                                <div className = "col-2" >
                                    <label> Service ID: </label>
                                </div>
                                <div className = "col-6" >
                                    <input placeholder="Service Id" name="service_id" className="form-control"
                                    value={this.state.service_id} onChange={this.changeserviceidHandler}/>
                                </div>
                            </div>
                            <div className = "row" style={{marginTop:'50px'}}>
                            <div className = "col-sm-12 col-md-6" >
                                    {/* <button className="btn btn-info" onClick={this.cleanEmployee}>clean</button> */}
                                </div>
                                <div className = "col-sm-12 col-md-6" >
                                    <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>submit</button>
                                </div>
                             </div>

                            <div className = "row" style={{marginTop:'50px'}}>
                                <div className = "col-2" >
                                    <label> Customer Number: </label>
                                </div>
                                <div className = "col-6" >
                                    <input placeholder="Customer Name" name="customerName" className="form-control"
                                    value={this.state.customerName} onChange={this.changeCustomerNameHandler}/>
                                </div>
                            </div>
                            <div className = "row" style={{marginTop:'50px'}}>
                                <div className = "col-2" >
                                    <label>Address Code: </label>
                                </div>
                                <div className = "col-6" >
                                    <input placeholder="Customer Address" name="customerAddress" className="form-control"
                                    value={this.state.customerAddress}/>
                                </div>
                            </div>
                            <div className = "row" style={{marginTop:'50px'}}>
                                <div className = "col-2" >
                                    <label> Service  Description: </label>
                                </div>
                                <div className = "col-6" >
                                    <textarea type="text" id="description" className="form-control" name="description" value={this.state.description} placeholder="Description"  />
                                </div>
                            </div>
                        </form>
                    </div>
                 </div>
                 <div className = "row" style={{marginTop:'50px'}}>
                    <div className = "col-2" >
                        Priority of ticket (1=Very Urgent; 5=Lowest Priority):
                    </div>
                    <div className = "col-4" >
                        <input placeholder="random" name="random" className="form-control"  value={this.state.priority} />
                    </div>
                    
                 </div>

                 {/* <div className = "row" style={{marginTop:'50px'}}>
                    <div className = "col-sm-12" >
                        <MDBTable className = "table table-striped table-bordered">
                            <MDBTableHead>
                                <tr>
                                    <th> Id </th>
                                    <th> Technician</th>
                                    <th> phone_number</th>
                                    <th> Availability</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                
                                {this.state.techList.map((technician, index) => {
                                        if ( this.state.resultForRandom > (index)) {
                                            return (
                                                <tr key = {technician.key}>
                                                    <td> { technician.key} </td>
                                                    <td> { technician.Technician} </td>
                                                    <td> { technician.phone_number} </td>
                                                    <td> {technician.Availability}</td>
                                                </tr> 
                                            )
                                        } else {
                                            return (null)
                                        }
                                    }
                                )}
                            </MDBTableBody>
                        </MDBTable>
                    </div>
                 </div> */}


                 <div className = "row" style={{marginTop:'50px'}}>
                    <div className = "col-sm-12" >
                        <MDBTable className = "table table-striped table-bordered">
                            <MDBTableHead>
                                <tr>
                                    <th><b> Vehicle ID </b></th>
                                    <th><b> Technician </b></th>
                                    <th><b> Distance in miles </b></th>
                                    <th><b> Similar Tickets Closed </b></th>
                                    {/* <th><b> Recommend </b></th> */}
                                    <th><b> Number of visits to this customer </b></th>
                                    {/* <th><b> Top Skill Set </b></th> */}
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {this.state.suggestList.map((technician, index) => {
                                    
                                            return (
                                                <tr>
                                                    <td> { technician.vehicle_id} </td>
                                                    <td> { technician.name} </td>
                                                    <td> { technician.distance} </td>
                                                    <td> { technician.similar_tickets_closed} </td>
                                                    {/* <td><b> { technician.recommend} </b></td> */}
                                                    <td> { technician.number_of_visits} </td>


                                                    {/* <td> {technician.Availability}</td> */}

                                                </tr> 
                                            )
                                    }
                                )}
                            </MDBTableBody>
                        </MDBTable>
                    </div>
                 </div>

            </div>
        )
    }
}

export default ListTechnicianComponent