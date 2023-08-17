import React from 'react';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';
import Sidebar from '../components/Sidebar';


const StyledView = styled(View);
const StyledText = styled(Text);

const Profile = () => {
  return (
    <StyledView>
      <Sidebar />
      {/* Your Profile content */}
    </StyledView>
  );
};

export default Profile;
