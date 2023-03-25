const express = require('express')
const { body, check } = require('express-validator')

const { AdminController } = require('../controllers/AdminController')
const { TourController } = require('../controllers/TourController')

const router = express.Router()

const adminController = new AdminController()
const tourController = new TourController()

// Reading all the requests
// router.get("/request/tour", adminController.viewAllTourRequests);
// router.get("/request/hotel", adminController.viewAllHotelRequests);

// Read Operations
// router.get('/all/users', adminController.getAllUsers) // get all users
// router.get('/package/orders', adminController.adminAllTourOrders) // get all tour orders

// create new packages and add to the database
router.post('/package', tourController.addTour)
router.patch('/package', tourController.updateTour)
router.delete('/package/:id', tourController.removePackage)
//banner update

router.patch('/new', adminController.addAdmin)
router.patch('/banner', adminController.changeBanner);

// router.post(
//     '/update',
//     [
//         body('tour.tour').isNumeric().withMessage('Must be a Number'),
//         body('tour.category')
//             .isArray({ min: 1 })
//             .withMessage('Category Must be a Array'),
//         body('tour.closedOn').exists().withMessage('Closed on Must be a Date'),
//     ],
//     adminController.updateTourCategory
// )

// router.get("/banner", adminController.viewAllBanner);
// router.patch(
//   "/sequence",
//   [body("sequence").isNumeric().withMessage("Sequence Must be a Number")],
//   adminController.storeSequence
// );
// router.post(
//   "/category",
//   upload.single("file"),
//   [
//     body("category_name")
//       .isAlpha()
//       .withMessage(" Category_name Must be a text"),
//   ],
//   adminController.saveCategory
// );

// router.get("/category", adminController.viewAllCategory);

// router.delete("/delete/:id", adminController.deleteCategory);

module.exports = {
    adminRouter: router,
    adminController,
}

// export default router

// //for testing purpose


// export { adminController }
