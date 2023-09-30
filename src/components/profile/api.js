import axios from 'axios';
const updateUser = (userId, data) => {
    return axios.request({
        method: 'put',
        url: `http://localhost:8081/users/update/${userId}`, // Replace with your PUT endpoint
        headers: {
            Authorization: ` ${localStorage.getItem('authorization')}`, // Use the appropriate header format
            'Content-Type': 'multipart/form-data',
        },
        data: data, // The data you want to send in the request body
    });
};

export const userUpdated = async (userId, data, setProfileUpdate, alertContent, setAlertContent, setAlertOpen,) => {
    try {
        const response = await updateUser(userId, data)
        if (response.status == 200 && response.data.status == true) {
            localStorage.setItem("userInfo", JSON.stringify(response.data.user));
            setProfileUpdate(response.data.user)
            setAlertContent({ ...alertContent, type: "success", message: 'Profile updated!' })
            setAlertOpen(true)
        }
    }
    catch (error) {
        console.error("API Error:", error);
        setAlertContent({ ...alertContent, type: "error", message: error.message })
        setAlertOpen(true)
    }
}


const updatePassword = (userId, data) => {
    return axios.request({
        method: 'put',
        url: `http://localhost:8081/users/change_password/${userId}`, // Replace with your PUT endpoint
        headers: {
            Authorization: ` ${localStorage.getItem('authorization')}`, // Use the appropriate header format
        },
        data: data, // The data you want to send in the request body
    });
};


export const changeUserPassword = async (userId, password, alertContent, setAlertContent, setAlertOpen,) => {
    try {
        var data = {
            previousPassword: password.currentPassword,
            newPassword: password.newPassword
        }
        const response = await updatePassword(userId, data)
        if (response.status == 200 && response.data.status == true) {
            setAlertContent({ ...alertContent, type: "success", message: 'password changed!' })
            setAlertOpen(true)
        }



    }
    catch (error) {
        console.log("API Error:", error);
        if (error.response.status == 400) {
            setAlertContent({ ...alertContent, type: "error", message: error.response.data.message })
            setAlertOpen(true)
        }
        else {
            setAlertContent({ ...alertContent, type: "error", message: error.message })
            setAlertOpen(true)
        }
    }
}