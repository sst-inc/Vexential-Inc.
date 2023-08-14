import React from 'react';
import { Text, View, Button } from 'react-native';
import { styled } from 'nativewind';
import Sidebar from '../components/Sidebar';

const StyledView = styled(View);
const StyledText = styled(Text);

const Profile = () => {
  return (
    <StyledView className="flex-1 flex-row">
      {/* Sidebar */}
      <StyledView className="w-44 h-full bg-blue-200">
        <Sidebar />
      </StyledView>

      {/* Main Content */}
      <StyledView className="flex-1 flex-col bg-blue-100 p-0">
        {/* Title */}
        <StyledView className="flex-row justify-center items-center p-4">
          <StyledText className="text-black text-xl font-semibold">
            Profile
          </StyledText>
        </StyledView>

        {/* Language Box and Change Button */}
        <StyledView className="flex-row justify-start items-center p-4">
          <StyledView className="flex flex-col items-start">
            {/* Row 1 */}
            <StyledView className="flex-row items-center mb-4">
              <StyledView className="w-[300px] h-[64px] bg-blue-200 flex justify-center items-center">
                <StyledText className="text-white text-base font-semibold">
                  LANGUAGE
                </StyledText>
              </StyledView>
              <StyledView className="w-[554px] h-[64px] bg-white flex justify-center items-center ml-0">
                <StyledText className="text-black text-base font-semibold">
                  English
                </StyledText>
              </StyledView>
              <StyledView className="w-118 h-73 ml-0">
                <Button title="Change" onPress={() => {}} />
              </StyledView>
            </StyledView>

            {/* Row 2 */}
            <StyledView className="flex-row items-center mb-4">
              <StyledView className="w-[300px] h-[64px] bg-blue-200 flex justify-center items-center">
                <StyledText className="text-white text-base font-semibold">
                  AGE
                </StyledText>
              </StyledView>
              <StyledView className="w-[554px] h-[64px] bg-white flex justify-center items-center ml-0">
                <StyledText className="text-black text-base font-semibold">
                  60 to 70
                </StyledText>
              </StyledView>
              <StyledView className="w-118 h-73 ml-0">
                <Button title="Change" onPress={() => {}} />
              </StyledView>
            </StyledView>
            
            {/* Row 3 */}
            <StyledView className="flex-row items-center mb-4">
              <StyledView className="w-[300px] h-[64px] bg-blue-200 flex justify-center items-center">
                <StyledText className="text-white text-base font-semibold">
                  CHRONIC DISEASE
                </StyledText>
              </StyledView>
              <StyledView className="w-[554px] h-[64px] bg-white flex justify-center items-center ml-0">
                <StyledText className="text-black text-base font-semibold">
                  _,_,_
                </StyledText>
              </StyledView>
              <StyledView className="w-118 h-73 ml-0">
                <Button title="Change" onPress={() => {}} />
              </StyledView>
            </StyledView>

            {/* Row 4 */}
            <StyledView className="flex-row items-center">
              <StyledView className="w-[300px] h-[64px] bg-blue-200 flex justify-center items-center">
                <StyledText className="text-white text-base font-semibold">
                  DIETARY NEEDS
                </StyledText>
              </StyledView>
              <StyledView className="w-[554px] h-[64px] bg-white flex justify-center items-center ml-0">
                <StyledText className="text-black text-base font-semibold">
                  Vegetarian
                </StyledText>
              </StyledView>
              <StyledView className="w-118 h-73 ml-0">
                <Button title="Change" onPress={() => {}} />
              </StyledView>
            </StyledView>
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default Profile;
