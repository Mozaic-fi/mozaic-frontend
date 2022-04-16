import useWindowDimensions from "../../../hooks/useWindowDimension";
import { useState, useEffect } from 'react';
import ValueEditorModal from "../../common/modals/ValueEditorModal";

const MultiAssetDepositForm = ({ availableToken, multiAssetDeposit, setMultiAssetDeposit, tokenName }) => {
    const { width, height } = useWindowDimensions();
    const [isValueEditor, setValueEditor] = useState(false);

    const [calcAmount, setCalcAmount] = useState(0.00);

    const calculateAmount = () => {
        setCalcAmount(12345)
        console.log(calcAmount)
    }

    const updateAmount = (e, i) => {
        let val = [...multiAssetDeposit]
        val[i].amount = e.target.value
        setMultiAssetDeposit(val)
    }

    const updateMax = (i) => {
        let val = [...multiAssetDeposit]
        val[i].isMax = !val[i].isMax
        setMultiAssetDeposit(val)
    }

    const updateApprove = (i) => {
        let val = [...multiAssetDeposit]
        val[i].isApprove = !val[i].isApprove;
        if (val[i].isApprove) val[i].isInfinityApprove = false;
        setMultiAssetDeposit(val);
    }

    const updateInfinityApprove = (i) => {
        let val = [...multiAssetDeposit]
        val[i].isInfinityApprove = !val[i].isInfinityApprove;
        if (val[i].isInfinityApprove) val[i].isApprove = false;
        setMultiAssetDeposit(val);
    }

    const setSlippage = (value) => {
        let val = [...multiAssetDeposit]
        for (let i = 0; i < val.length; i++) {
            val[i].slippage = value
        }
        setMultiAssetDeposit(val)
    }

    useEffect(() => {
        calculateAmount();
    }, [multiAssetDeposit])

    return (
        <>
            <div className="withdraw mb-2">
                <p className="fs-s tc-s mb-2">Add liquidity in underluing pool tokens. First, approve all tokens to power index smart contract and then click supply.</p>


                <div className="multi-token-container">
                    {multiAssetDeposit.map((token, i) =>
                        <div key={token.tokenID} className="input-container-c df-s mb-1">
                            <input onChange={(e) => updateAmount(e, i)} defaultValue="" placeholder="0.00" type="number" />
                            <div className="df-sb">
                                <div className={`max-btn mr-1 ${multiAssetDeposit[i].isMax && "hlt"}`} onClick={() => updateMax(i)}>{width >= 500 ? "Max" : "M"}</div>
                                <div className={`max-btn mr-1 ${multiAssetDeposit[i].isApprove && "hlt"}`} onClick={() => updateApprove(i)}>{width >= 500 ? "Approve" : "A"}</div>
                                <div className={`max-btn mr-1 ${multiAssetDeposit[i].isInfinityApprove && "hlt"}`} onClick={() => updateInfinityApprove(i)}>{width >= 500 ? "Infinity Approve" : "IA"}</div>
                                <div className="df-c token-name-container">
                                    <img className="mr-1" src={availableToken.filter(i => i.id === token.tokenID)[0].icoSrc} alt="" />
                                    {width > 570 && <p>{availableToken.filter(i => i.id === token.tokenID)[0].name}</p>}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="df-sb label">
                    <label className="fs-s t-b" htmlFor="currency">{tokenName} Amount</label>
                    <div className="df-c">
                        <div className="df-c fs-xs">Slippage</div>

                        <div onClick={() => setValueEditor(!isValueEditor)} className="slippage max-btn df-c ml-1 hlt" ><p className="fs-xs tc-p mr-1">{multiAssetDeposit[0].slippage}%</p><img src="/assets/icons/ico.edit.svg"></img></div>
                        {isValueEditor && <ValueEditorModal title="Set Slippage Value" closeModal={setValueEditor} value={multiAssetDeposit[0].slippage} setValue={setSlippage} />}
                    </div>
                </div>

                <div className="input-container">
                    <input placeholder="0.00" className="fs-xl ff-2 tc-p" id="currency" readOnly value={calcAmount} type="number" />
                    <div> <p className="tc-s ml-2">{tokenName}</p></div>
                </div>

                <p className="fs-s tc-s">0.1% enter fee will be transferred to community pool</p>
            </div>

            <style jsx>
                {`
                input {
                    border: none;
                    height: 60px;
                    padding-left: 30px;
                    box-sizing: border-box;
                    background-color: transparent;
                    width: inherit;
                    flex-grow: 1;
                }

                .input-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    box-sizing: border-box;
                    background-color: rgba(255, 255, 255, 0.050);
                    width: 100%;
                    padding-right: 8px;
                }

               .input-container-c {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    box-sizing: border-box;
                    background-color: rgba(255, 255, 255, 0.050);
                    width: 100%;
                    padding-right: 8px;
                }

                .multi-token-container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    align-items: flex-start;
                    overflow: auto;
                    max-height: 30vh;
                }

                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
                }
                
                input:focus-visible {
                    outline-offset: 0;
                    outline: none;
                }

                .token-name-container {
                    width: ${width > 570 ? "120px" : "min-content"};
                    justify-content: ${width > 570 ? "start" : "end"};
                }

                .max-btn {
                    height: 60%;
                    padding-left: 8px;
                    padding-right: 8px;
                    color: rgba(255, 255, 255, 0.500);
                    background-color: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                    text-align: center;
                    width: min-content;
                    white-space: nowrap
                }

                .max-btn.active {
                    color: #FFBB00;
                    background-color: #ffbb0010;
                }
                .slippage.max-btn {
                    padding-right: 0 !important;
                }
                `}
            </style>
        </>);
}

export default MultiAssetDepositForm;