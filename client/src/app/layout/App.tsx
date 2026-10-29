import { Box, Container, CssBaseline} from "@mui/material";
import axios from "axios";
import {useEffect, useState } from "react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities,setActivities] = useState<IActivity[]>([]);

  useEffect(()=> {
    axios.get<IActivity[]>('https://localhost:5001/api/activities')
      .then(response => setActivities(response.data))
  },[])

  return (
    <Box>
    <CssBaseline/>
    <NavBar/>
    <Container maxWidth='xl' sx={{mt:3}}>
      <ActivityDashboard activities={activities}/>
    </Container>
    </Box>
  )
}

export default App