const { get } = require("../../config");

const signin = async ({ email, password }) => {
    try {
        const result = {};
        const data = await get()
            .collection("users")
            .findOne({ email: email, password: password });

        if (!email) {
            result.email = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            result.email = "Format Email salah";
        }

        if (!password) {
            result.password = "Required";
        } else if (password) {
            if (!data) {
                result.password = "Email/Password Salah";
            }
        }

        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = signin;