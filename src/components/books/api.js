import axios from 'axios';
const url = process.env.REACT_APP_BASE_URL
const getAllBooks = async (data) => {
    return await axios.request({
        method: 'post',
        url: `${url}/book/list`,
        headers: { Authorization: ` ${localStorage.getItem('authorization')}` },
        data
    })
}
// export const fetchAllBookData = async (setAllBooks, setRows, allBooks, setBookListUpdate) => {
//     try {
//         const response = await getAllBooks({filter:{}})
//         await setAllBooks(response.data);
//         console.log('allboobs', allBooks)
//         setRows(allBooks.map((book) => ({
//             id: book._id,
//             coverImage: book.image,
//             price: book.price,
//             rating: book.rating,
//             stock: book.stock,
//             title: book.title,
//             category: book.category,
//             author: book.author,
//             description: book.description
//         })))
//         setBookListUpdate(true)
//     } catch (error) {
//         console.error("API Error:", error);
//     }
// };
export const fetchAllBookData = async (setAllBooks, setRows, setBookListUpdate, signal) => {
    try {
      const response = await getAllBooks({ filter: {} });
  
    //  / Prevent updating state if unmounted
  
      const books = response.data; // Store response to avoid stale state issues
  return books
     
  
    //   setBookListUpdate(false); // ✅ Set to false instead of true to avoid unnecessary re-fetch
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("API Error:", error);
      }
    }
  };
  
const deleteBook = (bookId) => {
    return axios.request({
        method: 'delete',
        url: `${url}/book/list/${bookId}`, // Include the product ID in the URL
        headers: { Authorization: ` ${localStorage.getItem('authorization')}` },
    });
};
export const bookRemoved = async (id, setRows, rows, alertContent, setAlertContent, setAlertOpen, setLoading, dispatch, deleteBookFromList) => {
    try {
        setLoading(true)
        const bookId = id
        const response = await deleteBook(bookId)
        if (response.status == 200) {
            setRows(rows.filter((row) => row.id !== id));
            setAlertContent({ ...alertContent, type: "success", message: 'Book Deleted Successfully!' })
            setAlertOpen(true)
            dispatch(deleteBookFromList({
                type: "deleteBookFromList",
                payload: response.data.bookId
            }))
            setLoading(false)
        }
    }
    catch (error) {
        console.error("API Error:", error);
        setAlertContent({ ...alertContent, type: "error", message: error.message })
        setAlertOpen(true)
        setLoading(false)
    }
}

const updateBook = (bookId, data) => {
    return axios.request({
        method: 'put',
        url: `${url}/book/list/${bookId}`, // Replace with your PUT endpoint
        headers: {
            Authorization: ` ${localStorage.getItem('authorization')}`, // Use the appropriate header format
            'Content-Type': 'multipart/form-data',
        },
        data: data, // The data you want to send in the request body
    });
};

export const bookUpdated = async (bookId, updatedRow, cover, alertContent, setAlertContent, setAlertOpen, updateBookList, dispatch, setLoading) => {
    try {
        setLoading(true)
        const bookData = updatedRow
        const data = new FormData();
        const imageObject = cover.find(item => item.id === bookId);
        if (imageObject) {
            const index = cover.indexOf(imageObject);
            if (index !== -1) { cover.splice(index, 1); }
            data.append('image', imageObject.image)
        }
        for (const [key, value] of Object.entries(bookData)) {
            if (value !== null && value !== undefined) {
                data.append(key, value);
            }
        }
        const response = await updateBook(bookId, data)
        if (response.status == 200 && response.data.status == true) {
            setAlertContent({ ...alertContent, type: "success", message: 'Information Saved!' })
            setAlertOpen(true)
            dispatch(updateBookList(response.data.book))
            setLoading(false)
        }
    }
    catch (error) {
        console.error("API Error:", error);
        setAlertContent({ ...alertContent, type: "error", message: error.message })
        setAlertOpen(true)
        setLoading(false)
    }
}


const newBook = (data) => {
    return axios.request({
        method: 'post',
        url: `${url}/book/list/add`, // Replace with your POST endpoint
        headers: {
            Authorization: `${localStorage.getItem('authorization')}`, // Use the appropriate header format
            'Content-Type': 'multipart/form-data',
        },
        data: data, // The data you want to send in the request body
    });
};
export const bookAdded = async (data, alertContent, setAlertContent, setAlertOpen, reset, setUserProfileImg, setIsUserImgSelected, setLoading, dispatch, addBookToList) => {
    try {
        console.log(data,'data category')
        setLoading(true)
        const response = await newBook(data)
        if (response.status == 200 && response.data.status == true) {
            setAlertContent({ ...alertContent, type: "success", message: 'New Book in Inventory Added!' })
            setAlertOpen(true)
            reset();
            setIsUserImgSelected(false)
            dispatch(addBookToList(response.data.data))
            setLoading(false)
        }
    }
    catch (error) {
        console.error("API Error:", error);
        setAlertContent({ ...alertContent, type: "error", message: error.message })
        setAlertOpen(true)
        setLoading(false)
    }
}
