import React from 'react';
import { ImageBackground } from 'react-native';
import { ImageUrl } from '../../config';

const AppBackground = () => {
    return (
        <>
            <ImageBackground resizeMode="cover" source={ImageUrl.DEFAULT_BG} style={{ position: 'absolute', bottom: '38%', top: 0, right: 0, left: 0 }} />
        </>
    );
};

export default AppBackground
