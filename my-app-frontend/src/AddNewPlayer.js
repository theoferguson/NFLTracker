import {useState} from 'react';

function AddNewPlayer({issueRequest, setIssueRequest}) {
    const [formData, setFormData] = useState('');

    const addCardForm =
        <>
            <form>
                <input value={formData} onChange={handleChange} type="text" name="addPlayer" placeholder='name of player'></input>
                <input value={formData} onChange={handleChange} type="text" name="addTeam" placeholder='team'></input>
                <input value={formData} onChange={handleChange} type="text" name="addPosition" placeholder='position'></input>
                <button onClick={handlePlayerSubmit} type="submit">Add Player</button>
            </form>
        </>;

    function handleChange(event) {
        setFormData(event.target.value)
    };

    function handlePlayerSubmit(event) {
        event.preventDefault()
        handlePlayerAdd(formData)
    };

    function handlePlayerAdd(data) {
        console.log(data)
        // fetch(`http://localhost:9292/players`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // }).then(res => res.json())
        //     .then(json => {
        //         console.log(json)
        //         setIssueRequest(!issueRequest)
        //         setFormData("")
        //     })
    };

    return (
        <>
            {addCardForm}
        </>
    )

};

export default AddNewPlayer;