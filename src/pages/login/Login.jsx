import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext.js';

function Login(){
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext)
  
  const handleLogin = async (e) => {

      e.preventDefault();
      try {
          const response = await fetch(`${API_URL}/api/token/`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ email, password })
          });
          const data = await response.json();
          if (response.ok) {
            dispatch({ type: "LOGIN", payload: data.access })
            sessionStorage.setItem('token', data.access);
            navigate('/');
          } else {
              setError('Invalid email or password');
          }
      } catch (err) {
        console.log('err',err);
          setError('Failed to login');
      }
  };
    return(
        <div>
  {/*begin::Theme mode setup on page load*/}
{/*end::Theme mode setup on page load*/}
{/*begin::Root*/}
<div className="d-flex flex-column flex-root" id="kt_app_root">
  {/*begin::Page bg image*/}
  <style dangerouslySetInnerHTML={{__html: "body { background-image: url('assets/media/auth/bg4.jpg'); } [data-bs-theme=\"dark\"] body { background-image: url('assets/media/auth/bg4-dark.jpg'); }" }} />
  {/*end::Page bg image*/}
  {/*begin::Authentication - Sign-in */}
  <div className="d-flex flex-column flex-column-fluid flex-lg-row">
    {/*begin::Aside*/}
    <div className="d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10">
      {/*begin::Aside*/}
      <div className="d-flex flex-center flex-lg-start flex-column">
        {/*begin::Logo*/}
        {/* <a href="index.html" className="mb-7">
          <img alt="Logo" src="assets/media/logos/custom-3.svg" />
        </a> */}
        {/*end::Logo*/}
        {/*begin::Title*/}
        
        {/*end::Title*/}
      </div>
      {/*begin::Aside*/}
    </div>
    {/*begin::Aside*/}
    {/*begin::Body*/}
    <div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12 p-lg-20">
      {/*begin::Card*/}
      <div className="bg-body d-flex flex-column align-items-stretch flex-center rounded-4 w-md-600px p-20">
        {/*begin::Wrapper*/}
        <div className="d-flex flex-center flex-column flex-column-fluid px-lg-10 pb-15 pb-lg-20">
          {/*begin::Form*/}
          <form className="form w-100" noValidate="novalidate" id="kt_sign_in_form" data-kt-redirect-url="index.html" onSubmit={handleLogin}>
            {/*begin::Heading*/}
            <div className="text-center mb-11">
              {/*begin::Title*/}
              <h1 className="text-gray-900 fw-bolder mb-3">Se connecter</h1>
              {/*end::Title*/}
              
            </div>
            {/*begin::Heading*/}
            
            
            {/*begin::Input group=*/}
            <div className="fv-row mb-8">
              {/*begin::Email*/}
              <input type="text" placeholder="Email" name="email" autoComplete="off" className="form-control bg-transparent" onChange={e => setEmail(e.target.value)} />
              {/*end::Email*/}
            </div>
            {/*end::Input group=*/}
            <div className="fv-row mb-3">
              {/*begin::Password*/}
              <input type="password" placeholder="Mot de passe" name="password" autoComplete="off" className="form-control bg-transparent" onChange={e => setPassword(e.target.value)} />
              {/*end::Password*/}

            </div>
            {/*end::Input group=*/}
            {/*begin::Wrapper*/}
            <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
            {error && <span className='text-danger'>{error} </span>}
              <div />
              
            </div>
            {/*end::Wrapper*/}
            {/*begin::Submit button*/}
            <div className="d-grid mb-10">
              <button type="submit" id="kt_sign_in_submit" className="btn btn-primary">
                {/*begin::Indicator label*/}
                <span className="indicator-label">Se connecter</span>
                {/*end::Indicator label*/}
                {/*begin::Indicator progress*/}
                <span className="indicator-progress">Please wait... 
                  <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                {/*end::Indicator progress*/}
              </button>
            </div>
            {/*end::Submit button*/}
            
          </form>
          {/*end::Form*/}
        </div>
        {/*end::Wrapper*/}
        {/*begin::Footer*/}
        <div className="d-flex flex-stack px-lg-10">
          
          
        </div>
        {/*end::Footer*/}
      </div>
      {/*end::Card*/}
    </div>
    {/*end::Body*/}
  </div>
  {/*end::Authentication - Sign-in*/}
</div>
{/*end::Root*/}
{/*begin::Javascript*/}
{/*begin::Global Javascript Bundle(mandatory for all pages)*/}
{/*end::Global Javascript Bundle*/}
{/*begin::Custom Javascript(used for this page only)*/}
{/*end::Custom Javascript*/}
{/*end::Javascript*/}




        </div>

    );
}
export default Login
