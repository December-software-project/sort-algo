import { AiFillSetting, AiOutlineSelect } from 'react-icons/ai';
import { GoPlay } from 'react-icons/go';
import { MdReplay } from 'react-icons/md';
import React from 'react';

export const StepsData = [
  {
    icon: <AiOutlineSelect size={70} color={'#11C2C9'} />,
    title: '1. Select the Algorithm',
    description: 'Visualize the algorithm of your choice.',
  },
  {
    icon: <AiFillSetting size={70} color={'#5466FF'} />,
    title: '2. Select Settings',
    description: 'Adjust the speed of the visualizer and array size.',
  },
  {
    icon: <GoPlay size={70} color={'#5466FF'} />,
    title: '3. Start Sorting',
    description: 'Press the play button to start the step by step sorting process.',
  },
  {
    icon: <MdReplay size={70} color={'#11C2C9'} />,
    title: '4. Fast-forward, Backtrack, and Replay',
    description:
      'Replay the entire sorting process or walk through ' +
      'the algorithm one step at a time with these functions.',
  },
];
