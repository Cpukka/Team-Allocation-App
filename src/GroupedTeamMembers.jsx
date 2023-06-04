import React from "react";
import { useState } from "react";

const GroupedTeamMembers=({ employees, selectedTeam, setTeam })=> {
  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

  function groupTeamMembers() {
    var teams = [];

    var team1Members = employees.filter(
      (employee) => employee.teamName === "Team1"
    );
    var team1 = {
      team: "Team1",
      members: team1Members,
      collapsed: selectedTeam === "Team1" ? false : true
    };
    teams.push(team1);

    var team2Members = employees.filter(
      (employee) => employee.teamName === "Team2"
    );
    var team2 = {
      team: "Team2",
      members: team2Members,
      collapsed: selectedTeam === "Team2" ? false : true
    };
    teams.push(team2);

    var team3Members = employees.filter(
      (employee) => employee.teamName === "Team3"
    );
    var team3 = {
      team: "Team3",
      members: team3Members,
      collapsed: selectedTeam === "Team3" ? false : true
    };
    teams.push(team3);

    var team4Members = employees.filter(
      (employee) => employee.teamName === "Team4"
    );
    var team4 = {
      team: "Team4",
      members: team4Members,
      collapsed: selectedTeam === "Team4" ? false : true
    };
    teams.push(team4);

    return teams;
  }
  function handleTeamClick(event) {
    var transformedGroupData= groupedEmployees.map((groupedData)=>groupedData.team===event.currentTarget.id
      ?{...groupedData,collapsed:!groupedData.collapsed}:groupedData);

      setGroupedData(transformedGroupData);
      setTeam(event.currentTarget.id);
  }
  return (
    <main className="container">
    {
      groupedEmployees.map((item)=>{
        return(
          <div key={item.team} className="card mt-2" style={{cursor:'pointer'}}>
            <h4 id={item.team} className="card-header text-secondary bg-white"
            onClick={handleTeamClick}>
              Team Name:{item.team}
            </h4>
            <div id={'collapse_'+ item.team} className={item.collapsed===true?"collapse":""}>
              <hr/>
              {
                item.members.map(member=>{
                  return(
                    <div className="mt-2">
                    <h5 className="card-title mt-2">
                    <span className="text-dark">Full Name:{member.fullName}

                    </span>


                    </h5>
                    <p>Designation: {member.designation}</p>
                    </div>
                  );

                })
              }
            </div>
          </div>
        )
      })
    };
    </main>
  )
}

export default GroupedTeamMembers;
