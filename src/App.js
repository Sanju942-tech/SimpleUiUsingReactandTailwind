import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import { apiUrl, filterData } from './Data';
import Spinner from './components/Spinner';
import {toast} from 'react-toastify';

const App = () => {
  const [courses,setCourses]=useState(null);
  const [loading,setLoading]=useState(true);
  async function fetchData() {
    setLoading(true);
    try{
      let response =await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);

    }
    catch(error){
toast.error("Network error hai");
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Filter  filterData={filterData}/>
      </div>
      <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
       {
        loading ? (<Spinner/>) :(<Cards courses={courses} />) 
       }
      </div>
    </div>
  );
};

export default App;

