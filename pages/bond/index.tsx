import { useState } from "react";
import CardContent from "../../components/common/card/CardContent";
import BondModal from "../../components/common/modals/BondModal";
import AvailableBondTable from '../../components/common/table/bond/AvailableBondTable';
import MyBondTable from "../../components/common/table/bond/MyBondTable";
import useWindowDimensions from "../../hooks/useWindowDimension";

const Bond = () => {

    const { height, width } = useWindowDimensions();
    const [openBondModal, setOpenBondModal] = useState(false);
    const [bondData, setBondData] = useState({})

    const userData = {

    }

    const availableBonds = [
        {
            id: 1,
            bondName: "USDC",
            icoSrc: ["/assets/icons/tokens/ico.token.usdc.svg"],
            price: 182.2,
            marketPrice: 164.7,
            roi: 0.25,
            tbv: 122324.3
        }, {
            id: 2,
            bondName: "MOZ-AVAX LP",
            icoSrc: ["/assets/icons/tokens/ico.token.moz.svg", "/assets/icons/tokens/ico.token.avax.svg"],
            price: 165.8,
            marketPrice: 164.7,
            roi: -0.17,
            tbv: 43234.5
        }
    ]

    const myBond = [{
        id: 1,
        bondName: "USDC",
        icoSrc: ["/assets/icons/tokens/ico.token.usdc.svg"],
        claimable: 0.0,
        pending: 22.4324,
        vestingTime: 3,
    }, {
        id: 2,
        bondName: "MOZ-AVAX LP",
        icoSrc: ["/assets/icons/tokens/ico.token.moz.svg", "/assets/icons/tokens/ico.token.avax.svg"],
        claimable: 21.532,
        pending: 1.2342,
        vestingTime: 87,
    }]

    const openBond = (id) => {
        setBondData(availableBonds.filter(bond => bond.id === id)[0])
        setOpenBondModal(true)
    }

    return (<>
        <div className="prod-header">
            <div className="container product-in-depth">
                <div className="product-title">
                    <img src="/assets/icons/ico.bond.svg" alt="" />
                    <h2>Bond</h2>
                </div>
                <div className={`info-container-bond ${width > 480 ? "df-sb" : "df ai-c js-c fd-c"}`}>
                    <div className={`${width > 480 ? "df-ra" : "df-ca"}`}>
                        <p style={{ display: "flex", }} className="t-b">Treasury Balance &nbsp; <span><img style={{ display: "inline-block" }} className="info-btn" src="/assets/icons/ico.info.svg" alt="" /></span> </p>
                        <h1 className="num-display ff-1 tc-p">$123152312.37</h1>
                    </div>
                    <div className={`${width > 480 ? "df-la" : "df-ca"}`}>
                        <p className="t-b">MOZ Price</p>
                        <h1 className="num-display ff-1 tc-p">$213.95</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            {myBond &&
                <>
                    <div className="page-title ">
                        <h1 className="tc-s">my bonds</h1>
                    </div>
                    <div className="">
                        <MyBondTable items={myBond} />
                    </div>
                </>
            }
            <div className="page-title ">
                <h1 className="tc-s">available bonds</h1>
            </div>
            <div className="">
                <AvailableBondTable items={availableBonds} openBond={openBond} />
            </div>
            <div style={{ marginBottom: 90 + "px", marginTop: 60 + "px" }} className="card-bg-s w-100 df fd-c jc-c ai-c">
                <div className={`df ${width < 768 && "fd-c"}`}>
                    <CardContent
                        title="exchange your lp"
                        icoSrc={availableBonds[1].icoSrc}
                        description="Exchange available LP tokens for governance token at below market rate Bonds."
                    />
                    <CardContent
                        title="linear vesting"
                        icoSrc="/assets/icons/ico.time.svg"
                        description="Once you receive a  Bond, you are able to vest at any time within the vesting period."
                    />
                    <CardContent
                        title="below market rate roi"
                        icoSrc="/assets/icons/tokens/ico.token.moz.svg"
                        icoText="1.2%"
                        description="To receive a below market rate swap, find your desired Bond with a positive discount rate."
                    />
                </div>
                <button style={{ width: 200 + "px" }} className="btn-primary mb-5">READ THE DOCS</button>
            </div>
            {openBondModal && <BondModal closeModal={setOpenBondModal} bond={bondData} />}
        </div>

        <style jsx>
            {`
                .info-container-bond {
                    box-sizing: border-box;
                    padding: 4px;
                    width: ${width > 768 ? "50%" : "100%"};
                    height: max-content;
                    border-radius: 55px;
                }

                .num-display {
                    font-size: 2.8rem;
                }

            `}
        </style>
    </>);
}

export default Bond;