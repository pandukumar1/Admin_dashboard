import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/Cards';
import { LineChart, PieChart } from './components/Charts';
import TeamActivity from './components/TeamActivityy';
import ToDoList from './components/ToDoList';
import Weather from './components/Weather';
import Thismonth from './components/Thismonth';
import ServerLoad from './components/Serverload';
import BrowserStats from './components/Broswerstats';
import Notes from './components/Notes';
import './App.css';

export default function App() {

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'aug', 'sep', 'nov', 'dec'],
    datasets: [
      {
        label: 'Views',
        data: [20, 60, 50, 80, 60, 80, 50, 80, 100, 80, 80],
        borderColor: 'rgba(0,123,255,0.8)',
        backgroundColor: 'rgba(0,123,255,0.15)',
        tension: 0,
        fill: true,
      },
      {
        label: 'Likes',
        data: [20, 40, 20, 60, 40, 60, 20, 40, 60, 40, 20],
        borderColor: 'rgba(40,167,69,0.9)',
        backgroundColor: 'rgba(40,167,69,0.12)',
        tension: 0,
        fill: true,
      }
    ]
  };
  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
        min: 0,
        max: 120,
        ticks: {
          stepSize: 20
        }
      }
    }
  };

  // Pie chart data
  const pieData = {
    labels: ['Twitter', 'Facebook', 'Google+', 'LinkedIn', 'Profile'],
    datasets: [
      {
        data: [25, 17, 23, 16, 19],
        backgroundColor: ['#1DA1F2', '#4267B2', '#DD4B39', '#0A66C2', '#FFC107']
      }
    ]
  };

  const pieOptions = { plugins: { legend: { position: 'bottom' } } };

  return (
    <div className="app-root">
      <Sidebar />
      <div className="main-content">
        <Header />

        <div className="container-fluid mt-4">

          <div className="row g-0">
            <div className="col-lg-5">
              <div className="row g-0">
                <div className="col-md-6 p-0">
                  <StatCard colorClass="bg-primary" icon="bi-cart" title="Sales" value="750" />
                </div>
                <div className="col-md-6 p-0">
                  <StatCard colorClass="bg-success" icon="bi-eye" title="Visitors" value="1,700" />
                </div>
                <div className="w-100 mb-3"></div>
                <div className="col-md-6 p-0">
                  <StatCard colorClass="bg-warning" icon="bi-currency-dollar" title="Revenue" value="1,200" />
                </div>
                <div className="col-md-6 p-0">
                  <StatCard colorClass="bg-info" icon="bi-people" title="Subscribers" value="1,020" />
                </div>
              </div>
            </div>
            <div className="col p-0">
              <Weather />
            </div>
          </div>

          {/* Charts */}
          <div className="row mt-3 ">
            <div className="col-lg-8 line">
              <LineChart data={lineData} options={lineOptions} />
            </div>
            <div className="col-lg-4">
              <Thismonth />
            </div></div>

          <div className="row  g-2 mt-4 ">
            <div className="col-lg-4">
              <div className='pie'>
                <PieChart data={pieData} options={pieOptions} />
              </div>
            </div>


            <div className="col-lg-8">
              <div className="row g-2">
                <div className="col-lg-6">
                  <ServerLoad />
                </div>
                <div className="col-lg-6">
                  <div className='broswer' style={{ display: "flex", flexDirection: "column", justifyContent: "start", width: 500 }}>
                    <BrowserStats />
                  </div>

                </div>
              </div>
            </div>
          </div>



          {/* TeamActivity, ToDoList, Notes */}
          <div className="row mt-3">
            <div className="col-md-4"><TeamActivity /></div>
            <div className="col-md-4"><ToDoList /></div>
            <div className="col-md-4">
              <Notes />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
