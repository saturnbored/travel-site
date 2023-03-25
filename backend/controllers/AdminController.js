const { AdminService } = require('../services/adminService')
const { BannerService } = require('../services/bannerServices')

const { TourService } = require('../services/tourServices')

const adminService = new AdminService()
const bannerService = new BannerService()
const tourService = new TourService()

const {Banner} = require('../models/Banner');

class AdminController {
    
    viewAllTourRequests = async (req, res, next) => {
        const limit = req.query.limit ? +req.query.limit : 0
        const page = req.query.page ? +req.query.page : 0
        const skip = page * limit
        const search = req.query.search ? req.query.search : ''
        let requests = await adminService.getAllRequests({ status: false })
        let role = parseInt(req.headers.role[1])
        let tour = await tourService.tourRequests(limit, skip, search)
        if (tour) {
            return res.status(200).json({ tour })
        }
        return res.status(400).json('Not Found Any Requests')
    }

    viewAllBanner = async (req, res, next) => {
        const limit = req.query.limit ? +req.query.limit : 0
        const page = req.query.page ? +req.query.page : 0
        const skip = page * limit
        const search = req.query.search ? req.query.search : ''
        let banners = await bannerService.getAdminBannerData(
            limit,
            skip,
            search
        )
        let role = parseInt(req.headers.role[1])
        if (banners) {
            return res.status(200).json(banners)
        }
        return res.status(400).json('Not Found Any Requests')
    }

    addAdmin = async (req, res, next) => {
        try {
            const email = req.body.email
            const filter = { email: email }
            const update = { isAdmin: true }
            const options = { new: true }
            const user = await findOne(filter);
            const updatedUser = await User.findByIdAndUpdate(user._id, update, options)
            console.log('Admin Added');
            res.status(200).json(updatedUser);
        } catch (err) {
            console.log(err.message);
            res.sendStatus(500);
        }
    }

    changeBanner = async (req, res) => {
        try {
            const {newName} = req.body;
            if(!newName) {
                throw new Error('Not Found.');
                return;
            }
            const banner = await Banner.find()[0];
            const newBanner = await Banner.findByIdAndUpdate(banner._id, {
                package_name: newName,
            }, {
                new: true,
            });
            res.status(200).json(newBanner);
        } catch (err) {
            console.log(error.message);
            res.sendStatus(500);
        }
    }
}

module.exports = { AdminController }
