import { User } from "../models/user.js";
export const newUser = async (req, res, next) => {
    try {
        const { name, email, photo, gender, _id, dob } = req.body;
        // const { name, email, photo, gender, _id } = req.body;
        console.log(name, email, photo, gender, _id);
        const user = await User.create({
            name,
            email,
            photo,
            gender,
            _id,
            dob: new Date(dob),
        });
        return res.status(201).json({
            success: true,
            message: `Welcome, ${user.name}`,
        });
    }
    catch (error) {
        // console.log("Error: ", error);
        return res.status(400).json({
            success: false,
            message: error,
        });
    }
};
