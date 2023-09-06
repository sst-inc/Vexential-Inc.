import React, { useState, useEffect } from 'react';

import RecommendedMealPlan from '../pages/RecommendedMealPlan';


const RecommendedMealPlanWrapper = ({ route }) => {
  const { breakfast, lunch, dinner } = route.params;
  
  return (
    <RecommendedMealPlan
      breakfast={breakfast}
      lunch={lunch}
      dinner={dinner}
    />
  );
};

export default RecommendedMealPlanWrapper;


