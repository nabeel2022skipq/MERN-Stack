import React from 'react';
import ReadData from './ReadData';
import WriteData from './WriteData';
function MainPage() {
    return (
        <React.Fragment>
            <WriteData></WriteData>
            <ReadData></ReadData>
        </React.Fragment>
    );
}

export default MainPage;