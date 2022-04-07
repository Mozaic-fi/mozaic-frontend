import Modal from './Modal';
import { useState, useEffect } from 'react';
import ConnectWalletModal from './ConnectWalletModal';
import useWindowDimensions from "../../../hooks/useWindowDimension";
import useAuth from '../../../hooks/useAuth';
import SingleAssetWithdrawForm from "../../forms/productindepth/SingleAssetWithdrawForm";
import MultiAssetWithdrawForm from '../../forms/productindepth/MultiAssetWithdrawForm';


const WithdrawModal = ({ closeModal, availableToken, tokenName }) => {

    const { walletConnected } = useAuth()
    const { width, height } = useWindowDimensions();


    const multiAssetInitialValue = [];
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("single");
    const [singleAssetWithdraw, setSingleAssetWithdraw] = useState({ tokenID: "", slippage: "0.5", amount: "", isMax: false })
    availableToken.forEach(token => multiAssetInitialValue = [...multiAssetInitialValue, { tokenID: token.id, slippage: 0.5, amount: 0, isMax: false }]);
    const [multiAssetWithdraw, setMultiAssetWithdraw] = useState(multiAssetInitialValue);


    const handleTab = (tabName) => setActiveTab(tabName);
    const handleWithdraw = (mode) => {
        if (mode === "single") {
            console.log(singleAssetWithdraw);
        }
        if (mode === "multi") {
            console.log(multiAssetWithdraw);
        }
    }

    return (<>
        <Modal title="Withdraw" closeModal={closeModal} w={width > 770 ? "770px" : "100%"}>
            <div className="tab-container">
                <div onClick={() => handleTab("single")} className={`tab-selector ${activeTab === "single" && "active"}`}>Single Asset</div>
                <div onClick={() => handleTab("multi")} className={`tab-selector ${activeTab === "multi" && "active"}`}>Multi Asset</div>
            </div>
            <div className="space-s"></div>
            {activeTab === "single" &&
                <SingleAssetWithdrawForm availableToken={availableToken} singleAssetWithdraw={singleAssetWithdraw} setSingleAssetWithdraw={setSingleAssetWithdraw} tokenName={tokenName} />
            }

            {activeTab === "multi" &&
                <MultiAssetWithdrawForm availableToken={availableToken} multiAssetWithdraw={multiAssetWithdraw} setMultiAssetWithdraw={setMultiAssetWithdraw} tokenName={tokenName} />
            }

            {!walletConnected
                ? <button onClick={() => setIsOpen(!isOpen)} className="btn-primary fw">Connect Wallet</button>
                : <button className="btn-primary fw" onClick={() => handleWithdraw(activeTab)}>Withdraw</button>
            }
            {isOpen && <ConnectWalletModal setIsOpen={setIsOpen} />}
        </Modal>

        <style jsx>
            {`
                .tab-container {
                    width: 100%;
                    background-color: rgba(255, 255, 255, 0.050);
                    display: flex;
                    height: 40px;
                }

                .tab-selector {
                    display: flex;
                    width: 50%;
                    text-align: center;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                }

                .tab-selector.active {
                    background-color: #FFBB00;
                    color: #25212B;
                    font-weight: bold;
                }
            `}
        </style>
    </>);
}

export default WithdrawModal;