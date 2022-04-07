import Link from "next/link";
import { useRouter } from "next/router";

const MobileNav = () => {

    const router = useRouter();
    const isActive = (path) => {
        if (router.asPath === path) return "active"
        return "";
    }

    const navItems = [{
        id: 1,
        name: "Products",
        path: "/",
    }, {
        id: 2,
        name: "Stake",
        path: "/stake",
    }, {
        id: 3,
        name: "Bond",
        path: "/bond",
    }, {
        id: 4,
        name: "Vote",
        path: "/vote",
    },
    ]

    const menuItems = [{
        id: 1,
        name: "Mozaic",
        path: "/home",
        imgSrc: "/assets/icons/navmenu/ico.menu.home.svg",
    }, {
        id: 2,
        name: "General Feedback",
        path: "/feedback",
        imgSrc: "/assets/icons/navmenu/ico.menu.feedback.svg",
    }, {
        id: 3,
        name: "Bug Report",
        path: "/report",
        imgSrc: "/assets/icons/navmenu/ico.menu.bug.svg",
    }, {
        id: 4,
        name: "User",
        path: "/user",
        imgSrc: "/assets/icons/navmenu/ico.menu.user.svg",
    }, {
        id: 5,
        name: "Governance",
        path: "/governance",
        imgSrc: "/assets/icons/navmenu/ico.menu.governance.svg",
    },
    ]

    return (
        <>
            <div className="menu-overlay"></div>
            <div className="bg-darker mobile-nav">
                <nav>
                    {navItems.map((item) =>
                        <Link key={item.id} href={item.path}>
                            <a className={"nav-item " + isActive(item.path)} title={item.name}>{item.name}</a>
                        </Link>)
                    }
                </nav>

                <div className="menu-container">
                    {menuItems.map((item) =>
                        <Link key={item.id} href={item.path}>
                            <div className="menu-items bg-dark">
                                <div className="iconholder-menu">
                                    <img src={item.imgSrc} alt="" />
                                </div>
                                <p>{item.name}</p>
                            </div>
                        </Link>
                    )}
                </div>

            </div>
            <style jsx>
                {`
                    .mobile-nav {
                        position: fixed;
                        top: 96px;
                        left: 0;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        left: 0;
                        height: calc(100vh - 96px);
                        width: 100vw;
                        border-radius: 0;
                        border: none;
                        box-sizing: border-box;
                    }

                    nav {
                        display: flex;
                        height: 100%;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }

                    nav a {
                        font-size: 1.8rem;
                        margin: 0;
                        padding: 1.25rem;
                    }

                    .menu-container {
                        height: min-content;
                        width: 100vw;
                        display: flex;
                        flex-wrap: wrap;
                        color: white;
                        padding: 12px;
                    }

                    .menu-items {
                        display: flex;
                        max-height: min-content;
                        text-align: start;
                        align-items: center;
                        box-sizing: border-box;
                        width: calc(50% - 36px);
                        padding: 30px;
                        margin: 12px;
                        background-color: black;
                    }

                    .menu-items:hover {
                        background-color: rgba(255, 255, 255, 0.164);
                    }

                    .menu-items p {
                        display: inline-block;
                        margin-left: 16px;
                    }

                    @media screen and (max-width: 480px) {

                        .menu-container {
                            padding: 0;
                        }

                        .menu-items {
                            box-sizing: border-box;
                            margin: 8px 16px;
                            padding: 10px;
                            width: 100%;
                        }

                        .menu-container:last-child {
                            margin-bottom: 16px;
                        }
                    }

                `}
            </style>
        </>
    );
}

export default MobileNav;