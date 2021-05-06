import React from 'react';
import {Line,Bar} from 'react-chartjs-2'; 
import Sidebar from './Sidebar';

const Dashboard = () => {
    const state = {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Sales (₹)",
          fill: false,
          tension: 0.3,
          backgroundColor: "#47BAC1",
          borderColor: "#47BAC1",
          data: [
            21150,
            15620,
            15840,
            18920,
            14870,
            22230,
            29660,
            24480,
            29050,
            38380,
            29170,
            33270,
          ],
        },
        {
          label: "Orders",
          fill: false,
          tension: 0.3,
          backgroundColor: "#5FC27E",
          borderColor: "#5FC27E",
          borderDash: [4, 4],
          data: [
            9580,
            7240,
            6290,
            8830,
            9150,
            12140,
            14760,
            12120,
            15540,
            21280,
            14660,
            18270,
          ],
        },
      ],
    };
    return (
      <>
        <div className="container-fluid" style={{ backgroundColor: "#F5F9FC" }}>
          <div className="row mb-5">
            <div className="shadow-sm bg-white">
              <Sidebar />
            </div>
          </div>
          <div className="row">
            <div class="col-md-6 col-lg-6 col-xl-3">
              <div className="shadow-sm bg-white ml-4 mr-4 mt-5 mb-n4">
                <div class="card flex-fill" style={{ borderColor: "#ffffff" }}>
                  <div class="card-header bg-white border-white">
                    <span
                      class="badge badge-success float-right"
                      style={{ fontWeight: "500" }}
                    >
                      Yearly
                    </span>
                    <h5
                      class="card-title mb-0"
                      style={{ fontWeight: "400", fontSize: "16px" }}
                    >
                      Revenue
                    </h5>
                  </div>
                  <div class="card-body">
                    <div class="row d-flex align-items-center mb-4">
                      <div class="col-8">
                        <h2 class="d-flex align-items-center mb-0 font-weight-normal">
                          ₹8,42,400
                        </h2>
                      </div>
                      <div class="col-4 text-right">
                        <span class="text-muted">32%</span>
                      </div>
                    </div>
                    <div
                      class="progress progress-sm shadow-sm mb-1"
                      style={{ height: "7px" }}
                    >
                      <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "32%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3">
              <div className="shadow-sm bg-white ml-4 mr-4 mt-5 mb-n4">
                <div class="card flex-fill" style={{ borderColor: "#ffffff" }}>
                  <div class="card-header bg-white border-white">
                    <span
                      class="badge badge-primary float-right"
                      style={{ fontWeight: "500" }}
                    >
                      Today
                    </span>
                    <h5
                      class="card-title mb-0"
                      style={{ fontWeight: "400", fontSize: "16px" }}
                    >
                      Income
                    </h5>
                  </div>
                  <div class="card-body">
                    <div class="row d-flex align-items-center mb-4">
                      <div class="col-8">
                        <h2 class="d-flex align-items-center mb-0 font-weight-normal">
                          ₹79,600
                        </h2>
                      </div>
                      <div class="col-4 text-right">
                        <span class="text-muted">60%</span>
                      </div>
                    </div>
                    <div
                      class="progress progress-sm shadow-sm mb-1"
                      style={{ height: "7px" }}
                    >
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-6 col-xl-3">
              <div className="shadow-sm bg-white ml-4 mr-4 mt-5 mb-n4">
                <div class="card flex-fill" style={{ borderColor: "#ffffff" }}>
                  <div class="card-header bg-white border-white">
                    <span
                      class="badge badge-danger float-right"
                      style={{ fontWeight: "500" }}
                    >
                      Monthly
                    </span>
                    <h5
                      class="card-title mb-0"
                      style={{ fontWeight: "400", fontSize: "16px" }}
                    >
                      Payment Due
                    </h5>
                  </div>
                  <div class="card-body">
                    <div class="row d-flex align-items-center mb-4">
                      <div class="col-8">
                        <h2 class="d-flex align-items-center mb-0 font-weight-normal">
                          ₹30,400
                        </h2>
                      </div>
                      <div class="col-4 text-right">
                        <span class="text-muted">22%</span>
                      </div>
                    </div>
                    <div
                      class="progress progress-sm shadow-sm mb-1"
                      style={{ height: "7px" }}
                    >
                      <div
                        class="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: "22%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-6 col-xl-3">
              <div className="shadow-sm bg-white ml-4 mr-4 mt-5 mb-n4">
                <div class="card flex-fill" style={{ borderColor: "#ffffff" }}>
                  <div class="card-header bg-white border-white">
                    <span
                      class="badge  float-right"
                      style={{
                        fontWeight: "500",
                        backgroundColor: "#FFB404",
                        color: "#ffffff",
                      }}
                    >
                      Monthly
                    </span>
                    <h5
                      class="card-title mb-0"
                      style={{ fontWeight: "400", fontSize: "16px" }}
                    >
                      Profit/Loss
                    </h5>
                  </div>
                  <div class="card-body">
                    <div class="row d-flex align-items-center mb-4">
                      <div class="col-8">
                        <h2 class="d-flex align-items-center mb-0 font-weight-normal">
                          ₹1,55,469
                        </h2>
                      </div>
                      <div class="col-4 text-right">
                        <span class="text-muted">+42%</span>
                      </div>
                    </div>
                    <div
                      class="progress progress-sm shadow-sm mb-1"
                      style={{ height: "7px" }}
                    >
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "42%", backgroundColor: "#FCC100" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-5 pl-4 pr-4">
            <div class="col-12 col-lg-6 mt-3">
              <div className="shadow-sm bg-white mb-0">
                <div
                  class="card flex-fill w-100"
                  style={{ borderColor: "#ffffff" }}
                >
                  <h6 class="card-title ml-3 mt-3 mb-0" style={{fontWeight:"400"}}>
                    Sales/Revenue
                    <span
                      class="badge badge-primary float-right mr-3"
                      style={{ backgroundColor: "#47BAC1", fontWeight: "500" }}
                    >
                      Monthly
                    </span>
                  </h6>
                  <div className="card-body">
                    <Line
                      data={state}
                      options={{
                        legend: {
                          display: false,
                          position: "right",
                        },
                        tooltips: {
                          intersect: false,
                        },
                        hover: {
                          intersect: true,
                        },
                        plugins: {
                          filler: {
                            propagate: false,
                          },
                        },
                        scales: {
                          xAxes: [
                            {
                              reverse: true,
                              gridLines: {
                                zeroLineColor: "rgba(0,0,0,0.1)",
                                color: "rgba(0,0,0,0.1)",
                              },
                            },
                          ],
                          yAxes: [
                            {
                              ticks: {
                                stepSize: 5000,
                              },
                              display: true,
                              borderDash: [5, 5],
                              gridLines: {
                                color: "rgba(0,0,0,0)",
                                fontColor: "#fff",
                              },
                            },
                          ],
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6 mt-3">
              <div className="shadow-sm bg-white mb-3">
                <div
                  class="card flex-fill w-100"
                  style={{ borderColor: "#ffffff" }}
                >
                  <h6 class="card-title ml-3 mt-3 mb-0" style={{fontWeight:"400"}}>Total Income(lac)</h6>
                  <div className="card-body">
                    <Bar
                      data={{
                        labels: [
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                          "May",
                          "Jun",
                          "Jul",
                          "Aug",
                          "Sep",
                          "Oct",
                          "Nov",
                          "Dec",
                        ],
                        datasets: [
                          {
                            label: "Last year",
                            backgroundColor: "#47BAC1",
                            borderColor: "#47BAC1",
                            hoverBackgroundColor: "#47BAC1",
                            hoverBorderColor: "#47BAC1",
                            data: [
                              54,
                              67,
                              41,
                              55,
                              62,
                              45,
                              55,
                              73,
                              60,
                              76,
                              48,
                              79,
                            ],
                          },
                          {
                            label: "This year",
                            backgroundColor: "#E8EAED",
                            borderColor: "#E8EAED",
                            hoverBackgroundColor: "#E8EAED",
                            hoverBorderColor: "#E8EAED",
                            data: [
                              69,
                              66,
                              24,
                              48,
                              52,
                              51,
                              44,
                              53,
                              62,
                              79,
                              51,
                              68,
                            ],
                          },
                        ],
                      }}
                      options={{
                        legend: {
                          display: false,
                        },
                        scales: {
                          yAxes: [
                            {
                              gridLines: {
                                zeroLineColor: "rgba(0,0,0,0.1)",
                                display: true,
                                color: [
                                  "transparent",
                                  "transparent",
                                  "transparent",
                                  "rgba(0,0,0,0.1)",
                                ],
                                drawOnChartArea: true,
                              },
                              stacked: false,
                              ticks: {
                                stepSize: 20,
                              },
                            },
                          ],
                          xAxes: [
                            {
                              barPercentage: 0.75,
                              categoryPercentage: 0.5,
                              stacked: false,
                              gridLines: {
                                zeroLineColor: "rgba(0,0,0,0.1)",
                                color: "transparent",
                              },
                            },
                          ],
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="footer border-top border-black">
          <div className="text ml-2 mr-2 mb-n3">
            <ul class="list-inline pt-1">
              <li class="list-inline-item">
                <a class="text-muted ml-5" href="#">
                  Support
                </a>
              </li>
              <li class="list-inline-item">
                <a class="text-muted ml-5" href="#">
                  Help Center
                </a>
              </li>
              <li class="list-inline-item">
                <a class="text-muted ml-5" href="#">
                  Privacy
                </a>
              </li>
              <li class="list-inline-item">
                <a class="text-muted ml-5" href="#">
                  Terms of Service
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="text-muted" style={{ marginLeft: "50rem" }}>
                  Smart ERP Suite - 2021
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </>
    );
}

export default Dashboard;
