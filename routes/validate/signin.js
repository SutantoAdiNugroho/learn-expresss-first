const { get } = require("../../config");
const {comparedPassword} = require("../../helpers")

const signin = async ({ email, password }) => {
    try {
        const result = {};
        const data = await get()
            .collection("users")
            .findOne({ email: email})
            .then(async result => {
                const compared = await comparedPassword(
                    password, result.password
                );
                return compared
            });

        if (!email) {
            result.email = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            result.email = "Invalid email format";
        }

        if (!password) {
            result.password = "Required";
        } else if (password) {
            if (!data) {
                result.password = "The email or password you entered is incorrect";
            }
        }

        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = signin;