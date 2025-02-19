import React, { useEffect, useContext, useState } from "react";
import Grid from '@mui/material/Grid';
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import Context from '../../../context'
import { useStylesAddBook } from '../style'
import { useForm, Controller } from "react-hook-form";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import AddBookField from './addBookField';
import { bookAdded } from '../api';
import { ErrorMessage } from "@hookform/error-message";
import Alerts from '../../alerts';
import Loading from '../../loading';
import { addBookToList } from '../../../redux/actions/index'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';




function AddBook({ setAddBook }) {
    const { alertOpen, alertContent, setAlertContent, setAlertOpen } = useContext(Context);
    const dispatch = useDispatch();
    const classes = useStylesAddBook()
    const [userProfileImg, setUserProfileImg] = useState();
    const [loading, setLoading] = useState(false)
    const [isUserImgSelected, setIsUserImgSelected] = useState(false);
    const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
        criteriaMode: "all"
    });
    const onSubmit = data => {
        console.log(data)
        data.image = userProfileImg ? userProfileImg : null
        data.price = data.price !== '' ? (parseFloat(data.price) || parseInt(data.price)) : null;
        data.stock = data.stock !== '' ? parseInt(data.stock) : null;
        data.rating = data.rating !== '' ? parseInt(data.rating) : null;
        data.description = data.description !== '' ? data.description : null;
        data.categories = data.category ? [data.category.trim()] : null;
        const fd = new FormData();
        for (const [key, value] of Object.entries(data)) {
            if (value !== null && value !== undefined) {
                fd.append(key, value);
            }
        }
        console.log('FormData entries:');
        bookAdded(fd, alertContent, setAlertContent, setAlertOpen, reset, setUserProfileImg, setIsUserImgSelected, setLoading, dispatch, addBookToList)

    }
    return (
        <>
            {alertOpen ? <Alerts /> : null}
            {loading ? <Loading appScreenPadding='on' appScreenSize='true' /> :
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box className={classes.mainBox}>
                        <Grid style={{ display: "flex" }}>
                            <Grid className={classes.headingAddBook}>
                                <Typography style={{
                                    fontFamily: "Montserrat, sans-se",
                                    fontSize: "22.4px",
                                    fontWeight: 600
                                }}>
                                    Add New Book
                                </Typography>
                            </Grid>
                            <Grid className={classes.backButtonDiv}>
                                <Button onClick={() => setAddBook((previous) => !previous)} className={classes.backButton}>Back</Button>
                            </Grid>
                        </Grid>
                        <Divider light />
                        <Grid className={classes.addBookForm}>
                            <Grid style={{ display: "block", width: "100%" }}>
                                <Typography style={{
                                    padding: "0px 0px 5px 0px",
                                }}>Title</Typography>
                                <Controller
                                    name="title"
                                    control={control}
                                    {...register('title', {
                                        required: 'required',
                                    })}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            className={classes.textField}
                                            fullWidth
                                            onChange={(e) => {
                                                field.onChange(e);
                                            }}
                                        />
                                    )}
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="title"
                                    render={({ messages }) => {
                                        console.log("messages", messages);
                                        return messages
                                            ? Object.entries(messages).map(([type, message]) => (
                                                <p className={classes.error_message} key={type}>{message}</p>
                                            ))
                                            : null;
                                    }}
                                />

                            </Grid>
                            <Grid>
                                <Typography style={{ padding: "15px 0px 5px 0px" }}>Author</Typography>
                                <Controller
                                    name="author"
                                    control={control}
                                    {...register('author', {
                                        required: 'required',
                                    })}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            className={classes.textField}
                                            fullWidth
                                            onChange={(e) => {
                                                field.onChange(e);
                                            }}
                                        />
                                    )}
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="author"
                                    render={({ messages }) => {
                                        console.log("messages", messages);
                                        return messages
                                            ? Object.entries(messages).map(([type, message]) => (
                                                <p className={classes.error_message} key={type}>{message}</p>
                                            ))
                                            : null;
                                    }}
                                />
                            </Grid>
                            <Grid style={{ display: "block", width: "100%" }}>
                                <Typography style={{ padding: "15px 0px 5px 0px" }}>Category</Typography>
                                <Controller
                                    name="category"
                                    control={control}
                                    {...register('category', {
                                        required: 'required',
                                    })}
                                    render={({ field }) => (
                                        <Select
                                            sx={{
                                                "&:hover": {
                                                    "&& fieldset": {
                                                        borderColor: '#d22129',
                                                    }
                                                },
                                                "&.Mui-focused": {
                                                    "& .MuiOutlinedInput-notchedOutline": {
                                                        borderColor: '#d22129',
                                                    }
                                                }
                                            }}
                                            {...field}
                                            className={classes.selectField}
                                            fullWidth
                                            displayEmpty
                                            variant="outlined"
                                            onChange={(e) => {
                                                field.onChange(e);
                                            }}
                                        //    style={{
                                        //        border: '1px solid #c4c4c4',
                                        //        borderRadius: '4px',
                                        //    }}
                                        >
                                            <MenuItem value="">
                                                <em>Select Category</em>
                                            </MenuItem>
                                            <MenuItem value="fiction">Fiction</MenuItem>
                                            <MenuItem value="non-fiction">Non-Fiction</MenuItem>
                                            <MenuItem value="horror">Horror</MenuItem>
                                            <MenuItem value="self-help">Self-help</MenuItem>
                                            <MenuItem value="international relations">International relations</MenuItem>
                                        </Select>
                                    )}
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="category"
                                    render={({ messages }) => {
                                        console.log("messages", messages);
                                        return messages
                                            ? Object.entries(messages).map(([type, message]) => (
                                                <p className={classes.error_message} key={type}>{message}</p>
                                            ))
                                            : null;
                                    }}
                                />
                            </Grid>
                            <Grid>
                                <Typography style={{ padding: "15px 0px 5px 0px" }}>Price</Typography>
                                <Controller
                                    name="price"
                                    control={control}
                                    {...register('price', {
                                        pattern: {
                                            value: /^\d+(\.\d+)?$/,
                                            message: 'Enter book price in number (decimial figures allowed)',
                                        },
                                    })}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            className={classes.textField}
                                            fullWidth
                                            onChange={(e) => {
                                                field.onChange(e);
                                            }}
                                        />
                                    )}
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="price"
                                    render={({ messages }) => {
                                        console.log("messages", messages);
                                        return messages
                                            ? Object.entries(messages).map(([type, message]) => (
                                                <p className={classes.error_message} key={type}>{message}</p>
                                            ))
                                            : null;
                                    }}
                                />
                            </Grid>
                            <Grid>
                                <AddBookField
                                    isUserImgSelected={isUserImgSelected}
                                    setIsUserImgSelected={setIsUserImgSelected}
                                    userProfileImg={userProfileImg}
                                    setUserProfileImg={setUserProfileImg}
                                    Controller={Controller}
                                    register={register} control={control}
                                    errors={errors} />

                            </Grid>
                            <Grid className={classes.submitButtonDivContainer}>
                                <Grid style={{ width: "10%", padding: "0px 0px 0px 14px" }}>
                                    <Button
                                        className={classes.submitButton}
                                        type='submit'
                                    >Submit
                                    </Button>
                                </Grid>
                                <Grid style={{ width: "10%", padding: "0px 0px 0px 10px" }}>
                                    <Button className={classes.cancelButton}>Cancel </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </form>}

        </>
    )
}

export default AddBook