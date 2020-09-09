import React from 'react';

import FactCheckWidget from './FactCheckWidget';

export default {
  title: 'Components/FactCheckWidget',
  component: FactCheckWidget,
};
const claims = [
  {
    claimant:{name:"Jaggi Vasudev"},
    rating:{slug:"false",media:{src:"https://source.unsplash.com/100x100",alt:"blah"}},
    claim:"During Partition, the minority population which stayed back in Pakistan was 23% and 30% in West and East Pakistan respectively.",
    review:"While there is no conclusive data regarding share of minorities, Hindus who stayed back is West Pakistan as of 1951 were only 1.6% , much less than 23% quoted by Jaggi Vasudev. Even the number quoted for East Pakistan is wrong. Hence the statement is False."
  },
  {
    claimant:{name:"Jaggi Vasudev"},
    rating:{slug:"misleading",media:{src:"https://source.unsplash.com/100x100",alt:"blah"}},
    claim:"Birth certificate, Aadhar, Voter ID etc and other documents as proof for NRC",
    review:"While there is no official notification on the documents which needs to be provided for NRC, the experience from Assam NRC shows that proving citizenship is not about simply submitting one of the documents as stated by Jaggi Vasudev. Hence this statement is Misleading."
  },
  {
    claimant:{name:"Facebook"},
    rating:{slug:"misleading",media:{src:"https://source.unsplash.com/100x100",alt:"blah"}},
    claim:"A clip from a movie, ‘The Flu’, is being falsely shared as ‘Situation in Italy’",
    review:"False."
  }
]

export const Basic = () => <FactCheckWidget  claims={claims} />;

export const WithOneClaim = () => <FactCheckWidget  claims={[claims[0]]} />;
