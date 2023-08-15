import express from "express";
// import { adminProtect } from '../middleware/adminAuth.js';
import { protect, adminProtect } from "../middleware/authMiddleware.js";
import {
  studentBlock,
  loadStudentsData,
  loadRequests,
  acceptRequest,
  loadTutorsData,
  tutorBlock,
  rejectRequest,
  DashboardData
} from "../controllers/adminController.js";

import {
  addCategory,
  updateCategory,
  deleteCategory,
  loadCategoryData,
} from "../controllers/categoryController.js";

import{ getAllCourseData } from '../controllers/courseController.js'

const adminRoutes = express.Router();

adminRoutes.get("/students", loadStudentsData);
adminRoutes.get("/tutors", loadTutorsData);
adminRoutes.get("/course", getAllCourseData);
adminRoutes.post("/student/block", studentBlock);
adminRoutes.get("/requests", loadRequests);
adminRoutes.post("/accept_req", acceptRequest);
adminRoutes.post("/reject_req", rejectRequest);
adminRoutes.post("/tutor/block", tutorBlock);
adminRoutes.post("/category/add", addCategory);
adminRoutes.get("/category", loadCategoryData);
adminRoutes.post("/category/update", updateCategory);
adminRoutes.post("/category/delete", deleteCategory);
adminRoutes.get("/dashboard", DashboardData);

export default adminRoutes;
