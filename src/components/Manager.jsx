import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import "react-toastify/dist/ReactToastify.css";

const Manager = () => {
  const passwordRef = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);
  const copyText = (text) => {
    toast("Expecto Patronum!Your text has been copied", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };
  const showPassword = () => {
    passwordRef.current.type = "text";
    console.log(ref.current.src);
    if (ref.current.src.includes("show")) {
      ref.current.src = "Hide";
    } else {
      ref.current.src = "Show";
    }
  };
  const savePassword = () => {
    if (
      form.site.length > 3 &&
      form.username.length > 3 &&
      form.password.length > 3
    ) {
      setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
      localStorage.setItem(
        "passwords",
        JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
      );
      console.log([...passwordArray, form]);
      setForm({ site: "", username: "", password: "" });
    } else {
      toast("Hold your horses! I need some actual secrets to protect here");
    }
  };
  const deletePassword = (id) => {
    console.log("Deleting password with id " + id);
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
    localStorage.setItem(
      "passwords",
      JSON.stringify(passwordArray.filter((item) => item.id !== id))
    );
    // console.log([...passwordArray, form]);
  };
  const editPassword = (id) => {
    console.log("Editing password with id " + id);
    setForm(passwordArray.filter((item) => item.id === id)[0]);
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
    // setPasswordArray([...passwordArray, {...form, id: uuidv4()}]);
    // localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    // console.log([...passwordArray, form]);
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

      <div className="p-3 md:p-0 md:myContainer min-h[88.2vh]">
        <h1 className="text-4xl text-green-500 font-bold text-center">
          IronClad
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your own password manager
        </p>
        <div className="text-black flex flex-col p-4 text-black gap-8 items-center">
          <input
            type="text"
            className="rounded-full border border-green-500 w-full p-4 py-1"
            placeholder="Enter website URL"
            value={form.site}
            onChange={handleChange}
            name="site"
            id="site"
          />
          <div className="flex flex-col md:flex-row w-full justify-between gap-8">
            <input
              type="text"
              className="rounded-full border border-green-500 w-full p-4 py-1"
              placeholder="Enter Username"
              value={form.username}
              onChange={handleChange}
              name="username"
              id="username"
            />
            <div className="relative">
              <input
                ref={passwordRef}
                type="password"
                className="rounded-full border border-green-500 w-full p-4 py-1"
                placeholder="Enter Password"
                value={form.password}
                onChange={handleChange}
                name="password"
                id="password"
              />
              <span
                className="absolute right-{3px} top-{4px} cursor-pointer"
                onClick={showPassword}
              ></span>
            </div>
          </div>

          <button
            onClick={savePassword}
            className="flex justify-center items-center gap-2 bg-green-600 hover:bg-green-500 hover:border-1 rounded-full px-4 py-2 w-fit border-2 border-green-900"
          >
            {" "}
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Save Password
          </button>
        </div>

        <div className="passwords">
          <h2 className="font-bold text-xl py-4">Your Passwords</h2>
          {passwordArray.length === 0 && <div>No Passwords to Show</div>}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full rounded-md oveflow-hidden mb-10 md:overflow-hidden">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-100 rounded-md overflow-hidden">
                {passwordArray.map((item) => (
                  <tr key={item.index}>
                    <td className="py-2 border border-white text-center w-32">
                      <a href={item.site} target="_blank">
                        {item.site}
                        <div
                          className="lordIconCopy size-7 cursor-pointer"
                          onClick={() => {
                            copyText(item.site);
                          }}
                        >
                          <lord-icon
                            style={{
                              width: "25px",
                              height: "25px",
                              paddingTop: "3px",
                              paddingLeft: "3px",
                            }}
                            className={"cursor-pointer w-5"}
                            src="https://cdn.lordicon.com/vzolctzz.json"
                            trigger="hover"
                          ></lord-icon>
                        </div>
                      </a>
                    </td>
                    <td className="py-2 border border-white text-center w-32">
                      {item.username}
                      <div
                        className="lordIconCopy size-7 cursor-pointer"
                        onClick={() => {
                          copyText(item.username);
                        }}
                      >
                        <lord-icon
                          style={{
                            width: "25px",
                            height: "25px",
                            paddingTop: "3px",
                            paddingLeft: "3px",
                          }}
                          className={"cursor-pointer w-5"}
                          src="https://cdn.lordicon.com/vzolctzz.json"
                          trigger="hover"
                        ></lord-icon>
                      </div>
                    </td>
                    <td className="py-2 border border-white text-center w-32">
                      {item.password}
                      <div
                        className="lordIconCopy size-7 cursor-pointer"
                        onClick={() => {
                          copyText(item.password);
                        }}
                      >
                        <lord-icon
                          style={{
                            width: "25px",
                            height: "25px",
                            paddingTop: "3px",
                            paddingLeft: "3px",
                          }}
                          className={"cursor-pointer w-5"}
                          src="https://cdn.lordicon.com/vzolctzz.json"
                          trigger="hover"
                        ></lord-icon>
                      </div>
                    </td>
                    <td className="py-2 border border-white text-center w-32">
                      <span
                        className="cursor-pointer mx-2"
                        onClick={() => {
                          editPassword(item.id);
                        }}
                      >
                        <lord-icon
                          src="https://cdn.lordicon.com/baxknfaw.json"
                          trigger="hover"
                          style={{ width: "25px", height: "25px" }}
                        ></lord-icon>
                      </span>
                      <span
                        className="cursor-pointer mx-2"
                        onClick={() => {
                          deletePassword(item.id);
                        }}
                      >
                        <lord-icon
                          src="https://cdn.lordicon.com/skkahier.json"
                          trigger="hover"
                          style={{ width: "25px", height: "25px" }}
                        ></lord-icon>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
