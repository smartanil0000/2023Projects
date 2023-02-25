import express from "express";
const router = express.Router();

import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken,verifyUser } from "../utils/verifyToken.js";
// import createError from '../utils/error.js'

// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("hello user,you are logged in")
// })

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("hello user,you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id",verifyUser,(req,res,next)=>{
//     res.send("hello admin,you are logged in and you can delete all accounts")
// })



//UPDATE
router.put("/:id",verifyUser, updateUser);

//DELETE
router.delete("/:id",verifyUser, deleteUser);

//GET
router.get("/:id",verifyUser, getUser);

//GET ALL
router.get("/",verifyAdmin, getUsers);

export default router;
