import { Router } from "express";
import { checkOperatorAuth, checkAdminAuth } from "../middlewares/authMiddleware.js";
import {
  insertReservation,
  getReservations,
  getMainInfoByReservationID,
  getRecordsServices,
  getStateByReservationID,
  updateState,
  deleteReservation
} from "../models/reservationModel.js";

const router = Router();

router.get("/getAllRecords", checkOperatorAuth, getReservations);

router.get("getMainInfoByReservationID/:ID", getMainInfoByReservationID)

router.get("/getRecordsServices", checkOperatorAuth, getRecordsServices);

router.get("/getStateByReservationID/:ID/:Reservation_Date", checkOperatorAuth, getStateByReservationID);

router.put("/updateState", checkOperatorAuth, updateState);

router.post("/reservation", insertReservation);

router.delete("/reservation/:ID/:Reservation_Date", checkOperatorAuth, deleteReservation);

export default router;