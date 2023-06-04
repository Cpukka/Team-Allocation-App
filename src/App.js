import { useState } from "react";
import './App.css';
import Employees from './Employees';
import Footer from './Footer';
import Header from './Header';
import GroupedTeamMembers from "./GroupedTeamMembers";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Nav from "./Nav";
import NotFound from "./NotFound";

function App() {
  const [selectedTeam, setTeam]=useState(JSON.parse(localStorage.getItem('selectedTeam')) ||'Team2');

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [
    {
      id: 1,
      fullName: "Chimaobi Emmanuel ",
      designation: "React Developer",
      gender: "Male",
      teamName: "Team1",
    },
    {
      id: 2,
      fullName: "Usman Jafaru ",
      designation: "Web Developer",
      gender: "Male",
      teamName: "Team1",
    },
    {
      id: 3,
      fullName: "Ephraim Eze ",
      designation: "Web Designer",
      gender: "Male",
      teamName: "Team1",
    },
    {
      id: 4,
      fullName: "Jethro Eze ",
      designation: "Game Developer",
      gender: "Male",
      teamName: "Team2",
    },
    {
      id: 5,
      fullName: "Ugochukwu Unanka ",
      designation: "Node JS Developer",
      gender: "Male",
      teamName: "Team2",
    },
    {
      id: 6,
      fullName: "Ikechukwu Unanka ",
      designation: "Javascript Developer",
      gender: "Male",
      teamName: "Team2",
    },
    {
      id: 7,
      fullName: "Ada Unanka ",
      designation: "Express Developer",
      gender: "female",
      teamName: "Team3",
    },
    {
      id: 8,
      fullName: "John Ubah ",
      designation: "Python Developer",
      gender: "Male",
      teamName: "Team3",
    },
    {
      id: 9,
      fullName: "Oscar Azuka ",
      designation: "Mongodb Developer",
      gender: "Male",
      teamName: "Team3",
    },
    {
      id: 10,
      fullName: "Kings Uzo ",
      designation: "PowerApp Developer",
      gender: "Male",
      teamName: "Team4",
    },
    {
      id: 11,
      fullName: "Sandra Ndu ",
      designation: "PowerBi Developer",
      gender: "female",
      teamName: "Team4",
    },
    {
      id: 12,
      fullName: "Austin Ofor ",
      designation: "Graphic Designer",
      gender: "Male",
      teamName: "Team4",
    },
  ]);

  function handleTeamSelectionChange(event) {
    setTeam(event.target.value);
    
    
  }
 function handleEmployeeCardClick(event) {
   const transformedEmployees=employees.map((employee)=>employee.id===parseInt(event.currentTarget.id)
   ?(employee.teamName===selectedTeam)?{...employee, teamName:''}:{...employee, teamName:selectedTeam}
   :employee);

   setEmployees(transformedEmployees);
 };

  return (
    <Router>
   <Nav />
    <h1 className='m-5'> Team Member Allocation App</h1>
    <Header selectedTeam={selectedTeam}
      teamMemberCount={employees.filter((employee) =>employee.teamName===selectedTeam).length}
    />
    <Routes>
    <Route path="/" element={
    <Employees employees={employees}
      selectedTeam={selectedTeam}
      handleEmployeeCardClick={handleEmployeeCardClick}
      handleTeamSelectionChange={handleTeamSelectionChange}
    />}
    >
    </Route>
    <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers
      employees={employees} selectedTeam={selectedTeam} setTeam= {setTeam} />}>

    </Route>
    <Route path="*" element={<NotFound/>}>

    </Route>
    </Routes>
    <Footer />
    </Router>
      
    
  );
}

export default App;
