import Modal from './Modal';
import { useState, useEffect } from 'react';
import DropdownWithIcons from '../dropdown/DropdownWithIcons';
import ConnectWalletModal from './ConnectWalletModal';
import useWindowDimensions from "../../../hooks/useWindowDimension";
import useAuth from '../../../hooks/useAuth';
import SingleAssetDepositForm from "../../forms/productindepth/SingleAssetDepositForm";
import MultiAssetDepositForm from '../../forms/productindepth/MultiAssetDepositForm';


const DepositModal = ({ closeModal, availableToken, tokenName }) => {

    const { walletConnected } = useAuth()
    const { width, height } = useWindowDimensions();

    const multiAssetInitialValue = [];
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("single");
    const [singleAssetDeposit, setSingleAssetDeposit] = useState({
        tokenID: "",
        slippage: "0.5",
        amount: "",
        isMax: false,
        isApprove: false,
        isInfinityApprove: false,
    })

    const [calculatedAmount, setCalculatedAmount] = useState(0.00)

    availableToken.forEach(token => multiAssetInitialValue = [...multiAssetInitialValue, { tokenID: token.id, slippage: 0.5, amount: 0, isMax: false }]);
    const [multiAssetDeposit, setMultiAssetDeposit] = useState(multiAssetInitialValue);


    const handleTab = (tabName) => setActiveTab(tabName);
    const handleDeposit = (mode) => {
        if (mode === "single") {
            console.log(singleAssetDeposit);
        }
        if (mode === "multi") {
            console.log(multiAssetDeposit);
        }
    }

    const calculateAmount = () => {
        setCalculatedAmount(amount++)
    }


    return (<>
        <Modal title="Deposit" closeModal={closeModal} w={width > 770 ? "770px" : "100%"}>
            <div className="tab-container">
                <div onClick={() => handleTab("single")} className={`tab-selector ${activeTab === "single" && "active"}`}>Single Asset</div>
                <div onClick={() => handleTab("multi")} className={`tab-selector ${activeTab === "multi" && "active"}`}>Multi Asset</div>
            </div>
            <div className="space-s"></div>
            {activeTab === "single" &&
                <SingleAssetDepositForm availableToken={availableToken} singleAssetDeposit={singleAssetDeposit} setSingleAssetDeposit={setSingleAssetDeposit} tokenName={tokenName} />
            }

            {activeTab === "multi" &&
                <MultiAssetDepositForm availableToken={availableToken} multiAssetDeposit={multiAssetDeposit} setMultiAssetDeposit={setMultiAssetDeposit} tokenName={tokenName} />
            }

            {!walletConnected
                ? <button onClick={() => setIsOpen(!isOpen)} className="btn-primary fw">Connect Wallet</button>
                : <button className="btn-primary fw" onClick={() => handleDeposit(activeTab)}>Deposit</button>
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

export default DepositModal;