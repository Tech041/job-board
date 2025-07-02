"use client";
import apiRequest from "@/lib/apiRequest";
import { createContext, useEffect, useState } from "react";


export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [allJobs, setAllJobs] = useState({});
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [listed, setListed] = useState([]);

  // Fetch all jobs
  const fetchAllJobs = async () => {
    const { data } = await apiRequest.get("/jobs/get");
    if (data.success) {
      setAllJobs(data.allJobs);
      setLoading(false);
      
    } 
  };
  useEffect(() => {
    fetchAllJobs();
  }, []);

  const value = {
    fetchAllJobs,
    setLoading,
    loading,
    allJobs,
    search,
    setSearch,
    listed,
    setListed,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
