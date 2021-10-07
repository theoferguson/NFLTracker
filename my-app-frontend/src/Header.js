import AddNewPlayer from "./AddNewPlayer";

function Header({issueRequest, setIssueRequest}) {

    return (
        <div className="App-header">
            <p> Welcome to NFL Tracker.
            </p>
            <AddNewPlayer
            issueRequest={issueRequest}
            setIssueRequest={setIssueRequest}
            />
        </div>
    )
            
}

export default Header;