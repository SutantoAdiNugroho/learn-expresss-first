const { get } = require("../../config");

const signup = async ({ email, password, firstName, lastName }) => {
    try {
        const result = {};
        const data = await get()
            .collection("users")
            .findOne({ email: email });

        if (!email) {
            result.email = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            result.email = "Invalid Email Format";
        } else if (email) {
            if (data) {
                result.email = "Email Already Registered";
            }
        }

        if (!password) {
            result.password = "Required";
        } else if (password.length < 8) {
            result.password = "Password must be at least 8 characters long";
        }

        if (!firstName) {
            result.firstName = "Required";
        }

        if (!lastName) {
            result.lastName = "Required";
        }

        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = signup;