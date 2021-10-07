import { useEffect, useState } from 'react';

function AddNewPlayer({ issueRequest, setIssueRequest }) {
    const [formData, setFormData] = useState('');
    const [positions, setPositions] = useState([]);
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/teams")
            .then((r) => r.json())
            .then((teams) => setTeams(teams));
    }, []);

    const teamDropdown =
        teams.map((team) => {
            return (
                <option key={team.id} value={team.name}>{team.name}</option>
            )
        });

    useEffect(() => {
        fetch("http://localhost:9292/positions")
            .then((r) => r.json())
            .then((positions) => setPositions(positions));
    }, []);

    const positionDropdown =
        positions.map((position) => {
            return (
                <option key={position.id} value={position.name}>{position.name}</option>
            )
        });


    const addCardForm =
        <>
            <form>
                <input onChange={handleChange} type="text" name="name" placeholder='name of player'></input>
                <select name="team" onChange={handleChange}>
                    <option selected="selected"></option>
                    {teamDropdown}
                </select>
                <select name="position" onChange={handleChange}>
                    <option selected="selected"></option>
                    {positionDropdown}
                </select>
                <button onClick={handlePlayerSubmit} type="submit">Add Player</button>
            </form>
        </>;

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    };

    function handlePlayerSubmit(event) {
        event.preventDefault()
        if (formData.name && formData.team && formData.position) {
            handlePlayerAdd(formData)
        } else {
            alert("Please enter all details")
        }
    };

    function handlePlayerAdd(data) {
        console.log(data)
        fetch(`http://localhost:9292/players`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(json => {
                console.log(json)
                setIssueRequest(!issueRequest)
                setFormData("")
            })
    };

    return (
        <>
            {addCardForm}
        </>
    )

};

export default AddNewPlayer;