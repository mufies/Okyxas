import  { useState } from 'react';
import './App.css'; // Đảm bảo đã tạo CSS trong App.css

function TestFile() {
    const [isActive, setIsActive] = useState(false);

    const toggleSlideIn = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="App">
            <button onClick={toggleSlideIn}>
                {isActive ? 'Hide' : 'Show'} Slide-In Box
            </button>
            <div className={`slide-in-left ${isActive ? 'active' : ''}`}>
                <h2>Chào bạn, đây là nội dung trượt vào!</h2>
            </div>
        </div>
    );
}

export default TestFile;
