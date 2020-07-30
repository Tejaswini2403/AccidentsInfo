import React from 'react'
import ReactDom from 'react-dom'
import './DataQueryBody.css'


class  DataQueryBody extends React.Component
{
    render()
    {
        return(
            <div>
               {/* nav bar */}
                    <div class="card">
                    <div class="card-body">
                        <h2>Data Query Tool</h2>
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Query Tool Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Simple queries</a>
                        </li>
                        <li class="nav-item dropdown active">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            View Result
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#" >Chart</a>
                                
                            <a class="dropdown-item" href="#">Table</a>
                            <a class="dropdown-item" href="#">List</a>
                            <a class="dropdown-item" href="#">Calendar</a>
                            <a class="dropdown-item" href="#">Crash Map</a>
                            <a class="dropdown-item" href="#">Country Map</a>
                            </div>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Help</a>
                        </li>
                        </ul>
                    </div>
                    </nav>
                    </div>
                    </div>

                    <div>
                   {/* blue box */}
                    <div class="card text-white bg-info mb-3">
                     <div class="row">
                         <div class="col-2"> 
                            <div class="card m-2 "style={{width: "8rem", height:"3rem"}}>
                                   <p style={{color:"black" }}>Number</p>
                              </div>
                        </div>
                            <div class="col-6">
                                <p>Number of accidents</p>
                            </div>
                     </div>
                    </div>
                    </div>

                    {/* Body */}
                    <div class="card m-3">
                        <div class="row  m-2">
                         <div class="col-7  ">
                           <div className="hd"><h3><strong>Build your query:</strong></h3></div>
                           
                         <div  id="accordion">
                            <div class="card " >
                                <div class="card-header" id="headingOne">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Analysis Level
                                        </button>
                                    </h5>
                                </div>

                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">

                                    <ul class="list-group">
                                        <li class="list-group-item">One</li>
                                        <li class="list-group-item">Two</li>
                                        <li class="list-group-item">Three</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header" id="headingTwo">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Time Frame
                                        </button>
                                    </h5>
                                </div>

                                <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">

                                    <ul class="list-group">
                                        <li class="list-group-item">One</li>
                                        <li class="list-group-item">Two</li>
                                        <li class="list-group-item">Three</li>
                                    </ul>
                                </div>
                            </div>


                                <div class="card">
                                        <div class="card-header" id="headingThree">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Geographic Location
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapseThree" class="collapse show" aria-labelledby="headingThree" data-parent="#accordion">

                                            <ul class="list-group">
                                                <li class="list-group-item">One</li>
                                                <li class="list-group-item">Two</li>
                                                <li class="list-group-item">Three</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <div class="card-header" id="headingFour">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    Filters
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapseFour" class="collapse show" aria-labelledby="headingfour" data-parent="#accordion">

                                            <ul class="list-group">
                                                <li class="list-group-item">One</li>
                                                <li class="list-group-item">Two</li>
                                                <li class="list-group-item">Three</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                        </div>
                         <div class="col-5">
                           <div className="hd" ><h3><strong>View your query results:</strong></h3></div>

                            <div className="card">
                            <table class="table">
                                <tbody>
                                    <tr>
                                    <th scope="row">View Chart</th>
                                    </tr>
                                    <tr>
                                    <th scope="row">View Table</th>
                                    </tr>
                                    <tr>
                                    <th scope="row">View List</th>
                                    </tr>
                                    <tr>
                                    <th scope="row">View Calendar</th>
                                    </tr>
                                    <tr>
                                    <th scope="row">View Crash Map</th>
                                    </tr>
                                    <tr>
                                    <th scope="row">View Country Map</th>
                                    </tr>
                                    <tr>
                                    <th scope="row">View Sorting</th>
                                    </tr>
                                    <tr>
                                    <th scope="row">Crash Reports</th>
                                    </tr>
                                </tbody>
                            </table>
                               </div>

                        </div>
                        </div>
                    </div>

            </div>
        )
    }
}

export default DataQueryBody