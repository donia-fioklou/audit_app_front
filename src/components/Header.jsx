import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Header = ({activeMenu}) => {
    const navigate = useNavigate();
    //const [activeMenu, setActiveMenu] = useState("");
    const navigation = (destination) => {
        //setActiveMenu(destination)
        navigate("/" + destination);
    }
   
    return (
        <>
            {/*begin::Header*/}
            <div id="kt_app_header" className="app-header">
                {/*begin::Header primary*/}
                <div className="app-header-primary" data-kt-sticky="true" data-kt-sticky-name="app-header-primary-sticky"  >
                    {/*begin::Header primary container*/}
                    <div className="app-container container-fluid d-flex align-items-stretch justify-content-between" id="kt_app_header_primary_container">
                        {/*begin::Header primary*/}
                        <div className="d-flex align-items-center align-items-stretch justify-content-between flex-row-fluid" id="kt_app_header_wrapper">
                            <div className="app-header-logo d-flex align-items-center">
                                {/*begin::Mobile toggle*/}
                                <div className="btn btn-icon btn-color-gray-500 btn-active-color-primary w-35px h-35px ms-n3 me-2 d-flex d-lg-none" id="kt_app_header_menu_toggle">
                                    <i className="ki-outline ki-abstract-14 fs-1"></i>
                                </div>
                                {/*end::Mobile toggle*/}
                                {/*begin::Logo image

                                <img alt="Logo" src="" className="h-70px h-lg-70px theme-light-show" />*/}

                                {/*end::Logo image*/}
                            </div>
                            <div className="d-flex align-items-stretch noprint" id="kt_app_header_menu_wrapper">
                                {/*begin::Menu holder*/}
                                <div className="app-header-menu app-header-mobile-drawer align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="app-header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_header_menu_toggle" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_menu_wrapper'}">
                                    {/*begin::Menu*/}
                                    <div className="menu menu-rounded menu-column menu-lg-row menu-active-bg menu-title-gray-600 menu-state-gray-900 menu-arrow-gray-500 fw-semibold fw-semibold fs-6 align-items-stretch my-5 my-lg-0 px-2 px-lg-0 noprint" id="#kt_app_header_menu" data-kt-menu="true">
                                        {/*begin:Menu item*/}
                                        <div onClick={() => navigation("")} data-kt-menu-placement="bottom-start" data-kt-menu-offset="-250,0" className={`menu-item menu-here-bg ${activeMenu == 1 ? "here show" : ""} menu-lg-down-accordion me-0 me-lg-2`}>
                                            <span className="menu-link">
                                                <span className="menu-title">Tableau de bord</span>
                                                <span className="menu-arrow d-lg-none"></span>
                                            </span>
                                        </div>

                                        <div onClick={() => navigation("objectif")} data-kt-menu-placement="bottom-start" data-kt-menu-offset="-400,0" className={`menu-item menu-here-bg ${activeMenu == 2 ? "here show" : ""} menu-lg-down-accordion me-0 me-lg-2`}>
                                            <span className="menu-link">
                                                <span className="menu-title">Objectifs</span>
                                                <span className="menu-arrow d-lg-none"></span>
                                            </span>
                                        </div>
                                        <div onClick={() => navigation("annexe/question/new")} data-kt-menu-placement="bottom-start" data-kt-menu-offset="12,0" className={`menu-item menu-here-bg ${activeMenu == 3 ? "here show" : ""} menu-lg-down-accordion me-0 me-lg-2`}>
                                            <span className="menu-link">
                                                <span className="menu-title">Annexe A</span>
                                                <span className="menu-arrow d-lg-none"></span>
                                            </span>
                                        </div>

                                        <div data-kt-menu-placement="bottom-start" data-kt-menu-offset="-400,0" className={`menu-item menu-here-bg ${activeMenu === 4 ? "here show" : ""} menu-lg-down-accordion me-0 me-lg-2`}>
                                            <span className="menu-link">
                                                <span className="menu-title">Exigences</span>
                                                <span className="menu-arrow d-lg-none"></span>
                                            </span>
                                        </div>

                                    </div>
                                    {/*end::Menu*/}
                                </div>
                                {/*end::Menu holder*/}
                            </div>
                            <div className="app-header-logo d-flex align-items-center">
                                {/*begin::Mobile toggle*/}
                                <div className="btn btn-icon btn-color-gray-500 btn-active-color-primary w-35px h-35px ms-n3 me-2 d-flex d-lg-none" id="kt_app_header_menu_toggle">
                                    <i className="ki-outline ki-abstract-14 fs-1"></i>
                                </div>
                                {/*end::Mobile toggle*/}
                                {/*begin::Logo image

                                <img alt="Logo" src="" className="h-70px h-lg-70px theme-light-show" />*/}

                                {/*end::Logo image*/}
                            </div>
                        </div>
                        {/*end::Header primary*/}
                    </div>
                    {/*end::Header primary container*/}
                </div>
                {/*end::Header primary*/}
            </div>
            {/*end::Header*/}
        </>
    )
}
export default Header;