/* eslint-disable import/extensions */
import express from "express";
import passport from "passport";
import httpError from "http-errors";
import createToken from "../../utils/jwt.js";
import { cookieConfig } from "../../utils/cookie.js";

const router = express.Router();
const CLIENT_URL = "http://localhost:1111/main";

export default (app) => {
  app.use("/auth", router);

  router.get(
    "/github",
    passport.authenticate("github", {
      scope: ["repo", "profile", "user"],
      session: false,
    }),
  );

  router.get(
    "/github/callback",
    passport.authenticate("github", {
      session: false,
      failureRedirect: "/api/auth/login/failed",
    }),
    async (req, res) => {
      const { id, username } = req.user;
      const payload = { id, username };
      const token = await createToken(payload);
      res.cookie("token", token, cookieConfig);
      res.redirect(CLIENT_URL);
    },
  );

  router.get("/login/success", (req, res) => {
    res.json({
      success: true,
      message: "로그인이 정상적으로 완료 되었습니다.",
    });
  });

  router.get("/login/failed", (req, res) => {
    res.status(401).json({
      success: false,
      message: httpError(401).message,
    });
  });

  router.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.redirect(CLIENT_URL);
  });
};
