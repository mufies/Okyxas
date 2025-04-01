import './SearchUser.css';
import NavigateBar from "../../components/NavigatorBar/NavigatorBar.tsx";
import {useNavigate} from "react-router-dom";
import UserData from './UserList.tsx';
import {useState} from "react";


function SearchUser() {

    const navigate = useNavigate();
    const [username, setUsername] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const searchUser = UserData.filter((user) => {
return user.name.toLowerCase() === username.toLowerCase();    })


    const handleSearch = () => {
        if(searchUser.length==0){
            alert('No user found');
        }
        else {
            navigate(`/TradePage/${searchUser[0].id}`);
        }
    }

    return (
        <div className={'body1'}>
            <NavigateBar/>
            <div className="searchBox">
                <div className={'Enterusername-Text'}>
                    <h2 className={'Enterusername-Text-text'}>Enter user name</h2>
                    <img src={'/src/assets/img.png'} alt={'icon'} className={'Enterusername-Text-icon'}/>
                </div>
                <input type="text" placeholder="Enter user name" className={'search-username-input'} value={username} onChange={handleInputChange}/>
                <button className={'searchBox-btn'} onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
}

export default SearchUser;