const sampleProfile = [
  ['Adams, Bret M.', '57014', 'Washington County Sheriff\'s Office'],
  ['Inactive', 'Reserve Officer', '', '', ''],
  [
    {
      date: 'Date',
      agency: 'Agency',
      action: 'Action',
      rank: 'Rank',
      classification: 'Classification',
      assignment: 'Assignment'
    },
    {
      date: '12/6/2018',
      agency: 'Sweet Home Police Department',
      action: 'Hired',
      rank: 'Police Off',
      classification: ' ',
      assignment: ' '
    },
    {
      date: '2/16/2017',
      agency: 'Washington County Sheriff\'s Office',
      action: 'Resigned',
      rank: 'Reserve',
      classification: ' ',
      assignment: ' '
    },
    {
      date: '1/3/2017',
      agency: 'Washington County Sheriff\'s Office',
      action: 'Hired',
      rank: 'Reserve',
      classification: ' ',
      assignment: ' '
    }
  ],
  [
    [
      'Status\nDate',
      'Certificate',
      'Level',
      'Status',
      'Certificate\nDate',
      'Expiration\nDate',
      'Probation\nDate'
    ],
    [
      '2/6/2020',
      'Police Officer',
      'Basic',
      'Granted',
      '2/6/2020',
      ' ',
      ' '
    ]
  ],
  [
    [
      'Date',   'Cr Yr',
      'Course', 'Title',
      'Status', 'Score',
      'Hours'
    ],
    [
      '1/30/2020',
      '2020',
      'M11-19A',
      'DPSST Police Officer Field Training Manual',
      'Completed',
      '0',
      '50.00'
    ],
    [
      '1/27/2020',
      '2020',
      'SHP25771',
      'First Aid/CPR',
      'Passed',
      '0',
      '6.00'
    ],
    ['2020 Hours', '56.00'],
    [
      '12/19/2019',
      '2019',
      'SHP15613',
      'Tactical Medicine Range',
      'Passed',
      '0',
      '2.00'
    ],
    [
      '12/19/2019',
      '2019',
      'SHP04292',
      'Low Light Range',
      'Passed',
      '0',
      '2.00'
    ],
    [
      '12/19/2019',
      '2019',
      'SHP22619',
      'Tactical Medicine Classroom',
      'Passed',
      '0',
      '3.00'
    ],
    [
      '12/11/2019',
      '2019',
      'SHP23065',
      'Ethics for City Employees-Do The Right Thing',
      'Passed',
      '0',
      '1.00'
    ],
    [
      '11/30/2019',
      '2019',
      'SHP07700',
      '2019 Annual Policy Review',
      'Passed',
      '0',
      '7.00'
    ],
    [
      '10/24/2019',
      '2019',
      'SHP02901',
      'DT\'s (max restraint techniques)',
      'Passed',
      '0',
      '1.00'
    ],
    [
      '8/19/2019',
      '2019',
      'BPT43665',
      'SFST Refresher',
      'Passed',
      '0',
      '4.00'
    ],
    [
      '8/14/2019',
      '2019',
      'BPT39630',
      'RADAR/LIDAR - Practical',
      'Passed',
      '0',
      '16.00'
    ],
    [
      '7/15/2019',
      '2019',
      'SHP32397',
      'RADAR & LIDAR Training',
      'Passed',
      '0',
      '6.00'
    ],
    [
      '6/7/2019',
      '2019',
      '19-0008',
      'DPSST Basic Police',
      'Passed',
      '0',
      '640.00'
    ],
    ['2019 Hours', '682.00'],
    [
      '12/10/2018',
      '2018',
      'SHP23174',
      'Firearms Qual (Duty Pistol, Patrol Rifle, Backup)',
      'Passed',
      '0',
      '8.00'
    ],
    ['2018 Hours', '8.00'],
    [
      '2/21/2017',
      '2017',
      'F6C25882',
      'Firearms Classroom',
      'Passed',
      '0',
      '4.00'
    ],
    [
      '2/18/2017',
      '2017',
      'F6C25805',
      'Ground Fighting',
      'Passed',
      '0',
      '8.00'
    ],
    [
      '2/16/2017',
      '2017',
      'F6C01446',
      'Ground Control',
      'Passed',
      '0',
      '4.00'
    ],
    [
      '2/14/2017',
      '2017',
      'F6C22049',
      'Takedowns',
      'Passed',
      '0',
      '4.00'
    ],
    [
      '2/11/2017',
      '2017',
      'F6C11439',
      'Handcuffing-Cooperative/High Risk',
      'Passed',
      '0',
      '8.00'
    ],
    [
      '2/9/2017',
      '2017',
      'F6C36130',
      'ConSim-Box Drills/Hallway Drills',
      'Passed',
      '0',
      '4.00'
    ],
    [
      '2/7/2017', '2017',
      'F6A08130', 'Baton',
      'Passed',   '0',
      '4.00'
    ],
    [
      '2/4/2017', '2017',
      'F6A08132', 'Taser',
      'Passed',   '0',
      '8.00'
    ],
    [
      '2/2/2017',
      '2017',
      'F6C24293',
      'Search and Seizure',
      'Passed',
      '0',
      '4.00'
    ],
    [
      '1/31/2017',
      '2017',
      'F6C00531',
      'Criminal Law',
      'Passed',
      '0',
      '4.00'
    ],
    [
      '1/28/2017',
      '2017',
      'HBS41302',
      'CPR/AED/First Aid',
      'Passed',
      '0',
      '5.50'
    ],
    [
      '1/28/2017',
      '2017',
      'HBS31649',
      'Bloodborne Pathogens',
      'Passed',
      '0',
      '1.00'
    ],
    [
      '1/28/2017',
      '2017',
      'HBS39285',
      'Sexual Harassment',
      'Passed',
      '0',
      '0.50'
    ],
    [
      '1/26/2017',
      '2017',
      'F6A08129',
      'Fitness and Nutrition',
      'Passed',
      '0',
      '4.00'
    ],
    [
      '1/24/2017',
      '2017',
      'F6A08127',
      'Traffic Law and Crash Response',
      'Passed',
      '0',
      '4.00'
    ],
    [
      '1/24/2017',
      '2017',
      'F6A08128',
      'Defensive Tactics - Stricking',
      'Passed',
      '0',
      '4.00'
    ],
    [
      '1/24/2017',
      '2017',
      'F6C37288',
      'Traffic Law Crash Response',
      'Passed',
      '0',
      '4.00'
    ],
    [
      '1/21/2017',
      '2017',
      'F6A08126',
      'Defensive Tactics - OC',
      'Passed',
      '0',
      '4.00'
    ],
    [
      '1/19/2017',
      '2017',
      'F6C26960',
      'Use of Force Lecture',
      'Passed',
      '0',
      '4.00'
    ],
    [
      '1/17/2017',
      '2017',
      'F6A08124',
      'Use of Force/Warrior Spirit',
      'Passed',
      '0',
      '4.00'
    ],
    [
      '1/12/2017',
      '2017',
      'F6A08121',
      'Ethics/Leadership',
      'Passed',
      '0',
      '4.00'
    ],
    [
      '1/12/2017',
      '2017',
      'F6A08122',
      'Radio Procedures',
      'Passed',
      '0',
      '2.00'
    ],
    [
      '1/12/2017',
      '2017',
      'F6A08123',
      'Community Policing',
      'Passed',
      '0',
      '4.00'
    ],
    [
      '1/10/2017',
      '2017',
      'F6A08120',
      'Reserve Academy',
      'Passed',
      '0',
      '4.00'
    ],
    [
      '1/5/2017', '2017',
      'HBS32918', 'PREA',
      'Passed',   '0',
      '3.50'
    ],
    [
      '1/3/2017',
      '2017',
      'HBS31070',
      'Fire Extinguisher',
      'Passed',
      '0',
      '0.50'
    ],
    [
      '1/3/2017',
      '2017',
      'HBS20554',
      'Hazardous Communications',
      'Passed',
      '0',
      '0.50'
    ],
    [
      '1/3/2017',
      '2017',
      'HBS36816',
      'Reserve Expectations',
      'Passed',
      '0',
      '1.00'
    ],
    [
      '1/3/2017',
      '2017',
      'HBS40848',
      'Customer Service - Give Em The Pickle',
      'Passed',
      '0',
      '0.50'
    ],
    [
      '1/3/2017',
      '2017',
      'HBS26042',
      'Reserve Orientation',
      'Passed',
      '0',
      '1.00'
    ],
    ['2017 Hours', '108.00'],
    ['Total Hours', '854.00']
  ],
  [
    ['Topic', 'Attribute', 'Effective\nDate', 'Expiration\nDate'],
    [
      'Certification Cards',
      'First Aid and CPR',
      '1/27/2020',
      '1/27/2022'
    ],
    ['Maintenance Requirements', 'LE Annual', '1/1/2020', '12/31/2020'],
    [
      'Maintenance Requirements',
      'LE Basic 3 Year',
      '1/1/2020',
      '12/31/2022'
    ],
    ['Code of Ethics', 'Law Enforcement Signed', '2/18/2019', ' '],
    ['Code of Ethics', 'Signed', '1/3/2017', ' ']
  ],
  [['Date', 'Degree', 'School', 'Major', 'Hours']]
];

module.exports = sampleProfile;
