import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // corrected import path for Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // corrected import path for Bootstrap JS
import './App.css';
import UserTable from './Table/UserTable';

import { Toaster } from 'react-hot-toast'

export default function App() {
  return (
    <>
      <Toaster></Toaster>
      <UserTable />
    </>
  );
}
