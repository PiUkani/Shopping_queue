import LocalGroceryStore from '@material-ui/icons/LocalGroceryStore';
import People from '@material-ui/icons/PeopleAlt';
import React from 'react';
import BuildIcon from '@material-ui/icons/Build';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import MessageIcon from '@material-ui/icons/Message';
import ComputerIcon from '@material-ui/icons/Computer';
import BarChartIcon from '@material-ui/icons/BarChart';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import Clock from '@material-ui/icons/AccessTime';


// Hardcoded help-requests data that would be replaced with
// external API calls in phase 2
const createRowData = (user, type, message, date) => {
  return { user, type, message, date };
};


// Hardcoded store recommendation data that would be replaced
// with external API calls in phase 2.
const createServiceData = (color, headline, text, icon) => {
  return { color, headline, text, icon };
};


export const getServiceData = (id) => {
  switch (id) {
    case 0:
      const icon0 = <LocalGroceryStore />;
      return {
        services: [
          createServiceData('#00C853', 'No deals', 'Only deal Grocery', icon0),
          createServiceData('#6200EA', 'Bestco', 'Your one stop shop', icon0),
          createServiceData('#0091EA', 'Tesco Restaurants', 'Chain restaurant for Soul Food', icon0)
        ],
        secondServices: [
          createServiceData('#00C853', 'BallMart', 'Biggest Box store', icon0),
          createServiceData('#6200EA', 'Canadian wire', 'We got All the wires and more', icon0),
          createServiceData('#0091EA', 'Bow\'s', 'We got all your bows', icon0)
        ],
        rows: undefined,
        title: 'Recommended Stores',
        secondTitle: 'Based off your Queue History',
      };
    case 1:
      const icon1 = <People />;
      const icon11 = <Clock />;
      return {
        services: [
          createServiceData('#00C853', 'Current Queue', '200 shoppers in queue', icon1),
          createServiceData('#6200EA', 'Total Shoppers', '500 total shoppers', icon1),
          createServiceData('#0091EA', 'Average wait time', '10 minutes', icon11)
        ],
        title: 'Shoppers Stats',
        secondTitle: '',
        secondServices: [],
        rows: undefined,
      };
    case 2:
      const icon2 = <People />;
      return {
        services: [
          createServiceData('#00C853', 'End Users', '200 end users', icon2),
          createServiceData('#6200EA', 'Online Users', '100 online users', icon2),
          createServiceData('#0091EA', 'Shop Owners', '100 Shop owners', icon2)
        ],
        secondServices: [],
        rows: [
          createRowData('Jon Chavez', 'end user', 'Issue with queuing', 'Today 2:30PM'),
          createRowData('No deals', 'Shop owner', 'Issue with deleting user', 'Today 4:30PM'),
          createRowData('Bestco', 'Shop owner', 'Issue with deleting seeing queue', 'Yesterday 4:30PM'),
          createRowData('Jim Joy', 'end user', 'Issue with deleting user', '06/20/2020')
        ],
        title: 'User Stats',
        secondTitle: 'User Support Messages'
      };
    default:
      return {
        services: [
          createServiceData('#00C853', 'Queue Management', 'Broader queue Management', <BuildIcon />),
          createServiceData('#6200EA', 'Advanced Schedule', 'Schedule queue in advance', <CalendarTodayIcon />),
          createServiceData('#0091EA', 'B2C communication', 'Notify queueing shoppers', <MessageIcon />),
          createServiceData('#d50000', 'Access Everywhere', 'Access your queue settings', <ComputerIcon />),
          createServiceData('#DD2C00', 'User stats', 'Every user has access to their stats', <BarChartIcon />),
          createServiceData('#64DD17', 'Customer service', '24/7 support', <HeadsetMicIcon />)
        ],
        secondServices: [],
        rows: undefined,
        title: 'Services',
        secondTitle: ''
      };
  }
};