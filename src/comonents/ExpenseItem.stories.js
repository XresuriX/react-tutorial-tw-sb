import React from 'react';
import ExpenseItem from './ExpenseItem';

export default {
    component: ExpenseItem,
    title: 'ExpenseItem',
  };
  
  const Template = args => <ExpenseItem {...args} />;
  
  export const Default = Template.bind({});
  Default.args = {
    ExpenseItem: {
      
    },
  };
  
  
  };