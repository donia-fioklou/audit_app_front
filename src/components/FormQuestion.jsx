const FormQuestion = ({formName,questionListe}) => {
  return (
    <>
      <div className="card mb-5 mb-xl-10">
        {/*begin::Card header*/}
        <div
          className="card-header border-0 cursor-pointer"
          role="button"
          data-bs-toggle="collapse"
          data-bs-target="#kt_account_notifications"
          aria-expanded="true"
          aria-controls="kt_account_notifications"
        >
          <div className="card-title m-0">
            <h3 className="fw-bold m-0">Notifications</h3>
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
                    <tr>
                      <td className="min-w-250px fs-4 fw-bold">
                        Notifications
                      </td>
                      <td className="w-125px">
                        <div className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="kt_settings_notification_email"
                            defaultChecked="checked"
                            data-kt-check="true"
                            data-kt-check-target="[data-kt-settings-notification=email]"
                          />
                          <label
                            className="form-check-label ps-2"
                            htmlFor="kt_settings_notification_email"
                          >
                            Email
                          </label>
                        </div>
                      </td>
                      <td className="w-125px">
                        <div className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="kt_settings_notification_phone"
                            defaultChecked="checked"
                            data-kt-check="true"
                            data-kt-check-target="[data-kt-settings-notification=phone]"
                          />
                          <label
                            className="form-check-label ps-2"
                            htmlFor="kt_settings_notification_phone"
                          >
                            Phone
                          </label>
                        </div>
                      </td>
                    </tr>
                    {/*begin::Table row*/}
                    {/*begin::Table row*/}
                    <tr>
                      <td>Billing Updates</td>
                      <td>
                        <div className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue={1}
                            id="billing1"
                            defaultChecked="checked"
                            data-kt-settings-notification="email"
                          />
                          <label
                            className="form-check-label ps-2"
                            htmlFor="billing1"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="billing2"
                            defaultChecked="checked"
                            data-kt-settings-notification="phone"
                          />
                          <label
                            className="form-check-label ps-2"
                            htmlFor="billing2"
                          />
                        </div>
                      </td>
                    </tr>
                    {/*begin::Table row*/}
                    {/*begin::Table row*/}
                    <tr>
                      <td>New Team Members</td>
                      <td>
                        <div className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="team1"
                            defaultChecked="checked"
                            data-kt-settings-notification="email"
                          />
                          <label
                            className="form-check-label ps-2"
                            htmlFor="team1"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="team2"
                            data-kt-settings-notification="phone"
                          />
                          <label
                            className="form-check-label ps-2"
                            htmlFor="team2"
                          />
                        </div>
                      </td>
                    </tr>
                    {/*begin::Table row*/}
                    {/*begin::Table row*/}
                    <tr>
                      <td>Completed Projects</td>
                      <td>
                        <div className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="project1"
                            data-kt-settings-notification="email"
                          />
                          <label
                            className="form-check-label ps-2"
                            htmlFor="project1"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="project2"
                            defaultChecked="checked"
                            data-kt-settings-notification="phone"
                          />
                          <label
                            className="form-check-label ps-2"
                            htmlFor="project2"
                          />
                        </div>
                      </td>
                    </tr>
                    {/*begin::Table row*/}
                    {/*begin::Table row*/}
                    <tr>
                      <td className="border-bottom-0">Newsletters</td>
                      <td className="border-bottom-0">
                        <div className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="newsletter1"
                            data-kt-settings-notification="email"
                          />
                          <label
                            className="form-check-label ps-2"
                            htmlFor="newsletter1"
                          />
                        </div>
                      </td>
                      <td className="border-bottom-0">
                        <div className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="newsletter2"
                            data-kt-settings-notification="phone"
                          />
                          <label
                            className="form-check-label ps-2"
                            htmlFor="newsletter2"
                          />
                        </div>
                      </td>
                    </tr>
                    {/*begin::Table row*/}
                  </tbody>
                </table>
              </div>
              {/*end::Table*/}
            </div>
            {/*end::Card body*/}
            {/*begin::Card footer*/}
            <div className="card-footer d-flex justify-content-end py-6 px-9">
              <button className="btn btn-light btn-active-light-primary me-2">
                Discard
              </button>
              <button className="btn btn-primary px-6">Save Changes</button>
            </div>
            {/*end::Card footer*/}
          </form>
          {/*end::Form*/}
        </div>
        {/*end::Content*/}
      </div>
    </>
  );
};
export default FormQuestion;
