import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import CustomFooter from './Footer';
import Dashboard from './Dashboard';
import { Route, Routes } from 'react-router-dom';
import ApplicationForm from '../components/application/Application';
import UpdateApplication from '../components/application/UpdateApplication';
import ApplicationTable from '../components/application/ApplicationTable';
import ApplicationDetails from '../components/application/ApplicationDetails';
import UserApplication from '../components/application/UserApplication';
import UserProfile from '../components/application/UserProfile';
import SideNav from './SideNav';
import Header from './Header';



const { Content } = Layout;

const Main = () => {

  return (
    <Layout style={{ minHeight: '100vh' }}>
    <SideNav />
    <Layout style={{backgroundColor: '#e2e8f0'}}>
      <Header />
      <Content style={{ margin: '0 16px', minHeight: 'auto' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          {/* <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
        </Breadcrumb>

        <Routes>
             <Route path='/dashboard' element={<Dashboard />} />
             <Route path='/application' element={<ApplicationForm />} />
             <Route path='/applications' element={<ApplicationTable />} />
             <Route path='/application_details/:id' element={<ApplicationDetails />}/>
             <Route path='/application_update/:id' element={<UpdateApplication />} />

             <Route path='/user_application' element={<UserApplication />} />
             <Route path='/profile' element={<UserProfile />} />
         </Routes>

      
        
        {/* <div style={{ padding: 24, minHeight: 360, background: '#fff', borderRadius: '15px' }}>
         Affam Limited Template
        
         
        </div> */}
      </Content>
      <CustomFooter />
    </Layout>
  </Layout>
  )
}

export default Main