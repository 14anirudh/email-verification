import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "./context/Authcontext";
import Modal from "./Modal.js";

function Account() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleClick = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You r logged out");
    } catch (e) {
      console.log(e.message);
    }
  };
  //   const handleModal = {
  //     <Modal/>
  //  };

  return (
    <div className="max-w-[600px] mx-auto p-4">
      <h1 className="text-2xl font-bold py-4">Account</h1>
      <p>User Email:{user && user.email}</p>
      <button onClick={handleClick} className="border px-6 py-2 my-4">
        Logout
      </button>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Applicant Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details and application.
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Anirudh Gautam
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Enrollment Number
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                01116403220
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Application For
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Verification for IPU Mail ID
              </dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Attachments</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul
                  role="list"
                  className="border border-gray-200 rounded-md divide-y divide-gray-200"
                >
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      {/* <PaperClipIcon
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  /> */}
                      <span className="ml-2 flex-1 w-0 truncate">
                        ID_Card.pdf
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Open
                      </a>
                    </div>
                  </li>
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      {/* <PaperClipIcon
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  /> */}
                      <span className="ml-2 flex-1 w-0 truncate">
                        Reporting_Slip.pdf
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                        href="google.com"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Open
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
          <button
            className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-[200px] p-4 my-2 mx-2 text-white"
            onClick={() => {
              setOpen(true);
            }}
          >
            Verify
            {open && <Modal/>}
          </button>

          <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-[200px] p-4 my-2 mx-2 text-white">
            Next
          </button>

        </div>
      </div>
    </div>
  );
}

export default Account;
