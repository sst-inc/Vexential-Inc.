import React from 'react';
import { Text, View, Button } from 'react-native';
import Sidebar from '../components/Sidebar';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

const Calendar = () => {
  return (
    <StyledView className="flex-1 flex-row">
      {/* Sidebar */}
      <StyledView className="w-44 h-full bg-blue-200">
        <Sidebar />
      </StyledView>

      {/* Main Content */}
      <StyledView className="flex-1 flex-col bg-blue-100 p-0 overflow-scroll">
        {/* Calendar Title */}
        <StyledView className="flex-row justify-center items-center p-4">
          <StyledText className="text-black text-xl font-semibold">
            Calendar
          </StyledText>
        </StyledView>

        {/* Top Row: Empty Space, Breakfast, Lunch, Dinner */}
        <StyledView className="flex-row justify-center items-center">
          <StyledView className="w-60 h-[60px] rounded-2xl bg-white m-1 border border-gray-400 flex justify-center items-center">
            {/* Empty Space */}
          </StyledView>
          <StyledView className="w-60 h-[60px] rounded-2xl bg-white m-1 border border-gray-400 flex justify-center items-center">
            <StyledText className="text-black font-semibold text-center text-lg">
              BREAKFAST
            </StyledText>
          </StyledView>
          <StyledView className="w-60 h-[60px] rounded-2xl bg-white m-1 border border-gray-400 flex justify-center items-center">
            <StyledText className="text-black font-semibold text-center text-lg">
              LUNCH
            </StyledText>
          </StyledView>
          <StyledView className="w-60 h-[60px] rounded-2xl bg-white m-1 border border-gray-400 flex justify-center items-center">
            <StyledText className="text-black font-semibold text-center text-lg">
              DINNER
            </StyledText>
          </StyledView>
        </StyledView>

        {/* Rows of Buttons */}
        {Array.from({ length: 7 }).map((_, day) => (
          <StyledView className="flex-row justify-center items-center" key={day}>
            <StyledView className="w-60 h-[60px] rounded-2xl bg-white m-1 border border-gray-400 flex justify-center items-center">
              <StyledText className="text-black font-semibold text-center text-lg">
                Day {day + 1}
              </StyledText>
            </StyledView>
            <StyledView className="w-60 h-[60px] rounded-2xl bg-white m-1 border border-gray-400 flex justify-center items-center">
              <Button title={`Button ${day + 1}-2`} onPress={() => {}} />
            </StyledView>
            <StyledView className="w-60 h-[60px] rounded-2xl bg-white m-1 border border-gray-400 flex justify-center items-center">
              <Button title={`Button ${day + 1}-3`} onPress={() => {}} />
            </StyledView>
            <StyledView className="w-60 h-[60px] rounded-2xl bg-white m-1 border border-gray-400 flex justify-center items-center">
              <Button title={`Button ${day + 1}-4`} onPress={() => {}} />
            </StyledView>
          </StyledView>
        ))}
      </StyledView>
    </StyledView>
  );
};
export default Calendar;
