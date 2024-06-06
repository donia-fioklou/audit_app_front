import Footer from "../../components/Footer";
import Header from "../../components/Header.jsx";
import MenuAside from "../../components/MenuAside";
import RadarChart from "../../services/charts/RadarChart.js";
import { useEffect, useState } from "react";
import { API_URL } from "../../services/constants.js";

const Home = () => {
  const [noteCible,setNoteCible] = useState({})
  
  useEffect(() => {
    fetch(`${API_URL}/auditapp/chapitre-stats-note-cible/`)
    .then(response => response.json())
    .then(data => {
      console.log("data",data);
      setNoteCible(data)
    })
    
  },[])
  console.log("noteCible",noteCible);
  const [noteActu,setNoteActu] = useState({})
  useEffect(() => {
    fetch(`${API_URL}/auditapp/chapitre-stats-actuel/`)
    .then(response => response.json())
    .then(data => {
      console.log("data",data);
      setNoteActu(data)
    })
    
  },[])
  console.log("noteActu",noteActu);
  return (
    <div id="kt_app_body" data-kt-app-header-stacked="true" data-kt-app-header-primary-enabled="true" data-kt-app-header-secondary-enabled="true" data-kt-app-sidebar-enabled="true" data-kt-app-sidebar-fixed="false" data-kt-app-toolbar-enabled="true" className="app-default">

      {/*begin::App*/}
      <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
        {/*begin::Page*/}
        <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
          {/*begin::Header*/}
          <Header activeMenu={1} />
          {/*end::Header*/}
          {/*begin::Wrapper*/}
          <div
            className="app-wrapper flex-column flex-row-fluid"
            id="kt_app_wrapper"
          >
            {/*begin::Wrapper container*/}
            <div className="app-container container-fluid d-flex">
              {/*begin::Sidebar
              <MenuAside />*/}
              {/*end::Sidebar*/}
              {/*begin::Main*/}
              <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                {/*begin::Content wrapper*/}
                <div className="d-flex flex-column flex-column-fluid">
                  {/*begin::Toolbar*/}
                  <div id="kt_app_toolbar" className="app-toolbar pt-7 pt-lg-10">
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
                            Tableau de bord
                          </li>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <li className="breadcrumb-item">
                            <i className="ki-outline ki-right fs-7 text-gray-700" />
                          </li>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <li className="breadcrumb-item text-gray-500 mx-n1">
                            
                          </li>
                          {/*end::Item*/}
                        </ul>
                        {/*end::Breadcrumb*/}
                        {/*begin::Title*/}
                        <h1 className="page-heading d-flex flex-column justify-content-center text-gray-900 fw-bold fs-3 m-0">
                          
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
                      <div className="row g-5 g-xl-10 mb-5 mb-xl-0">
                        <div className="col-md-6 mb-xl-10">
                          {/*begin::Card widget 28*/}
                          <div className="card card-flush">
                            {/*begin::Header*/}
                            <div className="card-header pt-7">
                              {/*begin::Card title*/}
                              <div className="card-title flex-stack flex-row-fluid">
                                
                                    <span class="symbol-label bg-light-info">
                                      Cible
                                    </span>
                                
                                {/*begin::Wrapper*/}
                                <div className="me-n2">
                                  {/*begin::Badge*/}
                                  
                                  {/*end::Badge*/}
                                </div>
                                {/*end::Wrapper*/}
                              </div>
                              {/*end::Header*/}
                            </div>
                            {/*end::Card title*/}
                            {/*begin::Card body*/}
                            <div className="card-body d-flex align-items-end">
                              {/*begin::Wrapper*/}
                              <div className="d-flex flex-column">
                                <RadarChart labels={noteCible.chapitre_num} notes={noteCible.chapitre_note_cible}/>
                              </div>
                              {/*end::Wrapper*/}
                            </div>
                            {/*end::Card body*/}
                          </div>
                          {/*end::Card widget 28*/}      
                        </div> 
                        <div className="col-md-6 mb-xl-10">
                          {/*begin::Card widget 28*/}
                          <div className="card card-flush">
                            {/*begin::Header*/}
                            <div className="card-header pt-7">
                              {/*begin::Card title*/}
                              <div className="card-title flex-stack flex-row-fluid">
                                
                                    <span class="symbol-label bg-light-info">
                                      Actuel
                                    </span>
                                
                                {/*begin::Wrapper*/}
                                <div className="me-n2">
                                  {/*begin::Badge*/}
                                  
                                  {/*end::Badge*/}
                                </div>
                                {/*end::Wrapper*/}
                              </div>
                              {/*end::Header*/}
                            </div>
                            {/*end::Card title*/}
                            {/*begin::Card body*/}
                            <div className="card-body d-flex align-items-end">
                              {/*begin::Wrapper*/}
                              <div className="d-flex flex-column">
                                <RadarChart labels={noteActu.chapitre_num} notes={noteActu.moy_chap}/>
                              </div>
                              {/*end::Wrapper*/}
                            </div>
                            {/*end::Card body*/}
                          </div>
                          {/*end::Card widget 28*/}      
                        </div> 
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

  )
}
export default Home;