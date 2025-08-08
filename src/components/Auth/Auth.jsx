import React from "react";
import { motion } from "framer-motion";
import { useAuth0 } from "@auth0/auth0-react";

const Auth = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

//   console.log(user)

  return (
    <>
      {!isAuthenticated && (
        <div className="Unknown w-full h-max p-2 flex gap-5 flex-col">
          <div className="notLogged ">You are not logged in</div>
          <div className="AuthButtons w-full h-max flex items-center justify-between ">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => loginWithRedirect()}
              className="bg-red-600 px-3 py-1 rounded"
            >
              Login
            </motion.div>
          </div>
        </div>
      )}
      {isAuthenticated && (
        <div className="logged">
          <div className="head w-full h-max flex items-center gap-3">
            {user.picture && (
              <img
                src={user.picture}
                className=" w-max h-12 pointer-events-none rounded-3xl"
                loading="lazy"
                alt={user.name || "user"}
              />
            )}
            <div className="head-text flex flex-col">
              <span className="Name font-bold">Hello,{user?.nickname}</span>
              <span
                className="text-sm hover:font-bold transition-all"
                onClick={() => logout()}
              >
                Logout
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Auth;
