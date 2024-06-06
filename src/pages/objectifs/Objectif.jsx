import Footer from "../../components/Footer.jsx";
import Header from "../../components/Header.jsx";
import MenuAside from "../../components/MenuAside.jsx";
import { useEffect, useState } from "react";
import { API_URL } from "../../services/constants.js";

const Objectif = () => {
  const [chapitres,setChapitres] = useState([])
  useEffect(() => {
    fetch(`${API_URL}/auditapp/chapitre`)
    .then(response => response.json())
    .then(data => {
      console.log("data",data);
      setChapitres(data)
    })
    
  },[])
  console.log("chapitre",chapitres);
  return (
    <div
      id="kt_app_body"
      data-kt-app-header-stacked="true"
      data-kt-app-header-primary-enabled="true"
      data-kt-app-header-secondary-enabled="true"
      data-kt-app-sidebar-enabled="true"
      data-kt-app-sidebar-fixed="false"
      data-kt-app-toolbar-enabled="true"
      className="app-default"
    >
      {/*begin::App*/}
      <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
        {/*begin::Page*/}
        <div
          className="app-page flex-column flex-column-fluid"
          id="kt_app_page"
        >
          {/*begin::Header*/}
          <Header activeMenu={2} />
          {/*end::Header*/}
          {/*begin::Wrapper*/}
          <div
            className="app-wrapper flex-column flex-row-fluid"
            id="kt_app_wrapper"
          >
            {/*begin::Wrapper container*/}
            <div className="app-container container-fluid d-flex">
              {/*begin::Sidebar
              <MenuAside menu={2} item={1} />*/}
              {/*end::Sidebar*/}
              {/*begin::Main*/}
              <div
                className="app-main flex-column flex-row-fluid"
                id="kt_app_main"
              >
                {/*begin::Content wrapper*/}
                <div className="d-flex flex-column flex-column-fluid">
                  {/*begin::Toolbar*/}
                  <div
                    id="kt_app_toolbar"
                    className="app-toolbar pt-7 pt-lg-10"
                  >
                    {/*begin::Toolbar wrapper*/}
                    <div className="app-toolbar-wrapper d-flex flex-stack flex-wrap gap-4 w-100">
                      {/*begin::Page title*/}
                      <div className="page-title d-flex flex-column justify-content-center gap-1 me-3">
                        {/*begin::Breadcrumb*/}
                        <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7">
                          {/*begin::Item*/}
                          <li className="breadcrumb-item text-gray-700 fw-bold lh-1 mx-n1">
                            <a href="index.html" className="text-hover-primary">
                              <i className="ki-outline ki-home text-gray-700 fs-6" />
                            </a>
                          </li>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <li className="breadcrumb-item">
                            <i className="ki-outline ki-right fs-7 text-gray-700" />
                          </li>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <li className="breadcrumb-item text-gray-700 fw-bold lh-1 mx-n1">
                            Annexe A
                          </li>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <li className="breadcrumb-item">
                            <i className="ki-outline ki-right fs-7 text-gray-700" />
                          </li>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <li className="breadcrumb-item text-gray-500 mx-n1">
                            questions
                          </li>
                          {/*end::Item*/}
                        </ul>
                        {/*end::Breadcrumb*/}
                        {/*begin::Title}
                        <h1 className="page-heading d-flex flex-column justify-content-center text-gray-900 fw-bold fs-3 m-0">
                          Nouveau questionnaire
                        </h1>
                        {/*end::Title*/}
                      </div>
                      {/*end::Page title*/}
                    </div>
                    {/*end::Toolbar wrapper*/}
                  </div>
                  {/*end::Toolbar*/}
                  {/*begin::Content*/}
                  <div id="kt_app_content" className="app-content">
                    {/*begin::Row*/}
                    <div className="row gy-5 g-xl-10">
                      <div className="card mb-5 mb-xl-10">
                        {/*begin::Card header*/}
                        <div className="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_notifications" aria-expanded="true" aria-controls="kt_account_notifications">
                          <div className="card-title m-0">
                            <h3 className="fw-bold m-0">Objectifs</h3>
                          </div>
                        </div>
                        {/*begin::Card header*/}
                        {/*begin::Content*/}
                        <div id="kt_account_settings_notifications" className="collapse show">
                          {/*begin::Form*/}
                          <form className="form">
                            {/*begin::Card body*/}
                            <div className="card-body border-top px-9 pt-3 pb-4">
                              {/*begin::Table*/}
                              <div className="table-responsive">
                                <table className="table table-row-dashed border-gray-300 align-middle gy-6">
                                  <tbody className="fs-6 fw-semibold">
                                    {/*begin::Table row*/}
                                        {chapitres.map((chapitre, index) =>(<>
                                          <tr>
                                          <td className="min-w-250px fs-4 fw-bold">{chapitre.nom}</td>
                                          <td key={index}>
                                                <div className="form-check form-check-custom form-check-solid">
                                                  <label className="form-check-label ps-2" htmlFor='team1'>{chapitre.NoteCible}</label>
                                                </div>
                                              </td>
                                        </tr>
                                        </>))}
                                  </tbody>
                                </table>
                              </div>
                              {/*end::Table*/}
                            </div>
                            {/*end::Card body*/}
                            {/*begin::Card footer*/}
                            
                            {/*end::Card footer*/}
                          </form>
                          {/*end::Form*/}
                        </div>
                        {/*end::Content*/}
                      </div>
                    </div>
                    {/*end::Row*/}
                  </div>
                  {/*end::Content*/}
                </div>
                {/*end::Content wrapper*/}
                {/*begin::Footer*/}
                <Footer />
              </div>
              {/*end:::Main*/}
            </div>
            {/*end::Wrapper container*/}
          </div>
          {/*end::Wrapper*/}
        </div>
        {/*end::Page*/}
      </div>
      {/*end::App*/}
    </div>
  );
};
export default Objectif;
