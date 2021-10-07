import AddNewPlayer from "./AddNewPlayer";
import Search from "./Search";


function Header({ issueRequest, setIssueRequest, searchTerm, setSearchTerm,players}) {

    return (
        <div className="App-header">
            <p> Welcome to NFL Tracker.
            </p>
            <AddNewPlayer
            issueRequest={issueRequest}
            setIssueRequest={setIssueRequest}
            />
            <Search
                className="search"
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}

            />
        </div>
    )
            
}

export default Header;