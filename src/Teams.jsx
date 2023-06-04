import React from 'react'

function Teams({selectedTeam, handleTeamSelectionChange}) {
  return (
    <select className="form-select form-select-lg"value={selectedTeam} onChange={handleTeamSelectionChange}>
    <option value="Team1">
    Team1

    </option>
    <option value="Team2">
    Team2

    </option>
    <option value="Team3">
    Team3

    </option>
    <option value="Team4">
    Team4

    </option>
  </select>
  )
}

export default Teams
