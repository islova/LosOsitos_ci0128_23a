import { Router } from "express";
import { 
  getReservations,
  getRecordsServices,
  getServicesOptions,
  getAllSpots,
  getAllVehicles,
  getAllTickets,
  getAllServices,
  updatePersonData,
  updateStartEndDates,
  getVehiclesByReservationID,
  updateVehicle
 } from "../models/reservationListModel.js";

const router = Router();

router.get("/getAllRecords", getReservations);
router.get("/getServicesOptions", getServicesOptions);
router.get("/getRecordsServices", getRecordsServices);
router.get("/getAllSpots", getAllSpots);
router.get("/getAllVehicles", getAllVehicles);
router.get("/getAllTickets", getAllTickets);
router.get("/getAllServices", getAllServices);
router.get("/getVehiclesByReservationID/:ID/:Reservation_Date", getVehiclesByReservationID);
router.put("/updatePersonData", updatePersonData);
router.put("/updateStartEndDates", updateStartEndDates);
router.put("/updateVehicle", updateVehicle);

export default router;