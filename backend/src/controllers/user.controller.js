import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        //basic validation
        if (!username || !password || !email) {
            return res.status(400).json({ message: "Please provide all required fields" });
        }
        //check if user already exists
        const existing = await User.findOne({ $or: [{ username }, { email }] });
        if (existing) {
            return res.status(400).json({ message: "Username or email already exists" });
        }
        //create new user
        const user = await User.create({ username, password, email, loggedIn: false });
        res.status(201).json({ message: "User registered successfully", id: user._id, email: user.email, username: user.username });
    }

    catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        // checking if the user already exists
        const { email, password } = req.body;
        const user = await User.findOne({ email: email.toLowerCase() });

        if (!user) return res.status(400).json({ message: "User not found" });

        //compare the passwords
        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" })
        res.status(200).json({
            message: "User Logged In",
            user: {
                id: user._id,
                email: user.email,
                username: user.username
            }
        });
    }
    catch (error) {
        res.status(500).json({
            message: "internal Server Error"
        })
    }
}

const logoutUser = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({
            email: email.toLowerCase()
        });
        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json({ message: "User Logged Out" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }

}

const getUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password");
        res.status(200).json(users);
    } 
    catch (error) {
        res.status(500).json({ message: "Could not load users" });
    }
};

export { registerUser, loginUser, logoutUser, getUsers };
