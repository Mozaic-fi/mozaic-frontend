import React from 'react';
import { useWeb3React } from '@web3-react/core';
import TokenListRinkeby from './token-list-rinkeby.json';
import { useEffect, useState } from 'react';
import { injected } from '../../helpers/connectors';
import useBalance from '../../hooks/useBalance';
export default function Home() {
  const [selectedToken, setSelectedToken] = useState(TokenListRinkeby[0]);

  const { activate, account } = useWeb3React();

  const [balance] = useBalance(selectedToken.address, selectedToken.decimals);

  useEffect(() => {
    console.log(selectedToken, TokenListRinkeby);
  }, [selectedToken]);

  return (
    <div className={'container'}>
      <button onClick={() => activate(injected)}>Connect wallet</button>
      {account ? `Connected wallet: ${account}` : 'Wallet not connected'}
      <select
        onChange={(e: any) =>
          setSelectedToken(TokenListRinkeby[e.target.value])
        }
      >
        {TokenListRinkeby.map((token, index) => (
          <option value={index} key={token.address}>
            {token.name}
          </option>
        ))}
      </select>
      {selectedToken.name} balance {balance}
    </div>
  );
}

// import { useEffect, useState } from 'react';
// import { useWeb3React } from '@web3-react/core';
// import useBalance from '../../hooks/useBalance';
// import TokenListRinkeby from './token-list-rinkeby.json';

// export default function index() {
//   const [selectedToken, setSelectedToken] = useState<any>(TokenListRinkeby[0]);

//   const { activate, account } = useWeb3React<any>();

//   const [balance] = useBalance(selectedToken.address, selectedToken.decimals);

//   useEffect(() => {
//     console.log(selectedToken, TokenListRinkeby);
//   }, [selectedToken]);

//   return (
//     <div className={'hello'}>
//       {/* <button onClick={() => activate(injected)}>Connect wallet</button> */}
//       {account ? `Connected wallet: ${account}` : 'Wallet not connected'}
//       <select
//         onChange={(e) => setSelectedToken(TokenListRinkeby[e.target.value])}
//       >
//         {TokenListRinkeby.map((token, index) => (
//           <option value={index} key={token.address}>
//             {token.name}
//           </option>
//         ))}
//       </select>
//       {selectedToken.name} balance {balance}
//     </div>
//   );
// }

// import styles from '../styles/Home.module.css';

// export default function Home() {

// }
